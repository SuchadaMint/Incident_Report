import { CONFIG } from './config.js'

// ดึงข้อมูลจาก Google Sheets (คำตอบจาก Google Form พนักงาน)
export async function getEmployeeResponses() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.SHEETS.sheetId}/values/${CONFIG.SHEETS.range}?key=${CONFIG.SHEETS.apiKey}`
  const res = await fetch(url)
  const data = await res.json()
  const rows = data.values || []
  if (rows.length < 2) return []

  const headers = rows[0]   // แถวแรก = หัวคอลัมน์
  return rows.slice(1).map(row => {
    const obj = {}
    headers.forEach((h, i) => { obj[h] = row[i] || '' })
    return {
      timestamp:    obj['Timestamp'] || '',
      incidentId:   obj['รหัสเคสอุบัติเหตุ'] || '',
      name:         obj['ชื่อ-นามสกุล'] || '',
      department:   obj['แผนก'] || '',
      status:       obj['สถานะของคุณ ณ ขณะนี้'] || '',
      detail:       obj['ระบุสิ่งที่ไม่ปลอดภัยที่พบ'] || '',
      location:     obj['บริเวณที่พบความไม่ปลอดภัย'] || ''
    }
  })
}

// กรองตาม Incident ID
export async function getResponsesByIncident(incidentId) {
  const all = await getEmployeeResponses()
  return all.filter(r => r.incidentId === incidentId)
}
