var MOCK_INCIDENTS = [
  { IncidentID:'TCRB-INC-0001', IncidentName:'พนักงานลื่นล้มบริเวณสายพาน',      IncidentType:'On Job',               SubType:'First Aid (ปฐมพยาบาล)',   IncidentDate:'2026-06-05' },
  { IncidentID:'TCRB-INC-0002', IncidentName:'พนักงานเกิดอุบัติเหตุนอกงาน',      IncidentType:'Off Job',              SubType:'หยุดงาน',                  IncidentDate:'2026-06-04' },
  { IncidentID:'TCRB-INC-0003', IncidentName:'รถยกชนชั้นวางสินค้า',               IncidentType:'Property Damage',      SubType:'Low impact (<5,000 ฿)',    IncidentDate:'2026-06-03' },
  { IncidentID:'TCRB-INC-0004', IncidentName:'ไฟไหม้บริเวณห้องเก็บวัตถุดิบ',      IncidentType:'Fire',                 SubType:'Low impact (<5,000 ฿)',    IncidentDate:'2026-05-20' },
  { IncidentID:'TCRB-INC-0005', IncidentName:'พนักงานนิ้วติดเครื่องจักร',          IncidentType:'On Job',               SubType:'Minor (MTC)',              IncidentDate:'2026-05-10' },
  { IncidentID:'TCRB-INC-0006', IncidentName:'รถบรรทุกชนประตูโรงงาน',             IncidentType:'MVA',                  SubType:'L1 = FA / รถขับได้',       IncidentDate:'2026-04-22' },
  { IncidentID:'TCRB-INC-0007', IncidentName:'พนักงานลื่นล้มบันได',                IncidentType:'On Job',               SubType:'First Aid (ปฐมพยาบาล)',   IncidentDate:'2026-04-08' },
  { IncidentID:'TCRB-INC-0008', IncidentName:'สินค้าเสียหายระหว่างขนส่ง',         IncidentType:'Goods Transportation', SubType:'L2 = 20-80% / MTC',        IncidentDate:'2026-03-15' },
  { IncidentID:'TCRB-INC-0009', IncidentName:'พนักงานถูกของตกใส่',                 IncidentType:'On Job',               SubType:'First Aid (ปฐมพยาบาล)',   IncidentDate:'2026-03-05' },
  { IncidentID:'TCRB-INC-0010', IncidentName:'เครื่องจักรเสียหายจากไฟฟ้าลัดวงจร', IncidentType:'Property Damage',      SubType:'High impact (>=5,000 ฿)',  IncidentDate:'2026-02-18' },
  { IncidentID:'TCRB-INC-0011', IncidentName:'พนักงานบาดเจ็บนอกงาน',               IncidentType:'Off Job',              SubType:'Fatality — เสียชีวิต',    IncidentDate:'2026-02-05' },
  { IncidentID:'TCRB-INC-0012', IncidentName:'รถโฟล์คลิฟท์ชนพนักงาน',             IncidentType:'On Job',               SubType:'Major (Lost Time)',        IncidentDate:'2026-01-25' },
  { IncidentID:'TCRB-INC-0013', IncidentName:'ถังดับเพลิงหมดอายุ',                 IncidentType:'Fire',                 SubType:'Low impact (<5,000 ฿)',    IncidentDate:'2026-01-10' }
]

