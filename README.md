# INC Report — ระบบแจ้งอุบัติเหตุ TCRB

## โครงสร้างโปรเจกต์
```
INC_Report/
├── index.html              ← หน้าหลัก (แจ้งอุบัติเหตุใหม่)
├── employee.html           ← หน้าสถานะพนักงาน
├── supervisor.html         ← หน้าหัวหน้ากะตอบกลับ
├── dashboard.html          ← หน้า Dashboard สรุปผล
├── package.json
├── vite.config.js
└── src/
    ├── pages/              ← JS แต่ละหน้า
    │   ├── incident.js
    │   ├── employee.js
    │   ├── supervisor.js
    │   └── dashboard.js
    ├── components/         ← UI components ที่ใช้ร่วมกัน
    │   ├── navbar.js
    │   └── charts.js
    ├── lib/                ← เชื่อมต่อ API
    │   ├── sharepoint.js   ← Microsoft Graph API (SharePoint)
    │   ├── sheets.js       ← Google Sheets API
    │   └── config.js       ← ตั้งค่า API keys
    └── styles/
        └── main.css        ← Styles หลัก
```

## วิธีรัน
```bash
npm install
npm run dev
```

## SharePoint Lists ที่ต้องสร้าง
1. INC_Incidents        — บันทึกเคสอุบัติเหตุ
2. INC_SupervisorResponse — การตอบกลับหัวหน้ากะ
3. INC_ManagerApproval  — การ Approve ของหัวหน้าแผนก

## APIs ที่ใช้
- Microsoft Graph API   → อ่าน/เขียน SharePoint Lists
- Google Sheets API     → อ่านคำตอบจาก Google Form
- Power Automate        → ส่งอีเมลและเขียนข้อมูลลง SharePoint
