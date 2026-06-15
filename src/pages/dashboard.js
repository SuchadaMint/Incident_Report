var MOCK_INCIDENTS=[{IncidentID:'TCRB-INC-0001',IncidentName:'พนักงานลื่นล้มบริเวณสายพาน',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-06-05'},{IncidentID:'TCRB-INC-0002',IncidentName:'พนักงานเกิดอุบัติเหตุนอกงาน',IncidentType:'Off Job',SubType:'หยุดงาน',IncidentDate:'2026-06-04'},{IncidentID:'TCRB-INC-0003',IncidentName:'รถยกชนชั้นวางสินค้า',IncidentType:'Property Damage',SubType:'Low impact',IncidentDate:'2026-06-03'},{IncidentID:'TCRB-INC-0004',IncidentName:'ไฟไหม้บริเวณห้องเก็บวัตถุดิบ',IncidentType:'Fire',SubType:'Low impact',IncidentDate:'2026-05-20'},{IncidentID:'TCRB-INC-0005',IncidentName:'พนักงานนิ้วติดเครื่องจักร',IncidentType:'On Job',SubType:'Minor (MTC)',IncidentDate:'2026-05-10'},{IncidentID:'TCRB-INC-0006',IncidentName:'รถบรรทุกชนประตูโรงงาน',IncidentType:'MVA',SubType:'L1 = FA / รถขับได้',IncidentDate:'2026-04-22'},{IncidentID:'TCRB-INC-0007',IncidentName:'พนักงานลื่นล้มบันได',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-04-08'},{IncidentID:'TCRB-INC-0008',IncidentName:'สินค้าเสียหายระหว่างขนส่ง',IncidentType:'Goods Transportation',SubType:'L2 = 20-80% / MTC',IncidentDate:'2026-03-15'},{IncidentID:'TCRB-INC-0009',IncidentName:'พนักงานถูกของตกใส่',IncidentType:'On Job',SubType:'First Aid (ปฐมพยาบาล)',IncidentDate:'2026-03-05'},{IncidentID:'TCRB-INC-0010',IncidentName:'เครื่องจักรเสียหายจากไฟฟ้าลัดวงจร',IncidentType:'Property Damage',SubType:'High impact',IncidentDate:'2026-02-18'},{IncidentID:'TCRB-INC-0011',IncidentName:'พนักงานบาดเจ็บนอกงาน',IncidentType:'Off Job',SubType:'Fatality',IncidentDate:'2026-02-05'},{IncidentID:'TCRB-INC-0012',IncidentName:'รถโฟล์คลิฟท์ชนพนักงาน',IncidentType:'On Job',SubType:'Major (Lost Time)',IncidentDate:'2026-01-25'},{IncidentID:'TCRB-INC-0013',IncidentName:'ถังดับเพลิงหมดอายุ',IncidentType:'Fire',SubType:'Low impact',IncidentDate:'2026-01-10'}]
var MOCK_EMP={'TCRB-INC-0001':[{status:'Safe',detail:''},{status:'Not Safe',detail:'พื้นลื่นบริเวณสายพาน'},{status:'Safe',detail:''},{status:'Not Safe',detail:'เครื่องจักรไม่มีฝาครอบ'},{status:'Safe',detail:''},{status:'Not Safe',detail:'ไม่มี PPE เพียงพอ'},{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0002':[{status:'Safe',detail:''},{status:'Safe',detail:''},{status:'Not Safe',detail:'แสงสว่างไม่เพียงพอ'},{status:'Safe',detail:''}],'TCRB-INC-0003':[],'TCRB-INC-0004':[{status:'Safe',detail:''},{status:'Not Safe',detail:'ถังดับเพลิงหมดอายุ'},{status:'Safe',detail:''},{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0005':[{status:'Not Safe',detail:'ฝาครอบเครื่องจักรหาย'},{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0006':[],'TCRB-INC-0007':[{status:'Safe',detail:''},{status:'Safe',detail:''},{status:'Not Safe',detail:'บันไดลื่น ไม่มีแถบกันลื่น'},{status:'Safe',detail:''}],'TCRB-INC-0008':[],'TCRB-INC-0009':[{status:'Not Safe',detail:'ไม่สวมหมวกนิรภัย'},{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0010':[],'TCRB-INC-0011':[{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0012':[{status:'Safe',detail:''},{status:'Not Safe',detail:'ไม่มีสัญญาณเตือนรถโฟล์คลิฟท์'},{status:'Safe',detail:''},{status:'Safe',detail:''}],'TCRB-INC-0013':[{status:'Safe',detail:''},{status:'Safe',detail:''},{status:'Safe',detail:''}]}
var MOCK_SUP={'TCRB-INC-0001':{total:6,replied:4,rel:['Corr1','ซ่อมบำรุง'],notRel:['ประกันคุณภาพ','คลังสินค้าและขนส่ง'],comp:1,inprog:1},'TCRB-INC-0002':{total:3,replied:2,rel:['Corr2'],notRel:['Printing and Converting Section 2'],comp:0,inprog:1},'TCRB-INC-0003':{total:4,replied:4,rel:['ซ่อมบำรุง','คลังสินค้าและขนส่ง'],notRel:['Corr1','ประกันคุณภาพ'],comp:1,inprog:1},'TCRB-INC-0004':{total:5,replied:5,rel:['Corr1','ซ่อมบำรุง'],notRel:['ประกันคุณภาพ','Corr2','คลังสินค้าและขนส่ง'],comp:2,inprog:0},'TCRB-INC-0005':{total:4,replied:3,rel:['Printing and Converting Section 1'],notRel:['Corr1','ซ่อมบำรุง'],comp:0,inprog:1},'TCRB-INC-0006':{total:3,replied:3,rel:['คลังสินค้าและขนส่ง'],notRel:['Corr1','ประกันคุณภาพ'],comp:1,inprog:0},'TCRB-INC-0007':{total:4,replied:4,rel:['Corr2'],notRel:['ซ่อมบำรุง','ประกันคุณภาพ','คลังสินค้าและขนส่ง'],comp:1,inprog:0},'TCRB-INC-0008':{total:3,replied:2,rel:['คลังสินค้าและขนส่ง'],notRel:['Corr1'],comp:0,inprog:1},'TCRB-INC-0009':{total:4,replied:4,rel:['Corr1'],notRel:['ซ่อมบำรุง','ประกันคุณภาพ','Corr2'],comp:1,inprog:0},'TCRB-INC-0010':{total:3,replied:3,rel:['ซ่อมบำรุง'],notRel:['Corr1','คลังสินค้าและขนส่ง'],comp:1,inprog:0},'TCRB-INC-0011':{total:3,replied:2,rel:['Corr2'],notRel:['ประกันคุณภาพ'],comp:0,inprog:1},'TCRB-INC-0012':{total:5,replied:5,rel:['Corr1','คลังสินค้าและขนส่ง'],notRel:['ซ่อมบำรุง','ประกันคุณภาพ','Corr2'],comp:1,inprog:1},'TCRB-INC-0013':{total:4,replied:4,rel:['ซ่อมบำรุง'],notRel:['Corr1','ประกันคุณภาพ','Corr2'],comp:1,inprog:0}}

var selected={}
MOCK_INCIDENTS.forEach(function(i){selected[i.IncidentID]=true})
var searchQuery=''

function init(){
  var mSel=document.getElementById('selMonth')
  var months={}
  MOCK_INCIDENTS.forEach(function(inc){
    var d=new Date(inc.IncidentDate),m=d.getMonth()+1
    months[m]=MONTH_NAMES[m]+' '+(d.getFullYear()+543)
  })
  Object.keys(months).sort(function(a,b){return b-a}).forEach(function(m){
    var opt=document.createElement('option')
    opt.value=m; opt.textContent=months[m]
    mSel.appendChild(opt)
  })
  mSel.addEventListener('change',renderAll)

  document.getElementById('searchInc').addEventListener('input',function(){
    searchQuery=this.value.trim().toLowerCase(); renderAll()
  })
  renderAll()
}

function getVisible(){
  var m=document.getElementById('selMonth').value
  var list=m==='all'?MOCK_INCIDENTS:MOCK_INCIDENTS.filter(function(inc){return(new Date(inc.IncidentDate).getMonth()+1)==m})
  if(searchQuery) list=list.filter(function(inc){return inc.IncidentName.toLowerCase().indexOf(searchQuery)!==-1||inc.IncidentID.toLowerCase().indexOf(searchQuery)!==-1})
  return list
}

function renderAll(){
  var list=getVisible()
  renderSummary(list)
  renderChips(list)
}

function renderSummary(list){
  var el=document.getElementById('summary')
  if(!list.length){el.innerHTML='';return}
  var p=function(a,b){return b?Math.round(a/b*100):0}
  var typeCount={}
  list.forEach(function(inc){typeCount[inc.IncidentType]=(typeCount[inc.IncidentType]||0)+1})
  var totalEmp=0,totalSafe=0,totalUnsafe=0,totalReplied=0,totalSup=0
  list.forEach(function(inc){
    var rows=MOCK_EMP[inc.IncidentID]||[]; totalEmp+=rows.length
    totalSafe+=rows.filter(function(r){return r.status==='Safe'}).length
    totalUnsafe+=rows.filter(function(r){return r.status==='Not Safe'}).length
    var s=MOCK_SUP[inc.IncidentID]; if(s){totalSup+=s.total;totalReplied+=s.replied}
  })
  var typeRows=Object.keys(typeCount).map(function(t){
    var color=TYPE_COLORS[t]||'#888'
    return '<div class="type-row"><div style="display:flex;align-items:center;gap:10px"><div class="type-dot" style="background:'+color+'"></div><span>'+t+'</span></div><span style="font-weight:700;color:var(--text)">'+typeCount[t]+' เคส</span></div>'
  }).join('')
  var bar=function(val,tot,color){var pv=p(val,tot);return '<div class="bar-track" style="height:14px"><div class="bar-fill" style="width:'+pv+'%;background:'+color+';color:#fff">'+(pv>12?pv+'%':'')+'</div></div>'}

  /* สีของ "ยังไม่ตอบ" ใช้ var(--red) ชัดเจน ไม่ใช่ gray */
  var notReplied=totalSup-totalReplied
  el.innerHTML=
    '<div class="card" style="margin-bottom:20px">'+
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">'+
        '<div style="font-size:16px;font-weight:700;color:var(--text)"><i class="ti ti-chart-pie" style="font-size:18px;vertical-align:-3px;margin-right:8px;color:var(--purple)"></i>ภาพรวม</div>'+
        '<span style="background:var(--purple-lt);color:var(--purple);font-size:13px;font-weight:600;padding:4px 12px;border-radius:20px">'+list.length+' เคส</span>'+
      '</div>'+
      '<div class="grid3">'+
        '<div style="background:var(--gray-lt);border-radius:var(--radius-lg);padding:16px">'+
          '<div style="font-size:12px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px">ประเภทอุบัติเหตุ</div>'+
          typeRows+
        '</div>'+
        '<div style="background:var(--gray-lt);border-radius:var(--radius-lg);padding:16px">'+
          '<div style="font-size:12px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px">สถานะพนักงาน (Google Form)</div>'+
          '<div style="display:flex;gap:20px;margin-bottom:14px">'+
            '<div><div style="font-size:26px;font-weight:700;color:var(--green)">'+totalSafe+'</div><div style="font-size:12px;color:var(--text2)">Safe ('+p(totalSafe,totalEmp)+'%)</div></div>'+
            '<div><div style="font-size:26px;font-weight:700;color:var(--red)">'+totalUnsafe+'</div><div style="font-size:12px;color:var(--text2)">Not Safe ('+p(totalUnsafe,totalEmp)+'%)</div></div>'+
            '<div><div style="font-size:26px;font-weight:700;color:var(--text)">'+totalEmp+'</div><div style="font-size:12px;color:var(--text2)">ตอบทั้งหมด</div></div>'+
          '</div>'+
          '<div style="font-size:12px;color:var(--text2);margin-bottom:4px">Safe</div>'+bar(totalSafe,totalEmp,'var(--green)')+
          '<div style="font-size:12px;color:var(--text2);margin-top:8px;margin-bottom:4px">Not Safe</div>'+bar(totalUnsafe,totalEmp,'var(--red)')+
        '</div>'+
        '<div style="background:var(--gray-lt);border-radius:var(--radius-lg);padding:16px">'+
          '<div style="font-size:12px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px">หัวหน้ากะตอบกลับ</div>'+
          '<div style="display:flex;gap:20px;margin-bottom:14px">'+
            '<div><div style="font-size:26px;font-weight:700;color:var(--purple)">'+totalReplied+'</div><div style="font-size:12px;color:var(--text2)">ตอบกลับ ('+p(totalReplied,totalSup)+'%)</div></div>'+
            '<div><div style="font-size:26px;font-weight:700;color:#DC2626">'+notReplied+'</div><div style="font-size:12px;color:var(--text2)">ยังไม่ตอบ</div></div>'+
          '</div>'+
          '<div style="font-size:12px;color:var(--text2);margin-bottom:4px">ตอบกลับแล้ว</div>'+bar(totalReplied,totalSup,'var(--purple)')+
          '<div style="font-size:12px;color:var(--text2);margin-top:8px;margin-bottom:4px">ยังไม่ตอบ</div>'+bar(notReplied,totalSup,'#DC2626')+
        '</div>'+
      '</div>'+
    '</div>'
}

function renderChips(list){
  var chips=document.getElementById('chips'); chips.innerHTML=''
  list.forEach(function(inc){
    var d=document.createElement('div')
    d.className='chip'+(selected[inc.IncidentID]?' active':'')
    d.textContent=inc.IncidentID
    d.onclick=function(){selected[inc.IncidentID]=!selected[inc.IncidentID];renderChips(list)}
    chips.appendChild(d)
  })
  renderCards(list.filter(function(i){return selected[i.IncidentID]}))
}

function renderCards(show){
  var el=document.getElementById('cards')
  if(!show.length){el.innerHTML='<div class="loading">เลือกเคสที่ต้องการดูด้านบน</div>';return}
  var p=function(a,b){return b?Math.round(a/b*100):0}
  var bar=function(val,tot,color){var pv=p(val,tot);return '<div class="bar-track"><div class="bar-fill" style="width:'+pv+'%;background:'+color+';color:#fff">'+(pv>=12?pv+'%':'')+'</div></div>'}
  el.innerHTML=show.map(function(inc){
    var s=MOCK_SUP[inc.IncidentID]||{total:0,replied:0,rel:[],notRel:[],comp:0,inprog:0}
    var empRows=MOCK_EMP[inc.IncidentID]||[]
    var hasForm=FORM_TYPES.indexOf(inc.IncidentType)!==-1
    var safe=empRows.filter(function(r){return r.status==='Safe'}).length
    var unsafe=empRows.filter(function(r){return r.status==='Not Safe'}).length
    var empTotal=empRows.length
    var progTotal=s.comp+s.inprog
    var typeColor=TYPE_COLORS[inc.IncidentType]||'#888'
    var issueMap={}
    empRows.filter(function(r){return r.detail}).forEach(function(r){issueMap[r.detail]=(issueMap[r.detail]||0)+1})
    var issKeys=Object.keys(issueMap)
    var issHTML=issKeys.length?'<div style="font-size:13px;font-weight:600;color:var(--text2);margin:12px 0 8px">Not Safe — สิ่งที่ระบุมา</div>'+issKeys.map(function(k){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--bg);border-radius:var(--radius);margin-bottom:6px;font-size:13px"><span>'+k+'</span><span style="color:#B91C1C;font-weight:600;background:var(--red-lt);padding:2px 10px;border-radius:20px">'+issueMap[k]+' คน</span></div>'}).join(''):''
    var empPanel=hasForm?
      '<div style="background:var(--bg);padding:18px;border-right:1px solid var(--gray-bd)">'+
        '<div style="font-size:13px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px"><i class="ti ti-users" style="margin-right:6px;color:var(--purple)"></i>สถานะพนักงาน (GOOGLE FORM)</div>'+
        '<div class="bar-wrap"><div class="bar-lbl"><span>Safe</span><strong>'+safe+' คน — '+p(safe,empTotal)+'%</strong></div>'+bar(safe,empTotal,'var(--green)')+'</div>'+
        '<div class="bar-wrap"><div class="bar-lbl"><span>Not Safe</span><strong>'+unsafe+' คน — '+p(unsafe,empTotal)+'%</strong></div>'+bar(unsafe,empTotal,'var(--red)')+'</div>'+
        issHTML+'</div>'
      :'<div style="background:var(--bg);padding:18px;border-right:1px solid var(--gray-bd);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">'+
        '<i class="ti ti-clipboard-off" style="font-size:32px;color:#D1D5DB;display:block;margin-bottom:10px"></i>'+
        '<div style="font-size:14px;font-weight:600;margin-bottom:4px">ไม่มีข้อมูล Form พนักงาน</div>'+
        '<div style="font-size:13px;color:var(--text2)">ประเภท '+inc.IncidentType+'</div></div>'
    var deptHTML=
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">'+
        '<div><div style="font-size:12px;font-weight:600;color:var(--purple);margin-bottom:6px">เกี่ยวข้อง ('+s.rel.length+')</div>'+s.rel.map(function(d){return'<div style="font-size:12px;padding:5px 10px;background:var(--purple-lt);color:var(--purple);border-radius:20px;margin-bottom:4px;font-weight:500">'+d+'</div>'}).join('')+'</div>'+
        '<div><div style="font-size:12px;font-weight:600;color:var(--gray);margin-bottom:6px">ไม่เกี่ยวข้อง ('+s.notRel.length+')</div>'+s.notRel.map(function(d){return'<div style="font-size:12px;padding:5px 10px;background:var(--gray-lt);color:#374151;border-radius:20px;margin-bottom:4px;font-weight:500">'+d+'</div>'}).join('')+'</div>'+
      '</div>'
    var notRepliedCount=s.total-s.replied
    return '<div style="background:var(--bg);border:1px solid var(--gray-bd);border-radius:var(--radius-lg);margin-bottom:20px;overflow:hidden;box-shadow:var(--shadow)">'+
      '<div style="padding:16px 20px;border-bottom:1px solid var(--gray-bd)">'+
        '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">'+
          '<span class="inc-pill">'+inc.IncidentID+'</span>'+
          '<span style="font-size:13px;padding:4px 12px;border-radius:20px;border:1.5px solid '+typeColor+'40;color:'+typeColor+';background:'+typeColor+'10;font-weight:500">'+inc.IncidentType+' — '+inc.SubType+'</span>'+
          '<span style="margin-left:auto;font-size:13px;color:var(--text2)"><i class="ti ti-calendar" style="font-size:14px;vertical-align:-2px"></i> '+fmtDate(inc.IncidentDate)+'</span>'+
        '</div>'+
        '<div style="font-size:16px;font-weight:700;color:var(--text)"><i class="ti ti-alert-triangle" style="font-size:15px;vertical-align:-2px;color:'+typeColor+';margin-right:6px"></i>'+inc.IncidentName+'</div>'+
      '</div>'+
      '<div style="display:grid;grid-template-columns:repeat(3,1fr)">'+
        empPanel+
        '<div style="background:var(--bg);padding:18px;border-right:1px solid var(--gray-bd)">'+
          '<div style="font-size:13px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px"><i class="ti ti-mail" style="margin-right:6px;color:var(--purple)"></i>หัวหน้ากะตอบกลับ</div>'+
          '<div class="bar-wrap"><div class="bar-lbl"><span>ตอบกลับ</span><strong>'+s.replied+'/'+s.total+' — '+p(s.replied,s.total)+'%</strong></div>'+bar(s.replied,s.total,'var(--purple)')+'</div>'+
          '<div class="bar-wrap"><div class="bar-lbl"><span style="color:#DC2626;font-weight:600">ยังไม่ตอบ</span><strong style="color:#DC2626">'+notRepliedCount+' คน — '+p(notRepliedCount,s.total)+'%</strong></div>'+bar(notRepliedCount,s.total,'#DC2626')+'</div>'+
          '<div style="font-size:13px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.05em;margin:14px 0 10px"><i class="ti ti-building" style="margin-right:6px;color:var(--purple)"></i>ความเกี่ยวข้องแผนก</div>'+
          deptHTML+
        '</div>'+
        '<div style="background:var(--bg);padding:18px">'+
          '<div style="font-size:13px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px"><i class="ti ti-check" style="margin-right:6px;color:var(--purple)"></i>ความคืบหน้ามาตรการ</div>'+
          '<div style="font-size:13px;color:var(--text2);margin-bottom:12px">เฉพาะแผนกที่เกี่ยวข้อง ('+s.rel.length+' แผนก)</div>'+
          '<div class="bar-wrap"><div class="bar-lbl"><span>Completed</span><strong>'+s.comp+' — '+p(s.comp,progTotal||1)+'%</strong></div>'+bar(s.comp,progTotal||1,'var(--green)')+'</div>'+
          '<div class="bar-wrap"><div class="bar-lbl"><span>Inprocess</span><strong>'+s.inprog+' — '+p(s.inprog,progTotal||1)+'%</strong></div>'+bar(s.inprog,progTotal||1,'var(--amber)')+'</div>'+
        '</div>'+
      '</div>'+
    '</div>'
  }).join('')
}

function fmtDate(val){if(!val)return'';var d=new Date(val);return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+(d.getFullYear()+543)}
init()
