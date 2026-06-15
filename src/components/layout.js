// ===== Shared Sidebar + Topbar =====
function renderLayout(activePage) {
  var pages = [
    { id:'incident',   href:'index.html',      icon:'ti-plus',          label:'แจ้งอุบัติเหตุใหม่' },
    { id:'employee',   href:'employee.html',   icon:'ti-users',          label:'สถานะพนักงาน' },
    { id:'supervisor', href:'supervisor.html', icon:'ti-mail',           label:'หัวหน้ากะ' },
    { id:'dashboard',  href:'dashboard.html',  icon:'ti-chart-bar',      label:'Dashboard' }
  ]

  var navHTML = pages.map(function(p) {
    return '<a href="'+p.href+'" class="nav-link'+(activePage===p.id?' active':'')+'">' +
      '<i class="ti '+p.icon+'"></i>' + p.label +
    '</a>'
  }).join('')

  var sidebarHTML =
    '<div class="sidebar">' +
      '<div class="sidebar-brand">' +
        '<div class="sidebar-brand-logo">INC Report</div>' +
        '<div class="sidebar-brand-sub">Incident Management System</div>' +
      '</div>' +
      '<div class="sidebar-nav">' +
        '<div class="sidebar-section-label">เมนูหลัก</div>' +
        navHTML +
      '</div>' +
      '<div class="sidebar-footer">' +
        '<div class="sidebar-footer-avatar"><i class="ti ti-user" style="font-size:14px"></i></div>' +
        '<div><div style="font-weight:500;font-size:12px">จป. ผู้รับผิดชอบ</div><div style="font-size:11px;color:var(--gray)">Safety Officer</div></div>' +
      '</div>' +
    '</div>'

  var topbarHTML =
    '<div class="topbar">' +
      '<div class="topbar-search"><i class="ti ti-search"></i><span>ค้นหา...</span></div>' +
      '<div class="topbar-right">' +
        '<div class="topbar-icon-btn"><i class="ti ti-bell"></i><span class="notif-badge">3</span></div>' +
        '<div class="topbar-icon-btn"><i class="ti ti-help"></i></div>' +
        '<div class="topbar-user">' +
          '<div class="topbar-user-avatar">จป</div>' +
          '<div class="topbar-user-info">' +
            '<div class="topbar-user-name">Admin User</div>' +
            '<div class="topbar-user-role">Safety Manager</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML + topbarHTML)
}