var MOCK_EMP = {
  'TCRB-INC-0001':[{name:'สมชาย ใจดี',department:'Corr1',status:'Safe',detail:''},{name:'วิภา รักงาน',department:'Corr1',status:'Not Safe',detail:'พื้นลื่นบริเวณสายพาน'},{name:'ธนกร สุขใส',department:'Corr1',status:'Safe',detail:''},{name:'นภา สะอาด',department:'ซ่อมบำรุง',status:'Not Safe',detail:'เครื่องจักรไม่มีฝาครอบ'},{name:'ปรีดา ขันทอง',department:'ซ่อมบำรุง',status:'Safe',detail:''},{name:'กมล สุวรรณ',department:'ประกันคุณภาพ',status:'Not Safe',detail:'ไม่มี PPE เพียงพอ'},{name:'มานะ จริงใจ',department:'ประกันคุณภาพ',status:'Safe',detail:''},{name:'รัตนา ใจงาม',department:'คลังสินค้าและขนส่ง',status:'Safe',detail:''}],
  'TCRB-INC-0002':[{name:'เอกชัย ดีใจ',department:'Corr2',status:'Safe',detail:''},{name:'สุดา รักดี',department:'Corr2',status:'Safe',detail:''},{name:'วิชัย ตั้งใจ',department:'Printing and Converting Section 1',status:'Not Safe',detail:'แสงสว่างไม่เพียงพอ'},{name:'กนกวรรณ สดใส',department:'Printing and Converting Section 1',status:'Safe',detail:''}],
  'TCRB-INC-0003':[],
  'TCRB-INC-0004':[{name:'สมชาย ใจดี',department:'Corr1',status:'Safe',detail:''},{name:'นภา สะอาด',department:'ซ่อมบำรุง',status:'Not Safe',detail:'ถังดับเพลิงหมดอายุ'},{name:'ปรีดา ขันทอง',department:'ซ่อมบำรุง',status:'Safe',detail:''},{name:'มานะ จริงใจ',department:'ประกันคุณภาพ',status:'Safe',detail:''},{name:'รัตนา ใจงาม',department:'คลังสินค้าและขนส่ง',status:'Safe',detail:''}],
  'TCRB-INC-0005':[{name:'วิภา รักงาน',department:'Printing and Converting Section 1',status:'Not Safe',detail:'ฝาครอบเครื่องจักรหาย'},{name:'ธนกร สุขใส',department:'Printing and Converting Section 1',status:'Safe',detail:''},{name:'กมล สุวรรณ',department:'Corr1',status:'Safe',detail:''}],
  'TCRB-INC-0006':[],
  'TCRB-INC-0007':[{name:'สมชาย ใจดี',department:'Corr2',status:'Safe',detail:''},{name:'สุดา รักดี',department:'Corr2',status:'Safe',detail:''},{name:'เอกชัย ดีใจ',department:'คลังสินค้าและขนส่ง',status:'Not Safe',detail:'บันไดลื่น ไม่มีแถบกันลื่น'},{name:'กนกวรรณ สดใส',department:'คลังสินค้าและขนส่ง',status:'Safe',detail:''}],
  'TCRB-INC-0008':[],
  'TCRB-INC-0009':[{name:'นภา สะอาด',department:'Corr1',status:'Not Safe',detail:'ไม่สวมหมวกนิรภัย'},{name:'ปรีดา ขันทอง',department:'Corr1',status:'Safe',detail:''},{name:'มานะ จริงใจ',department:'ประกันคุณภาพ',status:'Safe',detail:''}],
  'TCRB-INC-0010':[],
  'TCRB-INC-0011':[{name:'เอกชัย ดีใจ',department:'Corr2',status:'Safe',detail:''},{name:'สุดา รักดี',department:'Corr2',status:'Safe',detail:''}],
  'TCRB-INC-0012':[{name:'สมชาย ใจดี',department:'Corr1',status:'Safe',detail:''},{name:'วิภา รักงาน',department:'Corr1',status:'Not Safe',detail:'ไม่มีสัญญาณเตือนรถโฟล์คลิฟท์'},{name:'ธนกร สุขใส',department:'ซ่อมบำรุง',status:'Safe',detail:''},{name:'นภา สะอาด',department:'ซ่อมบำรุง',status:'Safe',detail:''}],
  'TCRB-INC-0013':[{name:'สมชาย ใจดี',department:'ซ่อมบำรุง',status:'Safe',detail:''},{name:'กมล สุวรรณ',department:'Corr1',status:'Safe',detail:''},{name:'มานะ จริงใจ',department:'ประกันคุณภาพ',status:'Safe',detail:''}]
}

