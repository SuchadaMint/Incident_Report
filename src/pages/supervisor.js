var MOCK_INCIDENTS=[{IncidentID:'TCRB-INC-0001',IncidentName:'พนักงานลื่นล้มบริเวณสายพาน',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-06-05'},{IncidentID:'TCRB-INC-0002',IncidentName:'พนักงานเกิดอุบัติเหตุนอกงาน',IncidentType:'Off Job',SubType:'หยุดงาน',IncidentDate:'2026-06-04'},{IncidentID:'TCRB-INC-0003',IncidentName:'รถยกชนชั้นวางสินค้า',IncidentType:'Property Damage',SubType:'Low impact',IncidentDate:'2026-06-03'},{IncidentID:'TCRB-INC-0004',IncidentName:'ไฟไหม้บริเวณห้องเก็บวัตถุดิบ',IncidentType:'Fire',SubType:'Low impact',IncidentDate:'2026-05-20'},{IncidentID:'TCRB-INC-0005',IncidentName:'พนักงานนิ้วติดเครื่องจักร',IncidentType:'On Job',SubType:'Minor (MTC)',IncidentDate:'2026-05-10'},{IncidentID:'TCRB-INC-0006',IncidentName:'รถบรรทุกชนประตูโรงงาน',IncidentType:'MVA',SubType:'L1 = FA / รถขับได้',IncidentDate:'2026-04-22'},{IncidentID:'TCRB-INC-0007',IncidentName:'พนักงานลื่นล้มบันได',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-04-08'},{IncidentID:'TCRB-INC-0008',IncidentName:'สินค้าเสียหายระหว่างขนส่ง',IncidentType:'Goods Transportation',SubType:'L2 = 20-80% / MTC',IncidentDate:'2026-03-15'},{IncidentID:'TCRB-INC-0009',IncidentName:'พนักงานถูกของตกใส่',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-03-05'},{IncidentID:'TCRB-INC-0010',IncidentName:'เครื่องจักรเสียหายจากไฟฟ้าลัดวงจร',IncidentType:'Property Damage',SubType:'High impact',IncidentDate:'2026-02-18'},{IncidentID:'TCRB-INC-0011',IncidentName:'พนักงานบาดเจ็บนอกงาน',IncidentType:'Off Job',SubType:'Fatality',IncidentDate:'2026-02-05'},{IncidentID:'TCRB-INC-0012',IncidentName:'รถโฟล์คลิฟท์ชนพนักงาน',IncidentType:'On Job',SubType:'Major (Lost Time)',IncidentDate:'2026-01-25'},{IncidentID:'TCRB-INC-0013',IncidentName:'ถังดับเพลิงหมดอายุ',IncidentType:'Fire',SubType:'Low impact',IncidentDate:'2026-01-10'}]

var MOCK_SUP={
  'TCRB-INC-0001':[{id:'1',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ทบทวนขั้นตอน PPE',DueDate:'2026-06-15',UpdatedAt:''},{id:'2',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ตรวจสอบฝาครอบเครื่องจักร',DueDate:'2026-06-10',UpdatedAt:'2026-06-09'},{id:'3',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'4',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'5',Department:'Corr2',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'6',Department:'Printing and Converting Section 1',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0002':[{id:'7',Department:'Corr2',SupervisorName:'สุดา ทองดี',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ตรวจสุขภาพพนักงาน',DueDate:'2026-06-20',UpdatedAt:''},{id:'8',Department:'Printing and Converting Section 2',SupervisorName:'วันชนะ ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'9',Department:'ซ่อมบำรุง',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0003':[{id:'10',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ซ่อมแซมทรัพย์สิน',DueDate:'2026-06-08',UpdatedAt:'2026-06-07'},{id:'11',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ทบทวนเส้นทางเดินรถ',DueDate:'2026-06-18',UpdatedAt:''},{id:'12',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'13',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0004':[{id:'14',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ตรวจสอบถังดับเพลิง',DueDate:'2026-05-28',UpdatedAt:'2026-05-27'},{id:'15',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ซ่อมแซมระบบไฟ',DueDate:'2026-05-25',UpdatedAt:'2026-05-24'},{id:'16',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'17',Department:'Corr2',SupervisorName:'สุดา ทองดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'18',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0005':[{id:'19',Department:'Printing and Converting Section 1',SupervisorName:'วิภา รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ติดตั้งฝาครอบเครื่องจักร',DueDate:'2026-05-20',UpdatedAt:''},{id:'20',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'21',Department:'ซ่อมบำรุง',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'22',Department:'ประกันคุณภาพ',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0006':[{id:'23',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ซ่อมประตูโรงงาน',DueDate:'2026-04-30',UpdatedAt:'2026-04-29'},{id:'24',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'25',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0007':[{id:'26',Department:'Corr2',SupervisorName:'สุดา ทองดี',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ติดแถบกันลื่นบันได',DueDate:'2026-04-15',UpdatedAt:'2026-04-14'},{id:'27',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'28',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'29',Department:'คลังสินค้าและขนส่ง',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0008':[{id:'30',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ปรับปรุงกระบวนการขนส่ง',DueDate:'2026-03-25',UpdatedAt:''},{id:'31',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'32',Department:'ซ่อมบำรุง',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0009':[{id:'33',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'แจก PPE ครบทุกคน',DueDate:'2026-03-12',UpdatedAt:'2026-03-11'},{id:'34',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'35',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'36',Department:'Corr2',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0010':[{id:'37',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ซ่อมระบบไฟฟ้า',DueDate:'2026-02-25',UpdatedAt:'2026-02-24'},{id:'38',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'39',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0011':[{id:'40',Department:'Corr2',SupervisorName:'สุดา ทองดี',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'ติดตามสุขภาพพนักงาน',DueDate:'2026-02-15',UpdatedAt:''},{id:'41',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'42',Department:'ซ่อมบำรุง',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0012':[{id:'43',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'ติดสัญญาณเตือนรถยก',DueDate:'2026-02-01',UpdatedAt:'2026-01-31'},{id:'44',Department:'คลังสินค้าและขนส่ง',SupervisorName:'ธนา สุขใจ',IsRelevant:'เกี่ยวข้อง',Status:'Inprocess',Measure:'อบรมขับรถยก',DueDate:'2026-02-05',UpdatedAt:''},{id:'45',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'46',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'47',Department:'Corr2',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}],
  'TCRB-INC-0013':[{id:'48',Department:'ซ่อมบำรุง',SupervisorName:'วิชัย รักงาน',IsRelevant:'เกี่ยวข้อง',Status:'Completed',Measure:'เปลี่ยนถังดับเพลิงใหม่',DueDate:'2026-01-18',UpdatedAt:'2026-01-17'},{id:'49',Department:'Corr1',SupervisorName:'สมชาย ใจดี',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'50',Department:'ประกันคุณภาพ',SupervisorName:'นภา สะอาด',IsRelevant:'ไม่เกี่ยวข้อง',Status:'',Measure:'',DueDate:'',UpdatedAt:''},{id:'51',Department:'Corr2',SupervisorName:'',IsRelevant:'',Status:'',Measure:'',DueDate:'',UpdatedAt:''}]
}

var editId = null

function init() {
  buildMonthDropdown()
  buildIncidentDropdown()

  document.getElementById('selMonth').addEventListener('change', function() {
    buildIncidentDropdown()
    document.getElementById('selInc').value = 'all'
    renderAll()
  })
  document.getElementById('selInc').addEventListener('change', function() {
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
      label: MONTH_NAMES[d.getMonth() + 1] + ' ' + (d.getFullYear() + 543)
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
  var monthKey  = document.getElementById('selMonth').value
  var incFilter = document.getElementById('selInc').value

  var incList = getIncidentsByMonth(monthKey)
  if (incFilter !== 'all') {
    incList = incList.filter(function(inc) { return inc.IncidentID === incFilter })
  }

  // รวม rows จากทุกเคสที่ผ่านการกรอง
  var allRows = []
  incList.forEach(function(inc) {
    var rows = MOCK_SUP[inc.IncidentID] || []
    rows.forEach(function(r) {
      allRows.push({
        incidentID:   inc.IncidentID,
        id:           r.id,
        Department:   r.Department,
        SupervisorName: r.SupervisorName,
        IsRelevant:   r.IsRelevant,
        Status:       r.Status,
        Measure:      r.Measure,
        DueDate:      r.DueDate,
        UpdatedAt:    r.UpdatedAt
      })
    })
  })

  renderMetrics(allRows)
  renderTable(allRows, incFilter)
}

/* Metrics bar */
function renderMetrics(allRows) {
  var p = function(a, b) { return b ? Math.round(a / b * 100) : 0 }
  var total    = allRows.length
  var replied  = allRows.filter(function(r) { return r.IsRelevant !== '' }).length
  var rel      = allRows.filter(function(r) { return r.IsRelevant === 'เกี่ยวข้อง' }).length
  var notRep   = total - replied

  document.getElementById('metrics').innerHTML =
    '<div class="metric"><div class="metric-val">' + total + '</div><div class="metric-lbl">แผนกที่แจ้ง</div></div>' +
    '<div class="metric"><div class="metric-val" style="color:var(--green)">' + replied + ' <span style="font-size:16px">(' + p(replied, total) + '%)</span></div><div class="metric-lbl">ตอบกลับแล้ว</div></div>' +
    '<div class="metric"><div class="metric-val" style="color:var(--purple)">' + rel + '</div><div class="metric-lbl">เกี่ยวข้อง</div></div>' +
    '<div class="metric"><div class="metric-val" style="color:var(--red)">' + notRep + '</div><div class="metric-lbl">ยังไม่ตอบ</div></div>'
}

/* ตาราง */
function renderTable(allRows, incFilter) {
  var showIncCol = (incFilter === 'all')

  var rowsHTML = allRows.length === 0
    ? '<tr><td colspan="' + (showIncCol ? 9 : 8) + '" style="text-align:center;color:var(--text2);padding:24px">ไม่มีข้อมูล</td></tr>'
    : allRows.map(function(r) {
        var replyBadge  = r.IsRelevant === 'เกี่ยวข้อง'   ? '<span class="badge badge-rel">เกี่ยวข้อง</span>'
                        : r.IsRelevant === 'ไม่เกี่ยวข้อง' ? '<span class="badge badge-notrel">ไม่เกี่ยวข้อง</span>'
                        : '<span class="badge badge-pending">รอตอบ</span>'
        var statusBadge = r.IsRelevant === 'เกี่ยวข้อง'
                        ? (r.Status === 'Completed' ? '<span class="badge badge-done">Completed</span>'
                          : r.Status === 'Inprocess' ? '<span class="badge badge-inprog">Inprocess</span>'
                          : '<span style="color:var(--text2)">—</span>')
                        : '<span style="color:var(--text2)">—</span>'
        var actionBtn   = r.IsRelevant !== ''
                        ? '<button class="btn-outline" style="font-size:12px;padding:5px 10px" onclick="openModal(\'' + r.id + '\',\'' + r.Department + '\',\'' + r.incidentID + '\')"><i class="ti ti-edit"></i> อัปเดต</button>'
                        : '<button class="btn-warn" onclick="alert(\'ส่งอีเมลเตือน ' + r.Department + ' แล้ว\')"><i class="ti ti-bell"></i> เตือนซ้ำ</button>'
        return '<tr>' +
          (showIncCol ? '<td style="font-size:12px;color:var(--text2);white-space:nowrap">' + r.incidentID + '</td>' : '') +
          '<td style="font-size:13px">' + r.Department + '</td>' +
          '<td style="font-size:13px;color:var(--text2)">' + (r.SupervisorName || '—') + '</td>' +
          '<td>' + replyBadge + '</td>' +
          '<td>' + statusBadge + '</td>' +
          '<td style="font-size:13px;color:var(--text2)">' + (r.Measure || '—') + '</td>' +
          '<td style="font-size:13px">' + (r.DueDate ? fmtDate(r.DueDate) : '—') + '</td>' +
          '<td style="font-size:13px;color:var(--text2)">' + (r.UpdatedAt ? fmtDate(r.UpdatedAt) : '—') + '</td>' +
          '<td>' + actionBtn + '</td>' +
        '</tr>'
      }).join('')

  document.getElementById('content').innerHTML =
    '<div class="tbl-wrap"><table>' +
      '<thead><tr>' +
        (showIncCol ? '<th style="width:10%">รหัสเคส</th>' : '') +
        '<th style="width:' + (showIncCol ? '14%' : '16%') + '">แผนก</th>' +
        '<th style="width:' + (showIncCol ? '11%' : '13%') + '">หัวหน้ากะ</th>' +
        '<th style="width:11%">ตอบกลับ</th>' +
        '<th style="width:10%">สถานะ</th>' +
        '<th style="width:' + (showIncCol ? '16%' : '18%') + '">มาตรการ</th>' +
        '<th style="width:9%">Due date</th>' +
        '<th style="width:9%">อัปเดตเมื่อ</th>' +
        '<th style="width:8%"></th>' +
      '</tr></thead>' +
      '<tbody>' + rowsHTML + '</tbody>' +
    '</table></div>'
}

function fmtDate(val) {
  if (!val) return ''
  var d = new Date(val)
  return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + (d.getFullYear() + 543)
}

function openModal(id, dept, incidentID) {
  editId = id
  document.getElementById('modalTitle').textContent = 'อัปเดต: ' + dept + ' (' + incidentID + ')'
  var allRows = []
  Object.keys(MOCK_SUP).forEach(function(k) { allRows = allRows.concat(MOCK_SUP[k]) })
  var r = allRows.find(function(x) { return x.id === id })
  if (r) {
    document.getElementById('mStatus').value  = r.Status || 'Inprocess'
    document.getElementById('mMeasure').value = r.Measure || ''
    document.getElementById('mDue').value     = r.DueDate || ''
  }
  document.getElementById('modal').classList.add('open')
}

function closeModal() { document.getElementById('modal').classList.remove('open') }

function saveModal() {
  var allRows = []
  Object.keys(MOCK_SUP).forEach(function(k) { allRows = allRows.concat(MOCK_SUP[k]) })
  var r = allRows.find(function(x) { return x.id === editId })
  if (r) {
    r.Status    = document.getElementById('mStatus').value
    r.Measure   = document.getElementById('mMeasure').value
    r.DueDate   = document.getElementById('mDue').value
    r.UpdatedAt = new Date().toISOString().slice(0, 10)
  }
  closeModal()
  renderAll()
}

init()
