// ===== SharePoint API via Microsoft Graph =====
// ใช้ MSAL CDN (โหลดจาก HTML) ไม่ใช้ import

var msalInstance = null
var graphToken   = null

// ---- เริ่ม MSAL ----
function initMsal() {
  if (msalInstance) return
  msalInstance = new msal.PublicClientApplication({
    auth: {
      clientId:    CONFIG.MSAL.clientId,
      authority:   'https://login.microsoftonline.com/' + CONFIG.MSAL.tenantId,
      redirectUri: CONFIG.MSAL.redirectUri
    },
    cache: { cacheLocation: 'sessionStorage' }
  })
}

async function getToken() {
  initMsal()
  await msalInstance.initialize()
  var accounts = msalInstance.getAllAccounts()
  if (accounts.length === 0) {
    var result = await msalInstance.loginPopup({ scopes: ['https://graph.microsoft.com/.default'] })
    graphToken = result.accessToken
    return graphToken
  }
  try {
    var result = await msalInstance.acquireTokenSilent({
      scopes:  ['https://graph.microsoft.com/.default'],
      account: accounts[0]
    })
    graphToken = result.accessToken
    return graphToken
  } catch(e) {
    var result = await msalInstance.loginPopup({ scopes: ['https://graph.microsoft.com/.default'] })
    graphToken = result.accessToken
    return graphToken
  }
}

// ---- Graph API helper ----
async function graphCall(method, path, body) {
  var token = await getToken()
  var opts = {
    method:  method,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type':  'application/json'
    }
  }
  if (body) opts.body = JSON.stringify(body)
  var res = await fetch('https://graph.microsoft.com/v1.0' + path, opts)
  if (!res.ok) {
    var err = await res.text()
    throw new Error('Graph API error: ' + err)
  }
  if (res.status === 204) return null
  return await res.json()
}

// ---- หา Site ID จริงจาก SharePoint URL ----
async function getSiteId() {
  if (CONFIG._siteId) return CONFIG._siteId
  var url   = CONFIG.SHAREPOINT_SITE_ID
  var match = url.match(/https:\/\/([^\/]+)\/sites\/([^\/]+)/)
  if (!match) throw new Error('SHAREPOINT_SITE_ID format ไม่ถูกต้อง')
  var host = match[1]
  var site = match[2]
  var res  = await graphCall('GET', '/sites/' + host + ':/sites/' + site)
  CONFIG._siteId = res.id
  return res.id
}

// ---- INC_Incidents ----

async function getIncidents() {
  var siteId = await getSiteId()
  var path   = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.incidents + '/items?expand=fields&$orderby=fields/IncidentDate desc&$top=100'
  var res    = await graphCall('GET', path)
  return res.value.map(function(i) { return Object.assign({ _id: i.id }, i.fields) })
}

async function createIncident(data) {
  var siteId = await getSiteId()
  var path   = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.incidents + '/items'
  return await graphCall('POST', path, { fields: data })
}

// ---- INC_SupervisorResponse ----

async function getSupervisorResponses(incidentId) {
  var siteId  = await getSiteId()
  var filter  = encodeURIComponent("fields/IncidentID eq '" + incidentId + "'")
  var path    = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.supervisorResponse + '/items?expand=fields&$filter=' + filter
  var res     = await graphCall('GET', path)
  return res.value.map(function(i) { return Object.assign({ _id: i.id }, i.fields) })
}

async function updateSupervisorStatus(itemId, data) {
  var siteId = await getSiteId()
  var path   = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.supervisorResponse + '/items/' + itemId
  return await graphCall('PATCH', path, { fields: data })
}

async function getAllSupervisorResponses() {
  var siteId = await getSiteId()
  var path   = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.supervisorResponse + '/items?expand=fields&$top=500'
  var res    = await graphCall('GET', path)
  return res.value.map(function(i) { return Object.assign({ _id: i.id }, i.fields) })
}

// ---- INC_ManagerApproval ----

async function getManagerApprovals(incidentId) {
  var siteId  = await getSiteId()
  var filter  = encodeURIComponent("fields/IncidentID eq '" + incidentId + "'")
  var path    = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.managerApproval + '/items?expand=fields&$filter=' + filter
  var res     = await graphCall('GET', path)
  return res.value.map(function(i) { return Object.assign({ _id: i.id }, i.fields) })
}

// ---- สร้าง Incident ID อัตโนมัติ ----
async function generateIncidentId() {
  try {
    var siteId = await getSiteId()
    var path   = '/sites/' + siteId + '/lists/' + CONFIG.LISTS.incidents + '/items?expand=fields&$orderby=fields/Created desc&$top=1'
    var res    = await graphCall('GET', path)
    if (res.value.length === 0) return 'TCRB-INC-0001'
    var last = res.value[0].fields.IncidentID || 'TCRB-INC-0000'
    var num  = parseInt(last.split('-')[2]) + 1
    return 'TCRB-INC-' + String(num).padStart(4, '0')
  } catch(e) {
    return 'TCRB-INC-0001'
  }
}