function init() {
  buildMonthDropdown()
  buildIncidentDropdown()

  document.getElementById('selMonth').addEventListener('change', function() {
    // พอเปลี่ยนเดือน → rebuild dropdown เคส แล้ว reset เคสเป็น "ทุกเคส"
    buildIncidentDropdown()
    document.getElementById('selInc').value = 'all'
    renderAll()
  })
  document.getElementById('selInc').addEventListener('change', function() {
    renderAll()
  })
  document.getElementById('searchBox').addEventListener('input', function() {
    renderAll()
  })
  document.getElementById('selDept').addEventListener('change', function() {
    renderAll()
  })

  renderAll()
}

/* สร้าง dropdown เดือน/ปี */
function buildMonthDropdown() {
  var monthMap = {}
  MOCK_INCIDENTS.forEach(function(inc) {
    var d = new Date(inc.IncidentDate)
    var key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')
    if (!monthMap[key]) monthMap[key] = {
      label: MONTH_NAMES[d.getMonth() + 1] + ' ' + (d.getFullYear() + 543),
      monthNum: d.getMonth() + 1,
      year: d.getFullYear()
    }
  })
  var sel = document.getElementById('selMonth')
  sel.innerHTML = '<option value="all">ทุกเดือน</option>'
  Object.keys(monthMap).sort(function(a, b) { return b.localeCompare(a) }).forEach(function(key) {
    var opt = document.createElement('option')
    opt.value = key
    opt.textContent = monthMap[key].label
    sel.appendChild(opt)
  })
}

/* สร้าง dropdown รหัสเคส ตามเดือนที่เลือก */
function buildIncidentDropdown() {
  var monthKey = document.getElementById('selMonth').value
  var filtered = getIncidentsByMonth(monthKey)
  var sel = document.getElementById('selInc')
  var prev = sel.value
  sel.innerHTML = '<option value="all">ทุกเคส</option>'
  filtered.forEach(function(inc) {
    var opt = document.createElement('option')
    opt.value = inc.IncidentID
    opt.textContent = inc.IncidentID + ' — ' + inc.IncidentName
    sel.appendChild(opt)
  })
  // คืนค่าเดิมถ้ายังอยู่ใน list
  var stillExists = filtered.some(function(inc) { return inc.IncidentID === prev })
  if (stillExists) sel.value = prev
}

/* กรองเคสตามเดือน */
function getIncidentsByMonth(monthKey) {
  if (monthKey === 'all') return MOCK_INCIDENTS
  var parts = monthKey.split('-')
  var y = parseInt(parts[0]), m = parseInt(parts[1])
  return MOCK_INCIDENTS.filter(function(inc) {
    var d = new Date(inc.IncidentDate)
    return d.getFullYear() === y && d.getMonth() + 1 === m
  })
}

