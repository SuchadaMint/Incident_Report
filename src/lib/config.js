var CONFIG = {
  MSAL: { clientId:'YOUR_CLIENT_ID', tenantId:'YOUR_TENANT_ID', redirectUri:'http://localhost:3000' },
  SHAREPOINT_SITE_ID: 'YOUR_SITE_ID',
  LISTS: { incidents:'INC_Incidents', supervisorResponse:'INC_SupervisorResponse', managerApproval:'INC_ManagerApproval' },
  SHEETS: { apiKey:'YOUR_GOOGLE_API_KEY', sheetId:'YOUR_SHEET_ID', range:'Form Responses 1!A:Z' }
}
var DEPARTMENTS = ['สำนักงาน/Office','Corr1','Corr2','Printing and Converting Section 1','Printing and Converting Section 2','คลังสินค้าและขนส่ง','ประกันคุณภาพ','จัดซื้อและคลังพัสดุ','ซ่อมบำรุง']
var INCIDENT_TYPES = {
  'On Job':               ['First Aid (ปฐมพยาบาล)','Minor (MTC) — การบาดเจ็บเล็กน้อย (ต้องรักษาทางการแพทย์)','Major (Lost Time) — การบาดเจ็บรุนแรง (ต้องหยุดงาน)','Fatality — เสียชีวิต'],
  'Off Job':              ['หยุดงาน','Fatality — เสียชีวิต'],
  'Fire':                 ['Low impact (<5,000 ฿) — ผลกระทบน้อย','High impact (≥5,000 ฿) — ผลกระทบมาก'],
  'Property Damage':      ['Low impact (<5,000 ฿) — ผลกระทบน้อย','High impact (≥5,000 ฿) — ผลกระทบมาก'],
  'Goods Transportation': ['L1 = <20% ของสินค้าที่ขน / FA','L2 = 20-80% ของสินค้าที่ขน / MTC','L3 = >80% ของสินค้าที่ขน / LT or Fatality','Property Damage — เฉี่ยวชนภายใน รถม้วน รถเศษ รถภายใต้ SCGL'],
  'MVA':                  ['L1 = FA / รถขับได้ด้วยตัวเอง','L2 = MTC เปลี่ยนงาน / รถไม่สามารถขับได้','L3 = LT, FT / รถไม่สามารถซ่อมได้ต้องขายซากทิ้ง']
}
var FORM_TYPES = ['On Job','Off Job','Fire']
var FORM_URL   = 'https://docs.google.com/forms/d/e/1FAIpQLSe4jM0Q9hL84VdEy0cugbPYifXon8MWM4ANPQluXItbpCQ9hA/viewform?usp=header'
var TYPE_COLORS = { 'On Job':'#6C63FF','Off Job':'#EF4444','Fire':'#F59E0B','Property Damage':'#6B7280','MVA':'#3B82F6','Goods Transportation':'#22C55E' }
var MONTH_NAMES = ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
