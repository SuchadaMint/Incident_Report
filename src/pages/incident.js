var curType = 'On Job'
var curSub  = ''
var incidentId = 'TCRB-INC-0001'

var SUB_COLORS = {
  'First Aid (ปฐมพยาบาล)': 'active-green',
  'Minor (MTC) — การบาดเจ็บเล็กน้อย (ต้องรักษาทางการแพทย์)': 'active-amber',
  'Major (Lost Time) — การบาดเจ็บรุนแรง (ต้องหยุดงาน)': 'active-orange',
  'Fatality — เสียชีวิต': 'active-red',
  'หยุดงาน': 'active-amber',
  'Low impact (<5,000 ฿) — ผลกระทบน้อย': 'active-amber',
  'High impact (≥5,000 ฿) — ผลกระทบมาก': 'active-red',
  'L1 = <20% ของสินค้าที่ขน / FA': 'active-green',
  'L2 = 20-80% ของสินค้าที่ขน / MTC': 'active-amber',
  'L3 = >80% ของสินค้าที่ขน / LT or Fatality': 'active-red',
  'Property Damage — เฉี่ยวชนภายใน รถม้วน รถเศษ รถภายใต้ SCGL': 'active-orange',
  'L1 = FA / รถขับได้ด้วยตัวเอง': 'active-green',
  'L2 = MTC เปลี่ยนงาน / รถไม่สามารถขับได้': 'active-amber',
  'L3 = LT, FT / รถไม่สามารถซ่อมได้ต้องขายซากทิ้ง': 'active-red'
}

function init() {
  var now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  document.getElementById('incDate').value = now.toISOString().slice(0,16)
  document.getElementById('incId').textContent = incidentId
  renderTypes()
  renderSubs()
  updateLine()
  var ids = ['incName','incFactory','incDate','incDept','incPlace','incDetail','incCause','incMeasure']
  ids.forEach(function(id) {
    var el = document.getElementById(id)
    if (el) { el.addEventListener('input', updateLine); el.addEventListener('change', updateLine) }
  })
}

function renderTypes() {
  var icons = { 'On Job':'ti-user-check','Off Job':'ti-home','Fire':'ti-flame','Property Damage':'ti-building','Goods Transportation':'ti-truck','MVA':'ti-car' }
  var grid = document.getElementById('typeGrid')
  grid.innerHTML = ''
  Object.keys(INCIDENT_TYPES).forEach(function(type) {
    var btn = document.createElement('button')
    btn.className = 'type-btn' + (type === curType ? ' active' : '')
    btn.innerHTML = '<i class="ti ' + (icons[type]||'ti-alert-triangle') + '"></i>' + type
    btn.onclick = function() { curType = type; renderTypes(); renderSubs(); updateLine() }
    grid.appendChild(btn)
  })
}

function renderSubs() {
  var subs = INCIDENT_TYPES[curType] || []
  curSub   = subs[0] || ''
  var grid = document.getElementById('subGrid')
  grid.innerHTML = ''
  subs.forEach(function(sub, i) {
    var btn = document.createElement('button')
    var colorClass = SUB_COLORS[sub] || 'active-purple'
    btn.className = 'sub-btn' + (i === 0 ? ' '+colorClass : '')
    btn.textContent = sub
    btn.onclick = function() {
      grid.querySelectorAll('.sub-btn').forEach(function(b){
        b.className = 'sub-btn'
      })
      btn.className = 'sub-btn ' + colorClass
      curSub = sub
      updateLine()
    }
    grid.appendChild(btn)
  })
  document.getElementById('lineCard').style.display = FORM_TYPES.indexOf(curType) !== -1 ? 'block' : 'none'
}

function updateLine() {
  var id      = document.getElementById('incId').textContent
  var name    = document.getElementById('incName').value    || '—'
  var factory = document.getElementById('incFactory').value || '—'
  var date    = fmtDate(document.getElementById('incDate').value)
  var dept    = document.getElementById('incDept').value    || '—'
  var place   = document.getElementById('incPlace').value   || '—'
  var detail  = document.getElementById('incDetail').value  || '—'

  document.getElementById('linePreview').textContent =
    '🔔 แจ้งเตือนอุบัติเหตุ | ' + id + '\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    'ชื่อเหตุการณ์ : ' + name    + '\n' +
    'โรงงาน        : ' + factory + '\n' +
    'Case          : ' + curType  + '\n' +
    'Type          : ' + curSub   + '\n' +
    'วันที่          : ' + date    + '\n' +
    'แผนก          : ' + dept    + '\n' +
    'สถานที่         : ' + place   + '\n' +
    'รายละเอียด     : ' + detail  + '\n\n' +
    '📋 กรุณากรอกแบบฟอร์มยืนยันสถานะความปลอดภัย\n' +
    '👉 ' + FORM_URL
}

function fmtDate(val) {
  if (!val) return '—'
  var d=new Date(val)
  return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+(d.getFullYear()+543)+' เวลา '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+' น.'
}

function copyLine() {
  navigator.clipboard.writeText(document.getElementById('linePreview').textContent)
    .then(function(){ alert('คัดลอกข้อความแล้ว!') })
}

function saveIncident() {
  var name = document.getElementById('incName').value
  var date = document.getElementById('incDate').value
  var dept = document.getElementById('incDept').value
  if (!name || !date || !dept) { alert('กรุณากรอกข้อมูลให้ครบ (ชื่อ, วันที่, แผนก)'); return }
  alert('บันทึกสำเร็จ! (ทดสอบ UI) ' + incidentId)
}

init()