/* รวม filter ทั้งหมด แล้ว render */
function renderAll() {
  var monthKey   = document.getElementById('selMonth').value
  var incFilter  = document.getElementById('selInc').value
  var query      = document.getElementById('searchBox').value.trim().toLowerCase()
  var deptFilter = document.getElementById('selDept').value

  // กรองรายการเคส
  var incList = getIncidentsByMonth(monthKey)
  if (incFilter !== 'all') {
    incList = incList.filter(function(inc) { return inc.IncidentID === incFilter })
  }

  // ถ้าเลือกเคสเดียวและไม่มี form
  if (incFilter !== 'all' && incList.length === 1) {
    var singleInc = incList[0]
    if (FORM_TYPES.indexOf(singleInc.IncidentType) === -1) {
      document.getElementById('selDept').innerHTML = '<option value="">ทุกแผนก</option>'
      document.getElementById('content').innerHTML =
        '<div class="na-box"><i class="ti ti-clipboard-off"></i>' +
        '<div style="font-size:15px;font-weight:600;margin-bottom:4px">ไม่มีข้อมูล Google Form</div>' +
        '<div>ประเภท <strong>' + singleInc.IncidentType + '</strong> ไม่ได้ส่งแบบฟอร์มให้พนักงาน</div></div>'
      return
    }
  }

  // รวม rows จากทุกเคส (เฉพาะที่มี form)
  var allRows = []
  incList.forEach(function(inc) {
    if (FORM_TYPES.indexOf(inc.IncidentType) === -1) return
    var rows = MOCK_EMP[inc.IncidentID] || []
    rows.forEach(function(r) {
      allRows.push({
        incidentID: inc.IncidentID,
        name: r.name,
        department: r.department,
        status: r.status,
        detail: r.detail
      })
    })
  })

  // อัปเดต dropdown แผนก
  var depts = []
  allRows.forEach(function(r) { if (depts.indexOf(r.department) === -1) depts.push(r.department) })
  var selDept = document.getElementById('selDept')
  var prevDept = selDept.value
  selDept.innerHTML = '<option value="">ทุกแผนก</option>'
  depts.sort().forEach(function(d) {
    var opt = document.createElement('option')
    opt.value = d; opt.textContent = d
    if (d === prevDept) opt.selected = true
    selDept.appendChild(opt)
  })
  deptFilter = selDept.value

  // กรอง rows ตาม search + แผนก
  var filteredRows = allRows.filter(function(r) {
    var matchSearch = !query || (r.name + r.department + r.status + r.detail + r.incidentID).toLowerCase().indexOf(query) !== -1
    var matchDept = !deptFilter || r.department === deptFilter
    return matchSearch && matchDept
  })

  renderContent(filteredRows, allRows, query, deptFilter)
}

function renderContent(rows, allRows, query, deptFilter) {
  var el = document.getElementById('content')
  var p = function(a, b) { return b ? Math.round(a / b * 100) : 0 }

  if (allRows.length === 0) {
    el.innerHTML =
      '<div class="na-box"><i class="ti ti-clipboard-off"></i>' +
      '<div style="font-size:15px;font-weight:600;margin-bottom:4px">ไม่มีข้อมูล Google Form</div>' +
      '<div>เคสที่เลือกไม่มีข้อมูลพนักงานในระบบ</div></div>'
    return
  }

  var total  = allRows.length
  var safe   = allRows.filter(function(r) { return r.status === 'Safe' }).length
  var unsafe = allRows.filter(function(r) { return r.status === 'Not Safe' }).length
  var issueMap = {}
  allRows.filter(function(r) { return r.detail }).forEach(function(r) {
    issueMap[r.detail] = (issueMap[r.detail] || 0) + 1
  })
  var issKeys = Object.keys(issueMap)

  var issHTML = issKeys.length === 0
    ? '<div style="font-size:14px;color:var(--text2)">ไม่มีรายการ Not Safe</div>'
    : issKeys.map(function(k) {
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--gray-lt);border-radius:var(--radius);margin-bottom:8px;font-size:14px">' +
          '<span>' + k + '</span>' +
          '<span style="font-size:13px;font-weight:600;color:#B91C1C;background:var(--red-lt);padding:3px 10px;border-radius:20px">' + issueMap[k] + ' คน</span></div>'
      }).join('')

  var searchInfo = (query || deptFilter)
    ? '<div style="font-size:13px;color:var(--text2);margin-bottom:10px;padding:8px 12px;background:var(--gray-lt);border-radius:var(--radius)">' +
        '<i class="ti ti-filter" style="font-size:14px;vertical-align:-2px"></i> ' +
        (query ? 'ค้นหา "<strong>' + query + '</strong>" ' : '') +
        (deptFilter ? '| แผนก: <strong>' + deptFilter + '</strong> ' : '') +
        '— พบ ' + rows.length + '/' + total + ' รายการ</div>'
    : ''

  // แสดงคอลัมน์ รหัสเคส เฉพาะตอนที่แสดงหลายเคส
  var incFilter = document.getElementById('selInc').value
  var showIncCol = incFilter === 'all'

  var rowsHTML = rows.length === 0
    ? '<tr><td colspan="' + (showIncCol ? 5 : 4) + '" style="text-align:center;color:var(--text2);padding:24px">ไม่พบข้อมูลที่ค้นหา</td></tr>'
    : rows.map(function(r) {
        return '<tr>' +
          (showIncCol ? '<td style="font-size:12px;color:var(--text2);white-space:nowrap">' + r.incidentID + '</td>' : '') +
          '<td>' + r.name + '</td>' +
          '<td style="color:var(--text2)">' + r.department + '</td>' +
          '<td><span class="badge ' + (r.status === 'Safe' ? 'badge-safe' : 'badge-unsafe') + '">' + r.status + '</span></td>' +
          '<td style="color:var(--text2)">' + (r.detail || '—') + '</td></tr>'
      }).join('')

  el.innerHTML =
    '<div class="grid4" style="margin-bottom:20px">' +
      '<div class="metric"><div class="metric-val">' + total + '</div><div class="metric-lbl">ตอบกลับทั้งหมด</div></div>' +
      '<div class="metric"><div class="metric-val" style="color:var(--green)">' + safe + '</div><div class="metric-lbl">Safe (' + p(safe, total) + '%)</div></div>' +
      '<div class="metric"><div class="metric-val" style="color:var(--red)">' + unsafe + '</div><div class="metric-lbl">Not Safe (' + p(unsafe, total) + '%)</div></div>' +
      '<div class="metric"><div class="metric-val" style="color:var(--purple)">' + issKeys.length + '</div><div class="metric-lbl">ประเภทปัญหา</div></div>' +
    '</div>' +
    '<div class="grid2" style="margin-bottom:20px">' +
      '<div class="card">' +
        '<div class="card-title"><i class="ti ti-chart-bar"></i> สัดส่วนสถานะ</div>' +
        '<div class="bar-wrap"><div class="bar-lbl"><span>Safe</span><strong>' + safe + ' คน — ' + p(safe, total) + '%</strong></div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + p(safe, total) + '%;background:var(--green);color:#fff">' + (p(safe, total) > 12 ? p(safe, total) + '%' : '') + '</div></div></div>' +
        '<div class="bar-wrap"><div class="bar-lbl"><span>Not Safe</span><strong>' + unsafe + ' คน — ' + p(unsafe, total) + '%</strong></div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + p(unsafe, total) + '%;background:var(--red);color:#fff">' + (p(unsafe, total) > 12 ? p(unsafe, total) + '%' : '') + '</div></div></div>' +
      '</div>' +
      '<div class="card"><div class="card-title"><i class="ti ti-alert-circle"></i> Not Safe — สิ่งที่ระบุมา</div>' + issHTML + '</div>' +
    '</div>' +
    '<div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:10px">รายละเอียดรายบุคคล</div>' +
    searchInfo +
    '<div class="tbl-wrap"><table>' +
      '<thead><tr>' +
        (showIncCol ? '<th style="width:11%">รหัสเคส</th>' : '') +
        '<th style="width:22%">ชื่อ-นามสกุล</th>' +
        '<th style="width:' + (showIncCol ? '27%' : '32%') + '">แผนก</th>' +
        '<th style="width:12%">สถานะ</th>' +
        '<th>รายละเอียด</th>' +
      '</tr></thead>' +
      '<tbody>' + rowsHTML + '</tbody>' +
    '</table></div>'
}

function fmtDate(val) {
  if (!val) return ''
  var d = new Date(val)
  return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + (d.getFullYear() + 543)
}

init()
