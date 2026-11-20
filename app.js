/* ==========================================================
   1. HELPERS & CONSTANTS
   ========================================================== */

/**
 * DOM selector helper (document.getElementById shortcut).
 * @param {string} id - The element ID.
 * @returns {HTMLElement|null} The DOM element if found.
 */
const $ = (id) => document.getElementById(id);

/**
 * Generates a pseudo-random 6-character alphanumeric unique ID.
 * Converts random float to base-36 string and slices characters 2 to 8.
 * @returns {string} 6-character unique string (e.g., "a8f3x2").
 */
const uid = () => Math.random().toString(36).slice(2, 8);

/**
 * Preserved single-color line icons for non-sidebar elements (KPI cards, search bars, tables).
 */
const LINE_ICONS = {
  dash: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>`,
  cust: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  insp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  rep: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  pos: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  posMenu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  ql: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><line x1="2" y1="13" x2="22" y2="13"></line></svg>`,
  cat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  bill: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
  his: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  reports: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  backup: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  sync: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
  audit: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`
};

/**
 * Global UI SVG icons (Sidebar nav items feature 22px two-tone Google Workspace style icons).
 */
const ICONS = {
  dash: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="2" y="2" width="8" height="8" rx="2.5" fill="var(--nav-dash, #2563EB)"/><rect x="12" y="2" width="8" height="8" rx="2.5" fill="var(--nav-dash-tint, #BFDBFE)"/><rect x="2" y="12" width="8" height="8" rx="2.5" fill="var(--nav-dash-tint, #BFDBFE)"/><rect x="12" y="12" width="8" height="8" rx="2.5" fill="var(--nav-dash, #2563EB)"/></svg>`,
  cust: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="15.5" cy="7.5" r="3" fill="var(--nav-cust-tint, #DDD6FE)"/><path d="M11 19.5c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" stroke="var(--nav-cust-tint, #DDD6FE)" stroke-width="3" stroke-linecap="round"/><circle cx="7.5" cy="7.5" r="3.5" fill="var(--nav-cust, #7C3AED)"/><path d="M2.5 20c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" stroke="var(--nav-cust, #7C3AED)" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  insp: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="9.5" cy="9.5" r="7.5" fill="var(--nav-insp-tint, #A5F3FC)"/><circle cx="9.5" cy="9.5" r="7" stroke="var(--nav-insp, #0891B2)" stroke-width="2"/><path d="M6 10a3.5 3.5 0 0 1 6-2" stroke="var(--nav-insp, #0891B2)" stroke-width="1.6" stroke-linecap="round"/><circle cx="9.5" cy="9.5" r="1.8" fill="var(--nav-insp, #0891B2)"/><line x1="9.5" y1="9.5" x2="12.5" y2="7.5" stroke="var(--nav-insp, #0891B2)" stroke-width="1.8" stroke-linecap="round"/><path d="M15 15l4.8 4.8" stroke="var(--nav-insp, #0891B2)" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  rep: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="7" cy="15" r="4.5" fill="var(--nav-rep-tint, #FED7AA)"/><circle cx="7" cy="15" r="2" fill="var(--nav-rep, #EA580C)"/><path d="M14.8 3.2a4 4 0 0 0-3.6 5.8L4.7 15.5a1.8 1.8 0 0 0 2.5 2.5l6.5-6.5a4 4 0 0 0 5.8-3.6c0-.6-.1-1.1-.4-1.6l-2.6 2.6-1.8-1.8 2.6-2.6a3.9 3.9 0 0 0-2.6-.7z" fill="var(--nav-rep, #EA580C)"/><path d="M9.8 10.4l1.8 1.8" stroke="var(--nav-rep-tint, #FED7AA)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  pos: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="9" fill="var(--nav-pos-tint, #FDE68A)"/><path d="M12.5 3L5.5 12h5l-1.5 7L16.5 10h-5l1.5-7z" fill="var(--nav-pos, #D97706)" stroke="var(--nav-pos, #D97706)" stroke-width="0.8" stroke-linejoin="round"/></svg>`,
  posMenu: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="9" fill="var(--nav-pos-tint, #FDE68A)"/><path d="M12.5 3L5.5 12h5l-1.5 7L16.5 10h-5l1.5-7z" fill="var(--nav-pos, #D97706)" stroke="var(--nav-pos, #D97706)" stroke-width="0.8" stroke-linejoin="round"/></svg>`,
  qlabor: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="9" fill="var(--nav-pos-tint, #FDE68A)"/><path d="M12.5 3L5.5 12h5l-1.5 7L16.5 10h-5l1.5-7z" fill="var(--nav-pos, #D97706)" stroke="var(--nav-pos, #D97706)" stroke-width="0.8" stroke-linejoin="round"/></svg>`,
  ql: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><line x1="2" y1="13" x2="22" y2="13"></line></svg>`,
  cat: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2.2L19.5 6.8L11 11.4L2.5 6.8L11 2.2Z" fill="var(--nav-cat-tint, #A7F3D0)"/><path d="M2.5 7.4L11 12V20L2.5 15.4V7.4Z" fill="var(--nav-cat, #059669)"/><path d="M11 12L19.5 7.4V15.4L11 20V12Z" fill="var(--nav-cat, #059669)" opacity="0.85"/><path d="M8.2 10.1L11 11.6L13.8 10.1V7.8L11 9.2L8.2 7.8V10.1Z" fill="var(--nav-cat-tint, #A7F3D0)"/></svg>`,
  bill: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="2" y="4" width="18" height="14" rx="3" fill="var(--nav-bill-tint, #BBF7D0)"/><rect x="2" y="7.5" width="18" height="3" fill="var(--nav-bill, #16A34A)"/><rect x="4.5" y="12" width="4.5" height="3.5" rx="1" fill="var(--nav-bill, #16A34A)"/><rect x="11" y="13" width="6.5" height="2" rx="1" fill="var(--nav-bill, #16A34A)"/></svg>`,
  his: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11.5" r="7.8" fill="var(--nav-his-tint, #C7D2FE)"/><path d="M11 4.5a7 7 0 1 1-5.8 3.1" stroke="var(--nav-his, #4F46E5)" stroke-width="2" stroke-linecap="round"/><polyline points="4 4 5.2 7.8 9 7.8" fill="none" stroke="var(--nav-his, #4F46E5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="11.5" r="1.5" fill="var(--nav-his, #4F46E5)"/><path d="M11 8v3.5l2.5 1.5" stroke="var(--nav-his, #4F46E5)" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  reports: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="2.5" y="12" width="4.5" height="7.5" rx="1.8" fill="var(--nav-reports-tint, #FBCFE8)"/><rect x="8.8" y="7.5" width="4.5" height="12" rx="1.8" fill="var(--nav-reports, #DB2777)"/><rect x="15" y="3.5" width="4.5" height="16" rx="1.8" fill="var(--nav-reports-tint, #FBCFE8)"/><path d="M4.5 10.5L11 6L17.2 2.8" stroke="var(--nav-reports, #DB2777)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17.2" cy="2.8" r="1.8" fill="var(--nav-reports, #DB2777)"/></svg>`,
  audit: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2.2L18.5 5.2v5.5c0 5-3.5 8.5-7.5 10-4-1.5-7.5-5-7.5-10V5.2L11 2.2z" fill="var(--nav-audit-tint, #99F6E4)" stroke="var(--nav-audit, #0F766E)" stroke-width="1.5" stroke-linejoin="round"/><polyline points="7.5 11 9.8 13.5 14.5 8.5" fill="none" stroke="var(--nav-audit, #0F766E)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  users: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2.2L18.5 5.2v5.5c0 5-3.5 8.5-7.5 10-4-1.5-7.5-5-7.5-10V5.2L11 2.2z" fill="var(--nav-users-tint, #CBD5E1)" stroke="var(--nav-users, #475569)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="11" cy="9.5" r="2.3" fill="var(--nav-users, #475569)"/><path d="M7.5 15.8c0-2 1.6-3.2 3.5-3.2s3.5 1.2 3.5 3.2" stroke="var(--nav-users, #475569)" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  settings: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M9.4 2.5h3.2l.5 2.1c.5.15 1 .35 1.45.6l1.85-1.1 2.25 2.25-1.1 1.85c.25.45.45.95.6 1.45l2.1.5v3.2l-2.1.5c-.15.5-.35 1-.6 1.45l1.1 1.85-2.25 2.25-1.85-1.1c-.45.25-.95.45-1.45.6l-.5 2.1H9.4l-.5-2.1c-.5-.15-1-.35-1.45-.6l-1.85 1.1-2.25-2.25 1.1-1.85a6.5 6.5 0 0 1-.6-1.45l-2.1-.5V9.4l2.1-.5c.15-.5.35-1 .6-1.45L3.35 5.6 5.6 3.35l1.85 1.1c.45-.25.95-.45 1.45-.6l.5-2.1z" fill="var(--nav-his-tint, #C7D2FE)" stroke="var(--nav-his, #4F46E5)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="11" cy="11" r="2.8" fill="var(--bg-surface, #FFFFFF)" stroke="var(--nav-his, #4F46E5)" stroke-width="1.6"/></svg>`,
  sync: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M6.2 15.5h9.8a3.6 3.6 0 0 0 .5-7.15A5 5 0 0 0 6.8 6.8a3.8 3.8 0 0 0-.6 8.7z" fill="var(--nav-insp-tint, #A5F3FC)" stroke="var(--nav-insp, #0891B2)" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 11.2a2.7 2.7 0 0 1 4.5-1.5" stroke="var(--nav-insp, #0891B2)" stroke-width="1.5" stroke-linecap="round"/><polyline points="12.2 8.2 13.4 9.7 11.6 10.1" fill="none" stroke="var(--nav-insp, #0891B2)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 12.6a2.7 2.7 0 0 1-4.5 1.5" stroke="var(--nav-insp, #0891B2)" stroke-width="1.5" stroke-linecap="round"/><polyline points="9.8 15.6 8.6 14.1 10.4 13.7" fill="none" stroke="var(--nav-insp, #0891B2)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  lock24: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  checkCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  print: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  userPlus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
  clipboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  alert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  chat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  money: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
  bike: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="16" r="3"></circle><circle cx="19" cy="16" r="3"></circle><path d="M5 16l4-7h4l3 7"></path><path d="M12 9l3-4h3"></path></svg>`,
  cpu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  crown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"></path></svg>`,
  panelCollapse: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><path d="M14 9l-3 3 3 3"></path></svg>`,
  panelExpand: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><path d="M11 9l3 3-3 3"></path></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
};

/**
 * Short for "Price/Peso". Formats a numeric amount into Philippine Peso currency string.
 * @param {number|string} n - The numeric amount.
 * @returns {string} Formatted currency string (e.g., "₱1,450").
 */
const P = (n) =>
  "₱" +
  (Number(n) || 0).toLocaleString("en-PH", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

/**
 * Short for "Statuses". Sequential lifecycle stages for repair work orders.
 */
const ST = [
  "Queued",
  "Diagnosing",
  "Awaiting Parts/Approval",
  "In Progress",
  "Checking",
  "Ready for Pickup",
  "Completed",
  "Cancelled"
];

/**
 * Converts a status name into a CSS-friendly class name.
 * Takes the first token before space or slash and converts it to lower case.
 * @param {string} s - Full status label (e.g. "Awaiting Parts/Approval").
 * @returns {string} Class name token (e.g. "awaiting").
 */
const cls = (s) => s.split(/[ /]/)[0].toLowerCase();

/**
 * Returns today's calendar date as a local date string (YYYY-MM-DD).
 * Constructed strictly from local year, month, and day without toISOString().
 * @returns {string} Local date string (e.g., "2026-10-30").
 */
const today = () => {
  const d = new Date();
  const pad = (n) => (n < 10 ? "0" + n : n);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/** Timer handle for active demo notice toast auto-hide. */
let demoNoticeTimer = null;

/**
 * Displays a non-blocking toast at the bottom of the screen:
 * "Demo only: this action is turned off in the prototype."
 * Auto-hides after 2.5s; subsequent clicks restart the timer.
 */
function showDemoNotice() {
  let el = $("demo-notice");
  if (!el) {
    el = document.createElement("div");
    el.id = "demo-notice";
    el.className = "demo-notice";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.textContent = "Demo only: this action is turned off in the prototype.";
    if (typeof document !== "undefined" && document.body) {
      document.body.appendChild(el);
    }
  }
  if (el) el.classList.add("show");
  if (demoNoticeTimer) {
    clearTimeout(demoNoticeTimer);
  }
  demoNoticeTimer = setTimeout(() => {
    hideDemoNotice();
  }, 2500);
}

/**
 * Hides the shared demo notice toast.
 */
function hideDemoNotice() {
  const el = $("demo-notice");
  if (el) el.classList.remove("show");
  if (demoNoticeTimer) {
    clearTimeout(demoNoticeTimer);
    demoNoticeTimer = null;
  }
}

// Delegated click handler and escape listener for demo-only actions
if (typeof document !== "undefined") {
  document.addEventListener("click", (e) => {
    const btn = e.target && e.target.closest && e.target.closest("[data-demo='true'], .demo-action");
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      showDemoNotice();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideDemoNotice();
    }
  });
}

/* ==========================================================
   2. SEED (DEFAULT) DATA
   ========================================================== */

/**
 * DATA SHAPES:
 *
 * cu = Customers
 *   - id: string (unique customer ID, e.g., "c1")
 *   - name: string (customer's full name)
 *   - phone: string (customer's mobile phone number)
 *
 * bk = Motorcycles (Bikes)
 *   - id: string (unique motorcycle ID, e.g., "b1")
 *   - cid: string (customer ID referencing cu.id)
 *   - make: string (manufacturer/brand, e.g., "Honda")
 *   - model: string (model name, e.g., "Click 125")
 *   - year: number|string (model year, e.g., 2021)
 *   - plate: string (license plate number, e.g., "ABC-1234")
 *
 * pt = Parts Catalog
 *   - id: string (unique part ID, e.g., "p1")
 *   - sku: string (stock keeping unit code, e.g., "OIL-10W40")
 *   - name: string (part description / name)
 *   - cost: number (unit selling price / cost in PHP)
 *
 * sv = Service Packages
 *   - id: string (unique service ID, e.g., "s1")
 *   - name: string (service job title, e.g., "Change oil")
 *   - labor: number (labor fee in PHP)
 *   - parts: string[] (array of part IDs from pt used during service)
 *
 * wo = Work Orders
 *   - id: string (unique work order ID, e.g., "w1")
 *   - bid: string (motorcycle ID referencing bk.id)
 *   - mech: string (assigned mechanic name)
 *   - st: string (status matching an item from ST)
 *   - sv: string[] (array of service package IDs referencing sv.id)
 *   - note: string (complaint details or repair notes)
 *   - at: string (creation date string, YYYY-MM-DD)
 *   - done?: string (completion timestamp, ISO-like string, optional)
 */

/**
 * Generates initial demo data seed.
 * @returns {Object} Database object.
 */
function seed() {
  return initDatabase();
}

// DEMO ONLY. These two cancelled jobs are restored to Cancelled on every page load. Remove this constant and its init call before real use.
const DEMO_CANCELLED_JOBS = (() => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const todayDateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const yDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15, 40);
  const yesterdayCancelAt = `${yDate.getFullYear()}-${pad(yDate.getMonth() + 1)}-${pad(yDate.getDate())} 15:40`;
  const todayCancelAt = `${todayDateStr} 10:20`;

  return [
    {
      id: "demo-wo-1",
      bid: "b13",
      mech: "",
      st: "Cancelled",
      sv: [],
      at: todayDateStr,
      note: "Customer reported brake issues.",
      notes: "Customer reported brake issues.",
      findings: "Front brake pads worn out.",
      complaints: ["Brake overhaul"],
      inspection: { enablePhysical: true, items: {}, obd: { codes: [] } },
      approved: false,
      items: [
        { name: "Brake overhaul", kind: "labor", qty: 1, price: 500, src: "shop" },
        { name: "Front brake pads", kind: "part", qty: 1, price: 650, src: "shop" }
      ],
      extra: [],
      advances: [],
      remarks: "",
      cancel: {
        reason: "Customer backed out after the estimate.",
        at: yesterdayCancelAt,
        by: "Admin",
        prevStatus: "Awaiting Parts/Approval"
      }
    },
    {
      id: "demo-wo-2",
      bid: "b14",
      mech: "Larpus",
      st: "Cancelled",
      sv: [],
      at: todayDateStr,
      note: "Scheduled periodic oil change.",
      notes: "Scheduled periodic oil change.",
      findings: "Engine oil degraded.",
      complaints: ["Change oil"],
      inspection: { enablePhysical: true, items: {}, obd: { codes: [] } },
      approved: false,
      items: [
        { name: "Change oil", kind: "labor", qty: 1, price: 150, src: "shop" },
        { name: "Engine oil 10W-40 (1L)", kind: "part", qty: 1, price: 420, src: "shop" }
      ],
      extra: [],
      advances: [],
      remarks: "",
      cancel: {
        reason: "",
        at: todayCancelAt,
        by: "System Admin",
        prevStatus: "In Progress"
      }
    }
  ];
})();

/**
 * Resets the two fixed demo cancelled jobs to Cancelled on every page load.
 * Called once during initialization after "moto1" is loaded & migrated and before first render.
 */
function resetDemoCancelledJobs() {
  if (!Array.isArray(D.wo)) D.wo = [];
  if (!Array.isArray(D.bk)) D.bk = [];
  if (!Array.isArray(D.cu)) D.cu = [];

  DEMO_CANCELLED_JOBS.forEach((demoDef, idx) => {
    // 1. Resolve motorcycle: use existing motorcycle without open jobs, or fallback to demo bike
    let targetBid = demoDef.bid;
    const hasOpenJob = (bikeId) => D.wo.some((w) => w.bid === bikeId && w.st !== "Completed" && w.st !== "Cancelled" && !w.cancel && w.id !== "demo-wo-1" && w.id !== "demo-wo-2");

    let b = D.bk.find((x) => x.id === targetBid);
    if (!b || hasOpenJob(b.id)) {
      const altBike = D.bk.find((bk) => !hasOpenJob(bk.id));
      if (altBike) {
        targetBid = altBike.id;
      } else {
        const fallbackCustId = idx === 0 ? "demo-cu-1" : "demo-cu-2";
        const fallbackBikeId = idx === 0 ? "demo-bk-1" : "demo-bk-2";
        if (!D.cu.some((c) => c.id === fallbackCustId)) {
          D.cu.push({
            id: fallbackCustId,
            name: idx === 0 ? "Noel Pascual" : "Patricia Cruz",
            phone: idx === 0 ? "0918 555 1172" : "0929 555 1256"
          });
        }
        if (!D.bk.some((bk) => bk.id === fallbackBikeId)) {
          D.bk.push({
            id: fallbackBikeId,
            cid: fallbackCustId,
            make: idx === 0 ? "Honda" : "Suzuki",
            model: idx === 0 ? "Beat" : "Smash 115",
            year: idx === 0 ? 2021 : 2020,
            plate: idx === 0 ? "HIJ-2289" : "KLM-5534"
          });
        }
        targetBid = fallbackBikeId;
      }
    }

    // 2. Insert or reset demo job to Cancelled state
    const existingIdx = D.wo.findIndex((x) => x.id === demoDef.id);
    if (existingIdx === -1) {
      const newJob = JSON.parse(JSON.stringify(demoDef));
      newJob.bid = targetBid;
      D.wo.push(newJob);
    } else {
      const existing = D.wo[existingIdx];
      existing.bid = targetBid;
      existing.st = "Cancelled";
      existing.cancel = JSON.parse(JSON.stringify(demoDef.cancel));
      existing.items = JSON.parse(JSON.stringify(demoDef.items));
      existing.mech = demoDef.mech || "";
      existing.sv = JSON.parse(JSON.stringify(demoDef.sv || []));
      existing.note = demoDef.note || "";
      existing.notes = demoDef.notes || "";
      existing.findings = demoDef.findings || "";
      existing.complaints = JSON.parse(JSON.stringify(demoDef.complaints || []));
      existing.inspection = JSON.parse(JSON.stringify(demoDef.inspection));
      existing.at = demoDef.at;
      existing.approved = false;
      delete existing.restored;
      delete existing.cancelHistory;
      delete existing.pay;
      delete existing.done;
      delete existing.reversed;
    }
  });

  save();
}

/* ==========================================================
   3. STORAGE (load / save)
   ========================================================== */

/**
 * Initializes the application database.
 * Every page reload, overwrites stored state with a fresh deep copy of DEMO_DATA.
 * Changes made during the session persist to localStorage via save(),
 * but reset cleanly to the demo seed on the next page reload.
 * @returns {Object} Fresh database object.
 */
function initDatabase() {
  const seedPt = [
    { id: "p1", sku: "OIL-10W40", name: "Engine oil 10W-40 (1L)", cost: 420 },
    { id: "p2", sku: "FLT-OIL", name: "Oil filter", cost: 180 },
    { id: "p3", sku: "BRK-PAD-F", name: "Front brake pads", cost: 650 },
    { id: "p4", sku: "CVT-BELT", name: "CVT drive belt", cost: 1450 },
    { id: "p5", sku: "SPK-PLG", name: "Spark plug", cost: 260 },
    { id: "p6", sku: "GRS-CVT", name: "CVT grease", cost: 150 }
  ];
  const seedSv = [
    { id: "s1", name: "Change oil", labor: 150, parts: ["p1", "p2"] },
    { id: "s2", name: "Valve clearance", labor: 450, parts: [] },
    { id: "s3", name: "CVT cleaning", labor: 600, parts: ["p6"] },
    { id: "s4", name: "Brake overhaul", labor: 500, parts: ["p3"] },
    { id: "s5", name: "Tune-up", labor: 350, parts: ["p5"] }
  ];

  let cu = [];
  let bk = [];
  let wo = [];
  let transactions = [];

  const sourceData = (typeof DEMO_DATA !== "undefined" && DEMO_DATA)
    ? DEMO_DATA
    : (typeof window !== "undefined" && window.DEMO_DATA ? window.DEMO_DATA : null);

  if (sourceData) {
    try {
      const raw = JSON.parse(JSON.stringify(sourceData));
      cu = raw.customers || raw.cu || [];
      bk = raw.motorcycles || raw.bk || [];
      wo = raw.jobOrders || raw.wo || [];
      transactions = raw.transactions || [];
    } catch (e) {}
  }

  // Cleanup any legacy stored odometer fields from existing localStorage data (NOT from audit entries)
  let savedInspDraft = null;
  let savedInspDraftStep = null;
  let savedAudit = null;
  let savedSales = null;
  try {
    const rawSaved = typeof localStorage !== "undefined" ? localStorage.getItem("moto1") : null;
    if (rawSaved) {
      const parsed = JSON.parse(rawSaved);
      if (parsed && typeof parsed === "object") {
        if (Array.isArray(parsed.audit)) {
          savedAudit = parsed.audit;
        }
        if (Array.isArray(parsed.sales)) {
          savedSales = parsed.sales;
        }
        if (parsed._inspDraft && typeof parsed._inspDraft === "object") {
          savedInspDraft = parsed._inspDraft;
        }
        if (typeof parsed._inspDraftStep === "number") {
          savedInspDraftStep = parsed._inspDraftStep;
        }
        if (Array.isArray(parsed.wo) && Array.isArray(wo)) {
          parsed.wo.forEach((savedWo) => {
            if (savedWo && savedWo.id && savedWo.inspection) {
              const targetWo = wo.find((w) => w && w.id === savedWo.id);
              if (targetWo) {
                targetWo.inspection = savedWo.inspection;
              }
            }
          });
        }
      }
    }
  } catch (e) {}

  const db = {
    cu: cu,
    bk: bk,
    wo: wo,
    transactions: transactions,
    pt: seedPt,
    sv: seedSv,
    sales: Array.isArray(savedSales) ? savedSales : [],
    audit: Array.isArray(savedAudit) ? savedAudit : [],
    commission: {}
  };
  if (savedInspDraft) {
    db._inspDraft = savedInspDraft;
  }
  if (typeof savedInspDraftStep === "number") {
    db._inspDraftStep = savedInspDraftStep;
  }

  try {
    localStorage.setItem("moto1", JSON.stringify(db));
  } catch (e) {}

  return db;
}

let D = initDatabase();
if (typeof window !== "undefined") {
  window.D = D;
}

/**
 * Persists the entire database object D into localStorage under key "moto1".
 */
const save = () => {
  try {
    if (typeof window !== "undefined") {
      window.D = D;
    }
    localStorage.setItem("moto1", JSON.stringify(D));
  } catch (e) {}
};

/* ==========================================================
   AUTH & ROLES
   ========================================================== */

/**
 * System roles and their permitted action tokens.
 * Permissions are not enforced yet. Fill ROLES[role].permissions and make can() check them later.
 */
const ROLES = {
  superadmin: { label: "System Admin", permissions: [] },
  admin:      { label: "Admin",        permissions: [] },
  mechanic:   { label: "Mechanic",     permissions: [] }
};

// Fixed navigation page list for System Admin (superadmin) — ignores operational pages in saved moto1_nav.
const SYSTEM_ADMIN_NAV = ["dash", "users", "settings", "sync", "audit"];

// Default Primary & Admin Navigation pages each role can open.
const DEFAULT_ROLE_NAV = {
  admin:      ["dash", "cust", "insp", "rep", "pos", "ql", "cat", "bill", "his", "reports", "audit", "users"],
  superadmin: [...SYSTEM_ADMIN_NAV],
  mechanic:   ["dash", "insp", "rep", "pos", "ql", "bill"]
};
const ROLE_NAV = DEFAULT_ROLE_NAV;

/**
 * Returns allowed primary/admin navigation route keys for a role.
 * System Admin (superadmin) always uses the fixed SYSTEM_ADMIN_NAV list and ignores saved entries outside it.
 * For Admin, "dash" and "users" are fixed in code regardless of saved "moto1_nav" (in-memory migration without rewriting saved data).
 * For Mechanic, "audit", "users", "settings", and "sync" are always excluded.
 * @param {string} role - System role key.
 * @returns {Array<string>} Allowed route keys.
 */
function getRoleNav(role) {
  const validKeys = V.map((x) => x[0]);

  if (role === "superadmin") {
    return SYSTEM_ADMIN_NAV.filter((k) => validKeys.includes(k));
  }

  let matrix = null;
  try {
    const raw = localStorage.getItem("moto1_nav");
    if (raw) {
      matrix = JSON.parse(raw);
    }
  } catch (e) {
    matrix = null;
  }

  let list = (matrix && typeof matrix === "object" && Array.isArray(matrix[role]))
    ? [...matrix[role]]
    : [...(DEFAULT_ROLE_NAV[role] || [])];

  // Apply legacy in-memory migrations for older saved moto1_nav without rewriting storage
  if (matrix && typeof matrix === "object" && role === "mechanic") {
    if (!matrix._q) {
      list = list.filter((k) => k !== "ql");
      if (!list.includes("qlabor")) list.push("qlabor");
    }
    if (!matrix._p) {
      list = list.filter((k) => k !== "qlabor");
      ["pos", "ql", "bill"].forEach((k) => {
        if (!list.includes(k)) list.push(k);
      });
    }
  }
  if (matrix && typeof matrix === "object" && role === "admin" && !matrix._a) {
    if (!list.includes("audit")) list.push("audit");
  }

  // Admin ALWAYS has access to Dashboard and Users (fixed in code, placed last after Reports and Audit)
  if (role === "admin") {
    if (!list.includes("dash")) {
      list.unshift("dash");
    }
    list = list.filter((k) => k !== "users" && k !== "settings" && k !== "sync");
    list.push("users");
  }
  // Mechanic role is hard-coded to NEVER open or receive audit or system pages
  if (role === "mechanic") {
    list = list.filter((k) => k !== "audit" && k !== "users" && k !== "settings" && k !== "sync");
  }

  return list.filter((k) => validKeys.includes(k));
}

/**
 * Checks whether the active role has permission to open a specific navigation page.
 * "settings" and "sync" are restricted to System Admin only; "users" is restricted to System Admin and Admin.
 * Mechanic is hard-coded to refuse "audit" and "users".
 * @param {string} pageKey - Route key to check.
 * @returns {boolean} True if the active role can open the page.
 */
const canOpen = (pageKey) => {
  const u = getCurrentUser();
  if (!u) return false;
  if ((pageKey === "settings" || pageKey === "sync") && u.activeRole !== "superadmin") {
    return false;
  }
  if (pageKey === "users" && u.activeRole !== "superadmin" && u.activeRole !== "admin") {
    return false;
  }
  if (pageKey === "audit" && u.activeRole === "mechanic") return false;
  const allowed = getRoleNav(u.activeRole);
  return allowed.includes(pageKey);
};

/**
 * Checks whether the current user has the specified permission.
 * Action permissions are not enforced yet.
 * @param {string} permission - The permission token to check.
 * @returns {boolean} Always true for now.
 */
const can = (permission) => true;

/**
 * Maps legacy saved "Super Admin" display names to "System Admin" without mutating storage.
 * @param {string} name - Stored user display name.
 * @returns {string} Display name.
 */
function displayUserName(name) {
  if (typeof name === "string" && name.trim().toLowerCase() === "super admin") {
    return "System Admin";
  }
  return name || "";
}

/**
 * Default demo user accounts seeded into localStorage under key "moto1_users".
 */
const DEFAULT_USERS = [
  { id: "u1", name: "System Admin", email: "superadmin@gmail.com", role: "superadmin", active: true, lastLogin: "" },
  { id: "u2", name: "Admin",        email: "admin@gmail.com",      role: "admin",      active: true, lastLogin: "" },
  { id: "u3", name: "Larpus",       email: "larpus@gmail.com",     role: "mechanic",   active: true, lastLogin: "" },
  { id: "u4", name: "Hiyo",         email: "hiyo@gmail.com",       role: "mechanic",   active: true, lastLogin: "" }
];

/**
 * Returns a local timestamp string "YYYY-MM-DD HH:MM" built from local time parts.
 * Never uses toISOString().
 * @param {Date} [d=new Date()]
 * @returns {string} e.g. "2026-10-24 08:00"
 */
function nowLocalTimestamp(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hr = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${day} ${hr}:${min}`;
}

/**
 * Loads registered user accounts from localStorage under key "moto1_users".
 * Migrates existing users by adding missing active/lastLogin fields, preserves extra users,
 * and ensures default demo accounts are present without ever resetting on reload.
 * @returns {Array<Object>} List of user account records.
 */
function loadUsers() {
  let list = [];
  try {
    const raw = localStorage.getItem("moto1_users");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        list = parsed.filter((u) => u && typeof u === "object" && u.email);
      }
    }
  } catch (e) {
    list = [];
  }

  if (!list.length) {
    list = JSON.parse(JSON.stringify(DEFAULT_USERS));
    try {
      localStorage.setItem("moto1_users", JSON.stringify(list));
    } catch (e) {}
  } else {
    // Migration: ensure 4 default accounts exist without wiping extra users
    DEFAULT_USERS.forEach((def) => {
      const exists = list.some((u) => u.email && u.email.toLowerCase() === def.email.toLowerCase());
      if (!exists) {
        list.push(JSON.parse(JSON.stringify(def)));
      }
    });

    let modified = false;
    list = list.map((u) => {
      let changed = false;
      if (u.active === undefined) {
        u.active = true;
        changed = true;
      }
      if (u.lastLogin === undefined) {
        u.lastLogin = "";
        changed = true;
      }
      if (changed) modified = true;
      return u;
    });

    if (modified) {
      try {
        localStorage.setItem("moto1_users", JSON.stringify(list));
      } catch (e) {}
    }
  }

  return list;
}

/**
 * Persists the user accounts list to localStorage under key "moto1_users".
 * @param {Array<Object>} users - The user accounts array.
 */
function saveUsers(users) {
  try {
    localStorage.setItem("moto1_users", JSON.stringify(users));
  } catch (e) {}
}

/**
 * Loads the active session payload from localStorage under key "moto1_session".
 * @returns {Object|null} Session object { userId, role, at } or null.
 */
function getSession() {
  try {
    const raw = localStorage.getItem("moto1_session");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && parsed.userId) {
        return parsed;
      }
    }
  } catch (e) {}
  return null;
}

/**
 * Persists the active session payload into localStorage under key "moto1_session".
 * @param {Object} s - The session object { userId, role, at }.
 */
function saveSession(s) {
  try {
    localStorage.setItem("moto1_session", JSON.stringify(s));
  } catch (e) {}
}

/**
 * Clears the active session from localStorage under key "moto1_session".
 */
function clearSession() {
  try {
    localStorage.removeItem("moto1_session");
  } catch (e) {}
}

/**
 * Retrieves the currently authenticated user object with the active role from session.
 * Clears corrupted sessions and returns null if unauthenticated.
 * @returns {Object|null} User object with activeRole property or null.
 */
function getCurrentUser() {
  const session = getSession();
  if (!session) return null;
  const users = loadUsers();
  const user = users.find((u) => u.id === session.userId);
  if (!user || user.active === false) {
    clearSession();
    return null;
  }
  const activeRole = session.role && ROLES[session.role] ? session.role : user.role;
  return {
    ...user,
    activeRole
  };
}

/* ==========================================================
   AUDIT LOG & SHARED SUPER ADMIN HELPERS
   ========================================================== */

/**
 * Checks whether the current active user is Super Admin.
 * Follows account switching instantly without full reload.
 * @returns {boolean}
 */
function isSuper() {
  const u = getCurrentUser();
  return Boolean(u && (u.activeRole === "superadmin" || (!u.activeRole && u.role === "superadmin")));
}

/**
 * Checks whether the current active user is Admin.
 * Follows account switching instantly without full reload.
 * @returns {boolean}
 */
function isAdmin() {
  const u = getCurrentUser();
  return Boolean(u && (u.activeRole === "admin" || (!u.activeRole && u.role === "admin")));
}

/**
 * Canonical registry of audited actions across the prototype.
 * superOnly actions are restricted to Super Admin view only.
 */
const AUDIT_EVENTS = [
  // Sessions
  { category: "Sessions", action: "Login", superOnly: false },
  { category: "Sessions", action: "Logout", superOnly: false },

  // POS & Billing
  { category: "POS & Billing", action: "Void", superOnly: true },
  { category: "POS & Billing", action: "Discount", superOnly: true },
  { category: "POS & Billing", action: "Price override", superOnly: true },
  { category: "POS & Billing", action: "Refund", superOnly: false },
  { category: "POS & Billing", action: "Payment edit", superOnly: false },

  // Service
  { category: "Service", action: "Job cancelled", superOnly: false },
  { category: "Service", action: "Job deleted", superOnly: false },
  { category: "Service", action: "Status change", superOnly: false },
  { category: "Service", action: "Line item added", superOnly: false },
  { category: "Service", action: "Line item removed", superOnly: false },
  { category: "Service", action: "Mechanic reassigned", superOnly: false },

  // Catalog (Super Admin only)
  { category: "Catalog", action: "Price change", superOnly: true },
  { category: "Catalog", action: "Item created", superOnly: true },
  { category: "Catalog", action: "Item archived", superOnly: true },
  { category: "Catalog", action: "Item deleted", superOnly: true },

  // Customers
  { category: "Customers", action: "Customer deleted", superOnly: false },
  { category: "Customers", action: "Motorcycle deleted", superOnly: false },
  { category: "Customers", action: "Plate number edited", superOnly: false },
  { category: "Customers", action: "Contact number edited", superOnly: false },

  // Security (Super Admin only)
  { category: "Security", action: "Failed login", superOnly: true },
  { category: "Security", action: "User created", superOnly: true },
  { category: "Security", action: "User deactivated", superOnly: true },
  { category: "Security", action: "Password reset", superOnly: true },
  { category: "Security", action: "Role changed", superOnly: true }
];

/**
 * Returns formatted local timestamp YYYY-MM-DD HH:MM:SS
 * @param {Date} [d=new Date()]
 * @returns {string}
 */
function getAuditLocalTimestamp(d = new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hr = pad(d.getHours());
  const min = pad(d.getMinutes());
  const sec = pad(d.getSeconds());
  return `${y}-${m}-${day} ${hr}:${min}:${sec}`;
}

/**
 * Checks whether an audit entry is permitted to be viewed by the user.
 * @param {Object} entry
 * @param {boolean} isSuperUser
 * @returns {boolean}
 */
function canViewAuditEntry(entry, isSuperUser) {
  if (isSuperUser) return true;
  if (!entry) return false;
  if (entry.cat === "Catalog" || entry.cat === "Security") return false;
  const match = AUDIT_EVENTS.find((e) => e.action === entry.action && e.category === entry.cat) ||
                AUDIT_EVENTS.find((e) => e.action === entry.action);
  if (match && match.superOnly) return false;
  return true;
}

/**
 * Core audit writer function. Appends record to D.audit and persists to localStorage.
 * @param {string} action - Event action name
 * @param {string} actorEmailOrName - Actor name or email
 * @param {string} role - User role key
 * @param {string} [category="Sessions"] - Event category
 * @param {string} [ref="-"] - Reference token
 * @param {string} [note=""] - Details or reason
 * @returns {Object} Appended entry
 */
function logAudit(action, actorEmailOrName, role, category = "Sessions", ref = "-", note = "") {
  let byName = actorEmailOrName || "System";
  try {
    const users = typeof loadUsers === "function" ? loadUsers() : [];
    const matched = users.find((x) => x && (x.email === actorEmailOrName || x.name === actorEmailOrName));
    if (matched && matched.name) byName = matched.name;
  } catch (e) {}
  byName = displayUserName(byName);

  if (!note) {
    if (action === "Login") note = "Signed in via demo accounts selector";
    else if (action === "Logout") note = "Signed out of session";
  }

  const entry = {
    id: "aud-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7),
    at: getAuditLocalTimestamp(),
    by: byName,
    role: role || "",
    cat: category || "Sessions",
    action: action,
    ref: ref || "-",
    note: note || "-"
  };

  if (typeof D !== "undefined" && D) {
    if (!Array.isArray(D.audit)) D.audit = [];
    if (D.audit.length > 0) {
      const prev = D.audit[D.audit.length - 1];
      if (prev && prev.action === entry.action && prev.cat === entry.cat && prev.ref === entry.ref && prev.note === entry.note && prev.by === entry.by) {
        return prev;
      }
    }
    D.audit.push(entry);
    if (typeof save === "function") save();
  }
  return entry;
}

/**
 * Unified writer wrapper for all domain actions.
 * Extracts current user and delegates to logAudit.
 * @param {string} category
 * @param {string} action
 * @param {string} [reference="-"]
 * @param {string} [details=""]
 * @returns {Object}
 */
function logAuditEvent(category, action, reference = "-", details = "") {
  const u = typeof getCurrentUser === "function" ? getCurrentUser() : null;
  const byName = u ? (u.name || u.email || "System") : "System";
  const role = u ? (u.activeRole || u.role || "") : "";
  return logAudit(action, byName, role, category, reference, details);
}

/**
 * Seeds initial session and narrative sample entries into D.audit without duplicating.
 */
function seedAuditEntries() {
  if (typeof D === "undefined" || !D) return;
  if (!Array.isArray(D.audit)) D.audit = [];

  const initialSessions = [
    { id: "seed-sess-01", at: "2026-11-17 08:30:12", by: "System Admin", role: "superadmin", cat: "Sessions", action: "Login", ref: "—", note: "Signed in via demo accounts selector" },
    { id: "seed-sess-02", at: "2026-11-17 08:15:40", by: "Maria Santos", role: "admin", cat: "Sessions", action: "Logout", ref: "—", note: "Signed out of session" },
    { id: "seed-sess-03", at: "2026-11-17 07:45:22", by: "Maria Santos", role: "admin", cat: "Sessions", action: "Login", ref: "—", note: "Signed in via demo accounts selector" },
    { id: "seed-sess-04", at: "2026-11-16 18:02:15", by: "Larpus", role: "mechanic", cat: "Sessions", action: "Logout", ref: "—", note: "Shift completed; signed out" },
    { id: "seed-sess-05", at: "2026-11-16 13:00:08", by: "Larpus", role: "mechanic", cat: "Sessions", action: "Login", ref: "—", note: "Signed in via demo accounts selector" },
    { id: "seed-sess-06", at: "2026-11-16 12:45:30", by: "Hiyo", role: "mechanic", cat: "Sessions", action: "Logout", ref: "—", note: "Signed out of session" },
    { id: "seed-sess-07", at: "2026-11-16 08:00:19", by: "Hiyo", role: "mechanic", cat: "Sessions", action: "Login", ref: "—", note: "Signed in via demo accounts selector" }
  ];

  initialSessions.forEach((sess) => {
    if (!D.audit.some((e) => e.id === sess.id || (e.at === sess.at && e.by === sess.by && e.action === sess.action))) {
      D.audit.push(sess);
    }
  });

  const nowMs = Date.now();
  const formatRelTime = (hoursAgo) => {
    const d = new Date(nowMs - hoursAgo * 3600 * 1000);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const narrativeSamples = [
    { id: "seed-aud-01", hoursAgo: 3, by: "Maria Santos", role: "admin", cat: "POS & Billing", action: "Void", ref: "TXN-0004", note: "Voided TXN-0004 (\u20B1420). Reason: Customer cancelled before payment." },
    { id: "seed-aud-02", hoursAgo: 5, by: "Maria Santos", role: "admin", cat: "POS & Billing", action: "Price override", ref: "TXN-0006", note: "Change oil labor: \u20B1150 \u2192 \u20B1120" },
    { id: "seed-aud-03", hoursAgo: 27, by: "Maria Santos", role: "admin", cat: "POS & Billing", action: "Discount", ref: "TXN-0007", note: "Discount \u20B150 on \u20B1650" },
    { id: "seed-aud-04", hoursAgo: 30, by: "Maria Santos", role: "admin", cat: "POS & Billing", action: "Payment edit", ref: "TXN-0005", note: "Payment method Cash \u2192 GCash" },
    { id: "seed-aud-05", hoursAgo: 50, by: "Maria Santos", role: "admin", cat: "POS & Billing", action: "Refund", ref: "TXN-0003", note: "Refunded \u20B1260. Reason: Wrong spark plug." },
    { id: "seed-aud-06", hoursAgo: 4, by: "Larpus", role: "mechanic", cat: "Service", action: "Status change", ref: "JO-0001", note: "Awaiting Parts/Approval \u2192 In Progress" },
    { id: "seed-aud-07", hoursAgo: 29, by: "Maria Santos", role: "admin", cat: "Service", action: "Mechanic reassigned", ref: "JO-0002", note: "Larpus \u2192 Hiyo" },
    { id: "seed-aud-08", hoursAgo: 52, by: "Hiyo", role: "mechanic", cat: "Service", action: "Line item added", ref: "JO-0003", note: "Added after approval: Coolant Temperature Sensor x1 (\u20B1850)" },
    { id: "seed-aud-09", hoursAgo: 74, by: "Maria Santos", role: "admin", cat: "Service", action: "Job cancelled", ref: "JO-0010", note: "Reason: Customer declined the repair." },
    { id: "seed-aud-10", hoursAgo: 76, by: "Maria Santos", role: "admin", cat: "Catalog", action: "Price change", ref: "Tune-up", note: "\u20B1350 \u2192 \u20B1400" },
    { id: "seed-aud-11", hoursAgo: 100, by: "Maria Santos", role: "admin", cat: "Catalog", action: "Item archived", ref: "Valve clearance", note: "Archived service: Valve clearance" },
    { id: "seed-aud-12", hoursAgo: 102, by: "Maria Santos", role: "admin", cat: "Customers", action: "Plate number edited", ref: "ABC-1243", note: "ABC-1234 \u2192 ABC-1243" },
    { id: "seed-aud-13", hoursAgo: 124, by: "Maria Santos", role: "admin", cat: "Customers", action: "Customer deleted", ref: "Pedro Reyes", note: "Deleted Pedro Reyes (2 service records)" },
    { id: "seed-aud-14", hoursAgo: 53, by: "Unknown user", role: "", cat: "Security", action: "Failed login", ref: "-", note: "Failed sign-in attempt on the Admin account." },
    { id: "seed-aud-15", hoursAgo: 75, by: "System Admin", role: "superadmin", cat: "Security", action: "Role changed", ref: "Maria Santos", note: "Maria Santos: Mechanic \u2192 Admin" }
  ];

  narrativeSamples.forEach((item) => {
    if (!D.audit.some((e) => e.id === item.id)) {
      D.audit.push({
        id: item.id,
        at: formatRelTime(item.hoursAgo),
        by: item.by,
        role: item.role,
        cat: item.cat,
        action: item.action,
        ref: item.ref,
        note: item.note
      });
    }
  });

  if (typeof save === "function") save();
}

// Seed on module initialization
seedAuditEntries();

/**
 * Shared modal for requiring a reason on sensitive Super Admin actions.
 * @param {string} title
 * @param {string} confirmLabel
 * @param {(reason: string) => void} onConfirm
 * @param {object} [opts]
 */
let _askReasonCallback = null;
let _askReasonAlertOnly = false;
function askReason(title, confirmLabel, onConfirm, opts = {}) {
  _askReasonCallback = onConfirm;
  _askReasonAlertOnly = Boolean(opts.alertOnly);
  const md = $("pos-void-md");
  const ov = $("pos-void-ov");
  if (!md || !ov) return;

  const placeholder = opts.placeholder || "Enter reason...";
  const description = opts.description || "";
  const isDestructive = opts.destructive !== false;

  md.innerHTML = `
    <div style="padding:18px 20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid var(--border);padding-bottom:10px">
        <h3 id="pos-void-modal-title" style="margin:0;font-size:16px;color:var(--text);display:flex;align-items:center;gap:6px">
          ${escHtml(title)}
        </h3>
        <button type="button" class="search-clear visible" onclick="closeReasonModal()" style="position:static" title="Close">✕</button>
      </div>
      ${description ? `<p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${description}</p>` : ""}
      ${!_askReasonAlertOnly ? `
        <div style="margin-bottom:12px">
          <label for="modal-reason-input" style="display:block;font-size:12px;font-weight:600;margin-bottom:4px;color:var(--text-secondary)">Reason (required):</label>
          <input
            id="modal-reason-input"
            type="text"
            placeholder="${escHtml(placeholder)}"
            style="width:100%;height:40px;border-radius:8px;border:1px solid var(--border);padding:0 10px;box-sizing:border-box;font-size:13px;outline:none"
            onkeydown="if(event.key==='Enter'){event.preventDefault();submitReason();}"
          />
          <div id="modal-reason-err" style="color:var(--danger, #DC2626);font-size:12px;font-weight:600;margin-top:4px;display:none">Please enter a reason.</div>
        </div>
      ` : ""}
      <div style="display:flex;justify-content:flex-end;gap:8px">
        ${!_askReasonAlertOnly ? `<button type="button" class="btn g" onclick="closeReasonModal()" style="min-height:40px">Cancel</button>` : ""}
        <button type="button" class="btn ${isDestructive && !_askReasonAlertOnly ? "btn-destructive" : ""}" style="${isDestructive && !_askReasonAlertOnly ? "background:#ffffff;color:var(--danger, #dc2626);border:1px solid var(--danger-border, #fca5a5);min-height:40px;" : "min-height:40px;"}" onclick="submitReason()">${escHtml(confirmLabel || "Confirm")}</button>
      </div>
    </div>
  `;

  ov.classList.add("on");
  ov.focus();
  setTimeout(() => {
    const inp = $("modal-reason-input");
    if (inp) inp.focus();
  }, 50);
}

function closeReasonModal() {
  const ov = $("pos-void-ov");
  if (ov) ov.classList.remove("on");
  _askReasonCallback = null;
  _askReasonAlertOnly = false;
}

function submitReason() {
  if (_askReasonAlertOnly) {
    const cb = _askReasonCallback;
    closeReasonModal();
    if (cb) cb();
    return;
  }
  const inp = $("modal-reason-input");
  const err = $("modal-reason-err");
  const val = inp ? inp.value.trim() : "";
  if (!val) {
    if (err) err.style.display = "block";
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  const cb = _askReasonCallback;
  closeReasonModal();
  if (typeof cb === "function") {
    cb(val);
  }
}

/**
 * Checks whether a work order is countable (not reversed and not cancelled).
 * @param {object} o - Work order object.
 * @returns {boolean}
 */
function isCountableJob(o) {
  if (!o) return false;
  if (o.reversed || o.st === "Cancelled" || o.cancel) return false;
  return true;
}

/**
 * Checks whether an order object represents a Quick Labor record.
 * @param {object} o
 * @returns {boolean}
 */

/**
 * Computes avatar initials from a display name (e.g. "Shop Owner" -> "SO", "Mike" -> "M").
 * @param {string} name - User display name.
 * @returns {string} 1 or 2 letter uppercase initials.
 */
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Returns inline SVG markup for a given role icon tile.
 * @param {string} role - System role key.
 * @returns {string} SVG markup string.
 */
/**
 * Formats user role for dropdown lists and switchers.
 * Mechanics show "Mechanic · {name}" to differentiate between accounts.
 * @param {Object} u - User record.
 * @returns {string} Formatted label.
 */
function getUserRoleLabel(u) {
  if (!u) return "";
  const roleKey = typeof u === "string" ? u : (u.role || u.activeRole || "");
  if (!roleKey) return "";
  const meta = ROLES[roleKey] || { label: roleKey };
  if (roleKey === "mechanic" && typeof u === "object" && u && u.name) {
    return `${meta.label} · ${u.name}`;
  }
  return (meta && meta.label) || roleKey;
}

function getRoleIconSvg(role) {
  if (role === "superadmin") {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polygon points="18 4 19 6.5 21.5 6.5 19.5 8 20.3 10.5 18 9 15.7 10.5 16.5 8 14.5 6.5 17 6.5"></polygon></svg>`;
  }
  if (role === "admin") {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18M4 18l2-10 5 5 5-5 2 10H4z"></path></svg>`;
  }
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
}

/* ==========================================================
   SIDEBAR TOGGLE & DRAWER NAVIGATION
   ========================================================== */

/** Single viewport width breakpoint (px) between tablet/phone drawer and laptop docked sidebar. */
const SIDEBAR_BREAKPOINT = 900;

/**
 * Desktop sidebar state ("open" or "collapsed"), persisted under "moto1_sidebar".
 */
let desktopSidebarState = "open";
try {
  const savedSidebar = localStorage.getItem("moto1_sidebar");
  desktopSidebarState = savedSidebar === "collapsed" ? "collapsed" : "open";
} catch (e) {}

/** Drawer visibility state for tablet and phone widths (< 900px). Not saved to localStorage. */
let mobileDrawerOpen = false;

/** Tracks last resolved layout mode so breakpoint crossings close orphaned account popups. */
let _lastDesktopSidebarMode = null;

/** Collapsed accordion group ids for phone width (<= 640px). */
const appCollapsedGroups = new Set();

/** Media query matcher for laptop/desktop layout (>= 900px). */
const sidebarDesktopMQ =
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(`(min-width: ${SIDEBAR_BREAKPOINT}px)`)
    : null;

/** Media query matcher for phone accordion menu (<= 640px). */
const appPhoneMQ =
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(max-width: 640px)")
    : { matches: false };

/**
 * Returns true when viewport is >= SIDEBAR_BREAKPOINT and not forced into a mobile preview frame.
 * @returns {boolean}
 */
function isDesktopSidebarMode() {
  if (typeof document !== "undefined") {
    const html = document.documentElement;
    const body = document.body;
    if (
      (html && (html.classList.contains("mobile-ui") || html.classList.contains("phone-frame") || html.hasAttribute("data-mobile"))) ||
      (body && (body.classList.contains("is-mobile") || body.classList.contains("mobile-ui") || body.classList.contains("phone-frame") || body.hasAttribute("data-mobile")))
    ) {
      return false;
    }
  }
  if (typeof window !== "undefined") {
    if (typeof window.matchMedia === "function") {
      return window.matchMedia(`(min-width: ${SIDEBAR_BREAKPOINT}px)`).matches;
    }
    return window.innerWidth >= SIDEBAR_BREAKPOINT;
  }
  return true;
}

/**
 * Moves the single Switch account and user profile controls between the laptop header
 * and the mobile/tablet drawer footer without duplicating DOM ids or listeners.
 * @param {boolean} isDesktop
 */
function syncAccountControlsPlacement(isDesktop) {
  const headerRight = $("app-header-right");
  const drawerFooter = $("app-drawer-footer");
  const switcher = $("sidebar-account-switcher");
  const userBlock = $("sidebar-user");
  if (!switcher || !userBlock) return;

  const target = isDesktop ? headerRight : drawerFooter;
  if (!target) return;

  if (switcher.parentNode !== target) {
    target.appendChild(switcher);
  }
  if (userBlock.parentNode !== target) {
    target.appendChild(userBlock);
  }
}

/**
 * Syncs layout mode between docked laptop sidebar (>= 900px) and overlay drawer (< 900px).
 * Clears stale drawer/scroll-lock state on desktop and places controls in the right slot.
 */
function syncSidebarMode() {
  const isDesktop = isDesktopSidebarMode();
  const crossedBreakpoint = _lastDesktopSidebarMode !== null && _lastDesktopSidebarMode !== isDesktop;
  _lastDesktopSidebarMode = isDesktop;

  if (crossedBreakpoint) {
    closeAccountSwitcher();
  }

  const sidebar = $("sidebar");
  const headerBtn = $("app-menu-btn");
  const menuBtn = $("btn-mobile-menu");
  const scrim = $("app-scrim");

  if (isDesktop) {
    const hadDrawerLock =
      mobileDrawerOpen ||
      (document.body && (document.body.classList.contains("drawer-open") || document.body.classList.contains("app-drawer-open") || document.body.classList.contains("resp-scroll-locked"))) ||
      (document.documentElement && document.documentElement.classList.contains("resp-scroll-locked"));

    mobileDrawerOpen = false;
    if (hadDrawerLock) {
      if (document.documentElement) {
        document.documentElement.classList.remove("resp-scroll-locked");
      }
      if (document.body) {
        document.body.classList.remove("drawer-open", "app-drawer-open", "resp-scroll-locked");
        document.body.style.overflow = "";
      }
    }
    if (headerBtn) {
      headerBtn.setAttribute("aria-expanded", "false");
      headerBtn.setAttribute("aria-label", "Main menu");
      headerBtn.title = "Main menu";
    }
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
    }
    if (scrim) {
      scrim.setAttribute("aria-hidden", "true");
    }
    if (sidebar) {
      sidebar.setAttribute("aria-hidden", "false");
    }

    const isCollapsed = desktopSidebarState === "collapsed";
    if (document.documentElement) {
      document.documentElement.classList.toggle("sidebar--collapsed", isCollapsed);
    }
    if (document.body) {
      document.body.classList.toggle("sidebar--collapsed", isCollapsed);
    }
  } else {
    if (document.documentElement) {
      document.documentElement.classList.remove("sidebar--collapsed");
    }
    if (document.body) {
      document.body.classList.remove("sidebar--collapsed");
    }
    if (sidebar) {
      sidebar.setAttribute("aria-hidden", mobileDrawerOpen ? "false" : "true");
    }
  }

  syncAccountControlsPlacement(isDesktop);
  updateAppHeaderBottomVar();
  updateSidebarToggleUI();
  syncAppGroups();
  adjustSidebarPopupPosition();
}

/**
 * Toggles the docked laptop sidebar between expanded width and collapsed icon rail,
 * persisting the preference under "moto1_sidebar".
 */
function toggleDesktopSidebar() {
  if (!isDesktopSidebarMode()) {
    toggleAppDrawer();
    return;
  }
  desktopSidebarState = desktopSidebarState === "collapsed" ? "open" : "collapsed";
  const isCollapsed = desktopSidebarState === "collapsed";

  if (document.documentElement) {
    document.documentElement.classList.toggle("sidebar--collapsed", isCollapsed);
  }
  if (document.body) {
    document.body.classList.toggle("sidebar--collapsed", isCollapsed);
  }

  try {
    localStorage.setItem("moto1_sidebar", desktopSidebarState);
  } catch (e) {}

  updateSidebarToggleUI();
  adjustSidebarPopupPosition();
}

/**
 * Syncs --app-header-bottom CSS variable to the real rendered bottom edge of #app-header.
 */
function updateAppHeaderBottomVar() {
  if (typeof document === "undefined" || !document.documentElement) return;
  const headerEl = $("app-header");
  if (!headerEl || !headerEl.getBoundingClientRect) return;
  const rect = headerEl.getBoundingClientRect();
  if (rect && rect.bottom > 0) {
    document.documentElement.style.setProperty("--app-header-bottom", Math.round(rect.bottom) + "px");
  } else {
    document.documentElement.style.removeProperty("--app-header-bottom");
  }
}

/**
 * Syncs accordion group headings and items with appCollapsedGroups on phone width,
 * and ensures plain non-focusable headings / expanded items on wider screens.
 */
function syncAppGroups() {
  const sidebar = $("sidebar");
  if (!sidebar) return;

  const isPhone = !isDesktopSidebarMode() && !!(appPhoneMQ && appPhoneMQ.matches);
  const heads = sidebar.querySelectorAll("[data-group-head]");
  const items = sidebar.querySelectorAll("[data-group]");

  heads.forEach((head) => {
    const gid = head.getAttribute("data-group-head");
    const isHidden = head.style.display === "none";
    if (!isPhone || isHidden) {
      head.classList.remove("is-open");
      head.removeAttribute("role");
      head.removeAttribute("tabindex");
      head.removeAttribute("aria-expanded");
    } else {
      const isOpen = !appCollapsedGroups.has(gid);
      head.classList.toggle("is-open", isOpen);
      head.setAttribute("role", "button");
      head.setAttribute("tabindex", "0");
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  });

  items.forEach((item) => {
    const gid = item.getAttribute("data-group");
    if (!isPhone) {
      item.classList.remove("is-group-collapsed");
    } else {
      item.classList.toggle("is-group-collapsed", appCollapsedGroups.has(gid));
    }
  });
}

/**
 * Toggles an accordion nav group by id and re-syncs DOM classes/attributes.
 * @param {string} id - Group id ("primary" or "admin").
 */
function toggleAppGroup(id) {
  if (!id) return;
  if (appCollapsedGroups.has(id)) {
    appCollapsedGroups.delete(id);
  } else {
    appCollapsedGroups.add(id);
  }
  syncAppGroups();
}

/**
 * Expands only the nav group containing the active route (or the first visible group)
 * and collapses all other groups when opening on phone width.
 */
function resetAppGroupsForOpen() {
  const sidebar = $("sidebar");
  if (!sidebar) return;

  const heads = Array.from(sidebar.querySelectorAll("[data-group-head]")).filter(
    (el) => el.style.display !== "none"
  );
  const groupIds = heads.map((el) => el.getAttribute("data-group-head")).filter(Boolean);
  if (!groupIds.length) return;

  const activeItem = sidebar.querySelector("[data-group].on");
  const activeGroup = activeItem ? activeItem.getAttribute("data-group") : "";
  const expandedId = activeGroup && groupIds.includes(activeGroup) ? activeGroup : groupIds[0];

  appCollapsedGroups.clear();
  groupIds.forEach((gid) => {
    if (gid !== expandedId) {
      appCollapsedGroups.add(gid);
    }
  });
  syncAppGroups();
}

/**
 * Updates the sidebar toggle button icon, title, and aria attributes
 * for docked laptop collapse/expand (>= 900px) or drawer close (< 900px).
 */
function updateSidebarToggleUI() {
  const toggleBtn = $("btn-sidebar-toggle");
  if (!toggleBtn) return;

  if (isDesktopSidebarMode()) {
    const isCollapsed = desktopSidebarState === "collapsed";
    const label = isCollapsed ? "Expand sidebar" : "Collapse sidebar";
    toggleBtn.title = label;
    toggleBtn.setAttribute("aria-label", label);
    toggleBtn.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
    toggleBtn.innerHTML = isCollapsed ? ICONS.panelExpand : ICONS.panelCollapse;
    return;
  }

  toggleBtn.title = "Close menu";
  toggleBtn.setAttribute("aria-label", "Close menu");
  toggleBtn.setAttribute("aria-expanded", mobileDrawerOpen ? "true" : "false");
  toggleBtn.innerHTML = ICONS.close;
}

/**
 * Opens the slide-in navigation drawer, shows the dim scrim, and locks background scrolling
 * on tablet and phone viewports (< 900px). Ignored in laptop mode.
 */
function openAppDrawer() {
  if (isDesktopSidebarMode() || mobileDrawerOpen) return;
  const isPhone = !!(appPhoneMQ && appPhoneMQ.matches);

  if (isPhone) {
    updateAppHeaderBottomVar();
    resetAppGroupsForOpen();
  }

  mobileDrawerOpen = true;

  if (document.documentElement) {
    document.documentElement.classList.add("resp-scroll-locked");
  }
  if (document.body) {
    document.body.classList.add("drawer-open", "app-drawer-open", "resp-scroll-locked");
    document.body.style.overflow = "hidden";
  }

  const headerBtn = $("app-menu-btn");
  if (headerBtn) {
    headerBtn.setAttribute("aria-expanded", "true");
    if (isPhone) {
      headerBtn.setAttribute("aria-label", "Close menu");
      headerBtn.title = "Close menu";
    }
  }

  const menuBtn = $("btn-mobile-menu");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");

  const sidebar = $("sidebar");
  if (sidebar) sidebar.setAttribute("aria-hidden", "false");

  const scrim = $("app-scrim");
  if (scrim) scrim.setAttribute("aria-hidden", "false");

  updateSidebarToggleUI();

  if (isPhone) {
    setTimeout(() => {
      try {
        const firstHead = sidebar
          ? Array.from(sidebar.querySelectorAll("[data-group-head]")).find((el) => el.style.display !== "none")
          : null;
        if (firstHead) firstHead.focus();
      } catch (e) {}
    }, 50);
  } else {
    const toggleBtn = $("btn-sidebar-toggle");
    if (toggleBtn) {
      setTimeout(() => {
        try { toggleBtn.focus(); } catch (e) {}
      }, 50);
    }
  }
}

/**
 * Closes the slide-in navigation drawer, hides the scrim, unlocks background scrolling,
 * and restores focus to the header menu button unless restoreFocus is false.
 * @param {{ restoreFocus?: boolean }} [opts]
 */
function closeAppDrawer(opts) {
  closeAccountSwitcher();
  if (!mobileDrawerOpen) return;
  mobileDrawerOpen = false;

  if (document.documentElement) {
    document.documentElement.classList.remove("resp-scroll-locked");
  }
  if (document.body) {
    document.body.classList.remove("drawer-open", "app-drawer-open", "resp-scroll-locked");
    document.body.style.overflow = "";
  }

  const headerBtn = $("app-menu-btn");
  if (headerBtn) {
    headerBtn.setAttribute("aria-expanded", "false");
    headerBtn.setAttribute("aria-label", "Main menu");
    headerBtn.title = "Main menu";
  }

  const menuBtn = $("btn-mobile-menu");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");

  const shouldRestore = !opts || opts.restoreFocus !== false;
  if (shouldRestore) {
    const focusTarget = headerBtn && headerBtn.offsetParent !== null ? headerBtn : menuBtn;
    if (focusTarget) {
      try { focusTarget.focus(); } catch (e) {}
    }
  }

  const sidebar = $("sidebar");
  if (sidebar) sidebar.setAttribute("aria-hidden", "true");

  const scrim = $("app-scrim");
  if (scrim) scrim.setAttribute("aria-hidden", "true");

  updateSidebarToggleUI();
}

/**
 * Toggles the slide-in navigation drawer open or closed.
 */
function toggleAppDrawer() {
  if (mobileDrawerOpen) {
    closeAppDrawer();
  } else {
    openAppDrawer();
  }
}

/**
 * Toggles the docked sidebar on laptop (>= 900px) or the overlay drawer under 900px.
 */
function toggleSidebar() {
  if (isDesktopSidebarMode()) {
    toggleDesktopSidebar();
  } else {
    toggleAppDrawer();
  }
}

/**
 * Opens slide-in navigation drawer and locks page scrolling.
 */
function openSidebarDrawer() {
  openAppDrawer();
}

/**
 * Closes slide-in navigation drawer and unlocks page scrolling.
 * @param {{ restoreFocus?: boolean }} [opts]
 */
function closeSidebarDrawer(opts) {
  closeAppDrawer(opts);
}

/**
 * Handles click on the sidebar toggle button (collapse/expand on laptop, close drawer under 900px).
 */
function handleSidebarToggleClick() {
  if (isDesktopSidebarMode()) {
    toggleDesktopSidebar();
  } else {
    closeAppDrawer();
  }
}

/**
 * Traps Tab focus inside the navigation drawer while it is open under 900px.
 * @param {KeyboardEvent} e
 */
function trapDrawerFocus(e) {
  if (!mobileDrawerOpen || isDesktopSidebarMode() || typeof window === "undefined") return;
  if (e.key !== "Tab") return;

  const sidebar = $("sidebar");
  if (!sidebar) return;

  const rawFocusable = sidebar.querySelectorAll(
    '[data-group-head][tabindex="0"], button:not([disabled]):not([style*="display: none"]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  const focusable = Array.from(rawFocusable).filter((el) => {
    const cs = window.getComputedStyle ? window.getComputedStyle(el) : null;
    if (cs && (cs.display === "none" || cs.visibility === "hidden")) return false;
    return el.getClientRects && el.getClientRects().length > 0;
  });
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first || !sidebar.contains(document.activeElement)) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last || !sidebar.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    }
  }
}

/**
 * Handles window resize across viewport widths and re-syncs docked/drawer sidebar mode.
 */
let lastWindowWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
function handleWindowResize() {
  if (typeof window === "undefined") return;
  const currentWidth = window.innerWidth;
  lastWindowWidth = currentWidth;
  syncSidebarMode();
}
if (typeof window !== "undefined") {
  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawerOpen) {
      const popup = $("sidebar-account-popup");
      if (popup && popup.style.display !== "none") return;
      closeAppDrawer();
    }
  });

  // matchMedia change listener for the single 900px sidebar breakpoint (bound once)
  if (sidebarDesktopMQ && !sidebarDesktopMQ._boundDesktopChange) {
    sidebarDesktopMQ._boundDesktopChange = true;
    const handleDesktopBreakpointChange = () => {
      syncSidebarMode();
    };
    if (typeof sidebarDesktopMQ.addEventListener === "function") {
      sidebarDesktopMQ.addEventListener("change", handleDesktopBreakpointChange);
    } else if (typeof sidebarDesktopMQ.addListener === "function") {
      sidebarDesktopMQ.addListener(handleDesktopBreakpointChange);
    }
  }

  if (appPhoneMQ && !appPhoneMQ._boundPhoneChange) {
    appPhoneMQ._boundPhoneChange = true;
    const handlePhoneBreakpointChange = () => {
      if (!isDesktopSidebarMode()) {
        closeAppDrawer({ restoreFocus: false });
      }
      const sidebar = $("sidebar");
      if (sidebar) {
        sidebar.querySelectorAll(".is-group-collapsed").forEach((el) => el.classList.remove("is-group-collapsed"));
        sidebar.querySelectorAll(".is-open").forEach((el) => el.classList.remove("is-open"));
      }
      appCollapsedGroups.clear();
      syncSidebarMode();
    };
    if (typeof appPhoneMQ.addEventListener === "function") {
      appPhoneMQ.addEventListener("change", handlePhoneBreakpointChange);
    } else if (typeof appPhoneMQ.addListener === "function") {
      appPhoneMQ.addListener(handlePhoneBreakpointChange);
    }
  }
}

/**
 * Renders the sidebar user profile block based on the active user.
 */
function renderSidebarUser() {
  const u = getCurrentUser();
  if (!u) return;

  const shownName = displayUserName(u.name);
  const avEl = $("user-av");
  if (avEl) avEl.textContent = getInitials(shownName);

  const nameEl = $("user-name");
  if (nameEl) nameEl.textContent = shownName;

  const roleEl = $("user-role");
  const roleMeta = ROLES[u.activeRole] || { label: u.activeRole };
  if (roleEl) roleEl.textContent = roleMeta.label;
}

/**
 * Smart sidebar account switcher popup positioner.
 * In laptop mode (>= 900px), opens below the header Switch account button, right-aligned (~280px), clamped inside the viewport.
 * Under 900px, opens inside/over the drawer anchored to the button.
 */
function adjustSidebarPopupPosition() {
  const popup = $("sidebar-account-popup");
  const btn = $("btn-switch-account");
  if (!popup || popup.style.display === "none" || !btn) return;

  const winW = typeof window !== "undefined" ? window.innerWidth : 1024;
  const winH = typeof window !== "undefined" ? window.innerHeight : 800;

  // Measure natural scroll height capped at 320px
  popup.style.maxHeight = "320px";
  const naturalH = Math.min(320, popup.scrollHeight || 260);

  const rect = btn.getBoundingClientRect();
  popup.style.position = "fixed";
  popup.style.right = "auto";
  popup.style.zIndex = "260";

  if (isDesktopSidebarMode()) {
    const popupW = Math.min(280, Math.max(200, winW - 24));
    let leftPos = Math.round(rect.right - popupW);
    leftPos = Math.max(12, Math.min(leftPos, winW - popupW - 12));
    popup.style.left = leftPos + "px";
    popup.style.width = popupW + "px";
  } else {
    popup.style.left = Math.round(rect.left) + "px";
    popup.style.width = Math.round(rect.width) + "px";
  }

  // Available vertical space
  const spaceBelow = Math.max(0, winH - rect.bottom - 12);
  const spaceAbove = Math.max(0, rect.top - 12);

  let dir = "down";
  let availH = naturalH;

  if (spaceBelow >= naturalH) {
    dir = "down";
    availH = naturalH;
  } else if (spaceAbove >= naturalH) {
    dir = "up";
    availH = naturalH;
  } else if (spaceBelow >= spaceAbove) {
    dir = "down";
    availH = spaceBelow;
  } else {
    dir = "up";
    availH = spaceAbove;
  }

  if (dir === "down") {
    popup.style.top = Math.round(rect.bottom + 6) + "px";
    popup.style.bottom = "auto";
    popup.style.maxHeight = Math.max(80, Math.round(availH)) + "px";
    popup.style.overflowY = "auto";
    popup.classList.remove("popup--up");
    popup.classList.add("popup--down");
    btn.setAttribute("data-popup-dir", "down");
  } else {
    popup.style.bottom = Math.round(winH - rect.top + 6) + "px";
    popup.style.top = "auto";
    popup.style.maxHeight = Math.max(80, Math.round(availH)) + "px";
    popup.style.overflowY = "auto";
    popup.classList.remove("popup--down");
    popup.classList.add("popup--up");
    btn.setAttribute("data-popup-dir", "up");
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", adjustSidebarPopupPosition, true);
  window.addEventListener("orientationchange", adjustSidebarPopupPosition);
}

/**
 * Toggles the sidebar account switcher popup list.
 */
function toggleAccountSwitcher() {
  const popup = $("sidebar-account-popup");
  const btn = $("btn-switch-account");
  if (!popup) return;
  const isCurrentlyOpen = popup.style.display !== "none";
  if (isCurrentlyOpen) {
    closeAccountSwitcher();
  } else {
    renderSidebarAccountPopup();
    popup.style.display = "block";
    if (btn) btn.setAttribute("aria-expanded", "true");
    adjustSidebarPopupPosition();
  }
}

/**
 * Closes the sidebar account switcher popup list.
 */
function closeAccountSwitcher() {
  const popup = $("sidebar-account-popup");
  const btn = $("btn-switch-account");
  if (popup) {
    popup.style.display = "none";
    if (popup.classList && popup.classList.remove) {
      popup.classList.remove("popup--up");
      popup.classList.remove("popup--down");
    }
  }
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    if (typeof btn.removeAttribute === "function") {
      btn.removeAttribute("data-popup-dir");
    } else {
      delete btn["data-popup-dir"];
    }
  }
}

/**
 * Keyboard navigation handler for the Switch Account button and popup listbox.
 * ArrowUp/ArrowDown cycle through accounts, Enter selects, Escape closes and returns focus to button.
 * @param {KeyboardEvent} e - Keyboard event.
 */
function handleAccountSwitcherKeydown(e) {
  const popup = $("sidebar-account-popup");
  const btn = $("btn-switch-account");
  const isOpen = popup && popup.style.display !== "none";

  if (e.key === "Escape") {
    if (isOpen) {
      e.preventDefault();
      e.stopPropagation();
      closeAccountSwitcher();
      if (btn) btn.focus();
    }
    return;
  }

  if (!isOpen) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccountSwitcher();
      const items = popup ? popup.querySelectorAll(".sidebar-acc-item") : [];
      if (items.length > 0) {
        const active = popup.querySelector('.sidebar-acc-item[aria-selected="true"]') || items[0];
        active.focus();
      }
    }
    return;
  }

  const items = Array.from(popup ? popup.querySelectorAll(".sidebar-acc-item") : []);
  if (!items.length) return;
  const currentIdx = items.indexOf(document.activeElement);

  if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextIdx = currentIdx < items.length - 1 ? currentIdx + 1 : 0;
    items[nextIdx].focus();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    const prevIdx = currentIdx > 0 ? currentIdx - 1 : items.length - 1;
    items[prevIdx].focus();
  } else if (e.key === "Home") {
    e.preventDefault();
    items[0].focus();
  } else if (e.key === "End") {
    e.preventDefault();
    items[items.length - 1].focus();
  } else if (e.key === "Enter" || e.key === " ") {
    if (currentIdx >= 0) {
      e.preventDefault();
      items[currentIdx].click();
    }
  } else if (e.key === "Tab") {
    closeAccountSwitcher();
  }
}

/**
 * Renders the saved accounts in the sidebar account switcher popup.
 * Active account is marked with a checkmark.
 */
function renderSidebarAccountPopup() {
  const popup = $("sidebar-account-popup");
  if (!popup) return;

  const users = loadUsers().filter((u) => u.active !== false);
  const current = getCurrentUser();
  const currentId = current ? current.id : null;

  let html = `<div class="sidebar-acc-header">SWITCH ACCOUNT</div>`;

  html += users
    .map((u, idx) => {
      const isCurrent = u.id === currentId;
      return `
        <div
          id="acc-opt-${idx}"
          class="sidebar-acc-item"
          role="option"
          aria-selected="${isCurrent ? "true" : "false"}"
          tabindex="0"
          onclick="switchAccount('${u.id}')"
          onkeydown="if(event.key==='Enter'||event.key===' ')switchAccount('${u.id}')"
        >
          <div class="role-tile sm ${u.role}">
            ${getRoleIconSvg(u.role)}
          </div>
          <div class="sidebar-acc-info">
            <span class="sidebar-acc-email">${u.email}</span>
            <span class="sidebar-acc-role">${getUserRoleLabel(u)}</span>
          </div>
          ${
            isCurrent
              ? `<span class="sidebar-acc-check" title="Active account">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  popup.innerHTML = html;
}

/**
 * Switches active user to target account immediately without logout or reload.
 * Updates lastLogin, persists to "moto1_session", refreshes sidebar profile, and checks page access.
 * @param {string} userId - Target account ID.
 */
function switchAccount(userId) {
  const users = loadUsers();
  const target = users.find((u) => u.id === userId);
  if (!target || target.active === false) return;

  const prevUser = getCurrentUser();

  target.lastLogin = nowLocalTimestamp();
  saveUsers(users);

  const allowed = getRoleNav(target.role);
  const targetView = allowed.includes(view) ? view : (allowed.includes("dash") ? "dash" : (allowed[0] || ""));

  saveSession({
    userId: target.id,
    role: target.role,
    view: targetView,
    at: Date.now()
  });

  closeAccountSwitcher();
  syncViewForRole();
}

/** Active index in the filtered accounts dropdown for keyboard navigation (-1 = no highlight). */
let loginHighlightIndex = -1;

/** Currently filtered user records displayed in the login dropdown. */
let loginFilteredUsers = [];

/**
 * Opens the login accounts dropdown and populates it.
 */
function openLoginDropdown() {
  const dd = $("login-dropdown");
  const inp = $("login-email");
  if (!dd) return;
  dd.style.display = "block";
  if (inp) inp.setAttribute("aria-expanded", "true");
  renderLoginDropdown(inp ? inp.value : "");
}

/**
 * Closes the login accounts dropdown.
 */
function closeLoginDropdown() {
  const dd = $("login-dropdown");
  const inp = $("login-email");
  if (dd) dd.style.display = "none";
  if (inp) {
    inp.setAttribute("aria-expanded", "false");
    inp.removeAttribute("aria-activedescendant");
  }
  loginHighlightIndex = -1;
}

/**
 * Renders the saved accounts dropdown list based on typed filter text.
 * @param {string} filterText - Current text in the email input.
 */
function renderLoginDropdown(filterText = "") {
  const dd = $("login-dropdown");
  if (!dd) return;

  const q = (filterText || "").trim().toLowerCase();
  const users = loadUsers().filter((u) => u.active !== false);

  const filtered = users.filter((u) => {
    if (!q) return true;
    const email = (u.email || "").toLowerCase();
    const name = displayUserName(u.name).toLowerCase();
    const roleLabel = (ROLES[u.role]?.label || u.role || "").toLowerCase();
    const label = getUserRoleLabel(u).toLowerCase();
    return email.includes(q) || name.includes(q) || roleLabel.includes(q) || label.includes(q);
  });

  loginFilteredUsers = filtered;

  if (loginHighlightIndex >= filtered.length) {
    loginHighlightIndex = filtered.length - 1;
  }

  let html = `<div class="login-dd-header">SAVED ACCOUNTS</div>`;

  if (!filtered.length) {
    html += `<div class="login-dd-empty">No saved account matches. Press Sign In to try this email.</div>`;
  } else {
    html += filtered
      .map((u, idx) => {
        const isHighlighted = idx === loginHighlightIndex;
        const roleMeta = ROLES[u.role] || { label: u.role };
        return `
          <div
            id="login-opt-${idx}"
            class="login-dd-item ${isHighlighted ? "highlighted" : ""}"
            role="option"
            aria-selected="${isHighlighted ? "true" : "false"}"
            tabindex="-1"
            onmousedown="selectLoginUser('${u.id}')"
            onclick="selectLoginUser('${u.id}')"
          >
            <div class="role-tile ${u.role}">
              ${getRoleIconSvg(u.role)}
            </div>
            <div class="login-dd-info">
              <span class="login-dd-email"><b>${escHtml(u.email)}</b></span>
              <span class="login-dd-role">${escHtml(getUserRoleLabel(u))}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  dd.innerHTML = html;
}

/**
 * Scrolls the currently highlighted dropdown item into view and updates ARIA active descendant.
 */
function scrollLoginHighlight() {
  if (loginHighlightIndex < 0) return;
  const opt = $(`login-opt-${loginHighlightIndex}`);
  if (opt && opt.scrollIntoView) {
    opt.scrollIntoView({ block: "nearest" });
  }
  const inp = $("login-email");
  if (inp) {
    inp.setAttribute("aria-activedescendant", `login-opt-${loginHighlightIndex}`);
  }
}

/**
 * Handles live input in the email field.
 * @param {string} val - Input value.
 */
function onLoginEmailInput(val) {
  const errEl = $("login-err");
  if (errEl) {
    errEl.textContent = "";
    errEl.style.display = "none";
  }
  loginHighlightIndex = -1;
  openLoginDropdown();
  renderLoginDropdown(val);
}

/**
 * Handles keyboard events on the email input for navigation and submission.
 * @param {KeyboardEvent} e - Keyboard event.
 */
function onLoginEmailKeydown(e) {
  const dd = $("login-dropdown");
  const isOpen = dd && dd.style.display !== "none";

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (!isOpen) {
      openLoginDropdown();
      return;
    }
    if (loginFilteredUsers.length > 0) {
      loginHighlightIndex = (loginHighlightIndex + 1) % loginFilteredUsers.length;
      renderLoginDropdown($("login-email")?.value || "");
      scrollLoginHighlight();
    }
    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (!isOpen) {
      openLoginDropdown();
      return;
    }
    if (loginFilteredUsers.length > 0) {
      loginHighlightIndex = (loginHighlightIndex - 1 + loginFilteredUsers.length) % loginFilteredUsers.length;
      renderLoginDropdown($("login-email")?.value || "");
      scrollLoginHighlight();
    }
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    if (isOpen && loginHighlightIndex >= 0 && loginHighlightIndex < loginFilteredUsers.length) {
      selectLoginUser(loginFilteredUsers[loginHighlightIndex].id);
    } else {
      login();
    }
    return;
  }

  if (e.key === "Escape") {
    closeLoginDropdown();
    return;
  }

  if (e.key === "Tab") {
    closeLoginDropdown();
    return;
  }
}

/**
 * Immediately logs in as the selected user account without password prompt.
 * Opens Dashboard (or first allowed page) directly.
 * @param {string} userId - User ID to sign in.
 */
function selectLoginUser(userId) {
  const users = loadUsers();
  const matched = users.find((u) => u.id === userId);
  if (!matched || matched.active === false) return;

  const errEl = $("login-err");
  if (errEl) {
    errEl.textContent = "";
    errEl.style.display = "none";
  }

  closeLoginDropdown();

  matched.lastLogin = nowLocalTimestamp();
  saveUsers(users);

  const allowed = getRoleNav(matched.role);
  const targetPage = allowed.includes("dash") ? "dash" : (allowed[0] || "");

  saveSession({
    userId: matched.id,
    role: matched.role,
    view: targetPage,
    at: Date.now()
  });

  logAudit("Login", matched.email, matched.role, "Sessions");

  if (document.documentElement) document.documentElement.classList.add("has-session");
  syncSidebarMode();
  document.body.classList.remove("logged-out");
  document.body.classList.add("logged-in");

  if (mobileDrawerOpen) {
    closeAppDrawer({ restoreFocus: false });
  }

  renderSidebarUser();
  renderNav();
  syncSidebarMode();

  if (targetPage) {
    go(targetPage);
  } else {
    view = "";
    $("main").innerHTML = renderNoAccess();
  }
}

/**
 * Signs in using the email typed into the input field.
 * Validates against saved accounts by email (case-insensitive).
 */
function login() {
  const emailEl = $("login-email");
  const errEl = $("login-err");
  const typed = (emailEl ? emailEl.value : "").trim();

  if (!typed) {
    if (errEl) {
      errEl.textContent = "Choose or type an email.";
      errEl.style.display = "block";
    }
    return;
  }

  const users = loadUsers();
  const matched = users.find(
    (u) => (u.email || "").trim().toLowerCase() === typed.toLowerCase()
  );

  if (!matched) {
    if (errEl) {
      errEl.textContent = "No account found for that email.";
      errEl.style.display = "block";
    }
    return;
  }

  if (matched.active === false) {
    if (errEl) {
      errEl.textContent = "This account is deactivated.";
      errEl.style.display = "block";
    }
    return;
  }

  if (errEl) {
    errEl.textContent = "";
    errEl.style.display = "none";
  }

  closeLoginDropdown();

  matched.lastLogin = nowLocalTimestamp();
  saveUsers(users);

  const allowed = getRoleNav(matched.role);
  const targetPage = allowed.includes("dash") ? "dash" : (allowed[0] || "");

  saveSession({
    userId: matched.id,
    role: matched.role,
    view: targetPage,
    at: Date.now()
  });

  logAudit("Login", matched.email, matched.role, "Sessions");

  if (document.documentElement) document.documentElement.classList.add("has-session");
  syncSidebarMode();
  document.body.classList.remove("logged-out");
  document.body.classList.add("logged-in");

  if (mobileDrawerOpen) {
    closeAppDrawer({ restoreFocus: false });
  }

  renderSidebarUser();
  renderNav();
  syncSidebarMode();

  if (targetPage) {
    go(targetPage);
  } else {
    view = "";
    $("main").innerHTML = renderNoAccess();
  }
}

/**
 * Logs out the current user, clears the active session, clears hash, and shows the login screen.
 */
function logout() {
  const u = getCurrentUser();
  if (u) {
    logAudit("Logout", u.email, u.activeRole || u.role, "Sessions");
  }
  clearSession();
  view = "dash";

  // Clear URL hash
  if (typeof window !== "undefined" && window.location && window.location.hash) {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", (window.location.pathname || "") + (window.location.search || ""));
    } else {
      window.location.hash = "";
    }
  }

  hisSearch = "";
  hisDate = "all";
  hisMech = "all";
  hisFrom = "";
  hisTo = "";
  if (typeof resetInspDraft === "function") {
    resetInspDraft();
  }
  if (typeof resetPosState === "function") {
    resetPosState();
  }
  if (typeof resetQuickLaborState === "function") {
    resetQuickLaborState();
  }

  if (document.documentElement) document.documentElement.classList.remove("has-session");
  document.body.classList.remove("logged-in");
  document.body.classList.add("logged-out");

  if (mobileDrawerOpen) {
    closeAppDrawer({ restoreFocus: false });
  }

  closeAccountSwitcher();
  syncSidebarMode();

  const emailEl = $("login-email");
  const errEl = $("login-err");

  if (emailEl) emailEl.value = "";
  if (errEl) {
    errEl.textContent = "";
    errEl.style.display = "none";
  }

  if (emailEl) {
    emailEl.focus();
    openLoginDropdown();
  }
}

/**
 * Renders a placeholder card in the main area when the active role has no accessible pages.
 * @returns {string} HTML string.
 */
function renderNoAccess() {
  const u = getCurrentUser();
  const name = u ? escHtml(displayUserName(u.name)) : "User";
  const roleLabel = u && ROLES[u.activeRole] ? ROLES[u.activeRole].label : "Workspace";
  return `<div class="card no-access-card"><div style="display:flex;justify-content:center;margin-bottom:12px;color:var(--text-muted)">${ICONS.lock24}</div><h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:var(--text)">Welcome, ${name}</h1><p style="margin:0;font-size:14px;color:var(--text-muted);line-height:1.5">Your ${roleLabel} workspace isn't set up yet. Navigation for this role will be added soon.</p></div>`;
}

/**
 * Synchronizes view and navigation with the active role permissions.
 * Switches to the first allowed page or displays the placeholder if none are accessible.
 */
function syncViewForRole() {
  const u = getCurrentUser();
  if (!u) {
    document.body.classList.remove("logged-in");
    document.body.classList.add("logged-out");
    closeAccountSwitcher();
    syncSidebarMode();
    const emailEl = $("login-email");
    if (emailEl) openLoginDropdown();
    return;
  }

  if (mobileDrawerOpen) {
    closeAppDrawer({ restoreFocus: false });
  }

  renderSidebarUser();
  renderNav();
  syncSidebarMode();

  const allowed = getRoleNav(u.activeRole);
  if (allowed.length > 0) {
    if (!allowed.includes(view)) {
      if (view === "qlabor" && (allowed.includes("pos") || allowed.includes("ql"))) {
        go("pos");
      } else if (allowed.includes("dash")) {
        go("dash");
      } else {
        go(allowed[0]);
      }
    } else {
      go(view);
    }
  } else {
    view = "";
    $("main").innerHTML = renderNoAccess();
  }
}

// Global click-outside & accordion group heading delegated listener
document.addEventListener("click", (e) => {
  const groupHead = e.target && e.target.closest ? e.target.closest("#sidebar [data-group-head]") : null;
  if (groupHead) {
    if (!isDesktopSidebarMode() && appPhoneMQ && appPhoneMQ.matches) {
      const gid = groupHead.getAttribute("data-group-head");
      if (gid) toggleAppGroup(gid);
    }
    return;
  }

  const loginWrap = document.querySelector(".login-input-wrap");
  const loginInp = $("login-email");
  const loginDd = $("login-dropdown");

  const clickedInsideLogin =
    (loginWrap && loginWrap.contains(e.target)) ||
    (loginInp && loginInp.contains(e.target)) ||
    (loginDd && loginDd.contains(e.target));

  if (!clickedInsideLogin) {
    closeLoginDropdown();
  }

  const switcher = $("sidebar-account-switcher");
  const popup = $("sidebar-account-popup");
  if (
    popup &&
    popup.style.display !== "none" &&
    !popup.contains(e.target) &&
    (!switcher || !switcher.contains(e.target))
  ) {
    closeAccountSwitcher();
  }

  // Close item suggestion dropdowns when clicking outside
  if (!e.target.closest || !e.target.closest(".item-input-group.name-group")) {
    document.querySelectorAll(".item-suggestions-dropdown").forEach((el) => {
      el.style.display = "none";
    });
  }
});

// Global keydown listener for focus trap, phone group accordion, Escape, and Ctrl+B / Cmd+B drawer toggle
document.addEventListener("keydown", (e) => {
  trapDrawerFocus(e);

  if ((e.key === "Enter" || e.key === " ") && !isDesktopSidebarMode() && appPhoneMQ && appPhoneMQ.matches) {
    const activeEl = document.activeElement;
    const groupHead = activeEl && activeEl.closest ? activeEl.closest("#sidebar [data-group-head]") : null;
    if (groupHead) {
      e.preventDefault();
      const gid = groupHead.getAttribute("data-group-head");
      if (gid) toggleAppGroup(gid);
      return;
    }
  }

  if (e.key === "Escape") {
    const popup = $("sidebar-account-popup");
    if (popup && popup.style.display !== "none") {
      closeAccountSwitcher();
      const btn = $("btn-switch-account");
      if (btn) btn.focus();
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    if (mobileDrawerOpen) {
      closeAppDrawer();
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
  }

  // Ctrl+B (or Cmd+B) toggles laptop docked sidebar or mobile drawer when logged in, ignored while typing
  if ((e.ctrlKey || e.metaKey) && (e.key === "b" || e.key === "B")) {
    const el = document.activeElement;
    const tag = el ? (el.tagName || "").toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (el && el.isContentEditable) return;
    if (document.body && document.body.classList.contains("logged-in")) {
      e.preventDefault();
      toggleSidebar();
    }
  }
});

/* ==========================================================
   4. DATA LOOKUPS
   ========================================================== */

/**
 * Short for "get". Generic lookup finder for any collection in D by record id.
 * @param {string} a - Collection key in D (e.g. "bk", "cu", "pt", "sv", "wo").
 * @param {string} id - The ID of the item to retrieve.
 * @returns {Object|undefined} The matching record or undefined.
 */
const g = (a, id) => D[a].find((x) => x.id === id);

/**
 * Retrieves a motorcycle record by ID.
 * @param {string} id - The motorcycle ID.
 * @returns {Object|undefined} Motorcycle record.
 */
const bike = (id) => g("bk", id);

/**
 * Retrieves the customer record who owns the specified motorcycle.
 * @param {Object} b - Motorcycle record object containing cid.
 * @returns {Object|undefined} Customer record.
 */
const own = (b) => g("cu", b.cid);

/* ==========================================================
   5. BILLING CALCULATIONS
   ========================================================== */

/**
 * Calculates itemized billing line items for a work order or service array.
 * If o.items exists, lines come from items (kind 'labor' and 'part') plus o.extra.
 * Line items with src 'own' have price 0 and amount 0 with label "Customer's own part".
 * Otherwise, legacy service package logic applies for orders with sv.
 * @param {Object} o - Work order object.
 * @returns {Array<{n: string, a: number, kind: string, qty?: number, price?: number, rawName?: string, src?: string}>} Array of line items.
 */
function lines(o) {
  if (!o) return [];
  const L = [];

  // 1. Recommended Services & Items from Inspection / Job Order
  if (Array.isArray(o.items) && o.items.length) {
    o.items.forEach((item) => {
      const qty = Math.max(1, Number(item.qty) || 1);
      const isOwn = item.src === "own";
      const price = isOwn ? 0 : Math.max(0, Number(item.price) || 0);
      const isLabor = item.kind === "labor";
      let label = item.name + (qty > 1 ? ` (×${qty})` : "");
      if (isOwn) {
        label += " (Customer's own part)";
      } else if (isLabor) {
        label += " (labor)";
      }
      L.push({
        n: label,
        a: isOwn ? 0 : (qty * price),
        kind: isLabor ? "labor" : "part",
        qty: qty,
        price: price,
        rawName: item.name,
        src: item.src || "shop",
        done: !!item.done
      });
    });
  }

  // 2. Extra Items / Fluids Logged during In Repair Stage
  if (Array.isArray(o.extra) && o.extra.length) {
    o.extra.forEach((item) => {
      const qty = Math.max(1, Number(item.qty) || 1);
      const isOwn = item.src === "own";
      const price = isOwn ? 0 : Math.max(0, Number(item.price) || 0);
      const isLabor = item.kind === "labor";
      let label = item.name + (qty > 1 ? ` (×${qty})` : "");
      if (isOwn) {
        label += " (Customer's own part)";
      } else if (isLabor) {
        label += " (labor)";
      } else {
        label += " (extra part)";
      }
      L.push({
        n: label,
        a: isOwn ? 0 : (qty * price),
        kind: isLabor ? "labor" : "part",
        qty: qty,
        price: price,
        rawName: item.name,
        src: item.src || "shop",
        done: !!item.done
      });
    });
  }

  // 3. Legacy Service Package logic for work orders with sv
  if (Array.isArray(o.sv) && o.sv.length) {
    o.sv.forEach((id) => {
      const s = g("sv", id);
      if (s) {
        L.push({
          n: s.name + " (labor)",
          a: s.labor || 0,
          kind: "labor",
          rawName: s.name,
          src: "shop"
        });
        (s.parts || []).forEach((p) => {
          const x = g("pt", p);
          if (x) {
            L.push({
              n: x.name,
              a: x.cost || 0,
              kind: "part",
              rawName: x.name,
              src: "shop"
            });
          }
        });
      }
    });
  }

  return L;
}

/**
 * Calculates financial breakdown for a work order: labor, parts, discount, and net total.
 * @param {Object} o - Work order object.
 * @returns {{labor: number, parts: number, discount: number, total: number}}
 */
function getOrderTotals(o) {
  if (!o) return { labor: 0, parts: 0, discount: 0, total: 0 };
  if ((o.type === "QUICK LABOR" || o.type === "quicklabor") && typeof o.total === "number") {
    return {
      labor: Number(o.laborSubtotal) || 0,
      parts: Number(o.partsSubtotal) || 0,
      discount: 0,
      total: Number(o.total) || 0
    };
  }
  const all = lines(o);
  let labor = 0;
  let parts = 0;
  all.forEach((l) => {
    if (l.kind === "part") parts += (l.a || 0);
    else labor += (l.a || 0);
  });
  const subtotal = labor + parts;
  const discount = Math.min(subtotal, Math.max(0, Number(o.discount) || 0));
  const tot = Math.max(0, subtotal - discount);
  return { labor, parts, discount, total: tot };
}

/**
 * Calculates the grand net total amount for a work order or service package,
 * including any discounts applied.
 * @param {Object} o - Work order object.
 * @returns {number} Net total amount in PHP.
 */
const total = (o) => getOrderTotals(o).total;

/**
 * Escapes user-typed text before inserting into HTML strings to prevent markup breaking.
 * @param {string} str - String to escape.
 * @returns {string} Escaped HTML-safe string.
 */
function escHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Formats a short readable job number (e.g. "JO-0001") based on creation order in D.wo.
 * @param {Object} o - Work order object.
 * @returns {string} Formatted job number string.
 */
function getJobNumber(o) {
  if (!o) return "JO-0000";
  const idx = D.wo.findIndex((x) => x.id === o.id);
  const num = idx >= 0 ? idx + 1 : D.wo.length + 1;
  return "JO-" + String(num).padStart(4, "0");
}

/* ==========================================================
   6. UI COMPONENTS
   ========================================================== */

/**
 * Builds an HTML status badge for a work order status.
 * Displays "READY FOR BILLING" in the UI for "Ready for Pickup" status.
 * @param {string} s - Status string.
 * @returns {string} HTML span element string.
 */
const badge = (s) => {
  if (s === "Cancelled") {
    return `<span class="badge-cancelled">CANCELLED</span>`;
  }
  const label = s === "Ready for Pickup" ? "READY FOR BILLING" : (s || "").toUpperCase();
  return `<span class="bd ${cls(s)}">${escHtml(label)}</span>`;
};

/**
 * Helper to compute the authoritative total for a work order.
 * If the job has item rows, returns labor subtotal + parts subtotal.
 * If it has no item rows, returns the recorded job total.
 * @param {Object} job - Work order object.
 * @returns {number} Numeric total in PHP.
 */
function jobTotalOf(job) {
  if (!job) return 0;
  const items = getContextItems(job.id, "items");
  const extra = getContextItems(job.id, "extra");
  const all = [...items, ...extra];
  if (all.length > 0) {
    let laborSub = 0;
    let partsSub = 0;
    all.forEach((it) => {
      const isLabor = it.kind === "labor";
      const qty = isLabor ? 1 : Math.max(1, Number(it.qty) || 1);
      if (it.src !== "own") {
        const price = Math.max(0, Number(it.price) || 0);
        if (isLabor) laborSub += qty * price;
        else partsSub += qty * price;
      }
    });
    return laborSub + partsSub;
  }
  return total(job);
}

/**
 * Returns array of service names for a work order.
 * @param {Object} o - Work order object.
 * @returns {Array<string>}
 */
function getJobServicesList(o) {
  if (!o) return [];
  if (Array.isArray(o.sv) && o.sv.length) {
    return o.sv.map((i) => (g("sv", i) ? g("sv", i).name : i)).filter(Boolean);
  }
  if (Array.isArray(o.items) && o.items.length) {
    const labor = o.items.filter((i) => i.kind === "labor").map((i) => i.name).filter(Boolean);
    if (labor.length) return labor;
    return o.items.map((i) => i.name).filter(Boolean);
  }
  if (Array.isArray(o.complaints) && o.complaints.length) {
    return o.complaints.filter(Boolean);
  }
  return [];
}

/**
 * Short for "Modal". Opens the modal overlay and injects HTML into the dialog body.
 * @param {string} h - HTML content string to display inside modal.
 */
const M = (h) => {
  $("md").innerHTML = h;
  $("ov").classList.add("on");
};

/**
 * Short for "Close Modal". Closes the modal overlay.
 */
const cm = () => $("ov").classList.remove("on");

/**
 * Short for "value". Retrieves and trims the string value of an input element.
 * @param {string} id - Input element ID.
 * @returns {string} Trimmed value.
 */
const v = (id) => $(id).value.trim();

/**
 * Short for "actions". Builds Cancel and Save buttons for modal dialog footers.
 * @param {string} ok - JavaScript function call string executed on Save click.
 * @returns {string} HTML div string with action buttons.
 */
const acts = (ok) =>
  `<div class="acts"><button class="btn g" onclick="cm()">Cancel</button><button class="btn" onclick="${ok}">Save</button></div>`;

/* ==========================================================
   7. NAVIGATION
   ========================================================== */

/**
 * Navigation routes metadata: [routeId, icon, label].
 */
const V = [
  ["dash", "▦", "Dashboard"],
  ["cust", "👥", "Customers & Motorcycles"],
  ["insp", "🔍", "Service Intake"],
  ["rep", "🔧", "Service Status"],
  ["qlabor", "🧰", "Quick Labor"],
  ["pos", "⚡", "Quick Sales"],
  ["ql", "🧰", "Quick Labor"],
  ["cat", "📦", "Service & Parts Catalog"],
  ["bill", "💳", "Transactions & Billing"],
  ["his", "🕘", "Service History"],
  ["reports", "📊", "Reports"],
  ["users", "🛡️", "System Access & Permissions"],
  ["settings", "⚙️", "System Settings"],
  ["sync", "🔄", "Backup & Sync"],
  ["audit", "📋", "Audit"]
];

/** Route keys placed under the ADMINISTRATION & SUPPORT section. */
const ADMIN_NAV_KEYS = ["reports", "users", "settings", "sync", "audit"];

/** Currently active view key. */
let view = "dash";

/** Currently selected motorcycle ID if navigated from Customers view. */
let hisBike = null;

/** Active search query string in Transactions & Billing table. */
let billSearch = "";

/** Active filter chip on Transactions & Billing page ("all", "advances", "final", "completed"). */
let billFilter = "all";

/** Currently opened work order ID in the inspection modal (null = new intake draft). */
let inspActiveWoId = null;

/** Active search query string in Service History shop-wide table. */
let hisSearch = "";

/** Active date filter for Service History page ("all", "today", "yesterday", "7days", "30days", "month", "lastMonth", "year", "custom"). */
let hisDate = "all";

/** Active mechanic filter for Service History page ("all" or mechanic name). */
let hisMech = "all";

/** Active status filter for Service History page ("all", "completed", "cancelled"). */
let hisStatus = "all";

/** Custom "From" date string for Service History page ("YYYY-MM-DD"). */
let hisFrom = "";

/** Custom "To" date string for Service History page ("YYYY-MM-DD"). */
let hisTo = "";

/**
 * Tab definitions for the consolidated POS switcher bar.
 * Ordered: Quick Sales, Quick Labor, Transactions & Billing.
 */
const POS_TABS = [
  { id: "pos", label: "Quick Sales", shortLabel: "Sales", icon: "pos" },
  { id: "ql", label: "Quick Labor", shortLabel: "Labor", icon: "ql" },
  { id: "bill", label: "Transactions & Billing", shortLabel: "Billing", icon: "bill" }
];

/**
 * Returns the POS_TABS the current role may open, read from the shared role-permissions map.
 * @returns {Array<Object>} Permitted POS tab definitions.
 */
function getPosTabsForRole() {
  return POS_TABS.filter((tab) => canOpen(tab.id));
}

/** Last POS screen ID opened during this session. */
let posLastTab = "";

/**
 * Resolves which POS screen should open when the POS sidebar item is tapped.
 * Returns posLastTab if permitted, else "pos" (Quick Sales) if permitted,
 * else the first permitted POS tab, else null.
 * @returns {string|null} Resolved screen ID.
 */
function resolvePosTab() {
  const tabs = getPosTabsForRole();
  if (!tabs.length) return null;
  if (posLastTab && tabs.some((t) => t.id === posLastTab)) {
    return posLastTab;
  }
  const quickSales = tabs.find((t) => t.id === "pos");
  if (quickSales) {
    return "pos";
  }
  return tabs[0].id;
}

/**
 * Renders the consolidated 3-button switcher bar at the top of the main content area.
 * Removes any existing switcher first to avoid duplicates.
 * If fewer than 2 tabs are permitted for the active role, adds nothing.
 * Never renders when on the dedicated Quick Labor view (key "qlabor").
 * @param {string} activeId - The active POS screen ID ("pos", "ql", or "bill").
 */
function renderPosSwitcher(activeId) {
  const existing = $("pos-switcher");
  if (existing) {
    existing.remove();
  }
  const existingTitle = $("pos-title");
  if (existingTitle) {
    existingTitle.remove();
  }

  if (view === "qlabor") {
    return;
  }

  const tabs = getPosTabsForRole();
  const mainEl = $("main-content-area") || $("main");
  if (!mainEl) return;

  if (tabs.length < 2) {
    const tabDef = POS_TABS.find((t) => t.id === activeId);
    const titleText = tabDef
      ? tabDef.label
      : activeId === "pos"
      ? "Quick Sales"
      : activeId === "ql"
      ? "Quick Labor"
      : activeId === "bill"
      ? "Transactions & Billing"
      : "";
    if (titleText) {
      const titleEl = document.createElement("div");
      titleEl.id = "pos-title";
      titleEl.className = "card top pos-fallback-title";
      titleEl.innerHTML = `<div><h1>${escHtml(titleText)}</h1></div>`;
      mainEl.insertBefore(titleEl, mainEl.firstChild);
    }
    return;
  }

  const switcher = document.createElement("div");
  switcher.id = "pos-switcher";
  switcher.setAttribute("role", "tablist");
  switcher.setAttribute("aria-label", "POS Section Switcher");

  switcher.innerHTML = tabs
    .map(
      (t) => `
        <button
          type="button"
          role="tab"
          class="pos-tab ${t.id === activeId ? "pos-tab-active" : ""}"
          data-screen="${t.id}"
          aria-selected="${t.id === activeId ? "true" : "false"}"
          onclick="loadView('${t.id}')"
        >
          <span>${ICONS[t.icon] || ""}</span>
          <span class="pos-tab-label-full">${t.label}</span>
          <span class="pos-tab-label-short">${t.shortLabel}</span>
        </button>
      `
    )
    .join("");

  mainEl.insertBefore(switcher, mainEl.firstChild);

  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

/**
 * Loads a view and triggers per-screen setup.
 * Wraps go(v) for standard screen loading.
 * @param {string} v - Screen ID to load.
 */
function loadView(v) {
  go(v);
}

/**
 * Renders the primary and administration navigation lists based on permissions of the active role.
 * Shows each section label only when at least one of its routes is accessible.
 * Shows "Quick Labor" right after Service Status for roles with "qlabor" permission.
 * Shows "POS" for roles with "pos" permission. If both are granted, shows both items.
 */
function renderNav() {
  const isPosActive = ["pos", "ql", "bill"].includes(view);
  const showPos = canOpen("pos");

  // Primary navigation: includes dedicated Quick Labor and consolidated POS
  const primaryItems = [
    { id: "dash",   icon: "dash",    label: "Dashboard",                allowed: canOpen("dash") },
    { id: "cust",   icon: "cust",    label: "Customers & Motorcycles",  allowed: canOpen("cust") },
    { id: "insp",   icon: "insp",    label: "Service Intake",    allowed: canOpen("insp") },
    { id: "rep",    icon: "rep",     label: "Service Status",           allowed: canOpen("rep") },
    { id: "qlabor", icon: "qlabor",  label: "Quick Labor",              allowed: canOpen("qlabor") },
    { id: "pos",    icon: "posMenu", label: "POS", isPos: true,         allowed: showPos },
    { id: "cat",    icon: "cat",     label: "Service & Parts Catalog",  allowed: canOpen("cat") },
    { id: "his",    icon: "his",     label: "Service History",          allowed: canOpen("his") }
  ].filter((it) => it.allowed);

  const u = getCurrentUser();
  const activeRole = u ? u.activeRole : "";
  const adminOrder = activeRole === "admin"
    ? ["reports", "audit", "users"]
    : ADMIN_NAV_KEYS;
  const adminAllowed = adminOrder
    .filter((k) => canOpen(k))
    .map((k) => V.find((x) => x[0] === k))
    .filter(Boolean);

  const navEl = $("nav");
  const navLabelEl = $("nav-label");
  const adminNavEl = $("admin-nav");
  const adminNavLabelEl = $("admin-nav-label");

  // 1. PRIMARY NAVIGATION section
  if (!primaryItems.length) {
    if (navLabelEl) navLabelEl.style.display = "none";
    if (navEl) {
      navEl.innerHTML = "";
      navEl.style.display = "none";
    }
  } else {
    if (navLabelEl) navLabelEl.style.display = "";
    if (navEl) {
      navEl.style.display = "";
      navEl.innerHTML = primaryItems
        .map((x) => {
          if (x.isPos) {
            return `<button class="nav-pos-item ${isPosActive ? "on" : ""}" data-route="pos" data-group="primary" onclick="const t = resolvePosTab(); if (t) loadView(t);" title="${x.label}" aria-label="${x.label}"><span>${ICONS[x.icon]}</span><span class="nav-text">${x.label}</span></button>`;
          }
          return `<button class="nav-${x.id} ${x.id == view ? "on" : ""}" data-route="${x.id}" data-group="primary" onclick="go('${x.id}')" title="${x.label}" aria-label="${x.label}"><span>${ICONS[x.icon] || ""}</span><span class="nav-text">${x.label}</span></button>`;
        })
        .join("");
    }
  }

  // 2. ADMINISTRATION & SUPPORT section
  if (!adminAllowed.length) {
    if (adminNavLabelEl) adminNavLabelEl.style.display = "none";
    if (adminNavEl) {
      adminNavEl.innerHTML = "";
      adminNavEl.style.display = "none";
    }
  } else {
    if (adminNavLabelEl) adminNavLabelEl.style.display = "";
    if (adminNavEl) {
      adminNavEl.style.display = "";
      adminNavEl.innerHTML = adminAllowed
        .map((x) => {
          const itemLabel = (x[0] === "users" && activeRole === "admin") ? "Users" : x[2];
          return `<button class="nav-${x[0]} ${x[0] == view ? "on" : ""}" data-route="${x[0]}" data-group="admin" onclick="go('${x[0]}')" title="${escHtml(itemLabel)}" aria-label="${escHtml(itemLabel)}"><span>${ICONS[x[0]] || x[1]}</span><span class="nav-text">${escHtml(itemLabel)}</span></button>`;
        })
        .join("");
    }
  }

  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
  syncAppGroups();
}

/**
 * Navigates to a view, updates sidebar active states, and renders the view content.
 * Resets search and filter state when navigating to another view (preserves hisBike for his view).
 * @param {string} v - Target view key ("dash", "cust", "insp", "rep", "cat", "his", "reports", "audit", "users", "settings", "sync").
 */
function go(v) {
  closeAccountSwitcher();
  // Close mobile drawer on navigation
  if (mobileDrawerOpen) {
    closeAppDrawer({ restoreFocus: false });
  }
  syncSidebarMode();
  if ((v === "settings" || v === "sync") && !isSuper()) return;
  if (v === "users" && !isSuper() && !isAdmin()) return;
  if (!canOpen(v)) return;
  if (v === "audit") {
    const u = getCurrentUser();
    if (!u || u.activeRole === "mechanic" || !canOpen("audit") || (!isSuper() && u.activeRole !== "admin")) return;
  }
  if (view !== v || v === "bill") {
    billSearch = "";
    billFilter = "all";
    catFilter = "all";
    custSearch = "";
    if (v !== "rep") {
      repStatusFilter = "all";
    }
    if (v === "users") {
      userMgmtTab = "directory";
      userSearch = "";
    }
    if (v === "audit") {
      auditSearch = "";
      auditPeriod = "7days";
      auditCategory = "all";
      auditUser = "all";
      auditPageLimit = 50;
    }
    if (v === "his" && hisBike) {
      const b = bike(hisBike);
      hisSearch = b ? b.plate : "";
      hisBike = null;
      hisDate = "all";
      hisMech = "all";
      hisStatus = "all";
      hisFrom = "";
      hisTo = "";
    } else {
      hisSearch = "";
      hisDate = "all";
      hisMech = "all";
      hisStatus = "all";
      hisFrom = "";
      hisTo = "";
      hisBike = null;
    }
  }
  view = v;
  renderNav();
  $("main").innerHTML = R[v]();
  const mainArea = $("main");
  if (mainArea) mainArea.scrollTop = 0;
  if (typeof window !== "undefined") window.scrollTo(0, 0);
  if (v === "pos") {
    posView = "parts";
  }
  if (v === "cat") {
    catFilter = "all";
  }
  if (["pos", "ql", "bill"].includes(v)) {
    posLastTab = v;
    renderPosSwitcher(v);
  } else {
    const existingSwitcher = $("pos-switcher");
    if (existingSwitcher) {
      existingSwitcher.remove();
    }
    const existingTitle = $("pos-title");
    if (existingTitle) {
      existingTitle.remove();
    }
  }

  // Persist current view in session immediately
  const s = getSession();
  if (s) {
    s.view = v;
    s.at = Date.now();
    saveSession(s);
  }

  // Update URL hash as plain #name without breaking history
  if (typeof window !== "undefined" && window.location) {
    const curHash = (window.location.hash || "").replace(/^#/, "").trim();
    if (curHash !== v) {
      window.location.hash = v;
    }
  }
}

/* ==========================================================
   8. VIEWS
   ========================================================== */

/**
 * Renders a single active repair work order as a square card in the responsive grid.
 * Displays plate number, make/model, status badge, mechanic, services, total, and job card button.
 * Uses safe fallbacks for missing fields to support older saved records.
 * @param {Object} o - Work order object.
 * @returns {string} HTML card string.
 */
function renderRepCard(o) {
  if (!o) return "";
  const b = o.bid ? bike(o.bid) : null;
  const plate = b && b.plate ? escHtml(b.plate) : "NO PLATE";
  const makeModel = b ? `${b.make || ""} ${b.model || ""}`.trim() : "";
  const svcList = getJobServicesList(o);
  const fullServices = svcList.length ? svcList.join(", ") : "-";
  const rawTot = jobTotalOf(o);
  const totVal = (typeof rawTot === "number" && !isNaN(rawTot)) ? rawTot : (Number(rawTot) || 0);
  const totFormatted = P(totVal);
  const mechName = (o.mech && o.mech !== "Unassigned") ? escHtml(o.mech) : "-";

  return `
    <div class="rep-card" id="rep-card-${o.id}">
      <div class="rep-card-header">
        <div class="rep-card-plate-wrap">
          <b class="rep-card-plate">${plate}</b>
          ${makeModel ? `<div class="rep-card-sub">${escHtml(makeModel)}</div>` : ""}
        </div>
        <div class="rep-card-badge">${badge(o.st)}</div>
      </div>
      <div class="rep-card-divider"></div>
      <div class="rep-card-body">
        <div class="rep-card-row">
          <span class="rep-card-label">MARKED BY</span>
          <span class="rep-card-val">${mechName}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">SERVICES</span>
          <span class="rep-card-val rep-card-services" title="${escHtml(fullServices)}">${escHtml(fullServices)}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">TOTAL</span>
          <b class="rep-card-val rep-card-total" id="ar-card-total-${o.id}">${totFormatted}</b>
        </div>
      </div>
      <button
        type="button"
        class="btn g rep-card-btn"
        onclick="openInspModal('${o.id}')"
        aria-label="Open job card for ${plate}"
      >
        Job card
      </button>
    </div>
  `;
}

/** Short names for calendar months (zero-indexed 0 = Jan .. 11 = Dec). */
const MONTH_NAMES_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

/**
 * Parses a "YYYY-MM-DD" date string, ISO timestamp, or Date object into a local Date instance at midnight (00:00:00.000).
 * Never uses toISOString or UTC parsing to avoid time zone date displacement.
 * @param {string|Date} str - Date string formatted as "YYYY-MM-DD" or Date object.
 * @returns {Date|null} Local Date object or null if invalid.
 */
function parseLocalDate(str) {
  if (!str) return null;
  if (str instanceof Date) {
    return new Date(str.getFullYear(), str.getMonth(), str.getDate(), 0, 0, 0, 0);
  }
  const datePart = String(str).split("T")[0];
  const parts = datePart.split("-");
  if (parts.length < 3) return null;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
  return new Date(y, m, d, 0, 0, 0, 0);
}

/**
 * Returns the current local calendar date at midnight (00:00:00.000).
 * @returns {Date} Local midnight Date object for today.
 */
function getLocalToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
}

/**
 * Formats a date string, ISO timestamp, or Date into a human-readable display string (e.g. "Oct 29, 2026").
 * @param {string|Date} dateStr - Date string, ISO timestamp, or Date object.
 * @returns {string} Formatted date string (e.g. "Oct 29, 2026").
 */
function formatJobDate(dateStr) {
  const d = parseLocalDate(dateStr);
  if (!d) return dateStr || "—";
  return `${MONTH_NAMES_SHORT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/**
 * Extracts and formats the 12-hour completion time from an ISO timestamp (e.g. "09:15 AM").
 * Returns " — " if no time component exists.
 * @param {string} isoStr - ISO timestamp string.
 * @returns {string} Formatted time string (e.g. "09:15 AM" or " — ").
 */
function formatJobTime(isoStr) {
  if (!isoStr || !String(isoStr).includes("T")) return " — ";
  const timePart = String(isoStr).split("T")[1];
  if (!timePart) return " — ";
  const [hStr, mStr] = timePart.split(":");
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (isNaN(h) || isNaN(m)) return " — ";
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  const mPad = m < 10 ? "0" + m : m;
  return `${h12 < 10 ? "0" + h12 : h12}:${mPad} ${ampm}`;
}

/**
 * Formats two local dates into a clean range string (e.g. "Oct 1 – Oct 31, 2026").
 * @param {Date} d1 - Start date.
 * @param {Date} d2 - End date.
 * @returns {string} Formatted range string.
 */
function formatShortRange(d1, d2) {
  if (!d1 || !d2) return "";
  const m1 = MONTH_NAMES_SHORT[d1.getMonth()];
  const m2 = MONTH_NAMES_SHORT[d2.getMonth()];
  const y1 = d1.getFullYear();
  const y2 = d2.getFullYear();
  if (y1 === y2) {
    return `${m1} ${d1.getDate()} – ${m2} ${d2.getDate()}, ${y1}`;
  }
  return `${m1} ${d1.getDate()}, ${y1} – ${m2} ${d2.getDate()}, ${y2}`;
}

/**
 * Checks whether a job's completion/creation date string falls within a specified filter period.
 * All comparisons are performed strictly using local date values (no UTC or toISOString).
 * @param {string} dateStr - Date string or ISO timestamp.
 * @param {string} filterKey - Filter identifier ("all", "today", "yesterday", "7days", "30days", "month", "lastMonth", "year", "custom").
 * @param {string} [customFrom=hisFrom] - Custom range start date string.
 * @param {string} [customTo=hisTo] - Custom range end date string.
 * @returns {boolean} True if date is within range.
 */
function inDateRange(dateStr, filterKey, customFrom = hisFrom, customTo = hisTo) {
  if (filterKey === "all") return true;
  const d = parseLocalDate(dateStr ? String(dateStr).split("T")[0] : "");
  if (!d) return false;
  const today = getLocalToday();

  if (filterKey === "today") {
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  }

  if (filterKey === "yesterday") {
    const yest = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0, 0, 0, 0);
    return (
      d.getFullYear() === yest.getFullYear() &&
      d.getMonth() === yest.getMonth() &&
      d.getDate() === yest.getDate()
    );
  }

  if (filterKey === "7days") {
    const start7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0, 0, 0, 0);
    const endToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);
    return d.getTime() >= start7.getTime() && d.getTime() <= endToday.getTime();
  }

  if (filterKey === "30days") {
    const start30 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0, 0, 0, 0);
    const endToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);
    return d.getTime() >= start30.getTime() && d.getTime() <= endToday.getTime();
  }

  if (filterKey === "month") {
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth()
    );
  }

  if (filterKey === "lastMonth") {
    const targetYear = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
    const targetMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
    return (
      d.getFullYear() === targetYear &&
      d.getMonth() === targetMonth
    );
  }

  if (filterKey === "year") {
    return d.getFullYear() === today.getFullYear();
  }

  if (filterKey === "custom") {
    let f = parseLocalDate(customFrom);
    let t = parseLocalDate(customTo);
    if (f && t && f.getTime() > t.getTime()) {
      const temp = f;
      f = t;
      t = temp;
    }
    if (f && t) {
      return d.getTime() >= f.getTime() && d.getTime() <= (t.getTime() + 86399999);
    }
    if (f) return d.getTime() >= f.getTime();
    if (t) return d.getTime() <= (t.getTime() + 86399999);
    return true;
  }

  return true;
}

/**
 * Multi-mechanic sample assignments for Service History demo display.
 * Maps work order unique ID to an array of assigned mechanic display names.
 */
const HIS_SAMPLE_MECHANICS = {
  w15: ["Larpus", "Hiyo"]
};

/**
 * Returns an array of assigned mechanic display names for a Service History job.
 * For sample job w15 (NOP-9967), returns ["Larpus", "Hiyo"].
 * For other jobs, returns [job.mech] or ["—"] if unassigned.
 * @param {Object} job - Work order object.
 * @returns {Array<string>} Array of mechanic display names.
 */
function getHisMechanics(job) {
  if (!job) return ["—"];
  if (job.id && HIS_SAMPLE_MECHANICS[job.id]) {
    return HIS_SAMPLE_MECHANICS[job.id];
  }
  if (job.mech && job.mech.trim() && job.mech.trim().toLowerCase() !== "unassigned") {
    return [job.mech.trim()];
  }
  return ["—"];
}

/**
 * Renders HTML for assigned mechanic(s) in Service History table cells and record modal.
 * Shows single name in bold text, or two names stacked with ~4px gap.
 * @param {Object} job - Work order object.
 * @returns {string} HTML string.
 */
function renderAssignedMechanicsHtml(job) {
  const mechs = getHisMechanics(job);
  if (mechs.length <= 1) {
    return `<span style="font-weight:600;color:var(--text-primary)">${escHtml(mechs[0] || "—")}</span>`;
  }
  return `<div style="display:flex;flex-direction:column;gap:4px">
    ${mechs.map((m) => `<span style="font-weight:600;color:var(--text-primary)">${escHtml(m)}</span>`).join("")}
  </div>`;
}

/**
 * Returns a sorted array of unique mechanic names found across all work orders.
 * @returns {Array<string>} Alphabetically sorted array of mechanic names.
 */
function getUniqueMechanics() {
  const set = new Set();
  const users = loadUsers();
  users.filter((u) => u.role === "mechanic" && u.active !== false).forEach((u) => {
    if (u.name && u.name.trim()) set.add(u.name.trim());
  });
  D.wo.forEach((o) => {
    getHisMechanics(o).forEach((m) => {
      if (m && m !== "—" && m.trim().toLowerCase() !== "unassigned") {
        set.add(m.trim());
      }
    });
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

/**
 * Returns completed and cancelled work orders matching the active search query, status filter, mechanic filter, and date range.
 * Search matches against plate number, customer name, phone, make/model, job ID, mechanic, dates, and cancel reason.
 * Sorted by newest effective date first (completion date for completed, cancel date for cancelled).
 * @returns {Array<Object>} Filtered list of work orders.
 */
function getFilteredHistory() {
  const base = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    const isCancelled = o.st === "Cancelled" || Boolean(o.cancel);
    const isCompleted = o.st === "Completed";
    if (!isCompleted && !isCancelled) return false;
    if (hisStatus === "completed" && !isCompleted) return false;
    if (hisStatus === "cancelled" && !isCancelled) return false;
    return true;
  });
  const q = hisSearch.trim().toLowerCase().replace(/\s+/g, " ");

  return base.filter((o) => {
    // 1. Mechanic filter
    if (hisMech !== "all") {
      const mechs = getHisMechanics(o);
      if (!mechs.some((m) => m.toLowerCase() === hisMech.toLowerCase())) {
        return false;
      }
    }

    // 2. Date range filter
    const isCancelled = o.st === "Cancelled" || Boolean(o.cancel);
    const dateVal = isCancelled ? ((o.cancel && o.cancel.at) || o.at || "") : (o.done || o.at || "");
    if (!inDateRange(dateVal, hisDate, hisFrom, hisTo)) {
      return false;
    }

    // 3. Search query filter
    if (!q) return true;

    const b = bike(o.bid);
    const c = b ? own(b) : null;
    const plate = b && b.plate ? b.plate.toLowerCase() : "";
    const customer = c && c.name ? c.name.toLowerCase() : "";
    const phone = c && c.phone ? c.phone.toLowerCase() : "";
    const model = b ? `${b.make || ""} ${b.model || ""}`.toLowerCase() : "";
    const jobId = o.id ? o.id.toLowerCase() : "";
    const mechs = getHisMechanics(o);
    const mechMatch = mechs.some((m) => m.toLowerCase().includes(q));
    const rawDate = dateVal.toLowerCase();
    const formattedDate = formatJobDate(dateVal).toLowerCase();
    const jo = getJobNumber(o).toLowerCase();
    const cancelReason = (isCancelled && o.cancel && o.cancel.reason) ? String(o.cancel.reason).toLowerCase() : "";

    return (
      plate.includes(q) ||
      customer.includes(q) ||
      phone.includes(q) ||
      model.includes(q) ||
      jobId.includes(q) ||
      jo.includes(q) ||
      mechMatch ||
      rawDate.includes(q) ||
      formattedDate.includes(q) ||
      cancelReason.includes(q)
    );
  }).sort((a, c) => {
    const aCancelled = a.st === "Cancelled" || Boolean(a.cancel);
    const cCancelled = c.st === "Cancelled" || Boolean(c.cancel);
    const aDate = aCancelled ? ((a.cancel && a.cancel.at) || a.at || "") : (a.done || a.at || "");
    const cDate = cCancelled ? ((c.cancel && c.cancel.at) || c.at || "") : (c.done || c.at || "");
    return cDate.localeCompare(aDate);
  });
}

/**
 * Generates descriptive text for the active date range period.
 * @returns {string} Human-readable period description.
 */
function getHisSummaryDescription() {
  const today = getLocalToday();

  if (hisDate === "all") {
    return "All Time";
  }
  if (hisDate === "today") {
    return `Today (${formatJobDate(today)})`;
  }
  if (hisDate === "yesterday") {
    const yest = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0, 0, 0, 0);
    return `Yesterday (${formatJobDate(yest)})`;
  }
  if (hisDate === "7days") {
    const start7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0, 0, 0, 0);
    return `Last 7 Days (${formatShortRange(start7, today)})`;
  }
  if (hisDate === "30days") {
    const start30 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0, 0, 0, 0);
    return `Last 30 Days (${formatShortRange(start30, today)})`;
  }
  if (hisDate === "month") {
    const mStart = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    const mEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0);
    return `This Month (${formatShortRange(mStart, mEnd)})`;
  }
  if (hisDate === "lastMonth") {
    const targetYear = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
    const targetMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
    const lmStart = new Date(targetYear, targetMonth, 1, 0, 0, 0, 0);
    const lmEnd = new Date(targetYear, targetMonth + 1, 0, 0, 0, 0);
    return `Last Month (${formatShortRange(lmStart, lmEnd)})`;
  }
  if (hisDate === "year") {
    return `This Year (${today.getFullYear()})`;
  }
  if (hisDate === "custom") {
    let f = parseLocalDate(hisFrom);
    let t = parseLocalDate(hisTo);
    if (f && t) {
      if (f.getTime() > t.getTime()) {
        const temp = f;
        f = t;
        t = temp;
      }
      return `Custom (${formatShortRange(f, t)})`;
    }
    if (f) return `Custom (From ${formatJobDate(f)})`;
    if (t) return `Custom (Up to ${formatJobDate(t)})`;
    return "Custom (All dates)";
  }
  return "All Time";
}

/**
 * Builds HTML for the summary line above the completed jobs table.
 * @returns {string} HTML string.
 */
function getHisSummaryHtml() {
  const list = getFilteredHistory();
  const count = list.length;
  const jobWord = count === 1 ? "job" : "jobs";
  return `Showing ${count} ${jobWord} · ${getHisSummaryDescription()}`;
}

/**
 * Builds HTML for the shop-wide completed and cancelled jobs table or empty state.
 * @returns {string} HTML string.
 */
function getHisResultsHtml() {
  const list = getFilteredHistory();
  if (!list.length) {
    return `<div class="empty">
      <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:4px">No records found.</div>
      <div>Try a different search, date range, staff, or status filter.</div>
    </div>`;
  }

  return `<div class="tw">
    <table>
      <thead>
        <tr>
          <th>DATE &amp; TIME</th>
          <th>VEHICLE &amp; CUSTOMER INFO</th>
          <th>ASSIGNED MECHANIC</th>
          <th>PRIMARY ISSUE / DIAGNOSIS</th>
          <th class="r">TOTAL COST (₱)</th>
          <th class="r">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((o) => {
          const b = bike(o.bid);
          const c = b ? own(b) : null;
          const isCancelled = o.st === "Cancelled" || Boolean(o.cancel);
          const isRev = !isCancelled && Boolean(o.reversed);
          const dateVal = isCancelled ? ((o.cancel && o.cancel.at) || o.at || "") : (o.done || o.at || "");
          const svcList = (o.sv && o.sv.length)
            ? o.sv.map((id) => (g("sv", id) ? g("sv", id).name : id))
            : (o.items && o.items.length)
              ? o.items.filter((i) => i.kind === "labor").map((i) => i.name)
              : (o.complaints && o.complaints.length)
                ? o.complaints
                : [];
          const svcNames = svcList.join(", ") || (o.findings ? "Inspection Diagnosis" : "—");
          const truncSvcNames = svcNames.length > 45 ? svcNames.slice(0, 42) + "..." : svcNames;
          const displayNote = isCancelled
            ? `Cancelled: ${escHtml((o.cancel && o.cancel.reason) ? o.cancel.reason : "No reason given")}`
            : (o.note || o.notes || o.findings || "—");

          return `<tr>
            <td>
              <div style="font-weight:700;color:var(--text-primary)">${formatJobDate(dateVal)}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${formatJobTime(dateVal)}</div>
              ${isCancelled ? `<div style="margin-top:4px"><span class="badge-cancelled">CANCELLED</span></div>` : ""}
              ${isRev ? `<div style="margin-top:4px"><span class="badge-reversed">REVERSED</span></div>` : ""}
            </td>
            <td>
              <button type="button" class="his-plate-btn" onclick="filterByPlate('${b ? b.plate : ""}')" title="Filter by plate ${b ? b.plate : ""}">
                <span>${b ? b.plate : "NO PLATE"}</span> <span class="his-plate-icon" style="display:inline-flex;align-items:center">${LINE_ICONS.his}</span>
              </button>
              <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${b ? `${b.make} ${b.model}` : "Unknown"}</div>
              <div style="font-weight:600;font-size:13px;color:var(--text-primary);margin-top:2px">${c ? c.name : "—"}</div>
            </td>
            <td>
              ${renderAssignedMechanicsHtml(o)}
            </td>
            <td>
              <div style="font-weight:700;color:var(--text-primary)" title="${svcNames.replace(/"/g, '&quot;')}">${truncSvcNames}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${displayNote}</div>
            </td>
            <td class="r" style="font-weight:700;color:var(--text-primary);font-size:14px">
              ${(isRev || isCancelled) ? `<span class="text-struck">${P(total(o))}</span>` : P(total(o))}
            </td>
            <td class="r" style="white-space:nowrap">
              <button type="button" class="btn-rec" onclick="openRecord('${o.id}')">View Full Record</button>
              ${isCancelled && (isSuper() || isAdmin()) ? `
                <button type="button" class="btn sm" style="margin-left:6px;background:#FFFFFF;color:#2563EB;border:1px solid #2563EB;font-weight:600" data-demo="true" onclick="showDemoNotice()">Put back to Service Status</button>
              ` : ""}
              ${!isCancelled && isSuper() ? (isRev ? `
                <button type="button" class="btn g sm" style="margin-left:6px" data-demo="true" onclick="showDemoNotice()">Reopen Job</button>
              ` : `
                <button type="button" class="btn sm btn-destructive" style="margin-left:6px" data-demo="true" onclick="showDemoNotice()">Void / Reverse</button>
              `) : ""}
            </td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  </div>`;
}

/**
 * Static recent quick fix records moved from Quick Labor to Service History.
 */
const RECENT_QUICK_FIX_RECORDS = [
  {
    id: "ql-0012",
    jo: "QL-0012",
    date: "Nov 17, 2026 · 10:30 AM",
    staff: "Pedro Reyes",
    items: "2 items · Change Oil, Tune-up",
    amount: "₱500.00",
    method: "Cash",
    receiptId: "w-bill-4",
    isVoided: false
  },
  {
    id: "ql-0011",
    jo: "QL-0011",
    date: "Nov 16, 2026 · 03:15 PM",
    staff: "Maria Santos",
    items: "3 items · Change Oil, Tune-up, Oil Filter",
    amount: "₱680.00",
    method: "GCash",
    receiptId: "w-bill-4",
    isVoided: false
  },
  {
    id: "ql-0010",
    jo: "QL-0010",
    date: "Nov 16, 2026 · 11:20 AM",
    staff: "Jose Rizal",
    reason: "Customer cancelled",
    amount: "₱350.00",
    method: "Cash",
    receiptId: null,
    isVoided: true
  }
];

/**
 * Builds HTML for a single recent quick fix card.
 * @param {Object} item - Quick fix record object.
 * @returns {string} HTML string.
 */
function renderQuickFixCard(item) {
  if (item.isVoided) {
    return `
      <div class="pos-sale-row is-voided" style="opacity:0.75;background:#F8FAFC;margin-bottom:0">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px">
            <b>${escHtml(item.jo)}</b>
            <span class="pos-void-badge">VOIDED</span>
            <span style="font-size:11px;color:var(--text-muted)">${escHtml(item.date)}</span>
          </div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:2px">
            Staff · <span style="font-weight:600;color:var(--text-primary)">${escHtml(item.staff)}</span>
          </div>
          <div style="font-size:11px;color:var(--danger, #DC2626);margin-top:2px;font-style:italic">
            Voided: "${escHtml(item.reason || "Cancelled")}"
          </div>
        </div>
        <div style="text-align:right;margin-left:8px">
          <div style="font-weight:800;font-size:13px;text-decoration:line-through;color:var(--text-muted)">${escHtml(item.amount)}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">${escHtml(item.method)}</div>
          <div style="display:flex;gap:4px;justify-content:flex-end">
            <button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()">Voided</button>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="pos-sale-row" style="margin-bottom:0">
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px">
          <b>${escHtml(item.jo)}</b>
          <span style="font-size:11px;color:var(--text-muted)">${escHtml(item.date)}</span>
        </div>
        <div style="font-size:11px;color:var(--text-secondary);margin-top:2px">
          Staff · <span style="font-weight:600;color:var(--text-primary)">${escHtml(item.staff)}</span>
        </div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:2px">
          ${escHtml(item.items)}
        </div>
      </div>
      <div style="text-align:right;margin-left:8px">
        <div style="font-weight:800;font-size:13px;color:#0F172A">${escHtml(item.amount)}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">${escHtml(item.method)}</div>
        <div style="display:flex;gap:4px;justify-content:flex-end">
          <button type="button" class="btn g sm" onclick="openReceipt('${item.receiptId}')" title="View receipt">Receipt</button>
          <button type="button" class="btn g sm" style="color:var(--danger, #DC2626)" data-demo="true" onclick="showDemoNotice()" title="Void fix">Void</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Builds HTML string for the grid of recent quick fix records on Service History.
 * @returns {string} HTML string.
 */
function getRecentQuickFixHtml() {
  if (!RECENT_QUICK_FIX_RECORDS || !RECENT_QUICK_FIX_RECORDS.length) {
    return `<div class="empty" style="padding:16px;color:var(--text-muted)">No quick fix records yet.</div>`;
  }
  return RECENT_QUICK_FIX_RECORDS.map(renderQuickFixCard).join("");
}

/**
 * Static repair cards for the Mechanic Dashboard ("My Jobs" card).
 * Display-only records; does not read/write stored jobs or ST statuses.
 */
const MECHANIC_STATIC_JOBS = [
  { plate: "GHI-3412", motorcycle: "Suzuki Raider R150", group: "progress", badgeText: "IN PROGRESS", services: "Change oil, Tune-up", total: "₱1,360" },
  { plate: "JKL-7821", motorcycle: "Honda ADV 160", group: "progress", badgeText: "IN PROGRESS", services: "CVT cleaning", total: "₱750" },
  { plate: "DEF-5678", motorcycle: "Yamaha NMAX 155", group: "waiting", badgeText: "WAITING MECHANIC", services: "Periodic Maintenance", total: "₱950" },
  { plate: "RTY-3321", motorcycle: "Honda Click 125i", group: "waiting", badgeText: "WAITING MECHANIC", services: "FI Cleaning, Spark Plug", total: "₱800" }
];

/**
 * Builds HTML string for a static repair card on the Mechanic Dashboard.
 * Non-clickable plain element. MARKED BY is logged-in mechanic's name for progress cards, "—" for waiting cards.
 * @param {Object} job - Static job record.
 * @param {string} mechDisplayName - Logged-in mechanic display name.
 * @returns {string} HTML card string.
 */
function renderMechanicJobCard(job, mechDisplayName) {
  const markedBy = job.group === "progress" ? (mechDisplayName || "Mechanic") : "—";
  return `
    <div class="rep-card mech-job-card ${job.group}">
      <div class="rep-card-header">
        <div class="rep-card-plate-wrap">
          <b class="rep-card-plate">${escHtml(job.plate)}</b>
          <div class="rep-card-sub">${escHtml(job.motorcycle)}</div>
        </div>
        <div class="rep-card-badge">
          <span class="bd">${escHtml(job.badgeText)}</span>
        </div>
      </div>
      <div class="rep-card-divider"></div>
      <div class="rep-card-body">
        <div class="rep-card-row">
          <span class="rep-card-label">MARKED BY</span>
          <span class="rep-card-val">${escHtml(markedBy)}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">SERVICES</span>
          <span class="rep-card-val rep-card-services" title="${escHtml(job.services)}">${escHtml(job.services)}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">TOTAL</span>
          <b class="rep-card-val rep-card-total">${escHtml(job.total)}</b>
        </div>
      </div>
      <div class="rep-card-pill">Open Job Card &gt;</div>
    </div>
  `;
}

/**
 * Builds HTML for dashboard KPI summary cards.
 * When showRevenue is false, renders 3 cards (Service Status, Pending Payments, Today's Services)
 * with class "stats mdash-stats" and never evaluates or includes revenue data.
 * When showRevenue is true, renders 4 cards including Today's Revenue with class "stats dash-kpi-4col".
 * @param {number} actCount
 * @param {number} pendingCount
 * @param {number} dnCount
 * @param {Object|null} [revData=null]
 * @param {Object} [options={}]
 * @param {boolean} [options.showRevenue=true]
 * @returns {string} HTML string.
 */
function getDashStatCardsHtml(actCount, pendingCount, dnCount, revData = null, options = {}) {
  const { showRevenue = true } = options;
  const stat = (i, bg, l, n, t) =>
    `<div class="card st"><div class="ic" style="background:${bg}">${i}</div><div><small>${l}</small><b>${n}</b>${t}</div></div>`;

  if (!showRevenue || !revData) {
    return `
      <!-- KPI Row (3 columns on wide desktop, 2 on tablet, 1 on mobile) -->
      <div class="stats mdash-stats">
        ${stat(LINE_ICONS.rep, "", "Service Status", actCount, "In progress")}
        ${stat(ICONS.money, "", "PENDING PAYMENTS", pendingCount, "Ready for pickup")}
        ${stat(ICONS.checkCircle, "", "TODAY’S SERVICES", dnCount, "Jobs finished")}
      </div>
    `;
  }

  return `
      <!-- KPI Row (4 columns on wide desktop, 2 on tablet, 1 on mobile) -->
      <div class="stats dash-kpi-4col">
        ${stat(LINE_ICONS.rep, "", "Service Status", actCount, "In progress")}
        ${stat(ICONS.money, "", "PENDING PAYMENTS", pendingCount, "Ready for pickup")}
        ${stat(ICONS.checkCircle, "", "TODAY’S SERVICES", dnCount, "Jobs finished")}
        ${stat(
          ICONS.money,
          "",
          "TODAY’S REVENUE",
          P(revData.revenue),
          `<div class="dash-rev-sub">Labor ${P(revData.labor)} · Parts &amp; Fluids ${P(revData.parts)}</div>`
        )}
      </div>
  `;
}

/**
 * Builds HTML for dashboard Quick Actions bar.
 * Reads permission matrix with canOpen() and hides "Assign Mechanic" for the Mechanic role.
 * Hidden tiles leave no empty cells thanks to responsive grid reflow.
 * @param {number} unassignedCount
 * @param {number} awaitingCount
 * @param {Object} [options={}]
 * @param {boolean} [options.isMechanic=false]
 * @returns {string} HTML string.
 */
function getDashQuickActionsHtml(unassignedCount, awaitingCount, options = {}) {
  const { isMechanic = false } = options;
  const canAssign = canOpen("rep") && !isMechanic;

  return `
      <!-- Quick Actions Bar (replaces lone Service Status square) -->
      <div class="dash-quick-actions${isMechanic ? " mdash-tiles" : ""}" role="region" aria-label="Quick Actions">
        ${canOpen("insp") ? `
          <button
            type="button"
            class="dash-qa-btn"
            onclick="go('insp')"
            aria-label="New Service Intake: Walk-in motorcycle"
          >
            <div class="dash-qa-icon">${LINE_ICONS.insp}</div>
            <div class="dash-qa-text">
              <div class="dash-qa-label">New Service Intake</div>
              <div class="dash-qa-hint">Walk-in motorcycle</div>
            </div>
          </button>
        ` : ""}
        ${canOpen("pos") ? `
          <button
            type="button"
            class="dash-qa-btn"
            onclick="posView='parts';go('pos')"
            aria-label="Quick POS Sale: Parts &amp; fluids"
          >
            <div class="dash-qa-icon">${LINE_ICONS.pos}</div>
            <div class="dash-qa-text">
              <div class="dash-qa-label">Quick POS Sale</div>
              <div class="dash-qa-hint">Parts &amp; fluids</div>
            </div>
          </button>
        ` : ""}
        ${canAssign ? `
          <button
            type="button"
            class="dash-qa-btn"
            onclick="repStatusFilter='all';go('rep')"
            aria-label="Assign Mechanic: ${unassignedCount} unassigned jobs"
          >
            <div class="dash-qa-icon">${LINE_ICONS.rep}</div>
            <div class="dash-qa-text">
              <div class="dash-qa-label">Assign Mechanic</div>
              <div class="dash-qa-hint">Unassigned jobs <span class="dash-qa-count">(${unassignedCount})</span></div>
            </div>
          </button>
        ` : ""}
        ${canOpen("rep") ? `
          <button
            type="button"
            class="dash-qa-btn"
            onclick="repStatusFilter='awaiting';go('rep')"
            aria-label="Pending Approvals / Parts: ${awaitingCount} awaiting parts or approval"
          >
            <div class="dash-qa-icon">${ICONS.alert || LINE_ICONS.cat}</div>
            <div class="dash-qa-text">
              <div class="dash-qa-label">Pending Approvals / Parts</div>
              <div class="dash-qa-hint">Awaiting parts or approval <span class="dash-qa-count">(${awaitingCount})</span></div>
            </div>
          </button>
        ` : ""}
      </div>
  `;
}

/**
 * Renders the dedicated Mechanic Dashboard view.
 * Features greeting, 3 shop KPI cards (Service Status, Pending Payments, Today's Services),
 * 3 Quick Action tiles, and My Jobs card.
 * Excludes revenue, labor/parts financials, and unassigned mechanic action.
 * @returns {string} HTML string.
 */
function dashMechanic() {
  const u = getCurrentUser();
  const mechName = u ? (u.name || "").trim() : "";

  const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter(isCountableJob);
  // Active jobs: work orders not yet completed or ready for pickup
  const act = countableWos.filter((o) => o.st != "Completed" && o.st != "Ready for Pickup");
  // Ready jobs / pending settlement: work orders awaiting customer settlement and vehicle pickup
  const pendingPaymentJobs = countableWos.filter((o) => o.st == "Ready for Pickup");
  // Services finished today: work orders with done date matching today
  const dn = countableWos.filter((o) => (o.done || "").slice(0, 10) == today());

  const unassignedCount = Array.isArray(REP_STATIC_CARDS)
    ? REP_STATIC_CARDS.filter((c) => c.filter === "waiting" || c.markedBy === "—").length
    : countableWos.filter((o) => o.st !== "Completed" && o.st !== "Cancelled" && o.st !== "Ready for Pickup" && (!o.mech || o.mech === "Unassigned" || o.mech.trim() === "")).length;

  const awaitingCount = Array.isArray(REP_STATIC_CARDS)
    ? REP_STATIC_CARDS.filter((c) => c.filter === "awaiting").length
    : countableWos.filter((o) => o.st === "Awaiting Parts/Approval" && !o.cancel).length;

  const d = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return `
    <div class="card top">
      <div>
        <h1>Welcome back, ${escHtml(mechName || "Mechanic")}</h1>
        <p>Mechanic | ${d}</p>
      </div>
      <span class="pill">● Saved on this device</span>
    </div>

    ${getDashStatCardsHtml(act.length, pendingPaymentJobs.length, dn.length, null, { showRevenue: false })}

    ${getDashQuickActionsHtml(unassignedCount, awaitingCount, { isMechanic: true })}

    <div style="display:flex;flex-direction:column;gap:20px">
      <!-- My Jobs Card -->
      <div class="card">
        <div class="hd" style="display:flex;align-items:center;gap:6px">
          <span style="display:inline-flex;align-items:center">${LINE_ICONS.rep}</span>
          <h2 style="font-size:16px;font-weight:700;margin:0">My Jobs</h2>
        </div>
        <div class="mech-my-jobs-body">
          <section class="mech-section" aria-labelledby="mech-heading-progress">
            <div class="mech-section-heading">
              <span class="mech-heading-dot progress" aria-hidden="true"></span>
              <h3 id="mech-heading-progress">Currently In Progress</h3>
            </div>
            <div class="mech-section-divider"></div>
            <div class="mech-jobs-grid">
              ${MECHANIC_STATIC_JOBS.filter((j) => j.group === "progress").map((j) => renderMechanicJobCard(j, mechName)).join("")}
            </div>
          </section>
          <section class="mech-section" aria-labelledby="mech-heading-waiting">
            <div class="mech-section-heading">
              <span class="mech-heading-dot waiting" aria-hidden="true"></span>
              <h3 id="mech-heading-waiting">Waiting for Mechanic</h3>
            </div>
            <div class="mech-section-divider"></div>
            <div class="mech-jobs-grid">
              ${MECHANIC_STATIC_JOBS.filter((j) => j.group === "waiting").map((j) => renderMechanicJobCard(j, mechName)).join("")}
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}

/** State for Customers & Motorcycles view */
let custSearch = "";
const expandedCustIds = new Set();

function getCustomerBikes(cid) {
  return (Array.isArray(D.bk) ? D.bk : []).filter((b) => b.cid === cid && !b.archived);
}

function getCustomerJoinedDisplay(c) {
  if (c.joinedAt) {
    return `Joined: ${formatJobDate(c.joinedAt)}`;
  }
  const bikes = getCustomerBikes(c.id);
  const bikeIds = new Set(bikes.map((b) => b.id));
  const wos = (Array.isArray(D.wo) ? D.wo : []).filter((o) => (o.cid === c.id || bikeIds.has(o.bid)) && (o.at || o.date || o.created));
  if (wos.length > 0) {
    let earliest = null;
    for (const o of wos) {
      const dStr = (o.at || o.date || o.created || "").slice(0, 10);
      if (dStr && (!earliest || dStr < earliest)) {
        earliest = dStr;
      }
    }
    if (earliest) return `Joined: ${formatJobDate(earliest)}`;
  }
  return `Joined: ${formatJobDate(today())}`;
}

function customerMatchesSearch(c, q) {
  if (!q) return true;
  if ((c.name || "").toLowerCase().includes(q)) return true;
  if ((c.phone || "").toLowerCase().includes(q)) return true;
  const bikes = getCustomerBikes(c.id);
  for (const b of bikes) {
    if ((b.plate || "").toLowerCase().includes(q)) return true;
    if ((b.make || "").toLowerCase().includes(q)) return true;
    if ((b.model || "").toLowerCase().includes(q)) return true;
    if ((b.engine || "").toLowerCase().includes(q)) return true;
  }
  return false;
}

function onCustSearchInput(val) {
  custSearch = val;
  const clearBtn = $("cust-search-clear");
  if (clearBtn) {
    if (val) clearBtn.classList.add("visible");
    else clearBtn.classList.remove("visible");
  }
  const trimmed = val.trim().toLowerCase();
  if (trimmed) {
    const activeCustomers = (Array.isArray(D.cu) ? D.cu : []).filter((c) => !c.archived);
    for (const c of activeCustomers) {
      if (customerMatchesSearch(c, trimmed)) {
        expandedCustIds.add(c.id);
      }
    }
  }
  const wrap = $("cust-table-wrap");
  if (wrap) {
    wrap.innerHTML = renderCustTableHtml();
  }
}

function clearCustSearch() {
  custSearch = "";
  const inp = $("cust-search-input");
  if (inp) {
    inp.value = "";
    inp.focus();
  }
  const clearBtn = $("cust-search-clear");
  if (clearBtn) clearBtn.classList.remove("visible");
  const wrap = $("cust-table-wrap");
  if (wrap) {
    wrap.innerHTML = renderCustTableHtml();
  }
}

function toggleCustExpand(cid) {
  if (expandedCustIds.has(cid)) {
    expandedCustIds.delete(cid);
  } else {
    expandedCustIds.add(cid);
  }
  const wrap = $("cust-table-wrap");
  if (wrap) {
    wrap.innerHTML = renderCustTableHtml();
  }
}

function renderCustTableHtml() {
  const activeCustomers = (Array.isArray(D.cu) ? D.cu : []).filter((c) => !c.archived);
  activeCustomers.sort((a, b) => (a.name || "").localeCompare(b.name || ""));

  const q = custSearch.trim().toLowerCase();

  const filtered = activeCustomers.filter((c) => {
    if (q && !customerMatchesSearch(c, q)) return false;
    return true;
  });

  return `
    <div class="card tw cust-table-card">
      <table>
        <thead>
          <tr>
            <th style="width:40px;text-align:center"></th>
            <th>CUSTOMER DETAILS</th>
            <th>REGISTERED VEHICLES</th>
            <th>CONTACT</th>
            <th class="r">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${!filtered.length ? `
            <tr>
              <td colspan="5" style="text-align:center;padding:48px 16px;color:var(--text-muted)">
                <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">No customers found.</div>
                <div style="font-size:13px">Try a different search.</div>
              </td>
            </tr>
          ` : filtered.map((c) => {
            const isExpanded = expandedCustIds.has(c.id);
            const bikes = getCustomerBikes(c.id);
            const joinedDisplay = getCustomerJoinedDisplay(c);

            return `
              <tr style="cursor:pointer" onclick="if(event.target.closest('button'))return;toggleCustExpand('${c.id}')">
                <td style="text-align:center">
                  <button
                    type="button"
                    class="cust-chevron-btn"
                    onclick="event.stopPropagation();toggleCustExpand('${c.id}')"
                    aria-expanded="${isExpanded ? "true" : "false"}"
                    title="${isExpanded ? "Collapse" : "Expand"}"
                  >
                    <svg class="cust-chevron ${isExpanded ? "expanded" : ""}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </td>
                <td>
                  <div style="font-weight:700;color:var(--text)">${escHtml(c.name)}</div>
                  <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${escHtml(joinedDisplay)}</div>
                </td>
                <td>
                  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                    <span class="cust-pill-count">${bikes.length === 0 ? "No vehicles" : (bikes.length === 1 ? "1 Vehicle" : `${bikes.length} Vehicles`)}</span>
                  </div>
                </td>
                <td>
                  <span class="cust-mono">${escHtml(c.phone || "—")}</span>
                </td>
                <td class="r" style="white-space:nowrap">
                  <button type="button" class="btn g sm" onclick="event.stopPropagation();openEditCustomerModal('${c.id}')">Edit Profile</button>
                </td>
              </tr>
              ${isExpanded ? `
                <tr class="cust-sub-row">
                  <td colspan="5" style="padding:0">
                    <div class="cust-sub-panel">
                      ${!bikes.length ? `
                        <div class="cust-sub-empty">
                          <span>No vehicles registered for this customer yet.</span>
                          <button type="button" class="btn sm" onclick="openRegisterVehicleModal('${c.id}')">+ Register Vehicle</button>
                        </div>
                      ` : bikes.map((b) => {
                        return `
                          <div class="cust-bike-item">
                            <div style="display:flex;align-items:center;min-width:0">
                              <div class="cust-bike-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                                  <path d="M15 6h-3l-3 6.5h6l2-3.5h3"></path>
                                  <path d="M9 12.5l-3.5 5"></path>
                                  <path d="M18.5 14v3.5"></path>
                                </svg>
                              </div>
                              <div style="min-width:0">
                                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                                  <b style="color:var(--text)">${escHtml(b.make + " " + b.model)}${b.year ? ` (${b.year})` : ""}</b>
                                </div>
                                <div class="cust-mono" style="font-size:12px;color:var(--text-muted);margin-top:2px">
                                  Plate: ${escHtml(b.plate)}${b.engine ? ` | Engine/Chassis: ${escHtml(b.engine)}` : ""}
                                </div>
                              </div>
                            </div>
                            <div style="display:flex;align-items:center;gap:8px;margin-left:16px;flex:none">
                              <button type="button" class="btn g sm" onclick="hisBike='${b.id}';go('his')" title="View service history">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>View History
                              </button>
                              <button type="button" class="btn g sm" onclick="openEditBikeModal('${b.id}')">Edit</button>
                              <button type="button" class="btn sm cust-btn-new-wo" onclick="startNewInspectionWorkOrder('${b.id}')">New work order</button>
                            </div>
                          </div>
                        `;
                      }).join("")}
                    </div>
                  </td>
                </tr>
              ` : ""}
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

/* ==========================================================
   Service Intake: STATIC SAMPLE JOB CARD
   ========================================================== */

/**
 * Active tab state for the static sample job card in Service Intake.
 * Values: "complaint" | "estimates".
 * Lives only in memory, resets to "complaint" on page open.
 */
let inspSampleTab = "complaint";

/**
 * Switches the active tab on the static sample job card and updates the panel.
 * Updates aria-selected, tabindex, active classes, and content without full page re-render.
 * @param {"complaint"|"estimates"} tab - Target tab key.
 */
function setInspSampleTab(tab) {
  inspSampleTab = tab === "estimates" ? "estimates" : "complaint";
  const btnComplaint = $("insp-tab-btn-complaint");
  const btnEstimates = $("insp-tab-btn-estimates");
  const panel = $("insp-tab-panel");

  const isComplaint = inspSampleTab === "complaint";

  if (btnComplaint) {
    btnComplaint.className = `insp-tab-btn ${isComplaint ? "active" : ""}`;
    btnComplaint.setAttribute("aria-selected", isComplaint ? "true" : "false");
    btnComplaint.setAttribute("tabindex", isComplaint ? "0" : "-1");
  }
  if (btnEstimates) {
    btnEstimates.className = `insp-tab-btn ${!isComplaint ? "active" : ""}`;
    btnEstimates.setAttribute("aria-selected", !isComplaint ? "true" : "false");
    btnEstimates.setAttribute("tabindex", !isComplaint ? "0" : "-1");
  }
  if (panel) {
    panel.setAttribute("aria-labelledby", isComplaint ? "insp-tab-btn-complaint" : "insp-tab-btn-estimates");
    panel.innerHTML = isComplaint ? getInspSampleComplaintTabHtml() : getInspSampleEstimatesTabHtml();
  }
}

/**
 * Handles keyboard navigation between the two sample job card tabs.
 * ArrowLeft / ArrowRight move focus, Home / End go to first / last, Enter / Space select.
 * @param {KeyboardEvent} e - Keydown event.
 */
function handleInspTabKeydown(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    const nextTab = inspSampleTab === "complaint" ? "estimates" : "complaint";
    setInspSampleTab(nextTab);
    const targetBtn = $(`insp-tab-btn-${nextTab}`);
    if (targetBtn) targetBtn.focus();
  } else if (e.key === "Home") {
    e.preventDefault();
    setInspSampleTab("complaint");
    const btn = $("insp-tab-btn-complaint");
    if (btn) btn.focus();
  } else if (e.key === "End") {
    e.preventDefault();
    setInspSampleTab("estimates");
    const btn = $("insp-tab-btn-estimates");
    if (btn) btn.focus();
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const target = e.currentTarget;
    if (target && target.id === "insp-tab-btn-estimates") {
      setInspSampleTab("estimates");
    } else if (target && target.id === "insp-tab-btn-complaint") {
      setInspSampleTab("complaint");
    }
  }
}

/**
 * Builds HTML for Tab 1: Complaint & Assessment of the Service Intake sample job card.
 * All content is fixed literal text with static, non-interactive fields.
 * @returns {string} HTML string.
 */
function getInspSampleComplaintTabHtml() {
  return `
    <!-- Section A: Customer Complaint -->
    <div class="insp-section">
      <div class="insp-section-heading">CUSTOMER COMPLAINT</div>
      <div class="insp-static-box">
        The engine stutters heavily when accelerating on the highway. Also, the brakes feel extremely soft and take longer to stop. I'd like a general fluids check while it's in the shop.
      </div>
    </div>

    <!-- Section B: Motorcycle Information -->
    <div class="insp-section">
      <div class="insp-section-heading">MOTORCYCLE INFORMATION</div>
      <div class="insp-field-item" style="margin-bottom:10px">
        <span class="insp-field-label">AUTO-FILL FROM EXISTING MOTORCYCLE OR CUSTOMER</span>
        <div class="insp-field-value muted-placeholder">
          Type plate number (e.g. ABC-1234) or customer phone...
        </div>
      </div>
      <div class="insp-field-grid">
        <div class="insp-field-item">
          <span class="insp-field-label">PLATE NUMBER</span>
          <div class="insp-field-value">ABC-1234</div>
        </div>
        <div class="insp-field-item">
          <span class="insp-field-label">MAKE / BRAND</span>
          <div class="insp-field-value">Yamaha</div>
        </div>
        <div class="insp-field-item">
          <span class="insp-field-label">MODEL</span>
          <div class="insp-field-value">Sniper 150 V2</div>
        </div>
      </div>
    </div>

    <!-- Section C: Mechanic Assessment (Digital & Physical) -->
    <div class="insp-section">
      <div class="insp-section-heading">MECHANIC ASSESSMENT (DIGITAL &amp; PHYSICAL)</div>
      
      <!-- Digital Scan (OBD2) -->
      <div style="margin-bottom:16px">
        <div class="insp-field-label" style="margin-bottom:6px">DIGITAL SCAN (OBD2)</div>
        <div class="insp-search-row">
          <span class="insp-search-text">Search OBD2 code (e.g., P0300)...</span>
          <span class="insp-add-pill">Add</span>
        </div>
        <div class="insp-block-card">
          <div class="insp-block-title">Logged Codes &amp; Diagnostics</div>
          <div class="insp-code-chips-row">
            <span class="insp-code-chip">OBD2 CODE: P0300</span>
            <span class="insp-code-chip">P0302</span>
          </div>
          <div style="font-size:13px;color:var(--text-primary);line-height:1.5">
            <b>Findings:</b> Random/Multiple cylinder misfire detected, localized primarily to Cylinder 2.
          </div>
        </div>
      </div>

      <!-- Physical Inspection Notes -->
      <div>
        <div class="insp-field-label" style="margin-bottom:6px">PHYSICAL INSPECTION NOTES</div>
        <div class="insp-search-row">
          <span class="insp-search-text">Search or add observation category (e.g., Brakes)...</span>
          <span class="insp-add-pill">Add</span>
        </div>
        <div class="insp-block-card">
          <div class="insp-block-title">Detailed Inspection Log</div>
          <div class="insp-log-lines">
            <div>- Engine Bay: Visual inspection confirms worn ignition coil boots and carbon-fouled spark plugs. Belts and hoses appear intact.</div>
            <div>- Brake System: Brake fluid visually dark and contaminated; tested at &gt;4% moisture content. Brake pads (6mm) and rotors are within acceptable limits.</div>
            <div>- Hydraulic Fluids: Clutch and brake fluid levels checked; brake fluid replacement recommended.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Builds HTML for Tab 2: Estimates & Details of the Service Intake sample job card.
 * All content is fixed literal text with static, non-interactive fields and tables.
 * @returns {string} HTML string.
 */
function getInspSampleEstimatesTabHtml() {
  return `
    <!-- Section A: Parts Allocated -->
    <div class="insp-section">
      <div class="insp-section-heading">PARTS ALLOCATED</div>
      <div class="insp-search-row">
        <span class="insp-search-text">Search the parts catalog...</span>
        <span class="insp-add-pill">Add</span>
      </div>
      <div class="insp-block-card" style="padding:0;overflow:hidden">
        <div style="padding:14px 16px 8px;font-size:13px;font-weight:700;color:var(--text-primary)">
          Allocated Parts List
        </div>
        <div class="insp-table-wrap" style="border:none;border-radius:0;margin:0">
          <table class="insp-table">
            <thead>
              <tr>
                <th>PART DESCRIPTION</th>
                <th>STATUS</th>
                <th style="text-align:center">QTY</th>
                <th style="text-align:right">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight:600">Ignition Coil (OEM Yamaha)</td>
                <td style="color:var(--text-secondary)">Provided by Shop</td>
                <td style="text-align:center">1</td>
                <td style="text-align:right;font-weight:600">₱1,200.00</td>
              </tr>
              <tr>
                <td style="font-weight:600">Spark Plugs (NGK)</td>
                <td style="color:var(--text-secondary)">Provided by Customer</td>
                <td style="text-align:center">1</td>
                <td style="text-align:right;font-weight:600">none</td>
              </tr>
              <tr>
                <td style="font-weight:600">DOT-4 Brake Fluid (500ml)</td>
                <td style="color:var(--text-secondary)">Waiting online or other shop</td>
                <td style="text-align:center">1</td>
                <td style="text-align:right;font-weight:600">₱320.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="insp-table-total-row">
          <span>TOTAL PARTS</span>
          <span style="font-weight:700;color:var(--text-primary)">₱1,900.00</span>
        </div>
      </div>
    </div>

    <!-- Section B: Estimated Labor Tasks -->
    <div class="insp-section">
      <div class="insp-section-heading">ESTIMATED LABOR TASKS</div>
      <div class="insp-search-row">
        <span class="insp-search-text">Search standard labor tasks...</span>
        <span class="insp-add-pill">Add</span>
      </div>
      <div class="insp-block-card">
        <div class="insp-block-title">Labor Action Plan</div>
        <ol class="insp-action-list">
          <li>Complete OBD2 diagnostic scan and test.</li>
          <li>Replace ignition coil and spark plugs (Cylinder 2 focus).</li>
          <li>Flush and bleed brake system, front and rear.</li>
          <li>Road test and verify engine performance and brake response.</li>
        </ol>
        <div class="insp-labor-price-row">
          <span>ESTIMATED LABOR PRICE</span>
          <span style="color:var(--text-primary)">₱1,200.00</span>
        </div>
      </div>
    </div>

    <!-- Section C: Accounting Breakdown Card -->
    <div class="insp-section">
      <div class="insp-section-heading">ACCOUNTING BREAKDOWN</div>
      <div class="insp-acc-card">
        <div class="insp-acc-row">
          <span>Parts Subtotal</span>
          <span style="font-weight:600">₱1,900.00</span>
        </div>
        <div class="insp-acc-row">
          <span>Labor Estimated</span>
          <span style="font-weight:600">₱1,200.00</span>
        </div>
        <div class="insp-acc-row">
          <span>Shop Supplies / Env. Fee</span>
          <span style="font-weight:600">₱150.00</span>
        </div>
        <div class="insp-acc-row total">
          <span>Total Estimate</span>
          <span>₱3,250.00</span>
        </div>
        <div class="insp-acc-divider"></div>
        <div class="insp-acc-row">
          <span>Advance Payment</span>
          <span style="font-weight:600">₱1,000.00</span>
        </div>
        <div class="insp-acc-row balance">
          <span>Total Balance</span>
          <span>₱2,250.00</span>
        </div>
      </div>
    </div>

    <!-- Section D: Customer Information -->
    <div class="insp-section">
      <div class="insp-section-heading">CUSTOMER INFORMATION</div>
      <div class="insp-field-grid-2">
        <div class="insp-field-item">
          <span class="insp-field-label">Full Name</span>
          <div class="insp-field-value">Alex Mercer</div>
        </div>
        <div class="insp-field-item">
          <span class="insp-field-label">Contact Number</span>
          <div class="insp-field-value">+63 917 123 4567</div>
        </div>
      </div>
      <div class="insp-save-info-pill">Save info</div>
    </div>

    <!-- Section E: Send to Service Status pill -->
    <div class="insp-send-status-row">
      <div class="insp-send-status-pill">
        Send to Service Status &rarr;
      </div>
    </div>
  `;
}

/**
 * Builds the complete outer layout for the Service Intake static sample job card.
 * Includes Service Type triangle diagram, Job Card Header, 2-tab segmented control, and panel container.
 * @returns {string} HTML string.
 */
function getInspSampleJobHtml() {
  const isComplaint = inspSampleTab === "complaint";

  return `
    <div class="insp-sample-wrap">
      <!-- 1. Service Type Triangle Diagram -->
      <div class="insp-triangle-wrap" role="group" aria-label="Service type: Both (Repair and Maintenance) selected">
        <div class="insp-triangle-heading">SERVICE TYPE</div>
        <div class="insp-triangle-stage">
          <svg class="insp-triangle-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,14 18,88 82,88" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,4" vector-effect="non-scaling-stroke" />
          </svg>
          <!-- Top Node: Both (Repair & Maint.) - Selected -->
          <div class="insp-triangle-node node-top selected" aria-current="true">
            <span class="insp-triangle-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="18" r="3"></circle>
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M18 6v6a3 3 0 0 1-3 3H9"></path>
              </svg>
            </span>
            <span class="insp-triangle-text">Both (Repair &amp; Maint.)</span>
          </div>
          <!-- Bottom-Left Node: Repair -->
          <div class="insp-triangle-node node-left">
            <span class="insp-triangle-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </span>
            <span class="insp-triangle-text">Repair</span>
          </div>
          <!-- Bottom-Right Node: Maintenance -->
          <div class="insp-triangle-node node-right">
            <span class="insp-triangle-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <span class="insp-triangle-text">Maintenance</span>
          </div>
        </div>
      </div>

      <!-- 2. Job Card White Card -->
      <div class="insp-sample-card">
        <!-- Header -->
        <div class="insp-sample-header">
          <div class="insp-sample-header-left">
            <h2>JC's Motor Shop</h2>
            <div class="insp-sample-subtitle">
              <span>MotoCare Job Card</span>
              <span class="insp-sample-id">#JC-2026-6492</span>
            </div>
          </div>
          <div class="insp-sample-header-right">
            <span class="insp-header-badge">Both (Repair &amp; Maintenance)</span>
          </div>
        </div>

        <!-- Two Tab Buttons -->
        <div class="insp-tab-bar" role="tablist" aria-label="Job card sections">
          <button
            type="button"
            id="insp-tab-btn-complaint"
            class="insp-tab-btn ${isComplaint ? "active" : ""}"
            role="tab"
            aria-selected="${isComplaint ? "true" : "false"}"
            aria-controls="insp-tab-panel"
            tabindex="${isComplaint ? "0" : "-1"}"
            onclick="setInspSampleTab('complaint')"
            onkeydown="handleInspTabKeydown(event)"
          >
            Complaint &amp; Assessment
          </button>
          <button
            type="button"
            id="insp-tab-btn-estimates"
            class="insp-tab-btn ${!isComplaint ? "active" : ""}"
            role="tab"
            aria-selected="${!isComplaint ? "true" : "false"}"
            aria-controls="insp-tab-panel"
            tabindex="${!isComplaint ? "0" : "-1"}"
            onclick="setInspSampleTab('estimates')"
            onkeydown="handleInspTabKeydown(event)"
          >
            Estimates &amp; Details
          </button>
        </div>

        <!-- Tab Panel Container -->
        <div
          id="insp-tab-panel"
          role="tabpanel"
          aria-labelledby="insp-tab-btn-${inspSampleTab}"
        >
          ${isComplaint ? getInspSampleComplaintTabHtml() : getInspSampleEstimatesTabHtml()}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================
   Service Status: STATIC CARDS & STATUS FILTER
   ========================================================== */

/**
 * Filter chip definitions for the Service Status demo view.
 * Exact 5 filters in specified order with fixed counts.
 */
const REP_STATUS_CHIPS = [
  { key: "all", label: "All Active (7)" },
  { key: "awaiting", label: "Awaiting Parts/Approval" },
  { key: "waiting", label: "Waiting for Mechanic" },
  { key: "progress", label: "In Progress" },
  { key: "checking", label: "Checking" },
];

/**
 * Static sample repair cards for the Service Status demo view.
 * Plain display-only data; does not read/write stored jobs or ST statuses.
 */
const REP_STATIC_CARDS = [
  { plate: "GHI-3412", motorcycle: "Suzuki Raider R150", filter: "progress", badgeText: "IN PROGRESS", markedBy: "Hiyo", services: "Change oil, Tune-up", total: "₱1,360" },
  { plate: "JKL-7821", motorcycle: "Honda ADV 160", filter: "progress", badgeText: "IN PROGRESS", markedBy: "Larpus", services: "CVT cleaning", total: "₱750" },
  { plate: "MNO-9043", motorcycle: "Yamaha Sniper 150 V2", filter: "progress", badgeText: "IN PROGRESS", markedBy: "Hiyo", services: "Change oil, Valve clearance", total: "₱1,200" },
  { plate: "XYZ-1122", motorcycle: "Kawasaki Ninja 400", filter: "awaiting", badgeText: "AWAITING PARTS", markedBy: "Alex F.", services: "Clutch assembly replacement", total: "₱4,500" },
  { plate: "QWE-5544", motorcycle: "Vespa Primavera 150", filter: "checking", badgeText: "CHECKING", markedBy: "Ben M.", services: "Diagnostic scan, Electrical", total: "TBD" },
  { plate: "DEF-5678", motorcycle: "Yamaha NMAX 155", filter: "waiting", badgeText: "WAITING MECHANIC", markedBy: "—", services: "Periodic Maintenance", total: "₱950" },
  { plate: "RTY-3321", motorcycle: "Honda Click 125i", filter: "waiting", badgeText: "WAITING MECHANIC", markedBy: "—", services: "FI Cleaning, Spark Plug", total: "₱800" },
];

/**
 * Active status filter key on Service Status page.
 * Values: "all" | "awaiting" | "waiting" | "progress" | "checking".
 * Lives only in memory, resets to "all" on page open.
 */
let repStatusFilter = "all";

/**
 * Builds HTML string for the 5 status filter chip buttons.
 * @returns {string} HTML string of chip buttons.
 */
function getRepFilterChipsHtml() {
  return REP_STATUS_CHIPS.map((c) => {
    const isSelected = repStatusFilter === c.key;
    return `<button
      type="button"
      id="rep-chip-${c.key}"
      class="chip rep-filter-chip rep-filter-chip--${c.key}${isSelected ? " on" : ""}"
      aria-pressed="${isSelected ? "true" : "false"}"
      onclick="setRepStatusFilter('${c.key}')"
    >${c.label}</button>`;
  }).join("");
}

/**
 * Builds HTML string for the static repair cards matching current filter.
 * @returns {string} HTML string of cards.
 */
function getRepCardsHtml() {
  const cards = repStatusFilter === "all"
    ? REP_STATIC_CARDS
    : REP_STATIC_CARDS.filter((item) => item.filter === repStatusFilter);

  return cards.map((item) => `
    <div class="rep-card rep-static-card">
      <div class="rep-card-header">
        <div class="rep-card-plate-wrap">
          <b class="rep-card-plate">${escHtml(item.plate)}</b>
          <div class="rep-card-sub">${escHtml(item.motorcycle)}</div>
        </div>
        <div class="rep-card-badge">
          <span class="bd">${escHtml(item.badgeText)}</span>
        </div>
      </div>
      <div class="rep-card-divider"></div>
      <div class="rep-card-body">
        <div class="rep-card-row">
          <span class="rep-card-label">MARKED BY</span>
          <span class="rep-card-val">${escHtml(item.markedBy)}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">SERVICES</span>
          <span class="rep-card-val rep-card-services" title="${escHtml(item.services)}">${escHtml(item.services)}</span>
        </div>
        <div class="rep-card-row">
          <span class="rep-card-label">TOTAL</span>
          <b class="rep-card-val rep-card-total">${escHtml(item.total)}</b>
        </div>
      </div>
      <div class="rep-card-pill">Job card &rarr;</div>
    </div>
  `).join("");
}

/**
 * Sets active status filter on the Service Status page and updates the DOM.
 * Updates aria-pressed and classes on chips, and re-renders the card grid.
 * @param {"all"|"awaiting"|"waiting"|"progress"|"checking"} filter - Target status key.
 */
function setRepStatusFilter(filter) {
  repStatusFilter = filter;
  REP_STATUS_CHIPS.forEach((c) => {
    const btn = $(`rep-chip-${c.key}`);
    if (btn) {
      const isSelected = repStatusFilter === c.key;
      btn.className = `chip rep-filter-chip rep-filter-chip--${c.key}${isSelected ? " on" : ""}`;
      btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
    }
  });
  const gridEl = $("rep-static-grid");
  if (gridEl) {
    gridEl.innerHTML = getRepCardsHtml();
  }
}

/* ==========================================================
   ADMIN DASHBOARD HELPERS
   ========================================================== */

/**
 * Computes today's actual paid revenue, labor earnings, and parts billed.
 * Aggregates paid completed work orders, today's advance payments, Quick Sales, and Quick Labor.
 * Strictly excludes voided, reversed, and cancelled records.
 * @returns {{ revenue: number, labor: number, parts: number }}
 */
function getTodayRevenueData() {
  const todayStr = today();
  let revenue = 0;
  let labor = 0;
  let parts = 0;

  // 1. Paid completed work orders today (matches Reports JOBS COMPLETED & REVENUE)
  const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter(isCountableJob);
  countableWos.forEach((o) => {
    if (o.st === "Completed") {
      const isPaidToday = (o.done && o.done.slice(0, 10) === todayStr) ||
                          (o.pay && o.pay.paidAt && o.pay.paidAt.slice(0, 10) === todayStr);
      if (isPaidToday) {
        const brk = getOrderTotals(o);
        labor += (Number(brk.labor) || 0);
        parts += (Number(brk.parts) || 0);
        revenue += (Number(brk.total) || 0);
      }
    }
  });

  // 2. Quick Sales and Quick Labor recorded today in D.sales (excluding voided)
  const sales = Array.isArray(D.sales) ? D.sales : [];
  sales.forEach((s) => {
    if (!s) return;
    const isVoided = Boolean(s.voided || s.isVoided || s.st === "Voided" || s.st === "Cancelled");
    if (isVoided) return;
    const saleDate = (s.at || s.date || "").slice(0, 10);
    if (saleDate === todayStr) {
      const amt = Number(s.amount || s.total) || 0;
      if (amt > 0) {
        revenue += amt;
        const isLabor = s.type === "QUICK LABOR" || s.type === "Labor" || Boolean(s.isLabor);
        if (isLabor) {
          const laborPart = Number(s.laborSubtotal) || amt;
          const partsPart = Number(s.partsSubtotal) || 0;
          labor += laborPart;
          parts += partsPart;
        } else {
          parts += amt;
        }
      }
    }
  });

  return {
    revenue: Math.round(revenue),
    labor: Math.round(labor),
    parts: Math.round(parts)
  };
}

/**
 * Builds HTML for the "Attention Required" feed on Admin Dashboard.
 * Lists active jobs needing action (newest first, up to 6) with view all link to Active Repairs.
 * A job qualifies if status is Awaiting Parts/Approval, Checking, or has no mechanic assigned.
 * @param {Array<Object>} countableWos
 * @returns {string} HTML string.
 */
function getDashAttentionRequiredHtml(countableWos) {
  const list = countableWos.filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st === "Completed" || o.st === "Cancelled" || o.st === "Ready for Pickup") return false;
    const isUnassigned = !o.mech || o.mech === "Unassigned" || o.mech.trim() === "";
    const isAwaiting = o.st === "Awaiting Parts/Approval";
    const isChecking = o.st === "Checking";
    return isUnassigned || isAwaiting || isChecking;
  });

  // Sort newest first, up to 6
  list.sort((a, b) => (b.at || "").localeCompare(a.at || "") || (b.id || "").localeCompare(a.id || ""));
  const displayItems = list.slice(0, 6);

  if (!displayItems.length) {
    return `
      <div class="card dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title-wrap">
            <span class="dash-panel-icon">${LINE_ICONS.rep}</span>
            <h2 class="dash-panel-title">Attention Required</h2>
          </div>
          <a href="javascript:void(0)" onclick="repStatusFilter='all';go('rep')" class="dash-view-all">View all &rarr;</a>
        </div>
        <div class="dash-panel-body">
          <div class="dash-empty-state">Nothing needs attention right now.</div>
        </div>
      </div>
    `;
  }

  const rowsHtml = displayItems.map((o) => {
    const b = o.bid ? bike(o.bid) : null;
    const plate = b && b.plate ? b.plate : (o.plate || "NO PLATE");
    const model = b ? `${b.make || ""} ${b.model || ""}`.trim() : (o.model || "");

    const isUnassigned = !o.mech || o.mech === "Unassigned" || o.mech.trim() === "";
    let reasonText = "";
    let reasonCls = "";
    let btnLabel = "";

    if (isUnassigned) {
      reasonText = "No mechanic";
      reasonCls = "dash-reason-unassigned";
      btnLabel = "Assign";
    } else if (o.st === "Awaiting Parts/Approval") {
      reasonText = "Awaiting parts/approval";
      reasonCls = "dash-reason-awaiting";
      btnLabel = "Update Quote";
    } else {
      reasonText = "Final check";
      reasonCls = "dash-reason-checking";
      btnLabel = "View Job Card";
    }

    const itemLines = typeof lines === "function" ? lines(o) : (o.items || []);
    const tot = typeof total === "function" ? total(o) : (o.total || 0);
    const totalText = (!itemLines || itemLines.length === 0 || !tot || tot <= 0) ? "TBD" : P(tot);

    return `
      <div class="dash-list-row">
        <div class="dash-row-left">
          <div class="dash-row-main">
            <b class="dash-plate" title="${escHtml(plate)}">${escHtml(plate)}</b>
            ${model ? `<span class="dash-model" title="${escHtml(model)}">${escHtml(model)}</span>` : ""}
          </div>
          <div class="dash-row-tags">
            ${badge(o.st)}
            <span class="dash-reason-tag ${reasonCls}">${escHtml(reasonText)}</span>
          </div>
        </div>
        <div class="dash-row-right">
          <span class="dash-row-total">${totalText}</span>
          <button
            type="button"
            class="btn sm dash-action-btn"
            onclick="openInspModal('${o.id}')"
            aria-label="${btnLabel} for ${escHtml(plate)}"
          >
            ${btnLabel}
          </button>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="card dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title-wrap">
          <span class="dash-panel-icon">${LINE_ICONS.rep}</span>
          <h2 class="dash-panel-title">Attention Required</h2>
        </div>
        <a href="javascript:void(0)" onclick="repStatusFilter='all';go('rep')" class="dash-view-all">View all &rarr;</a>
      </div>
      <div class="dash-panel-body">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Builds HTML for "Mechanic Floor Status" card on Admin Dashboard.
 * Displays mechanic roster with active workload, Busy/Free badges, and unassigned queue.
 * @param {Array<Object>} countableWos
 * @returns {string} HTML string.
 */
function getDashMechanicFloorStatusHtml(countableWos) {
  const users = typeof loadUsers === "function" ? loadUsers() : [];
  const mechanics = users.filter((u) => u && u.role === "mechanic" && u.active !== false);

  const unassignedJobs = countableWos.filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st === "Completed" || o.st === "Cancelled" || o.st === "Ready for Pickup") return false;
    return !o.mech || o.mech === "Unassigned" || o.mech.trim() === "";
  });

  const unassignedPlates = unassignedJobs.map((o) => {
    const b = o.bid ? bike(o.bid) : null;
    return (b && b.plate) || o.plate || "NO PLATE";
  });
  const unassignedPlatesText = unassignedPlates.length ? unassignedPlates.join(", ") : "None";

  let bodyContent = "";
  if (!mechanics.length) {
    bodyContent = `<div class="dash-empty-state">No mechanics added yet.</div>`;
  } else {
    const mechRows = mechanics.map((u) => {
      const mechJobs = countableWos.filter((o) => {
        if (!isCountableJob(o)) return false;
        const st = o.st;
        if (st !== "In Progress" && st !== "Diagnosing" && st !== "Checking" && st !== "Awaiting Parts/Approval") return false;
        return Boolean(o.mech && o.mech.trim().toLowerCase() === u.name.trim().toLowerCase());
      });

      const platesList = mechJobs.map((o) => {
        const b = o.bid ? bike(o.bid) : null;
        return (b && b.plate) || o.plate || "NO PLATE";
      });
      const platesText = platesList.join(", ");
      const isBusy = mechJobs.length > 0;
      const countLabel = `${mechJobs.length} active ${mechJobs.length === 1 ? "job" : "jobs"}`;

      return `
        <div class="dash-list-row">
          <div class="dash-row-left">
            <b class="dash-mechanic-name">${escHtml(u.name)}</b>
            <div class="dash-mechanic-jobs" title="${escHtml(platesText ? countLabel + " · " + platesText : countLabel)}">
              ${countLabel}${platesText ? ` · <span class="dash-plates-text">${escHtml(platesText)}</span>` : ""}
            </div>
          </div>
          <div class="dash-row-right">
            ${isBusy ? `<span class="dash-badge-busy">Busy</span>` : `<span class="dash-badge-free">Free</span>`}
          </div>
        </div>
      `;
    }).join("");

    bodyContent = mechRows;
  }

  const unassignedRowHtml = `
    <div class="dash-unassigned-row">
      <div class="dash-row-left">
        <b style="font-size:13px;color:var(--text-primary)">Unassigned queue</b>
        <div class="dash-mechanic-jobs" title="${escHtml(unassignedPlatesText)}">
          ${unassignedJobs.length} active ${unassignedJobs.length === 1 ? "job" : "jobs"}${unassignedPlates.length ? ` · <span class="dash-plates-text">${escHtml(unassignedPlatesText)}</span>` : ""}
        </div>
      </div>
      <div class="dash-row-right">
        <span class="dash-badge-unassigned">${unassignedJobs.length}</span>
      </div>
    </div>
  `;

  return `
    <div class="card dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title-wrap">
          <span class="dash-panel-icon">${LINE_ICONS.rep}</span>
          <h2 class="dash-panel-title">Mechanic Floor Status</h2>
        </div>
      </div>
      <div class="dash-panel-body">
        ${bodyContent}
        ${unassignedRowHtml}
      </div>
    </div>
  `;
}

/**
 * Builds HTML for "Today's Sales" card on Admin Dashboard.
 * Lists Quick Sales and Quick Labor recorded today (excluding voided), newest first, up to 6.
 * @returns {string} HTML string.
 */
function getDashTodaySalesHtml() {
  const todayStr = today();
  const sales = (Array.isArray(D.sales) ? D.sales : []).filter((s) => {
    if (!s) return false;
    const isVoided = Boolean(s.voided || s.isVoided || s.st === "Voided" || s.st === "Cancelled");
    if (isVoided) return false;
    const saleDate = (s.at || s.date || "").slice(0, 10);
    return saleDate === todayStr;
  });

  // Sort newest first, up to 6
  sales.sort((a, b) => (b.at || b.date || "").localeCompare(a.at || a.date || ""));
  const displaySales = sales.slice(0, 6);

  if (!displaySales.length) {
    return `
      <div class="card dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title-wrap">
            <span class="dash-panel-icon">${LINE_ICONS.pos}</span>
            <h2 class="dash-panel-title">Today's Sales</h2>
          </div>
        </div>
        <div class="dash-panel-body">
          <div class="dash-empty-state">No sales yet today.</div>
        </div>
      </div>
    `;
  }

  let todaySalesTotal = 0;
  sales.forEach((s) => {
    todaySalesTotal += (Number(s.amount || s.total) || 0);
  });

  const rowsHtml = displaySales.map((s) => {
    const isLabor = s.type === "QUICK LABOR" || s.type === "Labor" || Boolean(s.isLabor);
    const typeBadge = isLabor
      ? `<span class="badge" style="background:#EEF2FF;color:#4338CA;border-color:#C7D2FE">Labor</span>`
      : `<span class="badge" style="background:#F0FDF4;color:#15803D;border-color:#BBF7D0">Sale</span>`;

    const timeStr = formatJobTime(s.at || s.date || "");
    const amt = Number(s.amount || s.total) || 0;

    let summary = s.summary || "";
    if (!summary && Array.isArray(s.items)) {
      summary = s.items.map((it) => (typeof it === "string" ? it : (it.name || it.label || ""))).filter(Boolean).join(", ");
    }
    if (!summary) {
      summary = typeof s.items === "string" ? s.items : (isLabor ? "Quick Labor Service" : "Counter Sale");
    }

    return `
      <div class="dash-list-row">
        <div class="dash-row-left">
          <div class="dash-row-main">
            ${typeBadge}
            <span class="dash-time">${escHtml(timeStr || "Today")}</span>
          </div>
          <div class="dash-summary-line" title="${escHtml(summary)}">${escHtml(summary)}</div>
        </div>
        <div class="dash-row-right">
          <b class="dash-amount">${P(amt)}</b>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="card dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title-wrap">
          <span class="dash-panel-icon">${LINE_ICONS.pos}</span>
          <h2 class="dash-panel-title">Today's Sales</h2>
        </div>
      </div>
      <div class="dash-panel-body">
        ${rowsHtml}
        <div class="dash-sales-footer">
          <span>Today's Total:</span>
          <b>${P(todaySalesTotal)}</b>
        </div>
      </div>
    </div>
  `;
}

/**
 * Builds HTML for "Ready for Pickup / Pending Settlement" card on Admin Dashboard.
 * Lists jobs in Ready for Pickup or with balance due (up to 6) with "Open in POS" button.
 * Exact set agrees with Pending Payments KPI card.
 * @param {Array<Object>} pendingPaymentJobs
 * @returns {string} HTML string.
 */
function getDashPendingSettlementHtml(pendingPaymentJobs) {
  const displayJobs = pendingPaymentJobs.slice(0, 6);

  if (!displayJobs.length) {
    return `
      <div class="card dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title-wrap">
            <span class="dash-panel-icon">${ICONS.money}</span>
            <h2 class="dash-panel-title">Ready for Pickup / Pending Settlement</h2>
          </div>
        </div>
        <div class="dash-panel-body">
          <div class="dash-empty-state">No pending payments.</div>
        </div>
      </div>
    `;
  }

  const rowsHtml = displayJobs.map((o) => {
    const b = o.bid ? bike(o.bid) : null;
    const c = b ? own(b) : null;
    const plate = b && b.plate ? b.plate : (o.plate || "NO PLATE");
    const custName = c && c.name ? c.name : (o.customer || "Walk-in Customer");

    const tot = typeof total === "function" ? total(o) : (Number(o.total) || 0);
    let adv = 0;
    if (typeof o.advances === "number") adv = o.advances;
    else if (Array.isArray(o.advances)) {
      adv = o.advances.reduce((s, a) => s + (typeof a === "number" ? a : (Number(a.amount || a.a) || 0)), 0);
    }
    const balanceDue = Math.max(0, tot - adv);

    return `
      <div class="dash-list-row">
        <div class="dash-row-left">
          <div class="dash-row-main">
            <b class="dash-plate" title="${escHtml(plate)}">${escHtml(plate)}</b>
            <span class="dash-customer" title="${escHtml(custName)}">${escHtml(custName)}</span>
          </div>
          <div class="dash-row-tags">
            ${badge(o.st)}
            <span class="dash-due-tag">Due: ${P(balanceDue)}</span>
          </div>
        </div>
        <div class="dash-row-right">
          ${canOpen("bill") ? `
            <button
              type="button"
              class="btn sm dash-action-btn"
              onclick="openJobInPos('${o.id}')"
              aria-label="Open ${escHtml(plate)} in POS"
            >
              Open in POS
            </button>
          ` : ""}
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="card dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title-wrap">
          <span class="dash-panel-icon">${ICONS.money}</span>
          <h2 class="dash-panel-title">Ready for Pickup / Pending Settlement</h2>
        </div>
      </div>
      <div class="dash-panel-body">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Opens Transactions & Billing with the target work order or transaction invoice opened.
 * @param {string} jobId - Work order or transaction record ID.
 */
function openJobInPos(jobId) {
  if (!canOpen("bill")) return;
  const o = g("wo", jobId) || (Array.isArray(SEEDED_BILL_ORDERS) ? SEEDED_BILL_ORDERS.find((x) => x.id === jobId) : null);
  const b = o && o.bid ? bike(o.bid) : null;
  const searchVal = (b && b.plate) || (o && (o.plate || o.txnId || o.jo || o.id)) || "";
  go("bill");
  if (searchVal) {
    onBillSearchInput(searchVal);
  }
  openReceipt(jobId);
}

/**
 * Shared page title card builder matching the standard ".card.top" layout.
 * @param {string} title - Page heading text.
 * @param {string} subtitle - Subtitle description text.
 * @returns {string} HTML string.
 */
function renderPageTitleCard(title, subtitle) {
  return `<div class="card top">
  <div>
    <h1>${escHtml(title)}</h1>
    <p>${escHtml(subtitle)}</p>
  </div>
</div>`;
}

/**
 * Renders the static System Admin Dashboard view (superadmin role only).
 * Shows welcome card, 3 fixed technical-status KPI cards, and 4 system navigation tiles.
 * @returns {string} HTML string.
 */
function dashSystemAdmin() {
  const d = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const roleLabel = ROLES.superadmin.label;
  const kpi = (icon, label, value, desc) =>
    `<div class="card st"><div class="ic">${icon}</div><div><small>${escHtml(label)}</small><b>${escHtml(value)}</b><div class="dash-rev-sub">${escHtml(desc)}</div></div></div>`;

  const navTiles = [
    { key: "users", icon: LINE_ICONS.users, label: "System Access & Permissions" },
    { key: "settings", icon: LINE_ICONS.settings, label: "System Settings" },
    { key: "sync", icon: LINE_ICONS.sync, label: "Backup & Sync" },
    { key: "audit", icon: LINE_ICONS.audit, label: "Audit" }
  ];

  return `
    <div class="card top"><div><h1>Welcome back</h1><p>${escHtml(roleLabel)} | ${escHtml(d)}</p></div><span class="pill">● Saved on this device</span></div>

    <div class="stats">
      ${kpi(LINE_ICONS.users, "SYSTEM ACCESS", "4", "Active accounts · 3 roles")}
      ${kpi(LINE_ICONS.backup, "BACKUP STATUS", "Success", "Last run today, 2:00 AM")}
      ${kpi(LINE_ICONS.sync, "SYNC HEALTH", "Healthy", "Last synced 5 min ago")}
    </div>

    <div class="sys-nav-tiles" role="navigation" aria-label="System administration shortcuts">
      ${navTiles.map((t) => `
        <button type="button" class="sys-nav-tile" onclick="go('${t.key}')">
          <span class="sys-nav-tile-icon" aria-hidden="true">${t.icon}</span>
          <span class="sys-nav-tile-label">${escHtml(t.label)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

/**
 * View renderers registry containing HTML generator functions for each screen.
 */
const R = {
  /**
   * Dashboard view: dispatches System Admin to dashSystemAdmin(), Mechanic to dashMechanic(),
   * and keeps Admin on the operational dashboard unchanged.
   * @returns {string} HTML string.
   */
  dash() {
    const u = getCurrentUser();
    if (u && u.activeRole === "superadmin") {
      return dashSystemAdmin();
    }
    if (u && u.activeRole === "mechanic") {
      return dashMechanic();
    }

    const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter(isCountableJob);
    // Active jobs: work orders not yet completed or ready for pickup
    const act = countableWos.filter((o) => o.st != "Completed" && o.st != "Ready for Pickup");
    // Ready jobs / pending settlement: work orders awaiting customer settlement and vehicle pickup
    const pendingPaymentJobs = countableWos.filter((o) => o.st == "Ready for Pickup");
    // Services finished today: work orders with done date matching today
    const dn = countableWos.filter((o) => (o.done || "").slice(0, 10) == today());

    // Today's revenue calculation matching Reports logic
    const revData = getTodayRevenueData();

    // Counts matching Active Repairs
    const unassignedCount = Array.isArray(REP_STATIC_CARDS)
      ? REP_STATIC_CARDS.filter((c) => c.filter === "waiting" || c.markedBy === "—").length
      : countableWos.filter((o) => o.st !== "Completed" && o.st !== "Cancelled" && o.st !== "Ready for Pickup" && (!o.mech || o.mech === "Unassigned" || o.mech.trim() === "")).length;

    const awaitingCount = Array.isArray(REP_STATIC_CARDS)
      ? REP_STATIC_CARDS.filter((c) => c.filter === "awaiting").length
      : countableWos.filter((o) => o.st === "Awaiting Parts/Approval" && !o.cancel).length;

    const d = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const roleLabel = u ? (ROLES[u.activeRole]?.label || u.activeRole) : "Admin";

    return `
      <div class="card top"><div><h1>Welcome back</h1><p>${roleLabel} | ${d}</p></div><span class="pill">● Saved on this device</span></div>

      ${getDashStatCardsHtml(act.length, pendingPaymentJobs.length, dn.length, revData, { showRevenue: true })}

      ${getDashQuickActionsHtml(unassignedCount, awaitingCount, { isMechanic: false })}

      <!-- Middle Row: Attention Required & Mechanic Floor Status (2 columns desktop, 1 mobile) -->
      <div class="dash-grid-2col">
        ${getDashAttentionRequiredHtml(countableWos)}
        ${getDashMechanicFloorStatusHtml(countableWos)}
      </div>

      <!-- Bottom Row: Today's Sales & Ready for Pickup / Pending Settlement (2 columns desktop, 1 mobile) -->
      <div class="dash-grid-2col">
        ${getDashTodaySalesHtml()}
        ${getDashPendingSettlementHtml(pendingPaymentJobs)}
      </div>
    `;
  },

  /**
   * Customers & Motorcycles view: lists customers with expandable registered motorcycles and quick actions.
   * @returns {string} HTML string.
   */
  cust() {
    return `
      <div class="cust-header">
        <h1 class="cust-title">Customers &amp; Motorcycles</h1>
        <p class="cust-subtitle">Manage customer profiles and registered motorcycles</p>
      </div>

      <div class="cust-toolbar">
        <div class="cust-search-wrap">
          <span class="cust-search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            id="cust-search-input"
            type="text"
            class="cust-search-input"
            placeholder="Search customers or plates..."
            value="${escHtml(custSearch)}"
            oninput="onCustSearchInput(this.value)"
          />
          <button
            type="button"
            id="cust-search-clear"
            class="cust-search-clear ${custSearch ? "visible" : ""}"
            onclick="clearCustSearch()"
            title="Clear search"
            aria-label="Clear search"
          >✕</button>
        </div>

        <div class="cust-toolbar-actions">
          <button type="button" class="btn" onclick="openNewCustomerModal()">+ New Customer</button>
          <button type="button" class="btn g" onclick="openRegisterVehicleModal()">+ Register Vehicle</button>
        </div>
      </div>

      <div id="cust-table-wrap">
        ${renderCustTableHtml()}
      </div>
    `;
  },

  /**
   * Service Intake view: renders page title card and static sample job card.
   * Resets active sample tab to "complaint" on every page open.
   * @returns {string} HTML string.
   */
  insp() {
    inspSampleTab = "complaint";
    return `<div class="card top">
  <div>
    <h1>Service Intake</h1>
    <p>Register a motorcycle and start a new job order</p>
  </div>
</div>${getInspSampleJobHtml()}`;
  },

  /**
   * Service Status view: renders page title card, 5 status filter chips, and 7 static cards.
   * Resets active filter to "all" on every page open.
   * @returns {string} HTML string.
   */
  rep() {
    if (!repStatusFilter) repStatusFilter = "all";
    return `<div class="card top">
  <div>
    <h1>Service Status</h1>
    <p>Move each job through the work order lifecycle</p>
  </div>
</div>
<div class="rep-chips" id="rep-filter-chips" role="group" aria-label="Filter by status">
  ${getRepFilterChipsHtml()}
</div>
<div class="rep-static-grid" id="rep-static-grid">
  ${getRepCardsHtml()}
</div>`;
  },

  /**
   * Quick Sales view: fast checkout for labor and parts catalog items.
   * @returns {string} HTML string.
   */
  pos() {
    return getPosViewHtml();
  },

  /**
   * Quick Labor view: fast-track logging and checkout for walk-in minor repairs and part replacements.
   * Preserves cart state across tab navigation.
   * @returns {string} HTML string.
   */
  ql() {
    return getQuickLaborViewHtml();
  },

  /**
   * Dedicated Quick Labor view for the Mechanic role.
   * Renders the existing Quick Labor tab content with the 3-tab POS switcher hidden.
   * Reuses the exact same getQuickLaborViewHtml() without code duplication.
   * @returns {string} HTML string.
   */
  qlabor() {
    return getQuickLaborViewHtml();
  },

  /**
   * Service & Parts Catalog view: Quick-Select Price Menu.
   * Displays labor services and parts in one unified price menu with live search.
   * @returns {string} HTML string.
   */
  cat() {
    return `
      <div class="card top">
        <div>
          <h1>Service &amp; Parts Catalog</h1>
          <p>Quick-select price menu used when recording services and items.</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          ${isSuper() ? `<button type="button" class="btn g" data-demo="true" onclick="showDemoNotice()">Import CSV</button>` : ""}
          <button type="button" class="btn" data-demo="true" onclick="showDemoNotice()">+ Add Menu Item</button>
        </div>
      </div>

      <div class="card" style="padding:12px 16px;margin-bottom:16px">
        <input
          id="cat-search-input"
          type="text"
          placeholder="Search price menu items by name..."
          value="${escHtml(catSearch)}"
          style="height:42px;font-size:14px;width:100%"
        />
        <div id="cat-chips" class="cat-chips" role="group" aria-label="Filter by category">
          ${getCatChipsHtml()}
        </div>
      </div>

      <div class="card" id="cat-table-wrap">
        ${getCatTableHtml()}
      </div>
    `;
  },

  /**
   * Transactions & Billing view: shows billing records, advance payments, and invoice settlements.
   * @returns {string} HTML string.
   */
  bill() {
    billFilter = "all";
    return getBillViewHtml();
  },

  /**
   * Service History view: shows shop-wide toolbar with live search, date range & mechanic filters, CSV export, and completed work orders table.
   * @returns {string} HTML string.
   */
  his() {
    return `<div class="card top">
  <div>
    <h1>Service History</h1>
    <p>Archived repair records and customer service history</p>
  </div>
</div>
<div class="card his-toolbar-card">
  <div class="his-toolbar">
    <div class="his-search-wrap">
      <span class="search-icon" onclick="$('his-search-input').focus()" title="Search">${LINE_ICONS.insp}</span>
      <input
        id="his-search-input"
        type="text"
        placeholder="Search by Plate No., Customer Name, or Date..."
        value="${hisSearch.replace(/"/g, '&quot;')}"
        autocomplete="off"
        onkeydown="if(event.key==='Enter')event.preventDefault()"
      />
      <button
        id="his-search-clear"
        class="search-clear ${hisSearch ? "visible" : ""}"
        type="button"
        title="Clear search"
      >✕</button>
    </div>
    <div class="his-filter-group">
      <select id="his-status-select" class="his-select" onchange="showDemoNotice()">
        <option value="all" ${hisStatus === "all" ? "selected" : ""}>All Status</option>
        <option value="completed" ${hisStatus === "completed" ? "selected" : ""}>Completed</option>
        <option value="cancelled" ${hisStatus === "cancelled" ? "selected" : ""}>Cancelled</option>
      </select>
      <select id="his-date-select" class="his-select" onchange="showDemoNotice()">
        <option value="all" ${hisDate === "all" ? "selected" : ""}>All Time</option>
        <option value="today" ${hisDate === "today" ? "selected" : ""}>Today</option>
        <option value="yesterday" ${hisDate === "yesterday" ? "selected" : ""}>Yesterday</option>
        <option value="7days" ${hisDate === "7days" ? "selected" : ""}>Last 7 Days</option>
        <option value="30days" ${hisDate === "30days" ? "selected" : ""}>Last 30 Days</option>
        <option value="month" ${hisDate === "month" ? "selected" : ""}>This Month</option>
        <option value="lastMonth" ${hisDate === "lastMonth" ? "selected" : ""}>Last Month</option>
        <option value="year" ${hisDate === "year" ? "selected" : ""}>This Year</option>
        <option value="custom" ${hisDate === "custom" ? "selected" : ""}>Custom Range</option>
      </select>
      <select id="his-mech-select" class="his-select" onchange="showDemoNotice()">
        <option value="all" ${hisMech === "all" ? "selected" : ""}>All Staff</option>
        ${getUniqueMechanics().map((m) => `<option value="${m}" ${hisMech === m ? "selected" : ""}>${m}</option>`).join("")}
      </select>
      <button type="button" class="btn g his-btn-export" data-demo="true" onclick="showDemoNotice()" title="Export filtered list to CSV">
        <span style="display:inline-flex;align-items:center">${ICONS.download}</span> Export List
      </button>
    </div>
  </div>
  <div id="his-custom-row" class="his-custom-row ${hisDate === "custom" ? "open" : ""}">
    <label class="his-date-label">From: <input type="date" id="his-date-from" value="${hisFrom}"></label>
    <label class="his-date-label">To: <input type="date" id="his-date-to" value="${hisTo}"></label>
  </div>
  <div id="his-export-toast" class="his-export-toast"></div>
</div>
<div id="his-summary" class="his-summary-text">${getHisSummaryHtml()}</div>
<div id="his-results" class="card his-table-card">${getHisResultsHtml()}</div>
<div class="card his-quick-fix-card" id="his-quick-fix-card" style="margin-top:20px;padding:20px">
  <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:12px">Recent Quick Fix Records</div>
  <div class="his-quick-fix-grid" id="his-quick-fix-grid">
    ${getRecentQuickFixHtml()}
  </div>
</div>`;
  },

  /**
   * Reports view: shop performance, sales, and job reports.
   * Accessible to Admin and Super Admin roles.
   * @returns {string} HTML string.
   */
  reports() {
    return getReportsViewHtml();
  },

  /**
   * Users view: System Access & Permissions for System Admin, User Management (directory only) for Admin.
   * @returns {string} HTML string.
   */
  users() {
    if ((!isSuper() && !isAdmin()) || !canOpen("users")) return renderNoAccess();
    return getUsersViewHtml();
  },

  /**
   * System Settings view (System Admin only; title-card-only in Pass 1).
   * @returns {string} HTML string.
   */
  settings() {
    if (!isSuper() || !canOpen("settings")) return renderNoAccess();
    return renderPageTitleCard("System Settings", "System-level configuration and settings.");
  },

  /**
   * Backup & Sync view (System Admin only; title-card-only in Pass 1).
   * @returns {string} HTML string.
   */
  sync() {
    if (!isSuper() || !canOpen("sync")) return renderNoAccess();
    return renderPageTitleCard("Backup & Sync", "Manage system backups and record synchronization.");
  },

  /**
   * Audit view: activity log and trail.
   * Accessible to Admin (operational activity only) and System Admin (full log).
   * Refused to Mechanic role.
   * @returns {string} HTML string.
   */
  audit() {
    return getAuditViewHtml();
  }
};

/* ==========================================================
   9. ACTIONS / EVENT HANDLERS
   ========================================================== */

/**
/**
 * Clicking a plate number in the table sets the search filter to that plate.
 * @param {string} plate - License plate number.
 */
function filterByPlate(plate) {
  hisSearch = plate;
  const inp = $("his-search-input");
  if (inp) {
    inp.value = plate;
  }
  const clr = $("his-search-clear");
  if (clr) {
    clr.classList.add("visible");
  }
  const sumEl = $("his-summary");
  if (sumEl) {
    sumEl.innerHTML = getHisSummaryHtml();
  }
  const resEl = $("his-results");
  if (resEl) {
    resEl.innerHTML = getHisResultsHtml();
  }
}

/** Last element focused before opening the record modal, for focus restore. */
let lastFocusedEl = null;

/**
 * Opens the View Full Record modal for a completed repair job.
 * Shows comprehensive motorcycle and owner info, this job's details, itemized breakdown,
 * and the complete lifetime repair history of this motorcycle with this job highlighted.
 * @param {string} id - Work order ID.
 */
function openRecord(id) {
  const o = g("wo", id);
  if (!o) return;
  const b = bike(o.bid);
  const c = b ? own(b) : null;
  const isCancelled = o.st === "Cancelled" || Boolean(o.cancel);
  const dateVal = isCancelled ? ((o.cancel && o.cancel.at) || o.at || "") : (o.done || o.at || "");

  // All completed jobs for this motorcycle, sorted newest first
  const bikeHistory = D.wo
    .filter((w) => w.bid === b.id && w.st === "Completed")
    .sort((w1, w2) => (w2.done || w2.at || "").localeCompare(w1.done || w1.at || ""));

  const lifetimeTotal = bikeHistory.reduce((sum, w) => sum + total(w), 0);

  // Inspection findings: treat unmarked items as OK, list Fix items first, then Watch items
  const recInsp = o.inspection || {};
  const recInspItems = recInsp.items || {};
  const recFixList = [];
  const recWatchList = [];
  let recWatchCount = 0;
  let recFixCount = 0;
  if (recInsp.enablePhysical !== false && Object.keys(recInspItems).length > 0) {
    INSPECTION_CHECKLIST.forEach((cat) => {
      cat.items.forEach((item) => {
        const stateObj = recInspItems[`${cat.key}.${item.key}`];
        if (stateObj) {
          if (stateObj.s === "fix") {
            recFixCount++;
            recFixList.push({ catName: cat.name, label: item.label, state: "fix", note: stateObj.note || "" });
          } else if (stateObj.s === "watch") {
            recWatchCount++;
            recWatchList.push({ catName: cat.name, label: item.label, state: "watch", note: stateObj.note || "" });
          }
        }
      });
    });
  }
  const recWatchFixList = [...recFixList, ...recWatchList];
  const recOkCount = Math.max(0, 27 - (recWatchCount + recFixCount));
  const recObdCodes = (recInsp.obd && Array.isArray(recInsp.obd.codes)) ? recInsp.obd.codes : [];

  const html = `
    <div class="rec-header">
      <div>
        <div class="rec-title" id="rec-title">${b ? b.plate : "NO PLATE"} · ${b ? `${b.make} ${b.model}` : "Unknown"} (${b ? (b.year || "—") : "—"})</div>
        <div class="rec-subtitle">Permanent Vehicle &amp; Service Record</div>
      </div>
      <button type="button" class="rec-close-btn" onclick="closeRecord()" title="Close record" aria-label="Close record">✕</button>
    </div>

    <div class="rec-owner-card">
      <div>
        <div class="rec-field-label">Customer / Owner</div>
        <div class="rec-field-val">${c ? c.name : "—"}</div>
      </div>
      <div>
        <div class="rec-field-label">Contact Phone</div>
        <div class="rec-field-val">${c ? c.phone : "—"}</div>
      </div>
    </div>

    <div class="rec-section-title">
      <span>This Job (#${o.id})</span>
      ${isCancelled ? `<span class="badge-cancelled">CANCELLED</span>` : (o.reversed ? `<span class="badge-reversed">REVERSED</span>` : `<span class="bd completed">COMPLETED</span>`)}
    </div>

    ${isCancelled ? `
      <div style="background:#F1F5F9;border:1px solid #CBD5E1;border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:13px;color:#334155">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span class="badge-cancelled">CANCELLED</span>
          <span style="font-size:12px;font-weight:600;color:var(--text-secondary)">
            Cancelled on ${formatJobDate(dateVal)} at ${formatJobTime(dateVal)} by ${escHtml(displayUserName((o.cancel && o.cancel.by) || "Admin"))}
          </span>
        </div>
        <div><b>Reason:</b> ${escHtml((o.cancel && o.cancel.reason) ? o.cancel.reason : "No reason given")}</div>
      </div>
    ` : ""}

    ${o.reversed ? `
      <div style="background:#FEF2F2;border:1px solid #FCA5A5;border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:13px;color:#991B1B">
        <b>TRANSACTION REVERSED:</b> ${escHtml(o.reversed.reason || "Reversed")}
        <div style="font-size:11px;color:#7F1D1D;margin-top:2px">${escHtml(o.reversed.at)} · by ${escHtml(displayUserName(o.reversed.by || "System Admin"))}</div>
      </div>
    ` : ""}

    <div class="rec-job-meta">
      <div>
        <div class="rec-field-label">${isCancelled ? "Cancelled On" : "Completed On"}</div>
        <div class="rec-field-val">${formatJobDate(dateVal)}</div>
        <div style="font-size:11px;color:var(--text-muted)">${formatJobTime(dateVal)}</div>
      </div>
      <div>
        <div class="rec-field-label">Assigned Mechanic</div>
        <div class="rec-field-val">${renderAssignedMechanicsHtml(o)}</div>
      </div>
    </div>

    ${(o.note || o.notes || o.findings || (o.complaints && o.complaints.length ? o.complaints.join(", ") : "")) ? `<div class="rec-note-box"><b>Notes / Diagnosis:</b> ${escHtml(o.note || o.notes || o.findings || o.complaints.join(", "))}</div>` : ""}

    ${(recInsp.enablePhysical !== false || recWatchFixList.length > 0 || recObdCodes.length > 0) ? `
      <div class="rec-note-box" style="margin-top:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <b>Inspection Findings:</b>
          <span style="font-size:12px;color:var(--text-secondary)">OK: ${recOkCount}${recWatchCount > 0 ? ` · Watch: ${recWatchCount}` : ""} · Fix: ${recFixCount}</span>
        </div>
        ${recWatchFixList.length > 0 ? `
          <div style="display:flex;flex-direction:column;gap:4px;margin-top:4px">
            ${recWatchFixList.map((wf) => `
              <div style="font-size:12px;display:flex;align-items:baseline;gap:6px">
                <span class="fault-badge ${wf.state}">${wf.state.toUpperCase()}</span>
                <span><b>${escHtml(wf.label)}</b> <span style="font-size:11px;color:var(--text-muted)">(${escHtml(wf.catName)})</span>${wf.note ? ` — <i>${escHtml(wf.note)}</i>` : ""}</span>
              </div>
            `).join("")}
          </div>
        ` : `<div style="font-size:12px;color:var(--text-muted);margin-top:4px">All inspected items OK.</div>`}
        ${recObdCodes.length > 0 ? `
          <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
            ${recObdCodes.map((c) => getObdCodeSummaryDisplayHtml(c)).join("")}
          </div>
        ` : ""}
      </div>
    ` : ""}

    <table class="rec-bill-table">
      <thead>
        <tr>
          <th>ITEM / SERVICE</th>
          <th class="r">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${lines(o).map((l) => `<tr><td>${escHtml(l.n)}</td><td class="r">${P(l.a)}</td></tr>`).join("")}
        ${o.discount ? `<tr><td style="color:#DC2626">Discount / Adjustment</td><td class="r" style="color:#DC2626">-${P(o.discount)}</td></tr>` : ""}
      </tbody>
    </table>

    <div class="rec-bill-tot">
      <span>Total Cost</span>
      <span>${(o.reversed || isCancelled) ? `<span class="text-struck">${P(total(o))}</span>` : P(total(o))}</span>
    </div>

    <div class="rec-section-title">
      <span>Full Service History of This Motorcycle</span>
    </div>

    <div class="rec-lifetime-banner">
      <div><b>Lifetime Repairs:</b> ${bikeHistory.length} completed job${bikeHistory.length > 1 ? "s" : ""}</div>
      <div><b>Lifetime Total Spent:</b> ${P(lifetimeTotal)}</div>
    </div>

    <div class="rec-timeline">
      ${bikeHistory.map((w) => {
        const isCur = w.id === o.id;
        const wDate = w.done || w.at || "";
        const wSvcList = (w.sv && w.sv.length)
          ? w.sv.map((id) => (g("sv", id) ? g("sv", id).name : id))
          : (w.items && w.items.length)
            ? w.items.filter((i) => i.kind === "labor").map((i) => i.name)
            : (w.complaints && w.complaints.length)
              ? w.complaints
              : [];
        const wSvcs = wSvcList.join(", ") || (w.findings ? "Inspection" : "—");
        return `
          <div class="rec-timeline-item ${isCur ? "current" : ""}">
            <div class="rec-tl-header">
              <div>
                <b>${formatJobDate(wDate)}</b>
                <span class="rec-tl-time">${formatJobTime(wDate)}</span>
                ${isCur ? `<span class="rec-tl-badge">Current Record</span>` : ""}
                ${w.reversed ? `<span class="badge-reversed" style="margin-left:4px">REVERSED</span>` : ""}
              </div>
              <div class="rec-tl-tot">${w.reversed ? `<span class="text-struck">${P(total(w))}</span>` : P(total(w))}</div>
            </div>
            <div class="rec-tl-body">
              <div><b>Services:</b> ${wSvcs || "—"}</div>
              <div><b>Assigned Mechanic:</b> ${getHisMechanics(w).map(escHtml).join(", ")}</div>
              ${w.note ? `<div><b>Notes:</b> ${w.note}</div>` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="rec-footer" style="display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap">
      ${isCancelled && (isSuper() || isAdmin()) ? `
        <button type="button" class="btn" style="min-height:40px;background:#FFFFFF;color:#2563EB;border:1px solid #2563EB;font-weight:600" data-demo="true" onclick="showDemoNotice()">Put back to Service Status</button>
      ` : ""}
      ${!isCancelled && isSuper() ? (o.reversed ? `
        <button type="button" class="btn g" style="min-height:40px" data-demo="true" onclick="showDemoNotice()">Reopen Job</button>
      ` : `
        <button type="button" class="btn btn-destructive" style="min-height:40px" data-demo="true" onclick="showDemoNotice()">Void / Reverse</button>
      `) : ""}
      <button type="button" class="btn g" style="min-height:40px" data-demo="true" onclick="showDemoNotice()"><span style="display:inline-flex;align-items:center;margin-right:6px">${ICONS.print}</span>Print Record</button>
      <button type="button" class="btn" style="min-height:40px" onclick="closeRecord()">Close</button>
    </div>
  `;

  lastFocusedEl = document.activeElement;
  $("rec-md").innerHTML = html;
  $("rec-ov").classList.add("on");
  document.body.style.overflow = "hidden";
  $("rec-ov").focus();
}

/**
 * Closes the View Full Record modal and restores focus.
 */
function closeRecord() {
  const ov = $("rec-ov");
  if (ov) {
    ov.classList.remove("on");
  }
  document.body.style.overflow = "";
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
}

/**
 * Closes modal when user clicks on the backdrop outside the dialog card.
 */
[
  ["ov", cm],
  ["rec-ov", closeRecord],
  ["insp-ov", closeInspModal],
  ["rcpt-ov", closeReceipt],
  ["pos-void-ov", closePosVoidModal],
  ["access-ov", closeViewAccessModal]
].forEach(([id, fn]) => {
  const el = $(id);
  if (el) {
    el.onclick = (e) => {
      if (e.target.id === id) {
        fn();
      }
    };
  }
});

/**
 * Closes modal when user presses the Escape key.
 */
document.onkeydown = (e) => {
  if (e.key == "Escape") {
    const accPopup = $("sidebar-account-popup");
    if (accPopup && accPopup.style.display !== "none") {
      return;
    }
    if (mobileDrawerOpen) {
      closeAppDrawer();
      return;
    }
    if ($("access-ov") && $("access-ov").classList.contains("on")) {
      closeViewAccessModal();
      return;
    }
    if ($("pos-void-ov") && $("pos-void-ov").classList.contains("on")) {
      closePosVoidModal();
      return;
    }
    if ($("rcpt-ov") && $("rcpt-ov").classList.contains("on")) {
      closeReceipt();
      return;
    }
    if ($("insp-ov") && $("insp-ov").classList.contains("on")) {
      closeInspModal();
      return;
    }
    if ($("rec-ov") && $("rec-ov").classList.contains("on")) {
      closeRecord();
      return;
    }
    cm();
  }
};

/**
 * Opens the "New Customer" modal.
 */
let _newCustomerOnSaved = null;

/**
 * Opens the "New Customer" modal.
 * @param {(customer: object) => void} [onSaved] - Optional callback after successful save.
 */
function openNewCustomerModal(onSaved) {
  _newCustomerOnSaved = onSaved || null;
  M(`
    <div style="padding:10px 4px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <h2 style="margin:0;font-size:18px;font-weight:700">New Customer</h2>
        <button type="button" class="search-clear visible" onclick="cm()" style="position:static" title="Close">✕</button>
      </div>
      <div style="margin-bottom:14px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Full Name *</label>
        <input id="new-c-name" placeholder="e.g. Juan dela Cruz" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box" />
        <div id="new-c-name-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Full name is required.</div>
      </div>
      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Phone Number</label>
        <input id="new-c-phone" placeholder="e.g. 0917-123-4567" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box;font-family:ui-monospace,monospace" />
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px">
        <button type="button" class="btn g" onclick="cm()">Cancel</button>
        <button type="button" class="btn" onclick="saveNewCustomer()">Save Customer</button>
      </div>
    </div>
  `);
  setTimeout(() => {
    const el = $("new-c-name");
    if (el) el.focus();
  }, 50);
}

/**
 * Saves a new customer profile.
 */
function saveNewCustomer() {
  const name = (v("new-c-name") || "").trim();
  const phone = (v("new-c-phone") || "").trim();
  const errEl = $("new-c-name-err");
  if (!name) {
    if (errEl) errEl.style.display = "block";
    const inp = $("new-c-name");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  const newC = {
    id: uid(),
    name: name,
    phone: phone,
    joinedAt: today()
  };
  D.cu.push(newC);
  save();

  if (_newCustomerOnSaved) {
    const cb = _newCustomerOnSaved;
    _newCustomerOnSaved = null;
    cb(newC);
  } else {
    cm();
    expandedCustIds.add(newC.id);
    go("cust");
  }
}

/** State for Register Vehicle searchable customer picker combobox */
let regSelectedCid = "";
let regCustHighlightIndex = -1;
let regCustMatches = [];
let regCustDropdownOpen = false;

/**
 * Filters active customers matching query across name, phone, or vehicle plate numbers (max 8).
 * @param {string} query
 * @returns {Array<object>}
 */
function getRegCustomerMatches(query) {
  const q = (query || "").trim().toLowerCase();
  const allCustomers = (Array.isArray(D.cu) ? D.cu : []).filter((c) => !c.archived);
  if (!q) {
    return allCustomers.slice(0, 8);
  }
  const allBikes = Array.isArray(D.bk) ? D.bk : [];
  const matches = [];
  for (let i = 0; i < allCustomers.length; i++) {
    const c = allCustomers[i];
    const nameMatch = (c.name || "").toLowerCase().includes(q);
    const phoneMatch = (c.phone || "").toLowerCase().includes(q);
    let plateMatch = false;
    if (!nameMatch && !phoneMatch) {
      const bikes = allBikes.filter((b) => b.cid === c.id && !b.archived);
      plateMatch = bikes.some((b) => (b.plate || "").toLowerCase().includes(q));
    }
    if (nameMatch || phoneMatch || plateMatch) {
      matches.push(c);
      if (matches.length >= 8) break;
    }
  }
  return matches;
}

/**
 * Builds HTML for Register Vehicle customer dropdown listbox options.
 * @param {string} query
 * @returns {string} HTML string
 */
function renderRegCustListboxHtml(query) {
  const matches = getRegCustomerMatches(query);
  regCustMatches = matches;
  const allBikes = Array.isArray(D.bk) ? D.bk : [];

  let html = "";
  if (matches.length === 0) {
    html += `<div style="padding:10px 14px;font-size:13px;color:var(--text-muted)">No matching customers found.</div>`;
  } else {
    matches.forEach((c, idx) => {
      const bikesCount = allBikes.filter((b) => b.cid === c.id && !b.archived).length;
      const isHighlighted = idx === regCustHighlightIndex;
      html += `
        <div
          id="reg-cust-opt-${idx}"
          role="option"
          aria-selected="${isHighlighted ? "true" : "false"}"
          class="brand-dropdown-item ${isHighlighted ? "active" : ""}"
          style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;cursor:pointer;gap:8px"
          onmousedown="selectRegCustomer('${c.id}')"
          onmouseenter="setRegCustHighlight(${idx})"
        >
          <div style="display:flex;align-items:center;min-width:0;gap:6px">
            <b>${escHtml(c.name || "Unnamed")}</b>
            ${c.phone ? `<span style="color:var(--text-muted);font-size:12px">(${escHtml(c.phone)})</span>` : ""}
          </div>
          <span style="color:var(--text-muted);font-size:12px;white-space:nowrap;flex-shrink:0">${bikesCount} vehicle${bikesCount === 1 ? "" : "s"}</span>
        </div>
      `;
    });
  }

  const isNewHighlighted = regCustHighlightIndex === matches.length;
  html += `
    <div
      id="reg-cust-opt-new"
      role="option"
      aria-selected="${isNewHighlighted ? "true" : "false"}"
      class="brand-dropdown-item ${isNewHighlighted ? "active" : ""}"
      style="display:flex;align-items:center;padding:10px 14px;cursor:pointer;color:var(--accent);font-weight:700;border-top:1px solid var(--border);gap:6px"
      onmousedown="onRegCustAddNewClick()"
      onmouseenter="setRegCustHighlight(${matches.length})"
    >
      <span>+ New customer</span>
    </div>
  `;

  return html;
}

/**
 * Opens customer picker dropdown listbox.
 */
function openRegCustDropdown() {
  regCustDropdownOpen = true;
  const inp = $("reg-cust-search");
  const listbox = $("reg-cust-listbox");
  if (inp) inp.setAttribute("aria-expanded", "true");
  if (listbox) {
    const q = inp ? inp.value : "";
    listbox.innerHTML = renderRegCustListboxHtml(q);
    listbox.style.display = "block";
  }
}

/**
 * Closes customer picker dropdown listbox.
 */
function closeRegCustDropdown() {
  regCustDropdownOpen = false;
  const inp = $("reg-cust-search");
  const listbox = $("reg-cust-listbox");
  if (inp) inp.setAttribute("aria-expanded", "false");
  if (listbox) listbox.style.display = "none";
  regCustHighlightIndex = -1;
}

/**
 * Live search handler for customer picker. Re-renders only the dropdown list to maintain focus.
 * @param {string} val
 */
function onRegCustSearchInput(val) {
  const err = $("reg-b-cid-err");
  if (err) err.style.display = "none";
  const inp = $("reg-cust-search");
  if (inp) inp.style.borderColor = "var(--border)";
  const clearBtn = $("reg-cust-clear");
  if (clearBtn) clearBtn.classList.toggle("visible", Boolean(val));

  // If input is modified, invalidate selected customer ID if text no longer matches
  if (regSelectedCid) {
    const c = g("cu", regSelectedCid);
    const expected = c ? `${c.name}${c.phone ? ` (${c.phone})` : ""}` : "";
    if (val !== expected) {
      regSelectedCid = "";
    }
  }

  regCustHighlightIndex = -1;
  regCustDropdownOpen = true;
  if (inp) inp.setAttribute("aria-expanded", "true");
  const listbox = $("reg-cust-listbox");
  if (listbox) {
    listbox.innerHTML = renderRegCustListboxHtml(val);
    listbox.style.display = "block";
  }
}

/**
 * Sets highlighted row index in the customer picker listbox.
 * @param {number} idx
 */
function setRegCustHighlight(idx) {
  regCustHighlightIndex = idx;
  updateRegCustHighlightDom();
}

/**
 * Updates CSS active class across customer picker listbox items without re-rendering.
 */
function updateRegCustHighlightDom() {
  const totalOptions = regCustMatches.length + 1;
  for (let i = 0; i < regCustMatches.length; i++) {
    const el = $("reg-cust-opt-" + i);
    if (el) {
      const active = i === regCustHighlightIndex;
      el.classList.toggle("active", active);
      el.setAttribute("aria-selected", active ? "true" : "false");
      if (active) el.scrollIntoView({ block: "nearest" });
    }
  }
  const newEl = $("reg-cust-opt-new");
  if (newEl) {
    const active = regCustHighlightIndex === regCustMatches.length;
    newEl.classList.toggle("active", active);
    newEl.setAttribute("aria-selected", active ? "true" : "false");
    if (active) newEl.scrollIntoView({ block: "nearest" });
  }
}

/**
 * Selects a customer from the dropdown list, fills input with "Name (phone)", and moves focus to Plate Number.
 * @param {string} cid - Customer ID.
 */
function selectRegCustomer(cid) {
  regSelectedCid = cid;
  const c = g("cu", cid);
  const text = c ? `${c.name}${c.phone ? ` (${c.phone})` : ""}` : "";
  const inp = $("reg-cust-search");
  if (inp) inp.value = text;
  const clearBtn = $("reg-cust-clear");
  if (clearBtn) clearBtn.classList.toggle("visible", Boolean(text));
  const err = $("reg-b-cid-err");
  if (err) err.style.display = "none";
  if (inp) inp.style.borderColor = "var(--border)";
  closeRegCustDropdown();

  const plateInp = $("reg-b-plate");
  if (plateInp) plateInp.focus();
}

/**
 * Clears selected customer and search text, then focuses the search input.
 */
function clearRegCustSearch() {
  regSelectedCid = "";
  const inp = $("reg-cust-search");
  if (inp) {
    inp.value = "";
    inp.focus();
  }
  const clearBtn = $("reg-cust-clear");
  if (clearBtn) clearBtn.classList.remove("visible");
  openRegCustDropdown();
}

/**
 * Keyboard handler for customer picker combobox (ArrowUp/Down, Enter, Escape, Tab).
 * @param {KeyboardEvent} e
 */
function handleRegCustKeydown(e) {
  const totalOptions = regCustMatches.length + 1;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (!regCustDropdownOpen) {
      openRegCustDropdown();
      regCustHighlightIndex = 0;
    } else {
      regCustHighlightIndex = (regCustHighlightIndex + 1) % totalOptions;
    }
    updateRegCustHighlightDom();
    return;
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (!regCustDropdownOpen) {
      openRegCustDropdown();
      regCustHighlightIndex = totalOptions - 1;
    } else {
      regCustHighlightIndex = (regCustHighlightIndex - 1 + totalOptions) % totalOptions;
    }
    updateRegCustHighlightDom();
    return;
  }
  if (e.key === "Enter") {
    if (regCustDropdownOpen && regCustHighlightIndex >= 0) {
      e.preventDefault();
      if (regCustHighlightIndex < regCustMatches.length) {
        selectRegCustomer(regCustMatches[regCustHighlightIndex].id);
      } else {
        onRegCustAddNewClick();
      }
    }
    return;
  }
  if (e.key === "Escape") {
    if (regCustDropdownOpen) {
      e.preventDefault();
      closeRegCustDropdown();
    }
    return;
  }
  if (e.key === "Tab") {
    closeRegCustDropdown();
    return;
  }
}

/**
 * Handles "+ New customer" selection: saves typed vehicle fields and opens the new customer modal.
 */
function onRegCustAddNewClick() {
  closeRegCustDropdown();
  const prevPlate = v("reg-b-plate") || "";
  const prevYear = v("reg-b-year") || "";
  const prevMake = v("reg-b-make") || "";
  const prevModel = v("reg-b-model") || "";
  const prevEngine = v("reg-b-engine") || "";

  openNewCustomerModal((newC) => {
    openRegisterVehicleModal(newC.id, {
      plate: prevPlate,
      year: prevYear,
      make: prevMake,
      model: prevModel,
      engine: prevEngine
    });
  });
}

// Global click-outside listener for register vehicle customer picker combobox
if (typeof document !== "undefined") {
  document.addEventListener("click", (e) => {
    if (!regCustDropdownOpen) return;
    const wrap = $("reg-cust-combobox-wrap");
    if (wrap && !wrap.contains(e.target)) {
      closeRegCustDropdown();
    }
  });
}

/**
 * Opens the "Register Vehicle" modal with searchable customer picker.
 * @param {string} [preselectedCid] - Optional customer ID to preselect.
 * @param {object} [initialFields] - Optional draft vehicle fields to restore.
 */
function openRegisterVehicleModal(preselectedCid, initialFields = {}) {
  let initialCustText = "";
  regSelectedCid = "";
  regCustHighlightIndex = -1;
  regCustDropdownOpen = false;

  if (preselectedCid) {
    const c = g("cu", preselectedCid);
    if (c && !c.archived) {
      regSelectedCid = c.id;
      initialCustText = `${c.name}${c.phone ? ` (${c.phone})` : ""}`;
    }
  }

  const plateVal = initialFields.plate || "";
  const yearVal = initialFields.year || "";
  const makeVal = initialFields.make || "";
  const modelVal = initialFields.model || "";
  const engineVal = initialFields.engine || "";

  M(`
    <div style="padding:10px 4px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <h2 style="margin:0;font-size:18px;font-weight:700">Register Vehicle</h2>
        <button type="button" class="search-clear visible" onclick="cm()" style="position:static" title="Close">✕</button>
      </div>

      <div style="margin-bottom:14px;position:relative" id="reg-cust-picker-wrap">
        <label for="reg-cust-search" style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Owner / Customer *</label>
        <div class="brand-combobox-wrap" id="reg-cust-combobox-wrap">
          <input
            id="reg-cust-search"
            type="text"
            role="combobox"
            aria-expanded="false"
            aria-controls="reg-cust-listbox"
            aria-autocomplete="list"
            placeholder="Search customer by name or phone..."
            value="${escHtml(initialCustText)}"
            autocomplete="off"
            style="width:100%;height:40px;padding:0 38px 0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;background:var(--bg-surface);box-sizing:border-box"
            onfocus="openRegCustDropdown()"
            onclick="openRegCustDropdown()"
            oninput="onRegCustSearchInput(this.value)"
            onkeydown="handleRegCustKeydown(event)"
          />
          <button
            type="button"
            id="reg-cust-clear"
            class="brand-clear-btn ${initialCustText ? "visible" : ""}"
            onclick="clearRegCustSearch()"
            title="Clear customer"
            aria-label="Clear customer selection"
          >✕</button>
          <div
            id="reg-cust-listbox"
            role="listbox"
            class="brand-dropdown-list"
            style="display:none"
          ></div>
        </div>
        <div id="reg-b-cid-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Choose a customer.</div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Plate Number *</label>
          <input
            id="reg-b-plate"
            placeholder="e.g. ABC-1234"
            value="${escHtml(plateVal)}"
            style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box;text-transform:uppercase;font-family:ui-monospace,monospace"
            oninput="this.value=this.value.toUpperCase();if($('reg-b-plate-err')){$('reg-b-plate-err').style.display='none';this.style.borderColor='var(--border)';}"
          />
          <div id="reg-b-plate-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px"></div>
        </div>
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Year (Optional)</label>
          <input
            id="reg-b-year"
            type="number"
            placeholder="e.g. 2024"
            value="${escHtml(yearVal)}"
            style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box"
          />
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Make / Brand *</label>
          <input
            id="reg-b-make"
            placeholder="e.g. Yamaha"
            value="${escHtml(makeVal)}"
            style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box"
            oninput="if($('reg-b-make-err')){$('reg-b-make-err').style.display='none';this.style.borderColor='var(--border)';}"
          />
          <div id="reg-b-make-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Make is required.</div>
        </div>
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Model *</label>
          <input
            id="reg-b-model"
            placeholder="e.g. NMAX 155"
            value="${escHtml(modelVal)}"
            style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box"
            oninput="if($('reg-b-model-err')){$('reg-b-model-err').style.display='none';this.style.borderColor='var(--border)';}"
          />
          <div id="reg-b-model-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Model is required.</div>
        </div>
      </div>

      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Engine / Chassis No. (Optional)</label>
        <input
          id="reg-b-engine"
          placeholder="Optional engine or chassis serial"
          value="${escHtml(engineVal)}"
          style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box;font-family:ui-monospace,monospace"
        />
      </div>

      <div style="display:flex;justify-content:flex-end;gap:8px">
        <button type="button" class="btn g" onclick="cm()">Cancel</button>
        <button type="button" class="btn" onclick="saveRegisterVehicle()">Register Vehicle</button>
      </div>
    </div>
  `);

  setTimeout(() => {
    if (regSelectedCid) {
      const pl = $("reg-b-plate");
      if (pl) pl.focus();
    } else {
      const sc = $("reg-cust-search");
      if (sc) sc.focus();
    }
  }, 50);
}

/**
 * Validates and registers a new motorcycle linked to the chosen customer.
 */
function saveRegisterVehicle() {
  if (!regSelectedCid) {
    const err = $("reg-b-cid-err");
    if (err) err.style.display = "block";
    const inp = $("reg-cust-search");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }

  const cid = regSelectedCid;

  const plate = (v("reg-b-plate") || "").trim().toUpperCase();
  const plateErr = $("reg-b-plate-err");
  const plateInp = $("reg-b-plate");
  if (!plate) {
    if (plateErr) {
      plateErr.textContent = "Plate number is required.";
      plateErr.style.display = "block";
    }
    if (plateInp) {
      plateInp.style.borderColor = "var(--danger, #DC2626)";
      plateInp.focus();
    }
    return;
  }

  // Duplicate plate validation
  const isDup = (Array.isArray(D.bk) ? D.bk : []).some((b) => !b.archived && (b.plate || "").toUpperCase() === plate);
  if (isDup) {
    if (plateErr) {
      plateErr.textContent = "This plate number is already registered.";
      plateErr.style.display = "block";
    }
    if (plateInp) {
      plateInp.style.borderColor = "var(--danger, #DC2626)";
      plateInp.focus();
    }
    return;
  }

  const make = (v("reg-b-make") || "").trim();
  const model = (v("reg-b-model") || "").trim();
  if (!make) {
    const err = $("reg-b-make-err");
    if (err) err.style.display = "block";
    const inp = $("reg-b-make");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  if (!model) {
    const err = $("reg-b-model-err");
    if (err) err.style.display = "block";
    const inp = $("reg-b-model");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }

  const yearVal = v("reg-b-year");
  const engineVal = (v("reg-b-engine") || "").trim();

  const newBike = {
    id: uid(),
    cid: cid,
    plate: plate,
    make: make,
    model: model,
    year: yearVal ? +yearVal : "",
    engine: engineVal
  };

  D.bk.push(newBike);
  save();
  cm();
  expandedCustIds.add(cid);
  go("cust");
}

/**
 * Opens the Edit Customer Profile modal.
 * @param {string} cid - Customer ID.
 */
function openEditCustomerModal(cid) {
  const c = g("cu", cid);
  if (!c) return;

  M(`
    <div style="padding:10px 4px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <h2 style="margin:0;font-size:18px;font-weight:700">Edit Customer Profile</h2>
        <button type="button" class="search-clear visible" onclick="cm()" style="position:static" title="Close">✕</button>
      </div>

      <div style="margin-bottom:14px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Full Name *</label>
        <input id="edit-c-name" value="${escHtml(c.name || "")}" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box" />
        <div id="edit-c-name-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Full name is required.</div>
      </div>

      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Phone Number</label>
        <input id="edit-c-phone" value="${escHtml(c.phone || "")}" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box;font-family:ui-monospace,monospace" />
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          ${isSuper() ? `
            <button type="button" class="btn sm btn-destructive" onclick="deleteCustomer('${c.id}')">Delete Customer</button>
          ` : ""}
        </div>
        <div style="display:flex;gap:8px">
          <button type="button" class="btn g" onclick="cm()">Cancel</button>
          <button type="button" class="btn" onclick="saveEditCustomer('${c.id}')">Save Changes</button>
        </div>
      </div>
    </div>
  `);
}

function saveEditCustomer(cid) {
  const c = g("cu", cid);
  if (!c) return;
  const name = (v("edit-c-name") || "").trim();
  const phone = (v("edit-c-phone") || "").trim();
  if (!name) {
    const err = $("edit-c-name-err");
    if (err) err.style.display = "block";
    const inp = $("edit-c-name");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  const oldPhone = c.phone || "";
  if (phone !== oldPhone) {
    logAuditEvent("Customers", "Contact number edited", c.name, `${oldPhone || "-"} \u2192 ${phone || "-"}`);
  }
  c.name = name;
  c.phone = phone;
  save();
  cm();
  go("cust");
}

function deleteCustomer(cid) {
  if (!isSuper()) return;
  const c = g("cu", cid);
  if (!c) return;
  const customerBikes = (Array.isArray(D.bk) ? D.bk : []).filter((b) => b.cid === cid);
  const bikeIds = new Set(customerBikes.map((b) => b.id));
  const hasWo = (Array.isArray(D.wo) ? D.wo : []).some((o) => o.cid === cid || bikeIds.has(o.bid));
  const hasSales = (Array.isArray(D.sales) ? D.sales : []).some((s) => s.cid === cid);

  if (hasWo || hasSales) {
    askReason("Cannot Delete Customer", "OK", () => {}, {
      description: "Has service history. It cannot be deleted.",
      alertOnly: true
    });
    return;
  }

  askReason(`Delete Customer "${c.name}"`, "Delete Customer", (reason) => {
    logAuditEvent("Customers", "Customer deleted", c.name, `Deleted ${c.name} (0 service records)`);
    D.cu = (D.cu || []).filter((x) => x.id !== cid);
    D.bk = (D.bk || []).filter((x) => x.cid !== cid);
    save();
    cm();
    go("cust");
  });
}

/**
 * Opens the Edit Motorcycle modal.
 * Locks the plate number as read-only if motorcycle has existing work orders.
 * @param {string} bid - Motorcycle ID.
 */
function openEditBikeModal(bid) {
  const b = g("bk", bid);
  if (!b) return;
  const c = own(b);
  const hasJobs = (Array.isArray(D.wo) ? D.wo : []).some((o) => o.bid === b.id);
  const canEditPlate = isSuper() || !hasJobs;

  M(`
    <div style="padding:10px 4px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <h2 style="margin:0;font-size:18px;font-weight:700">Edit Motorcycle</h2>
        <button type="button" class="search-clear visible" onclick="cm()" style="position:static" title="Close">✕</button>
      </div>

      <div style="margin-bottom:14px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Owner</label>
        <div style="font-size:14px;font-weight:600;color:var(--text);padding:8px 12px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px">
          ${escHtml(c ? c.name : "Unassigned")} ${c && c.phone ? `<span style="font-weight:400;color:var(--text-muted);margin-left:6px">(${escHtml(c.phone)})</span>` : ""}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Make / Brand *</label>
          <input id="edit-b-make" value="${escHtml(b.make || "")}" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box" />
          <div id="edit-b-make-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Make is required.</div>
        </div>
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Model *</label>
          <input id="edit-b-model" value="${escHtml(b.model || "")}" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box" />
          <div id="edit-b-model-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px">Model is required.</div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Plate Number *</label>
          <input
            id="edit-b-plate"
            value="${escHtml(b.plate || "")}"
            ${!canEditPlate ? "readonly disabled style='width:100%;height:40px;padding:0 10px;background:var(--bg-subtle);color:var(--text-muted);border-radius:8px;border:1px solid var(--border);font-family:ui-monospace,monospace;box-sizing:border-box'" : "style='width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-family:ui-monospace,monospace;box-sizing:border-box'"}
          />
          ${!canEditPlate ? `<small style="display:block;color:var(--text-muted);margin-top:4px;font-style:italic">Plate is locked after the first job.</small>` : ""}
          <div id="edit-b-plate-err" style="display:none;color:var(--danger,#DC2626);font-size:12px;font-weight:600;margin-top:4px"></div>
        </div>
        <div>
          <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Year (Optional)</label>
          <input id="edit-b-year" type="number" value="${b.year || ""}" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box" />
        </div>
      </div>

      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Engine / Chassis No. (Optional)</label>
        <input id="edit-b-engine" value="${escHtml(b.engine || "")}" placeholder="Optional engine or chassis serial" style="width:100%;height:40px;padding:0 10px;border-radius:8px;border:1px solid var(--border);font-size:13px;box-sizing:border-box;font-family:ui-monospace,monospace" />
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          ${isSuper() ? `
            <button type="button" class="btn sm btn-destructive" onclick="deleteBike('${b.id}')">Delete Motorcycle</button>
          ` : ""}
        </div>
        <div style="display:flex;gap:8px">
          <button type="button" class="btn g" onclick="cm()">Cancel</button>
          <button type="button" class="btn" onclick="saveEditBike('${b.id}')">Save Changes</button>
        </div>
      </div>
    </div>
  `);
}

/**
 * Saves edits to motorcycle records.
 * Prompts for audit reason if Super Admin changed a locked plate number.
 * @param {string} bid - Motorcycle ID.
 */
function saveEditBike(bid) {
  const b = g("bk", bid);
  if (!b) return;
  const c = own(b);
  const oldPlate = b.plate;
  const newPlate = (v("edit-b-plate") || "").trim().toUpperCase();
  const hasJobs = (Array.isArray(D.wo) ? D.wo : []).some((o) => o.bid === b.id);

  const make = (v("edit-b-make") || "").trim();
  const model = (v("edit-b-model") || "").trim();
  if (!make) {
    const err = $("edit-b-make-err");
    if (err) err.style.display = "block";
    const inp = $("edit-b-make");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  if (!model) {
    const err = $("edit-b-model-err");
    if (err) err.style.display = "block";
    const inp = $("edit-b-model");
    if (inp) {
      inp.style.borderColor = "var(--danger, #DC2626)";
      inp.focus();
    }
    return;
  }
  b.make = make;
  b.model = model;
  b.year = +v("edit-b-year") || "";
  b.engine = (v("edit-b-engine") || "").trim();

  if (newPlate && newPlate !== oldPlate) {
    const isDup = (Array.isArray(D.bk) ? D.bk : []).some((x) => x.id !== b.id && !x.archived && (x.plate || "").toUpperCase() === newPlate);
    if (isDup) {
      const err = $("edit-b-plate-err");
      if (err) {
        err.textContent = "This plate number is already registered.";
        err.style.display = "block";
      }
      return;
    }
    if (hasJobs) {
      if (!isSuper()) {
        cm();
        go("cust");
        return;
      }
      cm();
      askReason(`Edit Locked Plate ${oldPlate} → ${newPlate}`, "Confirm Plate Change", (reason) => {
        b.plate = newPlate;
        logAuditEvent("Customers", "Plate number edited", newPlate, `${oldPlate} \u2192 ${newPlate}`);
        save();
        go("cust");
      });
      return;
    } else {
      b.plate = newPlate;
      logAuditEvent("Customers", "Plate number edited", newPlate, `${oldPlate} \u2192 ${newPlate}`);
    }
  }

  save();
  cm();
  go("cust");
}

/**
 * Hard deletes a motorcycle record if it has NO history; refuses otherwise (Super Admin only).
 * @param {string} bid - Motorcycle ID.
 */
function deleteBike(bid) {
  if (!isSuper()) return;
  const b = g("bk", bid);
  if (!b) return;
  const hasHistory = (Array.isArray(D.wo) ? D.wo : []).some((o) => o.bid === b.id);
  if (hasHistory) {
    askReason("Cannot Delete Motorcycle", "OK", () => {}, {
      description: "Has service history. It cannot be deleted.",
      alertOnly: true
    });
    return;
  }
  askReason(`Delete Motorcycle ${b.plate}`, "Delete", (reason) => {
    logAuditEvent("Customers", "Motorcycle deleted", b.plate, `Deleted ${b.plate} (0 service records)`);
    D.bk = (D.bk || []).filter((x) => x.id !== b.id);
    save();
    cm();
    go("cust");
  });
}

/**
 * Legacy alias for vehicle registration.
 */
/**
 * Starts a new work order through the Service Intake intake wizard at Step 1.
 * Optionally pre-populates details if a registered motorcycle ID is provided.
 * @param {string} [bid] - Optional motorcycle ID.
 */
function startNewInspectionWorkOrder(bid) {
  go("insp");
}

let catSearch = "";

/** Active category filter for Service & Parts Catalog: "all" | "labor" | "part". In-memory only. */
let catFilter = "all";

/** Category filter chip definitions for Service & Parts Catalog */
const CAT_CHIPS = [
  { id: "all",   label: "All" },
  { id: "labor", label: "Labor / Service" },
  { id: "part",  label: "Part / Fluid" }
];

/**
 * Generates HTML string for the category filter chips in the Catalog view.
 * @returns {string} HTML string.
 */
function getCatChipsHtml() {
  return CAT_CHIPS.map((chip) => {
    const isSelected = catFilter === chip.id;
    return `<button
      type="button"
      id="cat-chip-${chip.id}"
      class="chip ${isSelected ? "on" : ""}"
      role="button"
      aria-pressed="${isSelected ? "true" : "false"}"
      data-demo="true"
      onclick="showDemoNotice()"
    >${chip.label}</button>`;
  }).join("");
}

/**
 * Searches and returns catalog items formatted for table display or dropdowns.
 * Categorizes D.sv as "labor" and D.pt as "part".
 * @param {"labor"|"part"|"all"} [kindFilter="all"]
 * @returns {Array<{id: string, kind: "labor"|"part", type: "sv"|"pt", name: string, price: number, sku?: string}>}
 */
function getCatalogItems(kindFilter = "all") {
  const items = [];
  if (Array.isArray(D.sv)) {
    D.sv.forEach((s) => {
      items.push({
        id: s.id,
        kind: "labor",
        type: "sv",
        name: s.name || "Unnamed service",
        price: Number(s.labor) || 0,
        costPrice: s.costPrice !== undefined ? s.costPrice : null
      });
    });
  }
  if (Array.isArray(D.pt)) {
    D.pt.forEach((p) => {
      items.push({
        id: p.id,
        kind: "part",
        type: "pt",
        name: p.name || "Unnamed part",
        price: Number(p.cost) || 0,
        sku: p.sku || "",
        costPrice: p.costPrice !== undefined ? p.costPrice : null
      });
    });
  }
  if (kindFilter === "all") return items;
  return items.filter((it) => it.kind === kindFilter);
}

/**
 * Returns HTML string for the unified catalog price menu table.
 * Filters by both typed search text and selected category filter chip.
 * Missing or unknown categories are shown under "All" only.
 * For Super Admin: adds Cost and Margin columns, and Delete action.
 * For Admin: Delete is hidden, and Cost/Margin columns are hidden.
 * @returns {string}
 */
function getCatTableHtml() {
  const q = catSearch.trim().toLowerCase();
  const all = getCatalogItems("all");
  const filtered = (Array.isArray(all) ? all : []).filter((it) => {
    if (!it) return false;
    if (catFilter === "labor") {
      if (it.kind !== "labor") return false;
    } else if (catFilter === "part") {
      if (it.kind !== "part") return false;
    }
    if (q) {
      const name = (it.name || "").toLowerCase();
      if (!name.includes(q)) return false;
    }
    return true;
  });
  const isSuperUser = isSuper();

  return `
    <div class="tw">
      <table>
        <thead>
          <tr>
            <th>ITEM / SERVICE NAME</th>
            <th>CATEGORY</th>
            <th class="r">PRICE</th>
            <th class="r" style="width:140px">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${
            !filtered.length
              ? `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:24px">No menu items found.</td></tr>`
              : filtered.map((it) => {
                  return `
                    <tr>
                      <td><b>${escHtml(it.name || "")}</b></td>
                      <td>
                        <span class="cat-badge ${it.kind || ""}">
                          ${it.kind === "labor" ? "Labor / Service" : it.kind === "part" ? "Part / Fluid" : escHtml(it.kind || "-")}
                        </span>
                      </td>
                      <td class="r"><b>${P(it.price)}</b></td>
                      <td class="r" style="white-space:nowrap">
                        <button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()">Edit</button>
                        ${isSuperUser ? `
                          <button type="button" class="btn sm btn-destructive" style="margin-left:6px" data-demo="true" onclick="showDemoNotice()">Delete</button>
                        ` : ""}
                      </td>
                    </tr>
                  `;
                }).join("")
          }
        </tbody>
      </table>
    </div>
  `;
}

/* ==========================================================
   Service Intake (3-STEP JOB ORDER WORKFLOW)
   ========================================================== */

/**
 * Sample data from the Yamaha Sniper 150 V2 DTC reference.
 * Replace or extend later with real scan results and other models.
 */
// Sample data from the Yamaha Sniper 150 V2 DTC reference. Extend later with other models and codes.
const DTC_LIBRARY = [
  {
    dtc: ["P0120", "P0122", "P0123"],
    code: "P0122",
    err: "Error 15",
    part: "Throttle Position Sensor (TPS)",
    desc: "Defective or dirty TPS, causing poor acceleration or an unstable engine idle.",
    checks: [
      "Clean the throttle body with FI cleaner.",
      "Check for loose TPS wiring."
    ],
    parts: [
      "Throttle Position Sensor (TPS)"
    ],
    common: true,
    model: "Yamaha Sniper 150 V2",
    caution: "Verify first. Do not replace the part until the checks below are done."
  }
];

/**
 * Finds a DTC library entry by exact or variant code match.
 * @param {string} code - DTC code string (e.g. "P0122" or "P0123").
 * @returns {{ entry: Object, matchedCode: string }|null}
 */
function findDtcInLibrary(code) {
  if (!code) return null;
  const q = code.trim().toUpperCase().replace(/[\s\-_]/g, "");
  const qShort = q.replace(/^([A-Z])0+([0-9]+)$/, "$1$2");

  for (const entry of DTC_LIBRARY) {
    const variants = Array.isArray(entry.dtc) ? entry.dtc : [entry.code];
    for (const v of variants) {
      const nv = v.toUpperCase().replace(/[\s\-_]/g, "");
      const nvShort = nv.replace(/^([A-Z])0+([0-9]+)$/, "$1$2");
      if (nv === q || nvShort === q || nv === qShort || nvShort === qShort) {
        return { entry, matchedCode: v };
      }
    }
  }
  return null;
}

/**
 * 27-item physical inspection checklist divided into 6 distinct categories.
 */
const INSPECTION_CHECKLIST = [
  {
    key: "tires",
    name: "Tires & Wheels",
    icon: "🛞",
    items: [
      { key: "front_tire", label: "Front tire condition and tread" },
      { key: "rear_tire", label: "Rear tire condition and tread" },
      { key: "tire_pressure", label: "Tire pressure" },
      { key: "rims_spokes", label: "Rims and spokes" },
      { key: "wheel_bearings", label: "Wheel bearings" }
    ]
  },
  {
    key: "brakes",
    name: "Brakes",
    icon: "🛑",
    items: [
      { key: "front_pads", label: "Front brake pads" },
      { key: "rear_pads_shoes", label: "Rear brake pads or shoes" },
      { key: "fluid_level", label: "Brake fluid level" },
      { key: "discs_drums", label: "Discs or drums" },
      { key: "lever_pedal", label: "Lever and pedal feel" }
    ]
  },
  {
    key: "engine",
    name: "Engine & Fluids",
    icon: "⚙️",
    items: [
      { key: "oil_condition", label: "Engine oil level and condition" },
      { key: "coolant_level", label: "Coolant level" },
      { key: "air_filter", label: "Air filter" },
      { key: "spark_plug", label: "Spark plug" },
      { key: "leaks_noise", label: "Leaks and unusual noise" }
    ]
  },
  {
    key: "drivetrain",
    name: "Drivetrain",
    icon: "⛓️",
    items: [
      { key: "belt_chain", label: "Drive belt or chain" },
      { key: "cvt_clutch", label: "CVT or clutch" },
      { key: "rollers_sprockets", label: "Rollers and sprockets" }
    ]
  },
  {
    key: "electrical",
    name: "Electrical",
    icon: "⚡",
    items: [
      { key: "battery", label: "Battery" },
      { key: "headlight_taillight", label: "Headlight and taillight" },
      { key: "brake_signals", label: "Brake light and signals" },
      { key: "horn", label: "Horn" },
      { key: "charging_starter", label: "Charging system and starter" }
    ]
  },
  {
    key: "suspension",
    name: "Suspension & Steering",
    icon: "🔧",
    items: [
      { key: "front_fork", label: "Front fork" },
      { key: "rear_shock", label: "Rear shock" },
      { key: "steering_bearings", label: "Steering and head bearings" },
      { key: "swingarm_frame", label: "Swingarm and frame" }
    ]
  }
];

function resetInspDraft() {}

/** Active tab in Job Card modal ("cust" | "diag" | "items"). */
let jcActiveTab = "cust";

/** Previously focused element prior to opening Job Card modal. */
let lastActiveJobCardTrigger = null;

/**
 * Switches the active tab in the Job Card modal.
 * Preserves panel DOM so typed inputs survive switching tabs.
 * @param {"cust"|"diag"|"items"} tabKey
 */
function switchJobCardTab(tabKey) {
  jcActiveTab = tabKey;
  const tabs = ["cust", "diag", "items"];
  tabs.forEach((t) => {
    const btn = $(`jc-tab-${t}`);
    const panel = $(`jc-panel-${t}`);
    const isActive = t === tabKey;
    if (btn) {
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    }
    if (panel) {
      if (isActive) {
        panel.removeAttribute("hidden");
        panel.style.display = "block";
      } else {
        panel.setAttribute("hidden", "");
        panel.style.display = "none";
      }
    }
  });
  const bodyEl = document.querySelector(".jc-body");
  if (bodyEl) bodyEl.scrollTop = 0;
}

/**
 * Handles Left and Right arrow key navigation across Job Card tabs.
 * @param {KeyboardEvent} e
 */
function handleJobCardTabKeydown(e) {
  const tabs = ["cust", "diag", "items"];
  const curIdx = tabs.indexOf(jcActiveTab);
  if (curIdx === -1) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    const nextIdx = (curIdx + 1) % tabs.length;
    switchJobCardTab(tabs[nextIdx]);
    const nextBtn = $(`jc-tab-${tabs[nextIdx]}`);
    if (nextBtn) nextBtn.focus();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    const prevIdx = (curIdx - 1 + tabs.length) % tabs.length;
    switchJobCardTab(tabs[prevIdx]);
    const prevBtn = $(`jc-tab-${tabs[prevIdx]}`);
    if (prevBtn) prevBtn.focus();
  }
}

/**
 * Synchronizes Job Card tab item count, Accounting card numbers, footer total,
 * and background Service Status row/card totals in real time.
 * @param {string} woId - Work order ID.
 */
function syncJobCardTotals(woId) {
  if (!woId || woId === "draft") return;
  const o = g("wo", woId);
  if (!o) return;

  const items = getContextItems(woId, "items");
  const extra = getContextItems(woId, "extra");
  const all = [...items, ...extra];
  const count = all.length;

  const countEl = $("jc-tab-items-count");
  if (countEl) countEl.textContent = count;
  const countShortEl = $("jc-tab-items-count-short");
  if (countShortEl) countShortEl.textContent = count;

  let laborSub = 0;
  let partsSub = 0;
  all.forEach((it) => {
    const isLabor = it.kind === "labor";
    const qty = isLabor ? 1 : Math.max(1, Number(it.qty) || 1);
    if (it.src !== "own") {
      const price = Math.max(0, Number(it.price) || 0);
      if (isLabor) laborSub += qty * price;
      else partsSub += qty * price;
    }
  });

  const totVal = count > 0 ? (laborSub + partsSub) : jobTotalOf(o);

  const accLabor = $("jc-acc-labor-sub");
  if (accLabor) accLabor.textContent = P(laborSub);
  const accParts = $("jc-acc-parts-sub");
  if (accParts) accParts.textContent = P(partsSub);
  const accTotal = $("jc-acc-est-total");
  if (accTotal) accTotal.textContent = P(totVal);

  const accNote = $("jc-acc-stored-note");
  if (accNote) {
    accNote.style.display = (count === 0 && totVal > 0) ? "block" : "none";
  }

  const footerTot = $("jc-footer-total-val");
  if (footerTot) footerTot.textContent = P(totVal);

  const metaTot = $(`jobcard-meta-total-${woId}`);
  if (metaTot) metaTot.textContent = P(totVal);

  const listTotCell = $(`ar-row-total-${woId}`);
  if (listTotCell) listTotCell.textContent = P(totVal);
  const cardTotCell = $(`ar-card-total-${woId}`);
  if (cardTotCell) cardTotCell.textContent = P(totVal);
}

/**
 * Opens the Job Order modal for an active job or new intake.
 * Always resets active tab to Tab 1 (Customer & bike) and locks scroll.
 * @param {string|null} id - Work order ID.
 */
function openInspModal(id) {
  lastActiveJobCardTrigger = document.activeElement;
  inspActiveWoId = id;
  jcActiveTab = "cust";
  renderInspModal(id);
  const ov = $("insp-ov");
  if (ov) {
    ov.classList.add("on");
    ov.focus();
  }
  document.body.classList.add("jc-scroll-locked");
  document.body.style.overflow = "hidden";
}

/**
 * Closes the Job Order inspection modal and refreshes active view if needed.
 * Returns keyboard focus to the job's "Job card" button if it still exists in the list, otherwise to search input.
 */
function closeInspModal() {
  const ov = $("insp-ov");
  if (ov) ov.classList.remove("on");
  inspActiveWoId = null;
  document.body.classList.remove("jc-scroll-locked");
  document.body.style.overflow = "";

  if (view === "dash") {
    $("main").innerHTML = R.dash();
  }
  if (lastActiveJobCardTrigger && document.body.contains(lastActiveJobCardTrigger)) {
    try {
      lastActiveJobCardTrigger.focus();
    } catch (e) {}
  }

  lastActiveJobCardTrigger = null;
}

/**
 * Renders the 3-tab Job Card modal for a work order.
 * Tabs: Customer & bike, Complaint & diagnosis, Items & accounting.
 * Stage bar and total footer remain persistent across all tabs.
 * @param {string|null} id - Work order ID.
 */
function renderInspModal(id) {
  const md = $("insp-md");
  if (!md) return;

  const o = id ? g("wo", id) : null;
  if (!o) {
    md.className = "insp-md jc-modal";
    md.innerHTML = `
      <div class="jc-head">
        <div class="jc-title-wrap">
          <div class="jc-title" id="insp-modal-title">Job Card</div>
          <div class="jc-subtitle">Job card</div>
        </div>
        <button type="button" class="jc-close-btn" onclick="closeInspModal()" title="Close" aria-label="Close">✕</button>
      </div>
      <div class="jc-body">
        <div class="empty" style="padding:24px">No work order selected.</div>
      </div>
      <div class="jc-foot">
        <div></div>
        <button type="button" class="btn g jc-btn-close" onclick="closeInspModal()">Close</button>
      </div>
    `;
    return;
  }

  const b = bike(o.bid);
  const c = b ? own(b) : null;
  const jo = getJobNumber(o);
  const isReady = o.st === "Ready for Pickup";
  const isDone = o.st === "Completed";
  const u = getCurrentUser();
  const isMech = u && u.activeRole === "mechanic";

  // Inspection check totals
  const insp = o.inspection || {};
  const inspItems = insp.items || {};
  let watchCount = 0;
  let fixCount = 0;
  const fixList = [];
  const watchList = [];

  INSPECTION_CHECKLIST.forEach((cat) => {
    cat.items.forEach((item) => {
      const stateObj = inspItems[`${cat.key}.${item.key}`];
      if (stateObj) {
        if (stateObj.s === "fix") {
          fixCount++;
          fixList.push({ catName: cat.name, label: item.label, state: "fix", note: stateObj.note || "" });
        } else if (stateObj.s === "watch") {
          watchCount++;
          watchList.push({ catName: cat.name, label: item.label, state: "watch", note: stateObj.note || "" });
        }
      }
    });
  });
  const watchFixList = [...fixList, ...watchList];
  const okCount = Math.max(0, 27 - (watchCount + fixCount));
  const obdCodes = (insp.obd && Array.isArray(insp.obd.codes)) ? insp.obd.codes : [];

  // Items and Accounting Subtotals
  const items = getContextItems(o.id, "items");
  const extraItems = getContextItems(o.id, "extra");
  const allItems = [...items, ...extraItems];
  const itemCount = allItems.length;

  let laborSub = 0;
  let partsSub = 0;
  allItems.forEach((it) => {
    const isLabor = it.kind === "labor";
    const qty = isLabor ? 1 : Math.max(1, Number(it.qty) || 1);
    if (it.src !== "own") {
      const price = Math.max(0, Number(it.price) || 0);
      if (isLabor) laborSub += qty * price;
      else partsSub += qty * price;
    }
  });

  const totAmount = itemCount > 0 ? (laborSub + partsSub) : jobTotalOf(o);
  const hasInspData = (okCount + watchCount + fixCount > 0) || obdCodes.length > 0 || Boolean(o.findings && o.findings.trim());
  const compStr = (o.complaints && o.complaints.length) ? o.complaints.map(escHtml).join(", ") : "None";
  const notesStr = o.notes ? escHtml(o.notes) : (o.note ? escHtml(o.note) : "None");

  // Ensure modal container has jc-modal class
  md.className = "insp-md jc-modal";

  md.innerHTML = `
    <!-- 1. Header (Always Visible) -->
    <div class="jc-head">
      <div class="jc-title-wrap">
        <div class="jc-title" id="insp-modal-title">
          <span>${b ? escHtml(b.plate) : "NO PLATE"} · ${b ? escHtml(b.make + " " + b.model + (b.year ? " " + b.year : "")) : "Unknown"}</span>
          <span class="jc-jo-chip">${escHtml(jo)}</span>
        </div>
        <div class="jc-subtitle">Job card</div>
      </div>
      <button type="button" class="jc-close-btn" onclick="closeInspModal()" title="Close dialog" aria-label="Close dialog">✕</button>
    </div>

    <!-- 2. Stage Bar (Always Visible) -->
    <div class="jc-stage">
      ${getJobCardStageControlHtml(o)}
    </div>

    <!-- 3. Tabs Navigation Row (Always Visible) -->
    <div class="jc-tabs" role="tablist" aria-label="Job Card Tabs" onkeydown="handleJobCardTabKeydown(event)">
      <button
        type="button"
        role="tab"
        id="jc-tab-cust"
        aria-selected="${jcActiveTab === "cust" ? "true" : "false"}"
        aria-controls="jc-panel-cust"
        class="jc-tab ${jcActiveTab === "cust" ? "active" : ""}"
        onclick="switchJobCardTab('cust')"
      >
        <span class="jc-tab-full">Customer &amp; bike</span>
        <span class="jc-tab-short">Customer</span>
      </button>

      <button
        type="button"
        role="tab"
        id="jc-tab-diag"
        aria-selected="${jcActiveTab === "diag" ? "true" : "false"}"
        aria-controls="jc-panel-diag"
        class="jc-tab ${jcActiveTab === "diag" ? "active" : ""}"
        onclick="switchJobCardTab('diag')"
      >
        <span class="jc-tab-full">Complaint &amp; diagnosis</span>
        <span class="jc-tab-short">Complaint</span>
      </button>

      <button
        type="button"
        role="tab"
        id="jc-tab-items"
        aria-selected="${jcActiveTab === "items" ? "true" : "false"}"
        aria-controls="jc-panel-items"
        class="jc-tab ${jcActiveTab === "items" ? "active" : ""}"
        onclick="switchJobCardTab('items')"
      >
        <span class="jc-tab-full">Items &amp; accounting (<span id="jc-tab-items-count">${itemCount}</span>)</span>
        <span class="jc-tab-short">Items (<span id="jc-tab-items-count-short">${itemCount}</span>)</span>
      </button>
    </div>

    <!-- 4. Tab Panels Container -->
    <div class="jc-body">
      <!-- Panel 1: Customer & bike -->
      <div
        id="jc-panel-cust"
        role="tabpanel"
        aria-labelledby="jc-tab-cust"
        ${jcActiveTab === "cust" ? "" : "hidden"}
        style="${jcActiveTab === "cust" ? "display:block" : "display:none"}"
      >
        <div class="jc-info-grid">
          <div class="jc-info-item">
            <span class="jc-info-label">Plate Number</span>
            <span class="jc-info-val"><b>${b ? escHtml(b.plate) : "NO PLATE"}</b></span>
          </div>
          <div class="jc-info-item">
            <span class="jc-info-label">Motorcycle</span>
            <span class="jc-info-val">${b ? escHtml(b.make + " " + b.model + (b.year ? " (" + b.year + ")" : "")) : "Unknown"}</span>
          </div>
          <div class="jc-info-item">
            <span class="jc-info-label">Customer</span>
            <span class="jc-info-val">${c ? escHtml(c.name + (c.phone ? " (" + c.phone + ")" : "")) : "Walk-in Customer"}</span>
          </div>
          <div class="jc-info-item">
            <span class="jc-info-label">Date In</span>
            <span class="jc-info-val">${formatJobDate(o.at)}</span>
          </div>
          <div class="jc-info-item">
            <span class="jc-info-label">Marked by</span>
            <span class="jc-info-val">${escHtml((o.mech && o.mech !== "Unassigned") ? o.mech : "-")}</span>
          </div>
          <div class="jc-info-item">
            <span class="jc-info-label">Current Status</span>
            <span class="jc-info-val">${badge(o.st)}</span>
          </div>
        </div>

        ${isReady ? `
          <div class="jc-card" style="padding:16px;text-align:center;background:var(--bg-surface-alt);border:1px solid var(--border)">
            <div style="display:flex;justify-content:center;margin-bottom:4px;color:var(--text-muted)">${ICONS.clipboard}</div>
            <h4 style="margin:0 0 4px">Vehicle Ready for Billing &amp; Pickup</h4>
            <p style="color:var(--text-muted);font-size:13px;margin:0 0 12px">All repairs finished. Vehicle awaiting settlement in Transactions &amp; Billing.</p>
            ${canOpen("bill")
              ? `<button type="button" class="btn sm" onclick="closeInspModal(); go('bill');">Go to Transactions &amp; Billing →</button>`
              : `<div style="font-size:13px;color:var(--text-muted);font-style:italic">Sent to billing. The Admin handles payment.</div>`
            }
          </div>
        ` : ""}
      </div>

      <!-- Panel 2: Complaint & diagnosis -->
      <div
        id="jc-panel-diag"
        role="tabpanel"
        aria-labelledby="jc-tab-diag"
        ${jcActiveTab === "diag" ? "" : "hidden"}
        style="${jcActiveTab === "diag" ? "display:block" : "display:none"}"
      >
        <!-- Customer Complaints & Requests Card -->
        <div class="jc-card">
          <div style="font-weight:700;font-size:14px;color:var(--text-primary);margin-bottom:10px">Customer Complaints &amp; Requests</div>
          <div style="font-size:13px;line-height:1.6">
            <div><b>Complaints:</b> ${compStr}</div>
            <div style="margin-top:4px"><b>Notes:</b> ${notesStr}</div>
          </div>
        </div>

        <!-- Inspection & Diagnosis Results Card -->
        <div class="jc-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:8px">
              <div style="font-weight:700;font-size:14px;color:var(--text-primary)">Inspection &amp; Diagnosis Results</div>
              ${isSuper() && o.st !== "Completed" && o.st !== "Cancelled" ? `
                <button type="button" class="btn g sm" style="min-height:28px;padding:2px 8px;font-size:11px" data-demo="true" onclick="showDemoNotice()">Edit diagnosis</button>
              ` : ""}
            </div>
            <div style="display:flex;gap:6px">
              <span class="phys-count-pill ok">OK ${okCount}</span>
              ${watchCount > 0 ? `<span class="phys-count-pill watch">Watch ${watchCount}</span>` : ""}
              <span class="phys-count-pill fix">Fix ${fixCount}</span>
            </div>
          </div>

          ${!hasInspData ? `
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px">All inspected items OK.</div>
            <div>
              <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:4px">Final Findings &amp; Diagnosis Verification:</div>
              <div style="font-size:13px;color:var(--text-muted)">-</div>
            </div>
          ` : `
            ${watchFixList.length > 0 ? `
              <div style="margin-bottom:12px">
                <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:6px">Noted Faults &amp; Wear Items:</div>
                <div style="display:flex;flex-direction:column;gap:6px">
                  ${watchFixList.map((wf) => `
                    <div style="font-size:13px;display:flex;align-items:baseline;gap:8px">
                      <span class="fault-badge ${wf.state}">${wf.state.toUpperCase()}</span>
                      <span><b>${escHtml(wf.label)}</b> <span style="font-size:11px;color:var(--text-muted)">(${escHtml(wf.catName)})</span>${wf.note ? ` — <i>${escHtml(wf.note)}</i>` : ""}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            ` : `
              <div style="margin-bottom:12px">
                <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:4px">Physical Inspection:</div>
                <div style="font-size:13px;color:var(--text-muted)">All inspected items OK.</div>
              </div>
            `}

            ${obdCodes.length > 0 ? `
              <div style="margin-bottom:12px">
                <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:6px">ECU / OBD Diagnostic Codes:</div>
                <div style="display:flex;flex-direction:column;gap:6px">
                  ${obdCodes.map((c) => getObdCodeSummaryDisplayHtml(c)).join("")}
                </div>
              </div>
            ` : ""}

            <div style="margin-top:8px">
              <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:4px">Final Findings &amp; Diagnosis Verification:</div>
              ${o.findings && o.findings.trim()
                ? `<div style="font-size:13px;white-space:pre-wrap;background:#FFFFFF;border:1px solid var(--border);border-radius:6px;padding:8px 12px">${escHtml(o.findings)}</div>`
                : `<div style="font-size:13px;color:var(--text-muted)">-</div>`
              }
            </div>
          `}
        </div>

        ${o.remarks && o.remarks.trim() ? `
          <div class="jc-card">
            <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:4px">Mechanic Remarks:</div>
            <div style="font-size:13px;white-space:pre-wrap">${escHtml(o.remarks)}</div>
          </div>
        ` : ""}
      </div>

      <!-- Panel 3: Items & accounting -->
      <div
        id="jc-panel-items"
        role="tabpanel"
        aria-labelledby="jc-tab-items"
        ${jcActiveTab === "items" ? "" : "hidden"}
        style="${jcActiveTab === "items" ? "display:block" : "display:none"}"
      >
        <!-- Recommended Services & Allocated Items Card -->
        <div class="jc-card">
          <div style="font-weight:700;font-size:14px;color:var(--text-primary);margin-bottom:10px">
            Recommended Services &amp; Allocated Items
          </div>
          <div id="${o.id}-items-container">
            ${getItemsBuilderHtml(o.id, {
              readOnly: o.st === "Checking" || o.st === "Ready for Pickup" || o.st === "Completed",
              showLaborDone: o.st === "In Progress",
              showExtraToggle: o.st === "In Progress"
            })}
          </div>
        </div>

        <!-- Accounting Summary Card -->
        <div class="jc-card">
          <div style="font-weight:700;font-size:14px;color:var(--text-primary);margin-bottom:10px">
            Accounting Summary
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:13px">
            <div style="display:flex;justify-content:space-between;color:var(--text-secondary)">
              <span>Labor Subtotal:</span>
              <span id="jc-acc-labor-sub" style="font-weight:600;color:var(--text-primary)">${P(laborSub)}</span>
            </div>
            <div style="display:flex;justify-content:space-between;color:var(--text-secondary)">
              <span>Parts Subtotal:</span>
              <span id="jc-acc-parts-sub" style="font-weight:600;color:var(--text-primary)">${P(partsSub)}</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:8px;margin-top:2px">
              <span style="font-weight:700;font-size:14px;color:var(--text-primary)">Estimated Total:</span>
              <b id="jc-acc-est-total" style="font-size:18px;font-weight:800;color:var(--text-primary)">${P(totAmount)}</b>
            </div>
            <div id="jc-acc-stored-note" style="font-size:12px;color:var(--text-muted);font-style:italic;display:${itemCount === 0 && totAmount > 0 ? "block" : "none"}">
              No itemized rows yet. Total comes from the job's recorded amount.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Footer (Always Visible) -->
    <div class="jc-foot">
      <div class="jc-foot-total">
        <span>Total</span>
        <b id="jc-footer-total-val">${P(totAmount)}</b>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        ${(isSuper() || isAdmin()) && o.st !== "Completed" && o.st !== "Cancelled" ? `
          <button type="button" class="btn btn-destructive sm" style="min-height:40px;background:#ffffff;color:var(--danger,#dc2626);border:1px solid var(--danger-border,#fca5a5);padding:0 14px;font-weight:600" data-demo="true" onclick="showDemoNotice()">Cancel Job</button>
        ` : ""}
        ${isSuper() && (o.st === "Completed" || o.reversed) ? `
          <button type="button" class="btn g sm" style="min-height:40px" data-demo="true" onclick="showDemoNotice()">Reopen Job</button>
        ` : ""}
        ${isDone ? `
          <button type="button" class="btn sm" style="min-height:40px" onclick="openReceipt('${o.id}')"><span style="display:inline-flex;align-items:center;margin-right:4px">${ICONS.print}</span>View Digital Receipt</button>
        ` : ""}
        <button type="button" class="btn g jc-btn-close" style="min-height:40px" onclick="closeInspModal()">Close</button>
      </div>
    </div>
  `;
}

/**
 * Resolves description for recorded DTC code. Kept for Service History and OBD summary.
 * @param {Object} c
 * @returns {string}
 */
function getDtcDisplayDesc(c) {
  if (!c) return "";
  if (typeof c.desc === "string" && c.desc.trim()) return c.desc;
  const libMatch = c.code ? findDtcInLibrary(c.code) : null;
  if (libMatch && libMatch.entry && libMatch.entry.desc) {
    return libMatch.entry.desc;
  }
  return "";
}

function getObdCodeSummaryDisplayHtml(c) {
  if (!c || !c.code) return "";
  const code = escHtml(c.code);
  const errPill = c.err ? `<span class="dtc-err-pill">${escHtml(c.err)}</span>` : "";
  const partText = c.part ? `<b>${escHtml(c.part)}</b>` : "";
  let descText = getDtcDisplayDesc(c);
  if (c.part && descText.startsWith(c.part + ": ")) {
    descText = descText.slice(c.part.length + 2).trim();
  }
  const cleanDesc = escHtml(descText);

  let compAndDesc = "";
  if (partText && cleanDesc) {
    compAndDesc = `${partText}: ${cleanDesc}`;
  } else if (partText) {
    compAndDesc = partText;
  } else if (cleanDesc) {
    compAndDesc = cleanDesc;
  }

  const verifiedRaw = typeof c.verified === "string" ? c.verified.trim() : "";
  const verifiedVal = verifiedRaw ? escHtml(verifiedRaw) : "Not recorded";

  return `
    <div class="obd-summary-entry" style="font-size:12px;padding:8px 10px;border:1px solid var(--border);border-radius:6px;background:var(--bg-surface-alt, #F8FAFC);display:flex;flex-direction:column;gap:4px">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span class="dtc-code-pill">${code}</span>
        ${errPill}
        ${compAndDesc ? `<span style="color:var(--text-primary)">${compAndDesc}</span>` : ""}
      </div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">
        <span style="font-weight:600;color:var(--text-primary)">Verified:</span>
        <span style="white-space:pre-wrap;color:${verifiedRaw ? 'inherit' : 'var(--text-muted)'}">${verifiedVal}</span>
      </div>
    </div>
  `;
}

/* ==========================================================
   RECOMMENDED SERVICES & ITEMS (PRICE MENU BUILDER)
   ========================================================== */

/**
 * Tracks active Add Row form parameters for each context ("draft" or woId).
 */
const itemAddFormState = {};

/**
 * Gets or initializes the Add Row form state for a given context.
 * @param {string} context - "draft" or work order ID.
 * @returns {{kind: "labor"|"part", src: "shop"|"waiting"|"own", showExtraForm: boolean}}
 */
function getItemAddFormState(context) {
  if (!itemAddFormState[context]) {
    itemAddFormState[context] = {
      kind: "labor",
      src: "shop",
      showExtraForm: false
    };
  }
  return itemAddFormState[context];
}

/**
 * Sets the active category kind ("labor" or "part") for an add row form.
 * @param {string} context
 * @param {"labor"|"part"} kind
 */
function setItemFormKind(context, kind) {
  const st = getItemAddFormState(context);
  st.kind = kind;
  if (kind === "labor") {
    st.src = "shop";
  }
  closeItemSuggestions(context);
  renderItemsManager(context);
}

/**
 * Handles source change in the Add Row form.
 * When source is "own", locks price to 0.
 * @param {string} context
 * @param {string} srcVal
 */
function onItemSourceChange(context, srcVal) {
  const st = getItemAddFormState(context);
  st.src = srcVal;
  const priceInp = $(`${context}-item-price`);
  if (priceInp) {
    if (srcVal === "own") {
      priceInp.value = "0";
      priceInp.disabled = true;
      priceInp.readOnly = true;
      priceInp.classList.add("locked");
    } else {
      priceInp.disabled = false;
      priceInp.readOnly = false;
      priceInp.classList.remove("locked");
      if (priceInp.value === "0") priceInp.value = "";
    }
  }
}

/**
 * Handles typing in the item name input.
 * Searches the catalog filtered by kind and displays custom suggestion dropdown.
 * @param {string} context
 * @param {string} val
 */
function onItemNameInput(context, val) {
  const st = getItemAddFormState(context);
  const dropdown = $(`${context}-item-suggestions`);
  if (!dropdown) return;

  const q = val.trim().toLowerCase();
  if (!q) {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    return;
  }

  const catalog = getCatalogItems(st.kind);
  const matches = catalog.filter((it) => it.name.toLowerCase().includes(q));

  if (!matches.length) {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    return;
  }

  dropdown.innerHTML = `
    <div class="item-suggestions-list">
      ${matches.slice(0, 8).map((it) => `
        <div class="item-suggestion-row" onmousedown="selectItemSuggestion('${context}', '${escHtml(it.name)}', ${it.price})">
          <span class="item-suggestion-name">${escHtml(it.name)}</span>
          <span class="item-suggestion-price">${P(it.price)}</span>
        </div>
      `).join("")}
    </div>
  `;
  dropdown.style.display = "block";
}

/**
 * Handles focus on the item name input.
 * If text is present, opens matching suggestions.
 * @param {string} context
 */
function onItemNameFocus(context) {
  const inp = $(`${context}-item-name`);
  if (inp && inp.value.trim()) {
    onItemNameInput(context, inp.value);
  }
}

/**
 * Selects an item from the suggestions dropdown and fills name & price.
 * @param {string} context
 * @param {string} name
 * @param {number} price
 */
function selectItemSuggestion(context, name, price) {
  const nameInp = $(`${context}-item-name`);
  const priceInp = $(`${context}-item-price`);
  const st = getItemAddFormState(context);

  if (nameInp) nameInp.value = name;
  if (priceInp && st.src !== "own") {
    priceInp.value = price;
  }
  closeItemSuggestions(context);
}

/**
 * Closes the suggestion dropdown.
 * @param {string} context
 */
function closeItemSuggestions(context) {
  const dropdown = $(`${context}-item-suggestions`);
  if (dropdown) {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
  }
}

/**
 * Gets the active items array for a context.
 * @param {string} context - "draft" or work order ID.
 * @param {"items"|"extra"} [key="items"]
 * @returns {Array<Object>}
 */
function getContextItems(context, key = "items") {
  if (context === "draft") {
    return [];
  }
  const o = g("wo", context);
  if (!o) return [];
  if (!Array.isArray(o[key])) o[key] = [];
  return o[key];
}

/**
 * Submits the Add Row form and appends the item to the list.
 * @param {string} context - "draft" or work order ID.
 * @param {"items"|"extra"} [targetKey="items"]
 */
function submitItemAddForm(context, targetKey = "items") {
  const st = getItemAddFormState(context);
  const nameInp = $(`${context}-item-name`);
  const srcSel = $(`${context}-item-src`);
  const qtyInp = $(`${context}-item-qty`);
  const priceInp = $(`${context}-item-price`);

  const rawName = nameInp ? nameInp.value.trim() : "";
  const name = rawName || "Unnamed item";
  const kind = st.kind || "labor";
  const src = kind === "labor" ? "shop" : (srcSel ? srcSel.value : "shop");
  const qty = kind === "labor" ? 1 : (qtyInp ? Math.max(1, parseInt(qtyInp.value, 10) || 1) : 1);
  const price = src === "own" ? 0 : (priceInp ? Math.max(0, Number(priceInp.value) || 0) : 0);

  const newItem = {
    id: uid(),
    kind,
    name,
    qty,
    price,
    src,
    done: false
  };

  const list = getContextItems(context, targetKey);
  list.push(newItem);

  if (context !== "draft") {
    const o = g("wo", context);
    if (o) {
      const isPastApproval = o.st !== "Queued" && o.st !== "Diagnosing" && o.st !== "Awaiting Parts/Approval";
      if (isPastApproval) {
        const lineTotal = (newItem.qty || 1) * (newItem.price || 0);
        const joRef = getJobNumber(o) || o.id;
        logAuditEvent("Service", "Line item added", joRef, `Added after approval: ${newItem.name} x${newItem.qty} (${P(lineTotal)})`);
      }
    }
    save();
  }

  // Clear inputs
  if (nameInp) nameInp.value = "";
  if (priceInp) priceInp.value = "";
  if (qtyInp) qtyInp.value = "1";
  closeItemSuggestions(context);

  renderItemsManager(context);
}

/**
 * Updates a field on an existing line item.
 * @param {string} context - "draft" or work order ID.
 * @param {string} itemId - Item ID.
 * @param {string} field - "name" | "src" | "qty" | "price"
 * @param {string|number} val - New value.
 */
function updateItemRow(context, itemId, field, val) {
  let item = null;
  const items = getContextItems(context, "items");
  item = items.find((x) => x.id === itemId);

  if (!item && context !== "draft") {
    const extra = getContextItems(context, "extra");
    item = extra.find((x) => x.id === itemId);
  }

  if (!item) return;

  if (field === "name") {
    item.name = String(val).trim() || "Unnamed item";
  } else if (field === "src") {
    item.src = val;
    if (val === "own") item.price = 0;
  } else if (field === "qty") {
    item.qty = item.kind === "labor" ? 1 : Math.max(1, parseInt(val, 10) || 1);
  } else if (field === "price") {
    item.price = item.src === "own" ? 0 : Math.max(0, Number(val) || 0);
  }

  if (context !== "draft") {
    save();
  }

  renderItemsManager(context);
}

/**
 * Removes a line item.
 * @param {string} context - "draft" or work order ID.
 * @param {string} itemId - Item ID.
 */
function removeItemRow(context, itemId) {
  if (context !== "draft") {
    const o = g("wo", context);
    if (o) {
      let targetItem = (o.items || []).find((x) => x.id === itemId);
      if (!targetItem && Array.isArray(o.extra)) {
        targetItem = o.extra.find((x) => x.id === itemId);
      }
      if (Array.isArray(o.items)) o.items = o.items.filter((x) => x.id !== itemId);
      if (Array.isArray(o.extra)) o.extra = o.extra.filter((x) => x.id !== itemId);
      const isPastApproval = o.st !== "Queued" && o.st !== "Diagnosing" && o.st !== "Awaiting Parts/Approval";
      if (isPastApproval && targetItem) {
        const lineTotal = (targetItem.qty || 1) * (targetItem.price || 0);
        const joRef = getJobNumber(o) || o.id;
        logAuditEvent("Service", "Line item removed", joRef, `Removed after approval: ${targetItem.name} x${targetItem.qty || 1} (${P(lineTotal)})`);
      }
      save();
    }
  }
  renderItemsManager(context);
}

/**
 * Toggles the 'done' state for a labor line item in Stage 3: In Repair.
 * @param {string} woId
 * @param {string} itemId
 * @param {boolean} checked
 */
function toggleItemDone(woId, itemId, checked) {
  const o = g("wo", woId);
  if (!o) return;
  const all = [...(o.items || []), ...(o.extra || [])];
  const item = all.find((x) => x.id === itemId);
  if (item) {
    item.done = checked;
    save();
  }
}

/**
 * Toggles visibility of the mini Add Extra Item form in In Repair stage.
 * @param {string} woId
 */
function toggleJobCardExtraForm(woId) {
  const st = getItemAddFormState(woId);
  st.showExtraForm = !st.showExtraForm;
  renderItemsManager(woId);
}

/**
 * Re-renders only the items manager container for a context.
 * Updates totals in real-time.
 * @param {string} context
 */
function renderItemsManager(context) {
  const container = $(`${context}-items-container`);
  if (!container) return;

  let options = { readOnly: false, showLaborDone: false, showExtraToggle: false };
  if (context === "draft") {
    options = { readOnly: false, showLaborDone: false, showExtraToggle: false };
  } else {
    const o = g("wo", context);
    if (o) {
      const isReadOnly = o.st === "Checking" || o.st === "Ready for Pickup" || o.st === "Completed";
      options = {
        readOnly: isReadOnly,
        showLaborDone: o.st === "In Progress",
        showExtraToggle: o.st === "In Progress"
      };
      const totEl = $(`jobcard-meta-total-${context}`);
      if (totEl) totEl.textContent = P(total(o));
      const warnWrap = $(`jobcard-warning-${context}`);
      if (warnWrap) {
        const waitingCount = (o.items || []).filter((i) => i.src === "waiting").length;
        warnWrap.innerHTML = waitingCount > 0 ? `<span class="waiting-pill">⏳ Waiting for part: ${waitingCount}</span>` : "";
      }
    }
  }

  container.innerHTML = getItemsBuilderHtml(context, options);
  if (context !== "draft") {
    syncJobCardTotals(context);
  }
}

/**
 * Generates HTML for the Recommended Services & Items builder or read-only table.
 * @param {string} context - "draft" or work order ID.
 * @param {Object} options
 * @param {boolean} [options.readOnly=false]
 * @param {boolean} [options.showLaborDone=false]
 * @param {boolean} [options.showExtraToggle=false]
 * @returns {string} HTML string.
 */
function getItemsBuilderHtml(context, options = {}) {
  const { readOnly = false, showLaborDone = false, showExtraToggle = false } = options;
  const formState = getItemAddFormState(context);
  const isLaborTab = formState.kind === "labor";
  const items = getContextItems(context, "items");
  const extraItems = context !== "draft" ? getContextItems(context, "extra") : [];
  const allItems = [...items, ...extraItems.map((x) => ({ ...x, _isExtra: true }))];

  let laborSub = 0;
  let partsSub = 0;
  let ownCount = 0;
  let hasWaiting = false;

  allItems.forEach((it) => {
    const isLabor = it.kind === "labor";
    const qty = isLabor ? 1 : Math.max(1, Number(it.qty) || 1);
    if (it.src === "own") {
      ownCount++;
    } else {
      const price = Math.max(0, Number(it.price) || 0);
      const lineTot = qty * price;
      if (isLabor) laborSub += lineTot;
      else partsSub += lineTot;
    }
    if (it.src === "waiting") hasWaiting = true;
  });

  const estTotal = laborSub + partsSub;

  let html = `<div class="item-builder-wrap">`;

  // 1. Add Row Form (if not read-only, or extra form toggled)
  if (!readOnly) {
    const showForm = !showExtraToggle || formState.showExtraForm;
    const targetKey = showExtraToggle ? "extra" : "items";

    if (showExtraToggle) {
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <button type="button" class="btn sm g" onclick="toggleJobCardExtraForm('${context}')">
            ${formState.showExtraForm ? "✕ Close Extra Item Form" : "+ Add Extra Item/Fluid Used"}
          </button>
        </div>
      `;
    }

    if (showForm) {
      html += `
        <div class="item-add-form-wrap" id="${context}-item-form-wrap">
          <div class="item-cat-toggle-wrap">
            <button
              type="button"
              class="item-cat-btn ${isLaborTab ? 'active' : ''}"
              onclick="setItemFormKind('${context}', 'labor')"
            >
              Labor / Service
            </button>
            <button
              type="button"
              class="item-cat-btn ${!isLaborTab ? 'active' : ''}"
              onclick="setItemFormKind('${context}', 'part')"
            >
              Part / Fluid Used
            </button>
          </div>

          <div class="item-add-inputs-row">
            <!-- Name with Custom Suggestion Dropdown -->
            <div class="item-input-group name-group" style="position:relative;flex:2;min-width:200px">
              <label class="item-field-label">${isLaborTab ? "SERVICE NAME" : "ITEM NAME"}</label>
              <input
                type="text"
                id="${context}-item-name"
                class="item-field-input"
                placeholder="${isLaborTab ? 'e.g. Change oil, CVT cleaning' : 'e.g. Engine oil 10W-40, Drive Belt'}"
                autocomplete="off"
                oninput="onItemNameInput('${context}', this.value)"
                onfocus="onItemNameFocus('${context}')"
              />
              <div id="${context}-item-suggestions" class="item-suggestions-dropdown" style="display:none"></div>
            </div>

            <!-- Source Select (visible only when Part) -->
            <div
              class="item-input-group src-group"
              id="${context}-src-group"
              style="flex:2;min-width:220px;display:${isLaborTab ? 'none' : 'flex'}"
            >
              <label class="item-field-label">Part Availability / Source</label>
              <select id="${context}-item-src" class="item-field-input" style="width:100%;min-width:200px" onchange="onItemSourceChange('${context}', this.value)">
                <option value="shop" ${formState.src === 'shop' || !formState.src ? 'selected' : ''}>Ready / Shop Provided</option>
                <option value="waiting" ${formState.src === 'waiting' ? 'selected' : ''}>Waiting for Part (Buy Outside / Order)</option>
                <option value="own" ${formState.src === 'own' ? 'selected' : ''}>Customer Brought Own Part</option>
              </select>
            </div>

            <!-- Qty (visible only when Part) -->
            ${!isLaborTab ? `
              <div class="item-input-group qty-group" id="${context}-qty-group" style="width:75px;flex:0 0 75px">
                <label class="item-field-label">Qty</label>
                <input
                  type="number"
                  id="${context}-item-qty"
                  class="item-field-input"
                  min="1"
                  value="1"
                />
              </div>
            ` : ""}

            <!-- Price (₱) -->
            <div class="item-input-group price-group" style="width:120px;flex:0 0 120px">
              <label class="item-field-label">Price (₱)</label>
              <input
                type="number"
                id="${context}-item-price"
                class="item-field-input ${(!isLaborTab && formState.src === 'own') ? 'locked' : ''}"
                min="0"
                step="any"
                placeholder="0.00"
                ${(!isLaborTab && formState.src === 'own') ? 'disabled readonly value="0"' : ''}
              />
            </div>

            <!-- Add Row Button -->
            <div class="item-input-group btn-group" style="align-self:flex-end">
              <button type="button" class="btn item-add-btn" style="background:#2563EB" onclick="submitItemAddForm('${context}', '${targetKey}')">
                + Add Row
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }

  // 2. Items Table
  const itemColLabel = readOnly ? "ITEM / SERVICE" : (isLaborTab ? "SERVICE" : "ITEM");
  const showTableQty = readOnly ? true : !isLaborTab;

  html += `
    <div class="items-table-wrap">
      <table class="items-table">
        <thead>
          <tr>
            ${showLaborDone ? `<th class="c" style="width:50px">DONE</th>` : ""}
            <th style="width:110px">CATEGORY</th>
            <th>${itemColLabel}</th>
            <th style="width:200px">SOURCE</th>
            ${showTableQty ? `<th class="r" style="width:75px">QTY</th>` : ""}
            <th class="r" style="width:100px">PRICE</th>
            <th class="r" style="width:110px">LINE TOTAL</th>
            ${!readOnly ? `<th class="c" style="width:45px"></th>` : ""}
          </tr>
        </thead>
        <tbody>
  `;

  if (!allItems.length) {
    const colCount = (showLaborDone ? 1 : 0) + (showTableQty ? 1 : 0) + 5 + (!readOnly ? 1 : 0);
    html += `<tr><td colspan="${colCount}" style="text-align:center;color:var(--text-muted);padding:24px">No items added yet.</td></tr>`;
  } else {
    allItems.forEach((it) => {
      const isOwn = it.src === "own";
      const isWaiting = it.src === "waiting";
      const isLabor = it.kind === "labor";
      const qty = isLabor ? 1 : Math.max(1, Number(it.qty) || 1);
      const price = isOwn ? 0 : Math.max(0, Number(it.price) || 0);
      const lineTot = qty * price;

      html += `<tr>`;

      // Done tick checkbox for Labor in In Repair stage
      if (showLaborDone) {
        if (isLabor) {
          html += `
            <td class="c">
              <input
                type="checkbox"
                ${it.done ? "checked" : ""}
                onchange="toggleItemDone('${context}', '${it.id}', this.checked)"
                title="Mark labor task completed"
              />
            </td>
          `;
        } else {
          html += `<td class="c" style="color:var(--text-muted)">—</td>`;
        }
      }

      // Category badge
      html += `
        <td>
          <span class="cat-badge ${it.kind}">
            ${isLabor ? "Labor" : "Part / Fluid"}
          </span>
          ${it._isExtra ? `<span style="font-size:10px;color:var(--text-muted);display:block">(extra)</span>` : ""}
        </td>
      `;

      // Item Name
      if (readOnly) {
        html += `<td><b>${escHtml(it.name)}</b></td>`;
      } else {
        html += `
          <td>
            <input
              type="text"
              class="item-inline-input"
              value="${escHtml(it.name)}"
              onchange="updateItemRow('${context}', '${it.id}', 'name', this.value)"
            />
          </td>
        `;
      }

      // Source Badge / Inline select
      if (readOnly || isLabor) {
        let srcBadgeHtml = `<span class="src-badge shop">Shop Provided</span>`;
        if (isWaiting) srcBadgeHtml = `<span class="src-badge waiting">⏳ Waiting for Part</span>`;
        else if (isOwn) srcBadgeHtml = `<span class="src-badge own">Customer Brought Own Part</span>`;
        html += `<td>${srcBadgeHtml}</td>`;
      } else {
        html += `
          <td>
            <select
              class="item-inline-select"
              style="width:100%;min-width:180px;box-sizing:border-box"
              onchange="updateItemRow('${context}', '${it.id}', 'src', this.value)"
            >
              <option value="shop" ${it.src === 'shop' || !it.src ? 'selected' : ''}>Ready / Shop Provided</option>
              <option value="waiting" ${it.src === 'waiting' ? 'selected' : ''}>Waiting for Part</option>
              <option value="own" ${it.src === 'own' ? 'selected' : ''}>Customer Brought Own Part</option>
            </select>
          </td>
        `;
      }

      // Qty
      if (showTableQty) {
        if (readOnly) {
          html += `<td class="r">${isLabor ? "—" : qty}</td>`;
        } else {
          if (isLabor) {
            html += `<td class="r" style="color:var(--text-muted)">—</td>`;
          } else {
            html += `
              <td class="r">
                <input
                  type="number"
                  min="1"
                  class="item-inline-num"
                  value="${qty}"
                  style="width:55px"
                  onchange="updateItemRow('${context}', '${it.id}', 'qty', this.value)"
                />
              </td>
            `;
          }
        }
      }

      // Price
      if (readOnly) {
        html += `<td class="r">${isOwn ? "₱0.00" : P(price)}</td>`;
      } else {
        if (isOwn) {
          html += `<td class="r"><input type="text" class="item-inline-num" value="₱0.00" disabled style="width:75px;background:#F1F5F9;color:#64748B"></td>`;
        } else {
          html += `
            <td class="r">
              <input
                type="number"
                min="0"
                step="any"
                class="item-inline-num"
                value="${price}"
                style="width:75px"
                onchange="updateItemRow('${context}', '${it.id}', 'price', this.value)"
              />
            </td>
          `;
        }
      }

      // Line Total
      html += `
        <td class="r">
          ${isOwn ? `<span style="color:var(--text-muted);font-size:12px">₱0.00 <span style="font-size:10px">(recorded)</span></span>` : `<b>${P(lineTot)}</b>`}
        </td>
      `;

      // Remove button
      if (!readOnly) {
        html += `
          <td class="c">
            <button
              type="button"
              class="btn g sm"
              style="padding:2px 8px;font-size:12px"
              onclick="removeItemRow('${context}', '${it.id}')"
              title="Remove item"
            >✕</button>
          </td>
        `;
      }

      html += `</tr>`;
    });
  }

  html += `
        </tbody>
      </table>
    </div>

    <!-- Subtotals Row -->
    <div class="items-summary-row">
      <div style="font-size:13px;color:var(--text-secondary);align-self:center">
        ${ownCount > 0 ? `<span class="src-badge own">${ownCount} customer-supplied part${ownCount > 1 ? "s" : ""} (recorded only)</span>` : ""}
      </div>
      <div class="items-totals-box">
        <div>Labor Subtotal: <b>${P(laborSub)}</b></div>
        <div>Parts Subtotal: <b>${P(partsSub)}</b></div>
        <div style="font-size:15px;color:var(--text-primary);border-top:1px solid var(--border);padding-top:4px;margin-top:2px">
          Estimated Total: <b>${P(estTotal)}</b>
        </div>
      </div>
    </div>
  `;

  // Amber warning note if any row has src "waiting"
  if (hasWaiting) {
    html += `
      <div class="items-waiting-note">
        <span>⏳</span>
        <span>Job will wait for parts before repair starts.</span>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

/**
 * Generates the stage header, stage action buttons, warning pills, and QC checkboxes for the Job Card.
 * @param {Object} o - Work order object.
 * @returns {string} HTML string.
 */
function getJobCardStageControlHtml(o) {
  const isAwaiting = o.st === "Awaiting Parts/Approval" || o.st === "Queued" || o.st === "Diagnosing";
  const isInProgress = o.st === "In Progress";
  const isChecking = o.st === "Checking";
  const isReady = o.st === "Ready for Pickup";
  const isDone = o.st === "Completed";

  const waitingCount = (o.items || []).filter((i) => i.src === "waiting").length;
  const qc = o.qc || {};

  let stageTitle = "";
  if (isAwaiting) stageTitle = "Stage: Awaiting Parts / Customer Approval";
  else if (isInProgress) stageTitle = "Stage 3: In Repair";
  else if (isChecking) stageTitle = "Stage 4: Checking (Final QC)";
  else if (isReady) stageTitle = "Stage 5: Ready for Billing";
  else if (isDone) stageTitle = "Stage: Completed";

  let html = `
    <div class="jobcard-stage-bar">
      <div class="jobcard-stage-header-row">
        <div class="jobcard-stage-title">
          <span>${stageTitle}</span>
          <span id="jobcard-warning-${o.id}">${waitingCount > 0 && isAwaiting ? `<span class="waiting-pill">⏳ Waiting for part: ${waitingCount}</span>` : ""}</span>
        </div>
        <div class="jobcard-stage-actions">
  `;

  if (isAwaiting) {
    html += `
      <button
        type="button"
        class="btn sm"
        style="background:#2563EB"
        data-demo="true" onclick="showDemoNotice()"
      >
        Parts Ready &amp; Customer Approved -> Start Repair →
      </button>
    `;
  } else if (isInProgress) {
    html += `
      <button
        type="button"
        class="btn g sm"
        data-demo="true" onclick="showDemoNotice()"
      >
        ← Back
      </button>
      <button
        type="button"
        class="btn sm"
        style="background:#2563EB"
        data-demo="true" onclick="showDemoNotice()"
      >
        Repair Done -> Move to Stage 4: Checking →
      </button>
    `;
  } else if (isChecking) {
    html += `
      <div style="display:flex;align-items:center;gap:6px">
        <input
          type="text"
          id="qc-reason-${o.id}"
          placeholder="Return reason (optional)..."
          style="height:36px;font-size:12px;width:170px"
        />
        <button
          type="button"
          class="btn g sm"
          data-demo="true" onclick="showDemoNotice()"
        >
          ← Return to Repair
        </button>
      </div>
      <button
        type="button"
        class="btn sm"
        style="background:#2563EB"
        data-demo="true" onclick="showDemoNotice()"
      >
        Passed Checking -> Send to Transactions &amp; Billing →
      </button>
    `;
  } else if (isReady) {
    const canBill = canOpen("bill");
    if (canBill) {
      html += `
        <button
          type="button"
          class="btn g sm"
          data-demo="true" onclick="showDemoNotice()"
        >
          ← Back
        </button>
        <button
          type="button"
          class="btn sm"
          onclick="closeInspModal(); go('bill');"
        >
          Go to Transactions &amp; Billing →
        </button>
      `;
    } else {
      html += `
        <div style="font-size:13px;color:var(--text-muted);font-style:italic;display:flex;align-items:center">
          Sent to billing. The Admin handles payment.
        </div>
      `;
    }
  }

  html += `
        </div>
      </div>
  `;

  // QC Checklist for Stage 4: Checking
  if (isChecking) {
    html += `
      <div class="jobcard-qc-box">
        <div style="font-weight:700;font-size:12px;color:var(--text-secondary);text-transform:uppercase;margin-bottom:8px">
          Quality Control Checklist (optional)
        </div>
        <div style="display:flex;gap:20px;flex-wrap:wrap">
          <label class="insp-chk-item" style="border:none;padding:0;background:none">
            <input
              type="checkbox"
              ${qc.resolved ? "checked" : ""}
              data-demo="true"
              onchange="showDemoNotice()"
            />
            <span style="font-size:13px;font-weight:600">Faults resolved?</span>
          </label>
          <label class="insp-chk-item" style="border:none;padding:0;background:none">
            <input
              type="checkbox"
              ${qc.test ? "checked" : ""}
              data-demo="true"
              onchange="showDemoNotice()"
            />
            <span style="font-size:13px;font-weight:600">Test ride passed?</span>
          </label>
          <label class="insp-chk-item" style="border:none;padding:0;background:none">
            <input
              type="checkbox"
              ${qc.oldParts ? "checked" : ""}
              data-demo="true"
              onchange="showDemoNotice()"
            />
            <span style="font-size:13px;font-weight:600">Old parts bagged?</span>
          </label>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

/**
 * Formats a consistent Transaction ID for a work order (e.g. TXN-0001).
 * @param {Object} o - Work order record.
 * @returns {string} Formatted transaction ID.
 */
function getTxnId(o) {
  if (!o) return "TXN-0000";
  const idx = D.wo.findIndex((x) => x.id === o.id);
  const num = idx >= 0 ? idx + 1 : D.wo.length + 1;
  return "TXN-" + String(num).padStart(4, "0");
}

/**
 * Static seeded billing orders for Transactions & Billing in lean demo mode.
 * Contains 2 jobs ready for billing and 3 past transactions (including 1 voided/cancelled).
 */
const SEEDED_BILL_ORDERS = [
  {
    id: "w-bill-1",
    txnId: "TXN-0005",
    jo: "JO-0005",
    date: "Nov 17, 2026",
    type: "REPAIR SERVICE",
    customer: "Juan Dela Cruz",
    phone: "0917 555 0101",
    plate: "ABC-1234",
    model: "Yamaha Sniper 150 V2",
    mech: "Larpus",
    total: 1250,
    advances: 0,
    st: "Ready for Pickup",
    payStatus: "unpaid"
  },
  {
    id: "w-bill-2",
    txnId: "TXN-0006",
    jo: "JO-0006",
    date: "Nov 17, 2026",
    type: "REPAIR SERVICE",
    customer: "Maria Santos",
    phone: "0918 555 0142",
    plate: "XYZ-9876",
    model: "Yamaha Sniper 155",
    mech: "Hiyo",
    total: 850,
    advances: 300,
    st: "Ready for Pickup",
    payStatus: "partial"
  },
  {
    id: "w-bill-3",
    txnId: "TXN-0004",
    jo: "JO-0004",
    date: "Nov 16, 2026",
    type: "REPAIR SERVICE",
    customer: "Antonio Luna",
    phone: "0922 555 0214",
    plate: "GHI-3412",
    model: "Honda Beat 110",
    mech: "Larpus",
    total: 1150,
    advances: 0,
    st: "Completed",
    payMethod: "Cash",
    payStatus: "paid"
  },
  {
    id: "w-bill-4",
    txnId: "TXN-0003",
    jo: "QL-0012",
    date: "Nov 16, 2026",
    type: "QUICK LABOR",
    subtype: "Labor Only",
    customer: "Pedro Reyes",
    phone: "0920 555 0177",
    plate: "DEF-5678",
    model: "Honda Click 125",
    mech: "Staff",
    total: 500,
    advances: 0,
    st: "Completed",
    payMethod: "GCash",
    payStatus: "paid"
  },
  {
    id: "w-bill-5",
    txnId: "TXN-0002",
    jo: "JO-0002",
    date: "Nov 15, 2026",
    type: "REPAIR SERVICE",
    customer: "Jose Rizal",
    phone: "0919 555 0312",
    plate: "JKL-9012",
    model: "Kawasaki Barako II",
    mech: "Hiyo",
    total: 650,
    advances: 0,
    st: "Cancelled",
    payStatus: "cancelled"
  }
];

/**
 * Classifies a transaction record into a mutually exclusive payment status category:
 * "pending" | "balance" | "completed", or null if not countable (cancelled/reversed/voided).
 * @param {Object} t - Transaction or work order record.
 * @returns {"pending"|"balance"|"completed"|null} Payment status category.
 */
function getTxnCategory(t) {
  if (!t || !isCountableJob(t)) return null;

  const total = (typeof t.total === "number" && !isNaN(t.total)) ? t.total : (Number(t.total) || 0);
  const advances = (typeof t.advances === "number" && !isNaN(t.advances)) ? t.advances : (Number(t.advances) || 0);
  const due = Math.max(0, total - advances);

  // b. "completed": balance due is 0 or less (fully paid), or marked Completed
  if (t.st === "Completed" || due <= 0) {
    return "completed";
  }

  // c. "balance" (Pending with Balance): not completed, advance paid > 0, and balance due > 0
  if (advances > 0 && due > 0) {
    return "balance";
  }

  // d. "pending": everything else countable (nothing paid yet, amount due > 0 or TBD/0)
  return "pending";
}

/**
 * Filters seeded billing orders based on active filter chip and search query.
 * Uses getTxnCategory(o) for mutually exclusive grouping.
 * @param {string} [filter=billFilter] - "all" | "pending" | "balance" | "completed".
 * @param {boolean} [includeSearch=true] - Whether to apply live search query.
 * @returns {Array<Object>} Filtered billing orders.
 */
function getFilteredBillOrders(filter = billFilter, includeSearch = true) {
  if (filter === "adv" || filter === "advances") filter = "balance";
  if (filter === "final" || filter === "settlement") filter = "pending";
  if (filter === "done") filter = "completed";

  const q = includeSearch ? billSearch.trim().toLowerCase().replace(/\s+/g, " ") : "";
  return SEEDED_BILL_ORDERS.filter((o) => {
    const cat = getTxnCategory(o);
    if (!cat) return false;
    if (filter !== "all" && cat !== filter) return false;
    if (!q) return true;
    const txt = `${o.txnId} ${o.jo} ${o.customer} ${o.phone} ${o.plate} ${o.model} ${o.mech}`.toLowerCase();
    return txt.includes(q);
  });
}

/**
 * Builds HTML for Transactions & Billing page:
 * Header, search bar, dynamic status filter chips, and transaction table.
 * @returns {string} HTML string.
 */
function getBillViewHtml() {
  return `
    <h1 class="sr-only">Transactions &amp; Billing</h1>

    <!-- Live Search Toolbar -->
    <div class="rep-search-wrap">
      <span class="search-icon" onclick="$('bill-search-input').focus()" title="Search">${LINE_ICONS.insp}</span>
      <input
        id="bill-search-input"
        type="text"
        placeholder="Search by Plate No., Customer Name, TXN ID, or Job Order..."
        value="${billSearch.replace(/"/g, '&quot;')}"
        autocomplete="off"
        oninput="onBillSearchInput(this.value)"
        onkeydown="if(event.key==='Enter')event.preventDefault()"
      />
      <button
        id="bill-search-clear"
        class="search-clear ${billSearch ? "visible" : ""}"
        onclick="clearBillSearch()"
        type="button"
        title="Clear search"
      >✕</button>
    </div>

    <!-- Filter Chips with Dynamic Counts -->
    <div id="bill-chips" class="bill-chips" role="group" aria-label="Filter transactions by payment status">${getBillChipsHtml()}</div>

    <!-- Transactions Table Container -->
    <div id="bill-results" class="card">${getBillResultsHtml()}</div>
  `;
}

/**
 * Handles live search input in Transactions & Billing.
 * @param {string} val - Input query.
 */
function onBillSearchInput(val) {
  billSearch = val;
  const clr = $("bill-search-clear");
  if (clr) {
    clr.classList.toggle("visible", val.trim().length > 0);
  }
  updateBillChipsDom();
  const resEl = $("bill-results");
  if (resEl) {
    resEl.innerHTML = getBillResultsHtml();
  }
}

/**
 * Clears search input in Transactions & Billing.
 */
function clearBillSearch() {
  billSearch = "";
  const inp = $("bill-search-input");
  if (inp) {
    inp.value = "";
    inp.focus();
  }
  const clr = $("bill-search-clear");
  if (clr) clr.classList.remove("visible");
  updateBillChipsDom();
  const resEl = $("bill-results");
  if (resEl) resEl.innerHTML = getBillResultsHtml();
}

/** Configuration for Transactions & Billing filter chips. */
const BILL_CHIPS = [
  { key: "all", label: "All", modifier: "all" },
  { key: "pending", label: "Pending", modifier: "pending" },
  { key: "balance", label: "Pending with Balance", modifier: "balance" },
  { key: "completed", label: "Completed Transactions", modifier: "completed" }
];

/**
 * Updates class, aria-pressed, checkmark, and count on all four Transactions & Billing filter chips.
 */
function updateBillChipsDom() {
  let allFound = true;
  BILL_CHIPS.forEach((c) => {
    const el = $(`bill-chip-${c.modifier}`);
    if (!el) {
      allFound = false;
      return;
    }
    const isSelected = billFilter === c.key;
    const count = getFilteredBillOrders(c.key, false).length;
    const checkMark = isSelected ? `<span class="bill-chip-check" aria-hidden="true">✓ </span>` : "";

    el.className = `bill-chip bill-chip--${c.modifier}${isSelected ? " is-selected" : ""}`;
    el.setAttribute("aria-pressed", isSelected ? "true" : "false");
    el.innerHTML = `${checkMark}${c.label} <span class="bill-chip-count">(${count})</span>`;
  });

  if (!allFound) {
    const chipsEl = $("bill-chips");
    if (chipsEl) chipsEl.innerHTML = getBillChipsHtml();
  }
}

/**
 * Sets active filter chip tab in Transactions & Billing.
 * Updates the chip row and the results container, but never the search input.
 * @param {"all"|"pending"|"balance"|"completed"} f - Filter key.
 */
function setBillFilter(f) {
  if (f === "adv" || f === "advances") f = "balance";
  if (f === "final" || f === "settlement") f = "pending";
  if (f === "done") f = "completed";
  billFilter = f;
  updateBillChipsDom();
  const resEl = $("bill-results");
  if (resEl) resEl.innerHTML = getBillResultsHtml();
}

/**
 * Builds HTML for Transactions & Billing filter chips with dynamic counts.
 * @returns {string} HTML string.
 */
function getBillChipsHtml() {
  return BILL_CHIPS
    .map((c) => {
      const isSelected = billFilter === c.key;
      const count = getFilteredBillOrders(c.key, false).length;
      const checkMark = isSelected ? `<span class="bill-chip-check" aria-hidden="true">✓ </span>` : "";
      return `<button type="button" id="bill-chip-${c.modifier}" class="bill-chip bill-chip--${c.modifier}${
        isSelected ? " is-selected" : ""
      }" aria-pressed="${isSelected ? "true" : "false"}" onclick="setBillFilter('${c.key}')">${checkMark}${c.label} <span class="bill-chip-count">(${count})</span></button>`;
    })
    .join("");
}

/**
 * Builds HTML table or empty placeholder for Transactions & Billing results.
 * @returns {string} HTML string.
 */
function getBillResultsHtml() {
  const list = getFilteredBillOrders(billFilter, true);
  if (!list.length) {
    const isSearching = Boolean(billSearch.trim());
    return `
      <div class="empty">
        <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:4px">
          ${isSearching ? "No matching transactions." : "No transactions in this category."}
        </div>
      </div>
    `;
  }

  return `
    <div class="bill-table-wrap">
      <table>
        <thead>
          <tr>
            <th>TRANSACTION ID &amp; TYPE</th>
            <th>CUSTOMER / VEHICLE INFO</th>
            <th>TOTAL AMOUNT (₱)</th>
            <th>PAYMENT STATUS</th>
            <th class="r">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${list
            .map((o) => {
              const cat = getTxnCategory(o);
              const isCancelled = o.st === "Cancelled";
              const isCompleted = cat === "completed";
              const isReady = o.st === "Ready for Pickup";
              const isQuickLabor = o.type === "QUICK LABOR";
              const typeBadge = isQuickLabor ? `QUICK LABOR · ${escHtml(o.subtype || "Labor Only")}` : "REPAIR SERVICE";
              const typeClass = isQuickLabor ? "badge-txn-type ql" : "badge-txn-type";
              const dateLine = isQuickLabor ? o.date : `${o.jo} · ${o.date}`;
              const balanceDue = Math.max(0, o.total - (o.advances || 0));

              let payStatusHtml = "";
              if (isCancelled) {
                payStatusHtml = `<span class="badge" style="background:#FEE2E2;color:#991B1B;border-color:#FECACA">Voided / Cancelled</span>`;
              } else if (isCompleted) {
                payStatusHtml = `<span class="pay-pill paid">● Paid</span><div style="font-size:11px;color:var(--text-muted);margin-top:3px">${escHtml(o.payMethod || "Cash")} · ${escHtml(o.date)}</div>`;
              } else if (o.advances > 0) {
                payStatusHtml = `<span class="pay-pill partial">● Partial/Adv Paid (${P(o.advances)})</span><div style="font-size:11px;color:var(--text-muted);margin-top:3px">1 advance payment</div>`;
              } else {
                payStatusHtml = `<span class="pay-pill unpaid">● Unpaid</span>`;
              }

              let actionsHtml = "";
              if (isCancelled) {
                actionsHtml = `<button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()">Reversed</button>`;
              } else if (isCompleted) {
                actionsHtml = `<button type="button" class="btn g sm" onclick="openReceipt('${o.id}')">View Receipt</button>`;
              } else if (isReady) {
                actionsHtml = `
                  <div style="display:flex;gap:6px;justify-content:flex-end;flex-wrap:wrap">
                    <button type="button" class="btn sm" data-demo="true" onclick="showDemoNotice()">Settle Balance →</button>
                    <button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()" title="Record an advance payment">+ Advance</button>
                  </div>
                `;
              } else {
                actionsHtml = `<button type="button" class="btn sm btn-adv-pay" data-demo="true" onclick="showDemoNotice()">+ Advance Payment</button>`;
              }

              return `
                <tr style="${isCancelled ? 'opacity:0.8;background:#F8FAFC' : ''}">
                  <td>
                    <b>${escHtml(o.txnId)}</b>
                    <br><span class="${typeClass}">${typeBadge}</span>
                    <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${dateLine}</div>
                  </td>
                  <td>
                    <b>${escHtml(o.customer)}</b>
                    <div style="font-size:12px;color:var(--text-secondary)">${escHtml(o.phone || "—")}</div>
                    <div style="font-size:12px;font-weight:600;margin-top:2px">${escHtml(o.plate)} · ${escHtml(o.model)}</div>
                    ${o.mech ? `<div style="font-size:11px;color:var(--text-muted)">Marked by: ${escHtml(o.mech)}</div>` : ""}
                  </td>
                  <td>
                    <div style="font-weight:700;font-size:14px">
                      ${isCancelled ? `<span style="text-decoration:line-through;color:var(--text-muted)">${P(o.total)}</span>` : P(o.total)}
                      <span style="font-size:11px;font-weight:500;color:var(--text-muted)">(Final)</span>
                    </div>
                    ${o.advances > 0 ? `<div style="font-size:11px;color:var(--success)">Advances: ${P(o.advances)}</div>` : ""}
                    ${!isCompleted && !isCancelled ? `<div style="font-size:12px;font-weight:700;color:${balanceDue > 0 ? "var(--text)" : "var(--success)"};margin-top:2px">Due: ${P(balanceDue)}</div>` : ""}
                  </td>
                  <td>
                    ${payStatusHtml}
                  </td>
                  <td class="r">
                    ${actionsHtml}
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Opens the digital receipt modal for a completed or billing-stage work order.
 * @param {string} woId - Work order ID.
 */
function openReceipt(woId) {
  let o = g("wo", woId);
  let seeded = null;
  if (!o) {
    seeded = SEEDED_BILL_ORDERS.find((x) => x.id === woId || x.jo === woId || x.txnId === woId);
  }
  if (!o && !seeded) return;

  const b = o ? bike(o.bid) : null;
  const c = b ? own(b) : null;
  const brk = o ? getOrderTotals(o) : { total: seeded.total, labor: seeded.total, parts: 0, discount: 0 };
  const allLines = o ? lines(o) : [{ kind: "labor", n: seeded.type === "QUICK LABOR" ? "Quick Labor Service" : "General Service & Diagnostic", a: seeded.total }];
  const laborLines = allLines.filter((l) => l.kind === "labor");
  const partLines = allLines.filter((l) => l.kind === "part");
  const jo = o ? getJobNumber(o) : (seeded.jo || seeded.txnId);
  const pay = (o && o.pay) || {
    method: (seeded && seeded.payMethod) || (o && o.tempPayMethod) || "Cash",
    tendered: brk.total,
    change: 0,
    paidAt: (seeded && seeded.date) || (o && (o.done || o.at)) || ""
  };
  const isQuick = o ? (o.type === "QUICK LABOR" || o.type === "quicklabor") : (seeded.type === "QUICK LABOR");
  const custName = c ? c.name : (o && o.customer ? o.customer : (seeded ? seeded.customer : "Walk-in Customer"));
  const custPhone = c ? c.phone : (seeded ? seeded.phone : "—");
  const vehPlate = b ? b.plate : (o && o.vehicleLine ? o.vehicleLine : (seeded ? seeded.plate : "Walk-in Motorcycle"));
  const vehModel = b ? `${b.make || ""} ${b.model || ""}`.trim() : (seeded ? seeded.model : "");
  const mechName = (o && o.mech && o.mech !== "Unassigned") ? o.mech : (seeded && seeded.mech ? seeded.mech : "-");
  const orderStatus = o ? o.st : seeded.st;

  const md = $("rcpt-md");
  if (!md) return;

  md.innerHTML = `
    ${(o && o.reversed) ? `
      <div style="background:#FEF2F2;border:2px solid #EF4444;border-radius:8px;padding:12px;margin-bottom:16px;text-align:center">
        <div style="color:#DC2626;font-size:16px;font-weight:900;letter-spacing:0.08em;margin-bottom:4px">*** REVERSED ***</div>
        <div style="font-size:12px;color:#991B1B"><b>Reason:</b> ${escHtml(o.reversed.reason || "Transaction reversed")}</div>
        <div style="font-size:11px;color:#7F1D1D;margin-top:2px">${escHtml(o.reversed.at)} · by ${escHtml(displayUserName(o.reversed.by || "System Admin"))}</div>
      </div>
    ` : ""}
    <div style="text-align:center;margin-bottom:20px;border-bottom:1px solid var(--border);padding-bottom:16px">
      <div style="display:flex;justify-content:center;margin-bottom:4px;color:var(--text)">${ICONS.bike}</div>
      <h2 style="margin:4px 0 2px;font-size:22px;color:var(--text)">MotoCare</h2>
      <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em">${isQuick ? `Quick Fix Receipt · ${escHtml((o && getQuickLaborSubtypeLabel(o)) || (seeded && seeded.subtype) || "Labor Only")}` : "Official Repair &amp; Service Receipt"}</div>
      <div style="font-size:13px;font-weight:700;color:var(--accent);margin-top:6px">${isQuick ? ((o && (o.no || o.txnId || getTxnId(o))) || (seeded && seeded.jo) || "QL-0001") : jo}</div>
      <div style="font-size:11px;color:var(--text-muted)">${formatJobDate(pay.paidAt || today())} · ${formatJobTime(pay.paidAt || "")}</div>
    </div>

    <!-- Vehicle & Customer Meta -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;font-size:12px;background:var(--bg-subtle);padding:12px;border-radius:8px;border:1px solid var(--border)">
      <div>
        <div style="color:var(--text-muted);font-weight:600">CUSTOMER</div>
        <div style="font-weight:700;color:var(--text-primary)">${escHtml(custName)}</div>
        <div style="color:var(--text-secondary)">${escHtml(custPhone)}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);font-weight:600">MOTORCYCLE</div>
        <div style="font-weight:700;color:var(--text-primary)">${escHtml(vehPlate)}</div>
        <div style="color:var(--text-secondary)">${escHtml(vehModel)}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);font-weight:600">MARKED BY</div>
        <div style="font-weight:700;color:var(--text-primary)">${escHtml(mechName)}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);font-weight:600">STATUS</div>
        <div>
          ${badge(orderStatus)}
          ${isQuick ? `<span class="badge" style="font-size:10px;font-weight:700;margin-left:4px">${escHtml((o && getQuickLaborSubtypeLabel(o)) || (seeded && seeded.subtype) || "Labor Only")}</span>` : ""}
        </div>
      </div>
    </div>

    <!-- Itemized Lines -->
    <table style="width:100%;margin-bottom:12px;font-size:12px">
      <thead>
        <tr style="border-bottom:1px solid var(--border)">
          <th style="padding:6px 0">ITEM / SERVICE</th>
          <th class="r" style="padding:6px 0">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${
          laborLines.length
            ? `<tr><td colspan="2" style="font-weight:700;font-size:10px;text-transform:uppercase;color:var(--text-muted);padding:8px 0 4px">Labor &amp; Services</td></tr>` +
              laborLines.map((l) => `<tr><td style="padding:4px 0">${escHtml(l.n)}</td><td class="r" style="padding:4px 0">${P(l.a)}</td></tr>`).join("")
            : ""
        }
        ${
          partLines.length
            ? `<tr><td colspan="2" style="font-weight:700;font-size:10px;text-transform:uppercase;color:var(--text-muted);padding:8px 0 4px">Parts &amp; Materials</td></tr>` +
              partLines.map((l) => `<tr><td style="padding:4px 0">${escHtml(l.n)}</td><td class="r" style="padding:4px 0">${P(l.a)}</td></tr>`).join("")
            : ""
        }
      </tbody>
    </table>

    <!-- Totals & Payment -->
    <div style="border-top:1px solid var(--border);padding-top:10px;font-size:13px;display:flex;flex-direction:column;gap:4px">
      <div style="display:flex;justify-content:space-between">
        <span>Subtotal</span>
        <span>${P(brk.labor + brk.parts)}</span>
      </div>
      ${
        brk.discount
          ? `<div style="display:flex;justify-content:space-between;color:var(--success)">
              <span>Discount</span>
              <span>-${P(brk.discount)}</span>
            </div>`
          : ""
      }
      <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:800;border-top:1px solid var(--border);padding-top:6px;margin-top:4px">
        <span>Total Paid</span>
        <span>${(o && o.reversed) ? `<span class="text-struck">${P(brk.total)}</span>` : P(brk.total)}</span>
      </div>
    </div>

    <div style="background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-top:14px;font-size:12px">
      <div style="display:flex;justify-content:space-between">
        <span>Payment Method:</span>
        <b>${escHtml(pay.method || "Cash")}</b>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:3px">
        <span>Amount Tendered:</span>
        <b>${P(pay.tendered || brk.total)}</b>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:3px">
        <span>Change:</span>
        <b>${P(pay.change || 0)}</b>
      </div>
    </div>

    <div style="text-align:center;margin-top:20px;font-size:12px;color:var(--text-muted)">
      Thank you for your business! Ride safely.
    </div>

    <div class="rcpt-no-print" style="display:flex;justify-content:flex-end;gap:8px;margin-top:20px;border-top:1px solid var(--border);padding-top:14px">
      <button type="button" class="btn g" onclick="closeReceipt()">Close</button>
      <button type="button" class="btn" data-demo="true" onclick="showDemoNotice()"><span style="display:inline-flex;align-items:center;margin-right:6px">${ICONS.print}</span>Print Receipt</button>
    </div>
  `;

  const ov = $("rcpt-ov");
  if (ov) {
    ov.classList.add("on");
    ov.focus();
  }
}
/**
 * Closes the digital receipt modal.
 */
function closeReceipt() {
  const ov = $("rcpt-ov");
  if (ov) ov.classList.remove("on");
}

/* ==========================================================
   REPORTS
   ========================================================== */

/** Currently selected report filter period ("today", "7days", "month", "lastMonth", "year", "all"). */
let reportPeriod = "month";

/**
 * Filter change handler for report period. Dynamically re-renders the report results
 * container so all charts and lists update without losing focus on the period selector
 * or jumping page scroll.
 * @param {string} [period]
 */
function setReportPeriod(period) {
  if (period) reportPeriod = period;
  const wrap = $("report-results-wrap");
  if (wrap) {
    wrap.innerHTML = getReportResultsHtml();
  }
}

/**
 * Computes staff revenue and completed jobs breakdown for selected report period.
 * Excludes cancelled, reversed, and deleted jobs.
 * Slices are capped at 5: top 4 staff + "Other" (if > 4).
 * Staff with 0 revenue are placed in unrecorded/footnote.
 * @param {string} [period=reportPeriod]
 * @returns {{ slices: Array<{ name: string, jobs: number, revenue: number, pct: number, color: string }>, unrecorded: { jobs: number, revenue: number }, totalRevenue: number }}
 */
function getStaffPerformance(period = reportPeriod) {
  const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st !== "Completed") return false;
    if (o.cancel || o.cancelled || o.reversed || o.deleted || o.isDeleted) return false;
    const jobDate = (o.done || (o.pay && o.pay.paidAt) || o.at || o.date || "").slice(0, 10);
    return isEntryInPeriod(jobDate, period);
  });

  const staffMap = new Map();
  let unrecordedJobs = 0;
  let unrecordedRevenue = 0;

  countableWos.forEach((o) => {
    const rawMech = typeof o.mech === "string" ? o.mech.trim() : "";
    const rev = (o.pay && typeof o.pay.amount === "number") ? o.pay.amount : getOrderTotals(o).total;
    if (!rawMech || rawMech.toLowerCase() === "not recorded" || rawMech.toLowerCase() === "unassigned") {
      unrecordedJobs += 1;
      unrecordedRevenue += rev;
      return;
    }
    if (!staffMap.has(rawMech)) {
      staffMap.set(rawMech, { name: rawMech, jobs: 0, revenue: 0 });
    }
    const entry = staffMap.get(rawMech);
    entry.jobs += 1;
    entry.revenue += rev;
  });

  let totalRevenue = 0;
  staffMap.forEach((s) => {
    totalRevenue += s.revenue;
  });
  totalRevenue += unrecordedRevenue;

  const activeStaff = [];
  staffMap.forEach((s) => {
    if (s.revenue > 0) {
      activeStaff.push(s);
    } else {
      unrecordedJobs += s.jobs;
    }
  });
  activeStaff.sort((a, b) => b.revenue - a.revenue || a.name.localeCompare(b.name));

  const sliceColors = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)"
  ];

  let slices = [];
  if (activeStaff.length <= 4) {
    slices = activeStaff.map((s, idx) => ({
      name: s.name,
      jobs: s.jobs,
      revenue: s.revenue,
      pct: totalRevenue > 0 ? Math.round((s.revenue / totalRevenue) * 100) : 0,
      color: sliceColors[idx] || "var(--chart-other)"
    }));
  } else {
    for (let i = 0; i < 4; i++) {
      const s = activeStaff[i];
      slices.push({
        name: s.name,
        jobs: s.jobs,
        revenue: s.revenue,
        pct: totalRevenue > 0 ? Math.round((s.revenue / totalRevenue) * 100) : 0,
        color: sliceColors[i]
      });
    }
    let otherJobs = 0;
    let otherRevenue = 0;
    for (let i = 4; i < activeStaff.length; i++) {
      otherJobs += activeStaff[i].jobs;
      otherRevenue += activeStaff[i].revenue;
    }
    slices.push({
      name: "Other",
      jobs: otherJobs,
      revenue: otherRevenue,
      pct: totalRevenue > 0 ? Math.round((otherRevenue / totalRevenue) * 100) : 0,
      color: "var(--chart-other)"
    });
  }

  return {
    slices,
    unrecorded: {
      jobs: unrecordedJobs,
      revenue: unrecordedRevenue
    },
    totalRevenue
  };
}

/**
 * Builds HTML for the Staff Performance card:
 * Left: Donut chart showing revenue share per staff member with center total.
 * Right: Compact breakdown table with matching colored dots.
 * Footnote: Unrecorded staff with 0 jobs and ₱0.
 * @returns {string} HTML string.
 */
function renderStaffPerformanceCard() {
  const data = getStaffPerformance(reportPeriod);
  const { slices, unrecorded, totalRevenue } = data;

  let donutSvgHtml = "";
  if (totalRevenue === 0 || !slices.length) {
    donutSvgHtml = `
      <div class="rpt-donut-wrap">
        <svg viewBox="0 0 160 160" width="160" height="160" class="rpt-donut-svg" role="img" aria-label="No revenue in this period">
          <circle cx="80" cy="80" r="54" fill="none" stroke="var(--chart-other)" stroke-width="16"></circle>
          <text x="80" y="74" text-anchor="middle" font-size="16" font-weight="700" fill="var(--text)">₱0</text>
          <text x="80" y="89" text-anchor="middle" font-size="10" font-weight="600" fill="var(--text-muted)">
            <tspan x="80" dy="0">No revenue in</tspan>
            <tspan x="80" dy="12">this period</tspan>
          </text>
        </svg>
      </div>
    `;
  } else {
    const C = 2 * Math.PI * 54;
    let accumulatedOffset = 0;
    const sliceCircles = slices.map((s) => {
      const share = totalRevenue > 0 ? (s.revenue / totalRevenue) : 0;
      const dash = share * C;
      const gap = C - dash;
      const offset = accumulatedOffset;
      accumulatedOffset += dash;
      const safeName = escHtml(s.name);
      const safeRev = "₱" + Math.round(s.revenue).toLocaleString();
      const tooltip = `${safeName}: ${safeRev} (${s.pct}%)`;
      return `<circle cx="80" cy="80" r="54" fill="none" stroke="${s.color}" stroke-width="16" stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}" transform="rotate(-90 80 80)"><title>${tooltip}</title></circle>`;
    }).join("");

    const ariaDesc = "Staff revenue share: " + slices.map((s) => `${s.name} ${s.pct}%`).join(", ");

    donutSvgHtml = `
      <div class="rpt-donut-wrap">
        <svg viewBox="0 0 160 160" width="160" height="160" class="rpt-donut-svg" role="img" aria-label="${escHtml(ariaDesc)}">
          ${sliceCircles}
          <text x="80" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">₱${Math.round(totalRevenue).toLocaleString()}</text>
          <text x="80" y="93" text-anchor="middle" font-size="11" font-weight="600" fill="var(--text-muted)">Total</text>
        </svg>
      </div>
    `;
  }

  let tableRowsHtml = "";
  if (!slices.length) {
    tableRowsHtml = `<tr><td colspan="3" style="text-align:center;color:var(--text-muted);padding:24px 0">No revenue in this period</td></tr>`;
  } else {
    tableRowsHtml = slices.map((s) => `
      <tr>
        <td>
          <span class="rpt-staff-cell">
            <span class="rpt-dot" style="background:${s.color}"></span>
            <b>${escHtml(s.name)}</b>
          </span>
        </td>
        <td class="r" style="font-weight:600">${s.jobs}</td>
        <td class="r" style="font-weight:700">₱${Math.round(s.revenue).toLocaleString()}</td>
      </tr>
    `).join("");
  }

  const footnoteHtml = `
    <div class="rpt-footnote">
      Not recorded: ${unrecorded.jobs} jobs · ₱${Math.round(unrecorded.revenue).toLocaleString()}
    </div>
  `;

  return `
    <div class="card reports-grid-wide">
      <div class="hd" style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
        <span>${LINE_ICONS.rep}</span>
        <span>Staff Performance</span>
      </div>
      <div class="rpt-staff-split">
        <div class="rpt-staff-left">
          ${donutSvgHtml}
        </div>
        <div class="rpt-staff-right tw">
          <table class="rpt-table">
            <thead>
              <tr>
                <th>Staff</th>
                <th class="r">Jobs</th>
                <th class="r">Revenue</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
      ${footnoteHtml}
    </div>
  `;
}

/**
 * Computes the top 5 most performed labor services for selected report period.
 * Aggregates countable completed repair jobs and quick labor records.
 * Excludes cancelled, voided, reversed records.
 * @param {string} [period=reportPeriod]
 * @returns {Array<{ name: string, count: number, revenue: number }>}
 */
function getMostLaborDone(period = reportPeriod) {
  const map = new Map();

  function recordLabor(name, rev = 0) {
    if (!name || typeof name !== "string") return;
    const cleanName = name.trim();
    if (!cleanName) return;
    if (!map.has(cleanName)) {
      map.set(cleanName, { name: cleanName, count: 0, revenue: 0 });
    }
    const entry = map.get(cleanName);
    entry.count += 1;
    entry.revenue += rev;
  }

  // 1. From completed countable work orders in period
  const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st !== "Completed") return false;
    if (o.cancel || o.cancelled || o.reversed || o.deleted || o.isDeleted) return false;
    const jobDate = (o.done || (o.pay && o.pay.paidAt) || o.at || o.date || "").slice(0, 10);
    return isEntryInPeriod(jobDate, period);
  });

  const svCatalog = Array.isArray(D.sv) ? D.sv : [];
  const svById = new Map();
  svCatalog.forEach((s) => {
    if (s && s.id) svById.set(s.id, s);
  });

  countableWos.forEach((o) => {
    if (Array.isArray(o.sv)) {
      o.sv.forEach((svItem) => {
        if (!svItem) return;
        if (typeof svItem === "string") {
          const cat = svById.get(svItem);
          const name = cat ? cat.name : svItem;
          const laborRev = cat ? (Number(cat.labor) || 0) : 0;
          recordLabor(name, laborRev);
        } else if (typeof svItem === "object") {
          recordLabor(svItem.name || svItem.id, Number(svItem.labor || svItem.a) || 0);
        }
      });
    }

    const lineItems = [...(Array.isArray(o.items) ? o.items : []), ...(Array.isArray(o.extra) ? o.extra : [])];
    lineItems.forEach((it) => {
      if (!it) return;
      if (it.kind === "labor") {
        recordLabor(it.name || "Custom labor", Number(it.a || it.price) || 0);
      }
    });
  });

  // 2. From Quick Labor in D.sales (excluding voided/cancelled/refunded)
  const sales = Array.isArray(D.sales) ? D.sales : [];
  sales.forEach((s) => {
    if (!s) return;
    const isVoided = Boolean(
      s.voided || s.isVoided || s.st === "Voided" || s.st === "Cancelled" ||
      s.refunded || s.isRefunded || s.st === "Refunded"
    );
    if (isVoided) return;
    const isLabor = s.type === "QUICK LABOR" || s.type === "Labor" || Boolean(s.isLabor);
    if (!isLabor) return;

    const saleDate = (s.at || s.date || "").slice(0, 10);
    if (!isEntryInPeriod(saleDate, period)) return;

    if (s.serviceName) {
      recordLabor(s.serviceName, Number(s.laborSubtotal || s.amount || s.total) || 0);
    }
    const items = Array.isArray(s.items) ? s.items : (Array.isArray(s.lines) ? s.lines : []);
    items.forEach((it) => {
      if (it && it.kind === "labor") {
        recordLabor(it.name || "Labor", Number(it.price || it.a) || 0);
      }
    });
  });

  const list = [];
  map.forEach((entry) => {
    if (entry.count > 0) {
      list.push(entry);
    }
  });

  list.sort((a, b) => b.count - a.count || b.revenue - a.revenue || a.name.localeCompare(b.name));
  return list.slice(0, 5);
}

/**
 * Builds HTML for the Most Labor Done horizontal bar chart card (Row 2 Left).
 * Bars use --chart-1 (#2563EB) and display the count on the right.
 * @returns {string} HTML string.
 */
function renderMostLaborDoneCard() {
  const laborList = getMostLaborDone(reportPeriod);
  const headerHtml = `
    <div class="hd" style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span>${LINE_ICONS.rep}</span>
      <span>Most Labor Done</span>
    </div>
  `;

  if (!laborList.length) {
    return `
      <div class="card">
        ${headerHtml}
        <div class="empty rpt-empty">No data for this period.</div>
      </div>
    `;
  }

  const maxVal = Math.max(1, laborList[0].count);
  const rowsHtml = laborList.map((item) => {
    const pct = Math.max(4, Math.round((item.count / maxVal) * 100));
    const safeName = escHtml(item.name);
    return `
      <div class="rpt-bar-row">
        <div class="rpt-bar-label" title="${safeName}">${safeName}</div>
        <div class="rpt-bar-track">
          <div class="rpt-bar-fill rpt-bar-fill-labor" style="width:${pct}%"></div>
        </div>
        <div class="rpt-bar-val">${item.count}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="card">
      ${headerHtml}
      <div class="rpt-bar-list">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Computes and returns the top most used spare parts in the shop for selected period.
 * Allocated: parts allocated on non-cancelled repair jobs within the period.
 * Sold: parts sold in Quick Sales & Quick Labor within the period (excludes repair billing).
 * Excludes labor lines, custom/non-catalog items, and voided/refunded sales.
 * @param {string} [period=reportPeriod]
 * @returns {Array<{id: string, name: string, allocated: number, sold: number, total: number}>}
 */
function getMostUsedParts(period = reportPeriod) {
  const catalogParts = Array.isArray(D.pt) ? D.pt : [];
  const partById = new Map();
  const partByName = new Map();
  catalogParts.forEach((p) => {
    if (p && p.id) partById.set(p.id, p);
    if (p && p.name) partByName.set(p.name.trim().toLowerCase(), p);
  });

  const map = new Map();

  function getOrCreateEntry(partId, partName) {
    let catPart = (partId && partById.get(partId)) || (partName && partByName.get(partName.trim().toLowerCase()));
    let key = catPart ? catPart.id : (partId ? partId : null);
    let name = catPart ? catPart.name : (partName || "Unnamed part");
    if (!key) return null;
    if (!catPart && !partId) return null;
    if (!map.has(key)) {
      map.set(key, {
        id: key,
        name: name,
        allocated: 0,
        sold: 0,
        total: 0
      });
    }
    return map.get(key);
  }

  // 1. ALLOCATED: non-cancelled repair jobs whose date is inside selected period
  const countableWos = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st === "Cancelled" || o.cancel || o.cancelled || o.reversed || o.deleted || o.isDeleted) return false;
    const jobDate = (o.at || o.date || "").slice(0, 10);
    return isEntryInPeriod(jobDate, period);
  });

  countableWos.forEach((o) => {
    const lineItems = [...(Array.isArray(o.items) ? o.items : []), ...(Array.isArray(o.extra) ? o.extra : [])];
    lineItems.forEach((it) => {
      if (!it) return;
      if (it.kind !== "part") return;
      if (it.src === "own") return;
      if (it.custom || it.isCustom || it.kind === "custom") return;

      const qty = Math.max(0, parseInt(it.qty, 10) || 0);
      if (qty <= 0) return;

      const entry = getOrCreateEntry(it.partId || it.catalogId || it.id, it.name);
      if (entry) {
        entry.allocated += qty;
      }
    });

    // Also include catalog parts from services on work orders (e.g. seed jobs)
    if ((!lineItems.length || lineItems.length === 0) && Array.isArray(o.sv)) {
      o.sv.forEach((svItem) => {
        const s = (typeof svItem === "string") ? (typeof g === "function" ? g("sv", svItem) : null) : svItem;
        if (s && Array.isArray(s.parts)) {
          s.parts.forEach((pId) => {
            const entry = getOrCreateEntry(pId, null);
            if (entry) {
              entry.allocated += 1;
            }
          });
        }
      });
    }
  });

  // 2. SOLD: Quick Sales and Quick Labor sales in period (excluding voided/refunded & repair billing)
  const sales = Array.isArray(D.sales) ? D.sales : [];
  sales.forEach((s) => {
    if (!s) return;
    const isVoidOrRefund = Boolean(
      s.voided || s.isVoided || s.st === "Voided" || s.st === "Cancelled" ||
      s.refunded || s.isRefunded || s.st === "Refunded"
    );
    if (isVoidOrRefund) return;
    if (s.type === "REPAIR SERVICE" || s.isRepair || s.woId) return;

    const saleDate = (s.at || s.date || "").slice(0, 10);
    if (!isEntryInPeriod(saleDate, period)) return;

    const items = Array.isArray(s.items) ? s.items : (Array.isArray(s.lines) ? s.lines : (Array.isArray(s.cart) ? s.cart : []));
    items.forEach((it) => {
      if (!it) return;
      if (it.kind === "labor") return;
      if (it.custom || it.isCustom || it.kind === "custom") return;

      const qty = Math.max(0, parseInt(it.qty, 10) || 0);
      if (qty <= 0) return;

      const entry = getOrCreateEntry(it.partId || it.catalogId || it.id, it.name);
      if (entry) {
        entry.sold += qty;
      }
    });
  });

  // 3. Compute total and filter
  const rows = [];
  map.forEach((entry) => {
    entry.total = entry.allocated + entry.sold;
    if (entry.total > 0) {
      rows.push(entry);
    }
  });

  // 4. Sort: total descending, then allocated descending, then name ascending
  rows.sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;
    if (b.allocated !== a.allocated) return b.allocated - a.allocated;
    return a.name.localeCompare(b.name);
  });

  return rows.slice(0, 10);
}

/**
 * Builds HTML for the Most Used Parts horizontal bar chart card (Row 2 Right).
 * Bars use --chart-accent-2 (#6366F1) and display the count on the right.
 * @returns {string} HTML string.
 */
function renderMostUsedPartsCard() {
  const parts = getMostUsedParts(reportPeriod).slice(0, 5);
  const headerHtml = `
    <div class="hd" style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span>${LINE_ICONS.cat}</span>
      <span>Most Used Parts</span>
    </div>
  `;

  if (!parts.length) {
    return `
      <div class="card">
        ${headerHtml}
        <div class="empty rpt-empty">No data for this period.</div>
      </div>
    `;
  }

  const maxVal = Math.max(1, parts[0].total);
  const rowsHtml = parts.map((item) => {
    const pct = Math.max(4, Math.round((item.total / maxVal) * 100));
    const safeName = escHtml(item.name);
    return `
      <div class="rpt-bar-row">
        <div class="rpt-bar-label" title="${safeName}">${safeName}</div>
        <div class="rpt-bar-track">
          <div class="rpt-bar-fill rpt-bar-fill-parts" style="width:${pct}%"></div>
        </div>
        <div class="rpt-bar-val">${item.total}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="card">
      ${headerHtml}
      <div class="rpt-bar-list">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Computes the top 5 customer complaints from jobs in selected report period.
 * Excludes cancelled, reversed, and deleted jobs.
 * @param {string} [period=reportPeriod]
 * @returns {Array<{ name: string, count: number }>}
 */
function getTopComplaints(period = reportPeriod) {
  const map = new Map();
  const jobs = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st === "Cancelled" || o.cancel || o.cancelled || o.reversed || o.deleted || o.isDeleted) return false;
    const jobDate = (o.at || o.date || "").slice(0, 10);
    return isEntryInPeriod(jobDate, period);
  });

  jobs.forEach((o) => {
    if (Array.isArray(o.complaints)) {
      o.complaints.forEach((c) => {
        if (!c || typeof c !== "string") return;
        const clean = c.trim();
        if (!clean) return;
        map.set(clean, (map.get(clean) || 0) + 1);
      });
    }
  });

  const list = [];
  map.forEach((count, name) => {
    list.push({ name, count });
  });

  list.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  return list.slice(0, 5);
}

/**
 * Builds HTML for the Top Customer Complaints progress-bar list card (Row 3 Left).
 * Each row has the complaint name, its count, and a soft light-blue fill bar (--chart-3).
 * @returns {string} HTML string.
 */
function renderTopComplaintsCard() {
  const complaints = getTopComplaints(reportPeriod);
  const headerHtml = `
    <div class="hd" style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span>${ICONS.chat}</span>
      <span>Top Customer Complaints</span>
    </div>
  `;

  if (!complaints.length) {
    return `
      <div class="card">
        ${headerHtml}
        <div class="empty rpt-empty">No complaints recorded in this period.</div>
      </div>
    `;
  }

  const maxVal = Math.max(1, complaints[0].count);
  const rowsHtml = complaints.map((item) => {
    const pct = Math.max(4, Math.round((item.count / maxVal) * 100));
    const safeName = escHtml(item.name);
    return `
      <div class="rpt-progress-row">
        <div class="rpt-progress-labels">
          <span class="rpt-progress-name" title="${safeName}">${safeName}</span>
          <span class="rpt-progress-val">${item.count}</span>
        </div>
        <div class="rpt-progress-track">
          <div class="rpt-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="card">
      ${headerHtml}
      <div class="rpt-progress-list">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Computes the top 5 OBD / ECU fault codes from jobs in selected report period.
 * Excludes cancelled, reversed, and deleted jobs.
 * @param {string} [period=reportPeriod]
 * @returns {Array<{ code: string, desc: string, count: number }>}
 */
function getTopFaultCodes(period = reportPeriod) {
  const map = new Map();
  const jobs = (Array.isArray(D.wo) ? D.wo : []).filter((o) => {
    if (!isCountableJob(o)) return false;
    if (o.st === "Cancelled" || o.cancel || o.cancelled || o.reversed || o.deleted || o.isDeleted) return false;
    const jobDate = (o.at || o.date || "").slice(0, 10);
    return isEntryInPeriod(jobDate, period);
  });

  jobs.forEach((o) => {
    const obd = o.inspection && o.inspection.obd;
    const codes = (obd && Array.isArray(obd.codes)) ? obd.codes : (Array.isArray(o.obdCodes) ? o.obdCodes : []);
    codes.forEach((item) => {
      if (!item) return;
      let codeStr = "";
      let descStr = "";
      if (typeof item === "string") {
        codeStr = item.trim().toUpperCase();
        const libMatch = (typeof findDtcInLibrary === "function") ? findDtcInLibrary(codeStr) : null;
        if (libMatch && libMatch.entry && libMatch.entry.desc) {
          descStr = libMatch.entry.desc;
        }
      } else if (typeof item === "object") {
        codeStr = (item.code || "").trim().toUpperCase();
        descStr = (typeof getDtcDisplayDesc === "function") ? getDtcDisplayDesc(item) : (item.desc || "");
      }
      if (!codeStr) return;
      if (!map.has(codeStr)) {
        map.set(codeStr, { code: codeStr, desc: descStr, count: 0 });
      }
      const entry = map.get(codeStr);
      entry.count += 1;
      if (!entry.desc && descStr) entry.desc = descStr;
    });
  });

  const list = [];
  map.forEach((entry) => {
    list.push(entry);
  });

  list.sort((a, b) => b.count - a.count || a.code.localeCompare(b.code));
  return list.slice(0, 5);
}

/**
 * Builds HTML for the Most Frequent Fault Codes ranked list card (Row 3 Right).
 * Each row shows rank number, the code, short description, and a neutral count pill badge.
 * @returns {string} HTML string.
 */
function renderTopFaultCodesCard() {
  const codes = getTopFaultCodes(reportPeriod);
  const headerHtml = `
    <div class="hd" style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span>${LINE_ICONS.pos}</span>
      <span>Most Frequent Fault Codes</span>
    </div>
  `;

  if (!codes.length) {
    return `
      <div class="card">
        ${headerHtml}
        <div class="empty rpt-empty">No fault codes recorded in this period.</div>
      </div>
    `;
  }

  const rowsHtml = codes.map((item, idx) => {
    const safeCode = escHtml(item.code);
    const descHtml = item.desc ? `<span class="rpt-code-desc" title="${escHtml(item.desc)}">· ${escHtml(item.desc)}</span>` : "";
    return `
      <div class="rpt-ranked-row">
        <div class="rpt-ranked-left">
          <span class="rpt-rank-num">#${idx + 1}</span>
          <span class="rpt-code-text">${safeCode}</span>
          ${descHtml}
        </div>
        <span class="rpt-count-pill">${item.count}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="card">
      ${headerHtml}
      <div class="rpt-ranked-list">
        ${rowsHtml}
      </div>
    </div>
  `;
}

/**
 * Builds HTML for report KPI cards and the 5 analytics chart/list cards.
 * @returns {string} HTML string.
 */
function getReportResultsHtml() {
  const stat = (i, bg, l, n, t) =>
    `<div class="card st"><div class="ic" style="background:${bg}">${i}</div><div><small>${l}</small><b>${n}</b>${t}</div></div>`;

  return `
    <!-- KPI Row -->
    <div class="reports-kpi-grid">
      ${stat(ICONS.money, "", "REVENUE", "₱3,260", "Paid in period")}
      ${stat(LINE_ICONS.rep, "", "LABOR EARNINGS", "₱1,150", "From services")}
      ${stat(LINE_ICONS.cat, "", "PARTS BILLED", "₱2,110", "From items/fluids")}
      ${stat(LINE_ICONS.pos, "", "QUICK SALES", "₱0", "0 sales")}
      ${stat(LINE_ICONS.ql, "", "QUICK LABOR", "₱0", "0 records")}
      ${stat(ICONS.checkCircle, "", "JOBS COMPLETED", "3", "In period")}
      ${stat(LINE_ICONS.reports, "", "AVERAGE JOB VALUE", "₱1,087", "Per completed job")}
    </div>

    <!-- Analytics Cards Grid (Row 1: Staff Performance; Row 2: Most Labor Done & Most Used Parts; Row 3: Top Customer Complaints & Most Frequent Fault Codes) -->
    <div class="reports-grid">
      <!-- Row 1 (full width) -->
      ${renderStaffPerformanceCard()}

      <!-- Row 2 (2 columns desktop, 1 column mobile) -->
      ${renderMostLaborDoneCard()}
      ${renderMostUsedPartsCard()}

      <!-- Row 3 (2 columns desktop, 1 column mobile) -->
      ${renderTopComplaintsCard()}
      ${renderTopFaultCodesCard()}
    </div>
  `;
}

/**
 * Generates the full HTML markup for the Reports view.
 * @returns {string} HTML markup string.
 */
function getReportsViewHtml() {
  return `
    <div class="card top">
      <div>
        <h1>Reports</h1>
        <p>Sales and job reports for the selected period.</p>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="reports-toolbar">
      <div style="display:flex;align-items:center;gap:10px">
        <label for="report-period-select" style="font-size:13px;font-weight:700;color:var(--text-secondary)">Period:</label>
        <select
          id="report-period-select"
          class="his-select"
          onchange="setReportPeriod(this.value)"
          style="min-width:180px"
        >
          <option value="today">Today</option>
          <option value="7days">Last 7 Days</option>
          <option value="month" selected>This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <button type="button" class="btn g his-btn-export" data-demo="true" onclick="showDemoNotice()" title="Export report to CSV">
        <span style="display:inline-flex;align-items:center">${ICONS.download}</span> Export Report
      </button>
    </div>

    <!-- Report Results Container -->
    <div id="report-results-wrap">
      ${getReportResultsHtml()}
    </div>
  `;
}

/* ==========================================================
   SYSTEM ACCESS & PERMISSIONS
   ========================================================== */

/** Currently active tab on System Access & Permissions screen ("directory" or "matrix"). */
let userMgmtTab = "directory";

/** Active search query for user directory table. */
let userSearch = "";

/**
 * Sets the active tab on the System Access & Permissions screen (System Admin only).
 * @param {"directory"|"matrix"} tab - Target tab.
 */
function setUserMgmtTab(tab) {
  if (!isSuper() || !canOpen("users")) return;
  userMgmtTab = tab;
  const main = $("main");
  if (main) main.innerHTML = getUsersViewHtml();
}

/**
 * Handles live search input on User Directory tab (System Admin and Admin).
 * Refreshes only the table rows to preserve input focus.
 * @param {string} val - Typed search string.
 */
function onUserSearchInput(val) {
  if ((!isSuper() && !isAdmin()) || !canOpen("users")) return;
  userSearch = val;
  const tbody = $("user-table-body");
  if (tbody) tbody.innerHTML = getUserTableRowsHtml();
}

/**
 * Returns filtered user accounts matching search query.
 * @returns {Array<Object>} Filtered list of user accounts.
 */
function getFilteredUsers() {
  const users = loadUsers();
  const q = (userSearch || "").trim().toLowerCase();
  if (!q) return users;
  return users.filter((u) => {
    const name = displayUserName(u.name).toLowerCase();
    const email = (u.email || "").toLowerCase();
    return name.includes(q) || email.includes(q);
  });
}

/**
 * Formats user role badge with role-tinted background, border, and icon.
 * @param {string} role - System role key.
 * @returns {string} HTML markup string.
 */
function getUserRoleBadge(role) {
  if (role === "superadmin") {
    return `<span class="um-role-badge superadmin"><span style="display:inline-flex;align-items:center">${LINE_ICONS.users}</span> SYSTEM ADMIN</span>`;
  }
  if (role === "admin") {
    return `<span class="um-role-badge admin"><span style="display:inline-flex;align-items:center">${ICONS.crown}</span> ADMIN</span>`;
  }
  return `<span class="um-role-badge mechanic"><span style="display:inline-flex;align-items:center">${LINE_ICONS.rep}</span> MECHANIC</span>`;
}

/**
 * Formats a stored local timestamp string into a dark date and muted time.
 * @param {string} ts - Stored local timestamp ("YYYY-MM-DD HH:MM").
 * @returns {string} Formatted HTML.
 */
function formatLastLoginDisplay(ts) {
  if (!ts || !ts.trim()) {
    return `<span style="color:var(--text-muted)">Never</span>`;
  }
  const parts = ts.trim().split(" ");
  if (parts.length !== 2) return `<span style="color:var(--text-muted)">Never</span>`;
  const [datePart, timePart] = parts;
  const [y, m, d] = datePart.split("-").map(Number);
  const [hr, min] = timePart.split(":").map(Number);
  if (!y || !m || !d || isNaN(hr) || isNaN(min)) {
    return `<span style="color:var(--text-muted)">Never</span>`;
  }
  const dateObj = new Date(y, m - 1, d, hr, min);
  const dateStr = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const timeStr = dateObj.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  return `
    <div style="font-weight:600;color:var(--text-primary)">${escHtml(dateStr)}</div>
    <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${escHtml(timeStr)}</div>
  `;
}

/**
 * Builds HTML table rows for the User Directory table.
 * @returns {string} HTML table rows.
 */
function getUserTableRowsHtml() {
  const list = getFilteredUsers();
  if (!list.length) {
    return `
      <tr>
        <td colspan="5" style="text-align:center;padding:36px;color:var(--text-muted)">
          <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:4px">No users found.</div>
          <div>Try a different search or filter.</div>
        </td>
      </tr>
    `;
  }

  const current = getCurrentUser();
  const curId = current ? current.id : null;
  const allUsers = loadUsers();
  const activeSuperAdmins = allUsers.filter((u) => u.role === "superadmin" && u.active !== false).length;

  return list.map((u) => {
    const shownName = displayUserName(u.name);
    const isSelf = u.id === curId;
    const isLastSuperAdmin = u.role === "superadmin" && activeSuperAdmins <= 1 && u.active !== false;
    const canToggleStatus = !isSelf && !isLastSuperAdmin;
    const isActive = u.active !== false;
    const roleBadge = getUserRoleBadge(u.role);
    const statusBadge = isActive
      ? `<span class="um-status-pill active">● Active</span>`
      : `<span class="um-status-pill inactive">● Inactive</span>`;
    const lastLoginHtml = formatLastLoginDisplay(u.lastLogin);
    const emailPrefix = (u.email || "").split("@")[0] || "user";
    const usernameStr = `@${emailPrefix}.${u.role}`;

    return `
      <tr>
        <td>
          <div class="um-user-cell">
            <div class="um-avatar ${escHtml(u.role)}">${escHtml(getInitials(shownName))}</div>
            <div>
              <div class="um-user-name-row">
                <span class="um-user-name">${escHtml(shownName)}</span>
                ${isSelf ? `<span class="um-you-pill">You</span>` : ""}
              </div>
              <div class="um-username">${escHtml(usernameStr)}</div>
            </div>
          </div>
        </td>
        <td>${roleBadge}</td>
        <td>${statusBadge}</td>
        <td>${lastLoginHtml}</td>
        <td class="r" style="white-space:nowrap">
          <button type="button" class="um-action-btn" data-demo="true" onclick="showDemoNotice()" title="Edit user" aria-label="Edit user">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button type="button" class="um-action-btn" onclick="openViewAccessModal('${escHtml(u.id)}')" title="View access" aria-label="View access">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>
          </button>
          ${canToggleStatus ? `
            <button type="button" class="um-action-btn" data-demo="true" onclick="showDemoNotice()" title="${isActive ? "Deactivate user" : "Reactivate user"}" aria-label="${isActive ? "Deactivate user" : "Reactivate user"}">
              ${isActive
                ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="22" y1="11" x2="16" y2="11"></line></svg>`
                : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>`
              }
            </button>
          ` : ""}
        </td>
      </tr>
    `;
  }).join("");
}

/**
 * Opens view access modal showing role description and accessible pages for a user (System Admin and Admin).
 * @param {string} userId
 */
function openViewAccessModal(userId) {
  if ((!isSuper() && !isAdmin()) || !canOpen("users")) return;
  const users = loadUsers();
  const u = users.find((x) => x.id === userId);
  if (!u) return;

  const ov = $("access-ov");
  const md = $("access-md");
  if (!ov || !md) return;

  const shownName = displayUserName(u.name);
  const allowedKeys = getRoleNav(u.role);
  const allowedPages = allowedKeys
    .map((k) => V.find((x) => x[0] === k))
    .filter(Boolean);

  let desc = "Standard user with assigned role access.";
  if (u.role === "superadmin") {
    desc = "System administrator managing access permissions, system settings, backup and sync, and audit logs.";
  } else if (u.role === "admin") {
    desc = "Operations manager with full access to Service Status, customers, catalog, billing, and reports.";
  } else if (u.role === "mechanic") {
    desc = "Service floor specialist with access to dashboard queue, inspections, and assigned repair jobs.";
  }

  md.innerHTML = `
    <div class="insp-header">
      <div>
        <div class="insp-title" id="access-modal-title">Role Access &amp; Permissions</div>
        <div class="insp-subtitle">${escHtml(shownName)} (${escHtml(u.email)})</div>
      </div>
      <button type="button" class="insp-close-btn" onclick="closeViewAccessModal()" title="Close dialog" aria-label="Close dialog">✕</button>
    </div>

    <div style="padding:20px;display:flex;flex-direction:column;gap:16px">
      <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg-page);border:1px solid var(--border);border-radius:10px">
        <div class="um-avatar ${escHtml(u.role)}">${escHtml(getInitials(shownName))}</div>
        <div>
          <div style="font-weight:700;font-size:15px;color:var(--text-primary)">${escHtml(shownName)}</div>
          <div style="margin-top:2px">${getUserRoleBadge(u.role)}</div>
        </div>
      </div>

      <div>
        <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Role Description</div>
        <div style="font-size:13px;color:var(--text-secondary);line-height:1.5">${escHtml(desc)}</div>
      </div>

      <div>
        <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Accessible Navigation Pages</div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${allowedPages.map((p) => {
            const pageLabel = (u.role === "admin" && p[0] === "users") ? "Users" : p[2];
            return `
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg-surface);border:1px solid var(--border);border-radius:8px;font-size:13px;font-weight:600">
              <span style="display:inline-flex;align-items:center">${ICONS[p[0]] || p[1]}</span>
              <span>${escHtml(pageLabel)}</span>
            </div>
          `;
          }).join("")}
        </div>
      </div>
    </div>

    <div class="insp-footer" style="position:static;padding-top:14px;border-top:1px solid var(--border);display:flex;justify-content:flex-end">
      <button type="button" class="btn" onclick="closeViewAccessModal()">Close</button>
    </div>
  `;

  ov.classList.add("on");
  document.body.style.overflow = "hidden";
  ov.focus();
}

/**
 * Closes the View Access modal dialog.
 */
function closeViewAccessModal() {
  const ov = $("access-ov");
  if (ov) {
    ov.classList.remove("on");
  }
  document.body.style.overflow = "";
}

/**
 * Builds HTML for the display-only Permissions Matrix tab table (System Admin only).
 * Shows System Admin's fixed system-page access, Admin's access including Users, and unchanged Mechanic rows.
 * Never writes to "moto1_nav".
 * @returns {string} HTML string.
 */
function getPermissionsMatrixHtml() {
  if (!isSuper()) return "";
  const superNav = getRoleNav("superadmin");
  const adminNav = getRoleNav("admin");
  const mechNav = getRoleNav("mechanic");

  return `
    <div class="matrix-card">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>PAGE / MODULE</th>
            <th>SYSTEM ADMIN</th>
            <th>ADMIN</th>
            <th>MECHANIC</th>
          </tr>
        </thead>
        <tbody>
          ${V.map((route) => {
            const key = route[0];
            const icon = route[1];
            const label = route[2];

            const isSysOnly = key === "settings" || key === "sync";
            const isSuperLocked = SYSTEM_ADMIN_NAV.includes(key);
            const isAdminLocked = key === "dash" || key === "users" || isSysOnly;
            const isMechLocked = key === "audit" || key === "users" || isSysOnly;

            const hasSuper = superNav.includes(key);
            const hasAdmin = adminNav.includes(key) && !isSysOnly;
            const hasMech = mechNav.includes(key) && !isMechLocked;

            const superTip = isSuperLocked ? `System Admin always has access to ${label}.` : "";
            const adminTip = key === "dash"
              ? "Admin must always have access to Dashboard."
              : (key === "users"
                ? "Admin always has access to Users."
                : (isSysOnly ? `${label} is restricted to System Admin.` : ""));
            const mechTip = key === "audit"
              ? "Audit is not available to Mechanics."
              : (isSysOnly || key === "users" ? `${label} is not available to Mechanics.` : "");

            return `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px;font-weight:700">
                    <span style="display:inline-flex;align-items:center;color:var(--text)">${ICONS[key] || icon}</span>
                    <span>${escHtml(label)}</span>
                  </div>
                </td>
                <td>
                  <label class="matrix-check-wrap" title="${escHtml(superTip)}">
                    <input
                      type="checkbox"
                      class="matrix-check"
                      ${hasSuper ? "checked" : ""}
                      ${isSuperLocked ? "disabled" : `onclick="event.preventDefault(); showDemoNotice();"`}
                    />
                    ${isSuperLocked ? `<span style="display:inline-flex;align-items:center;color:var(--text-muted)" title="Locked permission">${ICONS.lock}</span>` : ""}
                  </label>
                </td>
                <td>
                  <label class="matrix-check-wrap" title="${escHtml(adminTip)}">
                    <input
                      type="checkbox"
                      class="matrix-check"
                      ${hasAdmin ? "checked" : ""}
                      ${isAdminLocked ? "disabled" : `onclick="event.preventDefault(); showDemoNotice();"`}
                    />
                    ${isAdminLocked ? `<span style="display:inline-flex;align-items:center;color:var(--text-muted)" title="Locked permission">${ICONS.lock}</span>` : ""}
                  </label>
                </td>
                <td>
                  <label class="matrix-check-wrap" title="${escHtml(mechTip)}">
                    <input
                      type="checkbox"
                      class="matrix-check"
                      ${hasMech ? "checked" : ""}
                      ${isMechLocked ? "disabled" : `onclick="event.preventDefault(); showDemoNotice();"`}
                    />
                    ${isMechLocked ? `<span style="display:inline-flex;align-items:center;color:var(--text-muted)" title="${escHtml(mechTip)}">${ICONS.lock}</span>` : ""}
                  </label>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>

      <div style="margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <p style="margin:0 0 4px;font-size:13px;color:var(--text-muted);font-style:italic">
            POS includes Quick Sales, Quick Labor, and Transactions &amp; Billing. The 'Quick Labor' row opens the Quick Labor tab only.
          </p>
          <p style="margin:0;font-size:13px;color:var(--text-muted);font-style:italic">
            This controls which pages each role can open. It hides pages in the browser only and is not real security.
          </p>
        </div>
        <button
          type="button"
          id="btn-matrix-reset"
          class="btn g sm"
          data-demo="true"
          onclick="showDemoNotice()"
          style="color:var(--text-muted);font-weight:600"
        >
          Reset to defaults
        </button>
      </div>
    </div>
  `;
}

/**
 * Generates the full HTML markup for the Users view (role-based).
 * System Admin sees "System Access & Permissions" with both User Directory and Permissions Matrix tabs.
 * Admin sees "User Management" with ONLY the User Directory (no tabs, no Permissions Matrix).
 * @returns {string} HTML markup string.
 */
function getUsersViewHtml() {
  const isSuperUser = isSuper();
  if ((!isSuperUser && !isAdmin()) || !canOpen("users")) {
    return renderNoAccess();
  }
  if (!isSuperUser) {
    userMgmtTab = "directory";
  }
  const isDirectory = !isSuperUser || userMgmtTab === "directory";

  const titleCardHtml = isSuperUser
    ? renderPageTitleCard("System Access & Permissions", "Manage system access and role permissions.")
    : renderPageTitleCard("User Management", "Manage user accounts.");

  const tabsHtml = isSuperUser ? `
    <!-- Tab navigation -->
    <div class="um-tabs" role="tablist" aria-label="System Access & Permissions Views">
      <button
        type="button"
        role="tab"
        id="um-tab-dir"
        class="um-tab ${isDirectory ? "active" : ""}"
        aria-selected="${isDirectory ? "true" : "false"}"
        onclick="setUserMgmtTab('directory')"
      >
        <span style="display:inline-flex;align-items:center">${LINE_ICONS.cust}</span> User Directory
      </button>
      <button
        type="button"
        role="tab"
        id="um-tab-matrix"
        class="um-tab ${!isDirectory ? "active" : ""}"
        aria-selected="${!isDirectory ? "true" : "false"}"
        onclick="setUserMgmtTab('matrix')"
      >
        <span style="display:inline-flex;align-items:center">${LINE_ICONS.users}</span> Permissions Matrix
      </button>
    </div>
  ` : "";

  return `
    ${titleCardHtml}
    ${tabsHtml}

    ${isDirectory ? `
      <!-- Toolbar -->
      <div class="um-toolbar">
        <div class="um-toolbar-left">
          <div class="um-search-wrap">
            <span class="um-search-icon" style="display:inline-flex;align-items:center">${LINE_ICONS.insp}</span>
            <input
              id="user-search-input"
              class="um-search-input"
              type="text"
              placeholder="Search by Name or Username..."
              value="${escHtml(userSearch)}"
              oninput="onUserSearchInput(this.value)"
            />
          </div>
        </div>

        <button type="button" class="btn-add-user" data-demo="true" onclick="showDemoNotice()">
          <span style="display:inline-flex;align-items:center">${ICONS.userPlus}</span> Add New User
        </button>
      </div>

      <!-- Table Container -->
      <div class="um-table-wrap">
        <table class="um-table">
          <thead>
            <tr>
              <th>EMPLOYEE NAME &amp; USERNAME</th>
              <th>ASSIGNED ROLE</th>
              <th>ACCOUNT STATUS</th>
              <th>LAST LOGIN DATE/TIME</th>
              <th class="r">ACTIONS</th>
            </tr>
          </thead>
          <tbody id="user-table-body">
            ${getUserTableRowsHtml()}
          </tbody>
        </table>
      </div>
    ` : `
      ${getPermissionsMatrixHtml()}
    `}
  `;
}

/* ==========================================================
   AUDIT
   ========================================================== */

/** Active search query for Audit view. */
let auditSearch = "";
let auditPeriod = "7days";
let auditCategory = "all";
let auditUser = "all";
let auditPageLimit = 50;

/**
 * Backwards-compatible reference to audit entries.
 */
const SAMPLE_AUDIT_ENTRIES = (typeof D !== "undefined" && D && Array.isArray(D.audit)) ? D.audit : [];

/** Permitted audit categories per role */
const AUDIT_ROLE_CATEGORIES = {
  superadmin: ["Sessions", "POS & Billing", "Service", "Catalog", "Customers", "Security"],
  admin: ["Sessions", "POS & Billing", "Service", "Customers"]
};

/**
 * Formats a timestamp into local date and time strings.
 * @param {string} atStr
 * @returns {{ date: string, time: string }}
 */
function formatAuditTime(atStr) {
  if (!atStr) return { date: "—", time: "" };
  const parts = String(atStr).split(/[ T]/);
  const datePart = parts[0] || "";
  const timePart = parts[1] || "";

  let dateFormatted = datePart;
  const dTokens = datePart.split("-");
  if (dTokens.length === 3) {
    const y = parseInt(dTokens[0], 10);
    const m = parseInt(dTokens[1], 10) - 1;
    const day = parseInt(dTokens[2], 10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(day)) {
      const d = new Date(y, m, day);
      dateFormatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
  }

  let timeFormatted = timePart;
  if (timePart) {
    const tTokens = timePart.split(":");
    const hr = parseInt(tTokens[0], 10);
    const min = parseInt(tTokens[1] || "0", 10);
    const sec = tTokens[2] !== undefined && tTokens[2] !== "" ? parseInt(tTokens[2], 10) : null;
    if (!isNaN(hr)) {
      const ampm = hr >= 12 ? "PM" : "AM";
      const hr12 = hr % 12 || 12;
      const pad = (n) => String(n).padStart(2, "0");
      timeFormatted = sec !== null && !isNaN(sec) ? `${pad(hr12)}:${pad(min)}:${pad(sec)} ${ampm}` : `${pad(hr12)}:${pad(min)} ${ampm}`;
    }
  }
  return { date: dateFormatted, time: timeFormatted };
}

/**
 * Filters entry timestamp by selected period.
 * @param {string} entryAt
 * @param {string} period
 * @returns {boolean}
 */
function isEntryInPeriod(entryAt, period) {
  if (period === "all" || !period) return true;
  if (!entryAt) return true;
  const dTokens = String(entryAt).split(/[ T]/)[0].split("-").map(Number);
  if (dTokens.length < 3 || isNaN(dTokens[0])) return true;
  const entryDate = new Date(dTokens[0], dTokens[1] - 1, dTokens[2]);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (period === "today") {
    return entryDate.getTime() === today.getTime();
  }
  if (period === "7days") {
    const past7 = new Date(today);
    past7.setDate(past7.getDate() - 7);
    return entryDate >= past7 && entryDate <= now;
  }
  if (period === "month") {
    return entryDate.getFullYear() === now.getFullYear() && entryDate.getMonth() === now.getMonth();
  }
  if (period === "lastMonth") {
    const prevYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    const prevMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
    return entryDate.getFullYear() === prevYear && entryDate.getMonth() === prevMonth;
  }
  if (period === "year") {
    return entryDate.getFullYear() === now.getFullYear();
  }
  return true;
}

/**
 * Matches entry against search query.
 * @param {Object} entry
 * @param {string} query
 * @returns {boolean}
 */
function matchesAuditSearch(entry, query) {
  if (!query || !query.trim()) return true;
  const q = query.trim().toLowerCase();
  const byText = displayUserName(entry.by || "").toLowerCase();
  const roleText = (getUserRoleLabel(entry.role) || entry.role || "").toLowerCase();
  const catText = (entry.cat || "").toLowerCase();
  const actText = (entry.action || "").toLowerCase();
  const refText = (entry.ref || "").toLowerCase();
  const noteText = (entry.note || "").toLowerCase();
  return byText.includes(q) || roleText.includes(q) || catText.includes(q) || actText.includes(q) || refText.includes(q) || noteText.includes(q);
}

/**
 * Generates options for User filter dropdown based on visible entries.
 * @param {boolean} isSuperUser
 * @returns {string} HTML string
 */
function getAuditUserOptionsHtml(isSuperUser) {
  const all = (typeof D !== "undefined" && D && Array.isArray(D.audit)) ? D.audit : [];
  const visible = all.filter((e) => canViewAuditEntry(e, isSuperUser));
  const usersSet = new Set();
  visible.forEach((e) => {
    if (e.by) usersSet.add(displayUserName(e.by));
  });
  const order = ["System Admin", "Maria Santos", "Larpus", "Hiyo", "Unknown user"];
  const usersList = Array.from(usersSet).sort((a, b) => {
    const idxA = order.indexOf(a);
    const idxB = order.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  return `
    <option value="all" ${auditUser === "all" ? "selected" : ""}>All users</option>
    ${usersList.map((uName) => `<option value="${escHtml(uName)}" ${auditUser === uName ? "selected" : ""}>${escHtml(uName)}</option>`).join("")}
  `;
}

/**
 * Builds HTML for category filter chips with live counts.
 * @param {Array<Object>} filteredEntries
 * @param {string} activeCategory
 * @param {boolean} isSuperUser
 * @returns {string} HTML string
 */
function getAuditChipsHtml(filteredEntries, activeCategory, isSuperUser) {
  const cats = isSuperUser ? AUDIT_ROLE_CATEGORIES.superadmin : AUDIT_ROLE_CATEGORIES.admin;
  const allCount = filteredEntries.length;
  const isAllSelected = activeCategory === "all";

  let html = `
    <button
      type="button"
      id="audit-chip-all"
      class="chip audit-chip${isAllSelected ? " on is-selected" : ""}"
      aria-pressed="${isAllSelected ? "true" : "false"}"
      onclick="setAuditCategory('all')"
    >
      All <span class="audit-chip-count">(${allCount})</span>
    </button>
  `;

  cats.forEach((cat) => {
    const isSelected = activeCategory === cat;
    const count = filteredEntries.filter((e) => e.cat === cat).length;
    const safeId = "audit-chip-" + cat.toLowerCase().replace(/[^a-z0-9]/g, "-");
    html += `
      <button
        type="button"
        id="${safeId}"
        class="chip audit-chip${isSelected ? " on is-selected" : ""}"
        aria-pressed="${isSelected ? "true" : "false"}"
        onclick="setAuditCategory('${escHtml(cat)}')"
      >
        ${escHtml(cat)} <span class="audit-chip-count">(${count})</span>
      </button>
    `;
  });

  return html;
}

/**
 * Generates the full HTML markup for the Audit view.
 * Super Admin: full view with display-only Export button.
 * Admin: restricted view without export button.
 * Mechanic: no access.
 * @returns {string} HTML string.
 */
function getAuditViewHtml() {
  const u = getCurrentUser();
  if (!u || u.activeRole === "mechanic" || !canOpen("audit") || (!isSuper() && u.activeRole !== "admin")) {
    return renderNoAccess();
  }

  const isSuperUser = isSuper();
  const subtitle = "Full activity log: who did what, and when.";

  return `
    <div class="card top">
      <div>
        <h1>Audit</h1>
        <p>${subtitle}</p>
      </div>
    </div>

    ${!isSuperUser ? `
      <div class="audit-notice-card" role="note">
        <span style="display:inline-flex;align-items:center;color:var(--text-muted)">${ICONS.alert || "ℹ"}</span>
        <span>You are viewing the operational audit. User, access, override, catalog, and void records are visible to System Admin only.</span>
      </div>
    ` : ""}

    <!-- Toolbar card -->
    <div class="reports-toolbar audit-toolbar">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;flex:1 1 auto">
        <div style="position:relative;flex:1 1 240px;min-width:200px">
          <input
            type="text"
            id="audit-search"
            class="audit-input"
            placeholder="Search user, action, reference, or note..."
            value="${escHtml(auditSearch)}"
            oninput="onAuditSearchInput(this.value)"
            aria-label="Search audit entries"
          />
        </div>

        <div style="display:flex;align-items:center;gap:6px">
          <label for="audit-period-select" style="font-size:13px;font-weight:700;color:var(--text-secondary)">Period:</label>
          <select id="audit-period-select" class="audit-select" onchange="setAuditPeriod(this.value)">
            <option value="today" ${auditPeriod === "today" ? "selected" : ""}>Today</option>
            <option value="7days" ${auditPeriod === "7days" ? "selected" : ""}>Last 7 Days</option>
            <option value="month" ${auditPeriod === "month" ? "selected" : ""}>This Month</option>
            <option value="lastMonth" ${auditPeriod === "lastMonth" ? "selected" : ""}>Last Month</option>
            <option value="year" ${auditPeriod === "year" ? "selected" : ""}>This Year</option>
            <option value="all" ${auditPeriod === "all" ? "selected" : ""}>All Time</option>
          </select>
        </div>

        <div style="display:flex;align-items:center;gap:6px">
          <label for="audit-user-select" style="font-size:13px;font-weight:700;color:var(--text-secondary)">User:</label>
          <select id="audit-user-select" class="audit-select" onchange="setAuditUser(this.value)">
            ${getAuditUserOptionsHtml(isSuperUser)}
          </select>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:10px">
        ${isSuperUser ? `
          <button type="button" class="btn g his-btn-export" data-demo="true" onclick="showDemoNotice()" title="Export filtered rows to CSV">
            <span style="display:inline-flex;align-items:center">${ICONS.download}</span> Export CSV
          </button>
        ` : ""}
      </div>
    </div>

    <!-- Results wrap -->
    <div id="audit-results-wrap">
      ${getAuditResultsHtml()}
    </div>
  `;
}

/**
 * Generates the HTML for summary cards, category chips, count line, desktop table, and mobile cards.
 * @returns {string} HTML string.
 */
function getAuditResultsHtml() {
  const isSuperUser = isSuper();
  const allEntries = (typeof D !== "undefined" && D && Array.isArray(D.audit)) ? D.audit : [];

  // 1. Role visibility filter
  const visibleEntries = allEntries.filter((e) => canViewAuditEntry(e, isSuperUser));

  // 2. Period filter
  const periodFiltered = visibleEntries.filter((e) => isEntryInPeriod(e.at, auditPeriod));

  // 3. User filter
  const userFiltered = periodFiltered.filter((e) => {
    if (auditUser === "all" || !auditUser) return true;
    return displayUserName(e.by || "") === auditUser;
  });

  // 4. Search filter
  const searchFiltered = userFiltered.filter((e) => matchesAuditSearch(e, auditSearch));

  // Stat cards compute from searchFiltered (before category filter)
  const stat = (i, bg, l, n, t) =>
    `<div class="card st"><div class="ic" style="background:${bg}">${i}</div><div><small>${l}</small><b>${n}</b>${t}</div></div>`;

  const totalEntries = searchFiltered.length;
  const loginsCount = searchFiltered.filter((e) => e.action === "Login").length;
  const logoutsCount = searchFiltered.filter((e) => e.action === "Logout").length;

  // 5. Category filter for displayed rows
  const displayedEntries = (auditCategory === "all" || !auditCategory)
    ? searchFiltered
    : searchFiltered.filter((e) => e.cat === auditCategory);

  // Sort newest first
  const sortedEntries = [...displayedEntries].sort((a, b) => {
    const atA = a.at || "";
    const atB = b.at || "";
    return atB.localeCompare(atA);
  });

  const chipsHtml = getAuditChipsHtml(searchFiltered, auditCategory, isSuperUser);

  return `
    <!-- Summary Cards -->
    <div class="reports-kpi-grid audit-kpi-grid">
      ${stat(ICONS.clipboard, "", "TOTAL ENTRIES", totalEntries, "In period")}
      ${stat(LINE_ICONS.cust, "", "LOGINS", loginsCount, "In period")}
      ${stat(LINE_ICONS.cust, "", "LOGOUTS", logoutsCount, "In period")}
    </div>

    <!-- Category Chips Row -->
    <div class="audit-chips-row" id="audit-category-chips" role="group" aria-label="Filter by category">
      ${chipsHtml}
    </div>

    <!-- Count line -->
    <div style="margin: 0 0 10px 4px;font-size:13px;color:var(--text-muted);font-weight:600">
      Showing ${displayedEntries.length} of ${totalEntries} entries
    </div>

    <!-- Desktop Table -->
    <div class="um-table-wrap audit-table-wrap">
      <table class="um-table audit-table">
        <thead>
          <tr>
            <th style="width:160px">TIME</th>
            <th style="width:170px">USER</th>
            <th style="width:150px">CATEGORY</th>
            <th style="width:170px">ACTION</th>
            <th style="width:150px">REFERENCE</th>
            <th>DETAILS / REASON</th>
          </tr>
        </thead>
        <tbody>
          ${!sortedEntries.length ? `
            <tr>
              <td colspan="6" style="text-align:center;padding:36px;color:var(--text-muted)">
                <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:4px">No audit entries found.</div>
                <div>Try adjusting your search, period, or category filters.</div>
                <button type="button" class="btn g sm" style="margin-top:10px" onclick="clearAuditFilters()">Clear filters</button>
              </td>
            </tr>
          ` : sortedEntries.map((entry) => {
            const timeObj = formatAuditTime(entry.at);
            const roleLabel = (entry.role && entry.by !== "Unknown user") ? getUserRoleLabel(entry.role) : "";
            const refText = (entry.ref && entry.ref !== "—" && entry.ref !== "-") ? entry.ref : "—";
            return `
              <tr>
                <td>
                  <div style="font-weight:700;color:var(--text)">${escHtml(timeObj.date)}</div>
                  <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${escHtml(timeObj.time)}</div>
                </td>
                <td>
                  <div style="font-weight:700;color:var(--text)">${escHtml(displayUserName(entry.by) || "Unknown user")}</div>
                  ${roleLabel ? `
                    <div style="margin-top:4px">
                      <span class="audit-role-badge">${escHtml(roleLabel)}</span>
                    </div>
                  ` : ""}
                </td>
                <td>
                  <span class="audit-badge">${escHtml(entry.cat || "Sessions")}</span>
                </td>
                <td>
                  <span style="font-weight:700;color:var(--text)">${escHtml(entry.action || "")}</span>
                </td>
                <td>
                  <code class="audit-ref">${escHtml(refText)}</code>
                </td>
                <td>
                  <div style="white-space:pre-wrap;word-break:break-word;font-size:13px;color:var(--text);line-height:1.4">${escHtml(entry.note || "—")}</div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>

    <!-- Mobile Card List -->
    <div class="audit-cards" id="audit-cards">
      ${!sortedEntries.length ? `
        <div class="card audit-card" style="text-align:center;padding:36px;color:var(--text-muted)">
          <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:4px">No audit entries found.</div>
          <div>Try adjusting your search, period, or category filters.</div>
          <button type="button" class="btn g sm" style="margin-top:10px" onclick="clearAuditFilters()">Clear filters</button>
        </div>
      ` : sortedEntries.map((entry) => {
        const timeObj = formatAuditTime(entry.at);
        const roleLabel = (entry.role && entry.by !== "Unknown user") ? getUserRoleLabel(entry.role) : "";
        const refText = (entry.ref && entry.ref !== "—" && entry.ref !== "-") ? entry.ref : "—";
        return `
          <div class="card audit-card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                <span class="audit-badge">${escHtml(entry.cat || "Sessions")}</span>
                <span style="font-weight:700;color:var(--text)">${escHtml(entry.action || "")}</span>
              </div>
              <div style="text-align:right;font-size:12px;color:var(--text-muted);white-space:nowrap">
                <div>${escHtml(timeObj.date)}</div>
                <div>${escHtml(timeObj.time)}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
              <span style="font-weight:700;font-size:13px;color:var(--text)">${escHtml(displayUserName(entry.by) || "Unknown user")}</span>
              ${roleLabel ? `<span class="audit-role-badge">${escHtml(roleLabel)}</span>` : ""}
              ${refText !== "—" ? `<code class="audit-ref">${escHtml(refText)}</code>` : ""}
            </div>
            <div style="font-size:13px;color:var(--text);word-break:break-word;white-space:pre-wrap;line-height:1.4">
              ${escHtml(entry.note || "—")}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

/**
 * Sets active audit category filter and re-renders results.
 * @param {string} cat
 */
function setAuditCategory(cat) {
  auditCategory = cat;
  const wrap = $("audit-results-wrap");
  if (wrap) wrap.innerHTML = getAuditResultsHtml();
}

/**
 * Handles search query changes for Audit view.
 * @param {string} val
 */
function onAuditSearchInput(val) {
  auditSearch = val || "";
  const wrap = $("audit-results-wrap");
  if (wrap) wrap.innerHTML = getAuditResultsHtml();
}

/**
 * Sets the active period filter for Audit view.
 * @param {string} val
 */
function setAuditPeriod(val) {
  auditPeriod = val || "7days";
  const wrap = $("audit-results-wrap");
  if (wrap) wrap.innerHTML = getAuditResultsHtml();
}

/**
 * Sets the active user filter for Audit view.
 * @param {string} val
 */
function setAuditUser(val) {
  auditUser = val || "all";
  const wrap = $("audit-results-wrap");
  if (wrap) wrap.innerHTML = getAuditResultsHtml();
}

/**
 * Resets all audit filters to defaults.
 */
function clearAuditFilters() {
  auditSearch = "";
  auditPeriod = "7days";
  auditCategory = "all";
  auditUser = "all";
  const sInp = $("audit-search");
  if (sInp) sInp.value = "";
  const pSel = $("audit-period-select");
  if (pSel) pSel.value = "7days";
  const uSel = $("audit-user-select");
  if (uSel) uSel.value = "all";
  const wrap = $("audit-results-wrap");
  if (wrap) wrap.innerHTML = getAuditResultsHtml();
}

/* ==========================================================
   9.5 QUICK SALES
   ========================================================== */

/** In-memory active sub-view for Quick Sales: "parts" or "cart". */
let posView = "parts";

/** Active catalog search query for Quick Sales left column. */
let posSearch = "";

/**
 * Resets Quick Sales state on logout (empty stub for session compatibility).
 */
function resetPosState() {}

/**
 * Closes the POS void modal if open.
 */
function closePosVoidModal() {
  const ov = $("pos-void-ov");
  if (ov) ov.classList.remove("on");
}

/**
 * Switches between Parts & Fluids and Cart & Payment sub-tabs.
 * @param {"parts"|"cart"} v
 */
function setPosView(v) {
  posView = v;
  const tabA = $("pos-tab-parts");
  const tabB = $("pos-tab-cart");
  const panelA = $("pos-panel-parts");
  const panelB = $("pos-panel-cart");
  const isA = (v !== "cart");
  if (tabA) {
    tabA.classList.toggle("active", isA);
    tabA.setAttribute("aria-selected", isA ? "true" : "false");
    tabA.setAttribute("aria-pressed", isA ? "true" : "false");
    tabA.tabIndex = isA ? 0 : -1;
  }
  if (tabB) {
    tabB.classList.toggle("active", !isA);
    tabB.setAttribute("aria-selected", !isA ? "true" : "false");
    tabB.setAttribute("aria-pressed", !isA ? "true" : "false");
    tabB.tabIndex = !isA ? 0 : -1;
  }
  if (panelA) {
    panelA.style.display = isA ? "block" : "none";
    if (isA) panelA.removeAttribute("hidden");
    else panelA.setAttribute("hidden", "true");
  }
  if (panelB) {
    panelB.style.display = !isA ? "block" : "none";
    if (!isA) panelB.removeAttribute("hidden");
    else panelB.setAttribute("hidden", "true");
  }
}

/**
 * Keyboard navigation between Quick Sales sub-tabs.
 * @param {KeyboardEvent} e
 */
function handlePosTabKeydown(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    const tabA = $("pos-tab-parts");
    const tabB = $("pos-tab-cart");
    if (document.activeElement === tabA) {
      if (tabB) tabB.focus();
      setPosView("cart");
    } else {
      if (tabA) tabA.focus();
      setPosView("parts");
    }
  }
}

/**
 * Static seeded items for Quick Sales Parts & Fluids tab.
 */
const SEEDED_POS_ITEMS = [
  { id: "pos-it-1", name: "Engine Oil 10W-40 4T (1L)", kind: "part", price: 420 },
  { id: "pos-it-2", name: "Front Brake Pads", kind: "part", price: 650 },
  { id: "pos-it-3", name: "Spark Plug CPR9EA-9", kind: "part", price: 180 },
  { id: "pos-it-4", name: "Drive Belt (CVT)", kind: "part", price: 850 },
  { id: "pos-it-5", name: "Coolant 50/50 Pre-mix (1L)", kind: "part", price: 250 },
  { id: "pos-it-6", name: "Air Filter Element", kind: "part", price: 320 }
];

/**
 * Builds HTML grid of catalog items for Parts & Fluids tab.
 * @returns {string} HTML string.
 */
function getPosGridHtml() {
  const customTileHtml = `
    <button type="button" class="pos-tile pos-tile-custom" data-demo="true" onclick="showDemoNotice()" title="Add custom item">
      <div class="pos-custom-plus">+</div>
      <div class="pos-custom-text">Custom item</div>
    </button>
  `;

  const tilesHtml = SEEDED_POS_ITEMS.map((it) => `
    <button
      type="button"
      class="pos-tile"
      data-demo="true"
      onclick="showDemoNotice()"
      title="Tap to add: ${escHtml(it.name)}"
    >
      <div>
        <span class="cat-badge ${it.kind}">
          ${it.kind === 'labor' ? 'Labor' : 'Part'}
        </span>
        <div class="pos-tile-name">${escHtml(it.name)}</div>
      </div>
      <div class="pos-tile-price">${P(it.price)}</div>
    </button>
  `).join("");

  return `
    <div class="pos-tiles-grid pos-catalog-grid">
      ${customTileHtml}
      ${tilesHtml}
    </div>
  `;
}

/**
 * Builds HTML for Quick Sales Cart & Payment panel.
 * @returns {string} HTML string.
 */
function getPosRightPanelHtml() {
  return `
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:15px;font-weight:800;color:var(--text-primary)">Current Sale</span>
          <span id="pos-cart-count-badge" class="badge" style="font-size:11px;font-weight:700;background:var(--bg-subtle);color:var(--text-primary);padding:2px 8px;border-radius:999px;border:1px solid var(--border)">
            2 items
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button
            type="button"
            class="btn g sm"
            id="pos-btn-clear-cart"
            data-demo="true"
            onclick="showDemoNotice()"
            title="Empty current cart"
          >
            Clear all
          </button>
        </div>
      </div>

      <!-- Customer / Plate -->
      <div style="background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:12px">
        <input
          id="pos-customer-input"
          type="text"
          placeholder="Customer or plate (optional)"
          style="width:100%;height:34px;box-sizing:border-box;border-radius:6px;border:1px solid var(--border);padding:0 8px;font-size:12px;background:var(--bg-surface);color:var(--text)"
        />
      </div>

      <!-- Static Cart with 2 rows -->
      <div class="pos-cart-list" id="pos-cart-list">
        <div class="pos-cart-line" id="pos-cart-line-1">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;flex-wrap:gap;gap:4px">
              <span class="cat-badge part">Part</span>
              <b style="font-size:13px;color:var(--text-primary)">Engine Oil 10W-40 4T (1L)</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom">
            <div class="pos-qty-stepper">
              <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Decrease quantity">−</button>
              <span class="pos-qty-val">1</span>
              <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Increase quantity">+</button>
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <span style="font-size:11px;color:var(--text-muted)">@ ₱</span>
              <input
                type="number"
                class="pos-price-input"
                value="420"
                readonly
                disabled
                style="background:var(--bg-surface-alt, #F8FAFC);color:var(--text-muted)"
              />
            </div>
            <b style="font-size:13px;color:#0F172A;min-width:60px;text-align:right">₱420.00</b>
          </div>
        </div>

        <div class="pos-cart-line" id="pos-cart-line-2">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;flex-wrap:wrap;gap:4px">
              <span class="cat-badge part">Part</span>
              <b style="font-size:13px;color:var(--text-primary)">Spark Plug CPR9EA-9</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom">
            <div class="pos-qty-stepper">
              <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Decrease quantity">−</button>
              <span class="pos-qty-val">1</span>
              <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Increase quantity">+</button>
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <span style="font-size:11px;color:var(--text-muted)">@ ₱</span>
              <input
                type="number"
                class="pos-price-input"
                value="180"
                readonly
                disabled
                style="background:var(--bg-surface-alt, #F8FAFC);color:var(--text-muted)"
              />
            </div>
            <b style="font-size:13px;color:#0F172A;min-width:60px;text-align:right">₱180.00</b>
          </div>
        </div>
      </div>

      <!-- Totals Block -->
      <div class="pos-totals-block">
        <div class="pos-totals-row grand-total">
          <span>Total</span>
          <span id="pos-total-val">₱600.00</span>
        </div>
      </div>

      <!-- Payment Method Toggle -->
      <div style="margin-top:14px">
        <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:6px">Payment Method</label>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:6px">
          <button type="button" class="btn g sm on" style="background:var(--accent);color:#FFF;border-color:var(--accent);font-weight:700" data-demo="true" onclick="showDemoNotice()"><span style="display:inline-flex;align-items:center;margin-right:4px">${ICONS.money}</span>Cash</button>
          <button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()"><span style="display:inline-flex;align-items:center;margin-right:4px">${ICONS.phone}</span>GCash</button>
          <button type="button" class="btn g sm" data-demo="true" onclick="showDemoNotice()"><span style="display:inline-flex;align-items:center;margin-right:4px">${LINE_ICONS.bill}</span>Maya</button>
        </div>
      </div>

      <!-- Cash Fields -->
      <div style="margin-top:12px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <label for="pos-tendered-input" style="font-size:12px;font-weight:700;color:var(--text-secondary)">Amount Received (PHP):</label>
          <input
            id="pos-tendered-input"
            type="number"
            min="0"
            step="1"
            value="600"
            style="width:100px;height:32px;border-radius:6px;border:1px solid var(--border);padding:0 8px;text-align:right;font-size:13px;font-weight:700"
          />
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:12px" id="pos-cash-calc-row">
          <span style="font-weight:700;color:var(--text-primary)">Change:</span>
          <b style="font-size:14px;color:var(--success)">₱0.00</b>
        </div>
      </div>

      <!-- Charge Action -->
      <button
        type="button"
        class="pos-charge-btn"
        id="pos-charge-btn"
        data-demo="true"
        onclick="showDemoNotice()"
        style="margin-top:14px"
      >
        Complete sale · ₱600.00
      </button>
    </div>
  `;
}

/**
 * Main view renderer for the Quick Sales page.
 * @returns {string} Full HTML markup.
 */
function getPosViewHtml() {
  const isA = (posView !== "cart");

  return `
    <h1 class="sr-only">Quick Sales</h1>

    <!-- Segmented switch for Quick Sales views -->
    <div
      class="tab-switch-bar"
      id="pos-view-toggle"
      role="tablist"
      aria-label="Quick Sales sections"
      onkeydown="handlePosTabKeydown(event)"
    >
      <button
        type="button"
        id="pos-tab-parts"
        class="tab-switch-btn ${isA ? "active" : ""}"
        role="tab"
        aria-selected="${isA ? "true" : "false"}"
        aria-pressed="${isA ? "true" : "false"}"
        aria-controls="pos-panel-parts"
        tabindex="${isA ? "0" : "-1"}"
        onclick="setPosView('parts')"
      >
        Parts &amp; Fluids
      </button>
      <button
        type="button"
        id="pos-tab-cart"
        class="tab-switch-btn ${!isA ? "active" : ""}"
        role="tab"
        aria-selected="${!isA ? "true" : "false"}"
        aria-pressed="${!isA ? "true" : "false"}"
        aria-controls="pos-panel-cart"
        aria-label="Cart and payment, 2 items"
        tabindex="${!isA ? "0" : "-1"}"
        onclick="setPosView('cart')"
      >
        Cart &amp; Payment (2)
      </button>
    </div>

    <div class="pos-layout pos-split-layout">
      <!-- View A: Parts & Fluids Panel -->
      <div
        id="pos-panel-parts"
        role="tabpanel"
        aria-labelledby="pos-tab-parts"
        style="${isA ? "display:block" : "display:none"}"
        ${isA ? "" : "hidden"}
      >
        <div class="pos-search-wrap">
          <span class="search-icon" onclick="$('pos-search-input').focus()" title="Search">${LINE_ICONS.insp}</span>
          <input
            id="pos-search-input"
            type="text"
            class="pos-search-input"
            placeholder="Search parts and fluids (press Enter to quick-add)..."
            value="${escHtml(posSearch)}"
            oninput="posSearch=this.value"
            onkeydown="if(event.key==='Enter')event.preventDefault()"
          />
          <button
            id="pos-search-clear"
            class="search-clear ${posSearch ? "visible" : ""}"
            onclick="posSearch=''; const inp=$('pos-search-input'); if(inp){inp.value=''; inp.focus();} this.classList.remove('visible');"
            type="button"
            aria-label="Clear search"
            title="Clear search"
          >✕</button>
        </div>

        <div id="pos-grid-wrap">
          ${getPosGridHtml()}
        </div>
      </div>

      <!-- View B: Cart & Payment Panel -->
      <div
        id="pos-panel-cart"
        role="tabpanel"
        aria-labelledby="pos-tab-cart"
        style="${!isA ? "display:block" : "display:none"}"
        ${!isA ? "" : "hidden"}
      >
        <div class="pos-cart-panel" id="pos-cart-panel">
          ${getPosRightPanelHtml()}
        </div>
      </div>
    </div>

    <!-- Mobile Floating Checkout Bar (<900px) -->
    <div class="pos-mobile-bar" id="pos-mobile-bar" onclick="setPosView('cart')">
      View cart · 2 items · ₱600.00
    </div>
  `;
}

/* ==========================================================
   9.6 QUICK LABOR
   ========================================================== */

/**
 * Active job type for Quick Labor: "labor" (Labor Only) | "laborparts" (Labor + Parts).
 * Single state variable driving the view toggle.
 */
let qlJobType = "labor";

/**
 * Resets Quick Labor state on logout (empty stub for session compatibility).
 */
function resetQuickLaborState() {}

/**
 * Returns formatted label for Quick Labor subtype.
 * @param {Object|string} oOrSubtype
 * @returns {string} Formatted subtype label.
 */
function getQuickLaborSubtypeLabel(oOrSubtype) {
  let st = typeof oOrSubtype === "string" ? oOrSubtype : (oOrSubtype && oOrSubtype.subtype);
  if (!st && typeof oOrSubtype === "object" && oOrSubtype) {
    const hasParts = Array.isArray(oOrSubtype.items) && oOrSubtype.items.some((it) => it.kind === "part");
    const hasLabor = Array.isArray(oOrSubtype.items) && oOrSubtype.items.some((it) => it.kind === "labor");
    if (hasLabor && hasParts) st = "laborparts";
    else st = "labor";
  }
  if (st === "laborparts" || st === "fix") return "Labor + Parts";
  return "Labor Only";
}

/**
 * Switches active Quick Labor job type and re-renders view.
 * @param {"labor"|"laborparts"} type
 */
function setQuickLaborJobType(type) {
  qlJobType = type;
  renderQuickLaborView();
}

/**
 * Re-renders only the job type segmented control bar.
 */
function renderQuickLaborTypeBar() {
  const bar = $("ql-type-bar-wrap");
  if (bar) bar.innerHTML = getQuickLaborTypeBarHtml();
}

/**
 * Re-renders only the left column steps container.
 */
function renderQuickLaborLeftCol() {
  const col = $("ql-left-col");
  if (col) col.innerHTML = getQuickLaborLeftColHtml();
}

/**
 * Re-renders only the right panel summary in the DOM.
 */
function renderQuickLaborRightPanel() {
  const panel = $("ql-right-panel");
  if (panel) panel.innerHTML = getQuickLaborRightPanelHtml();
}

/**
 * Updates floating mobile bar checkout summary.
 */
function updateQuickLaborMobileBar() {
  const barEl = $("ql-mobile-bar");
  if (barEl) {
    const isLP = qlJobType === "laborparts";
    barEl.textContent = `View summary · ${isLP ? '3 items · ₱680.00' : '2 items · ₱500.00'}`;
  }
}

/**
 * Re-renders all components of the Quick Labor view.
 */
function renderQuickLaborView() {
  renderQuickLaborTypeBar();
  renderQuickLaborLeftCol();
  renderQuickLaborRightPanel();
  updateQuickLaborMobileBar();
}

/**
 * Opens mobile bottom sheet summary drawer.
 */
function openQuickLaborBottomSheet() {
  const col = $("ql-right-panel");
  if (col) col.classList.add("bottom-sheet-open");
}

/**
 * Closes mobile bottom sheet summary drawer.
 */
function closeQuickLaborBottomSheet() {
  const col = $("ql-right-panel");
  if (col) col.classList.remove("bottom-sheet-open");
}

/**
 * Generates HTML for the Job Type segmented control bar.
 * @returns {string} HTML string.
 */
function getQuickLaborTypeBarHtml() {
  const isLabor = qlJobType === "labor";
  const isLaborParts = qlJobType === "laborparts";
  return `
    <button
      type="button"
      id="ql-type-btn-labor"
      class="ql-type-btn ${isLabor ? 'active' : ''}"
      onclick="setQuickLaborJobType('labor')"
      aria-pressed="${isLabor ? 'true' : 'false'}"
    >
      Labor Only
    </button>
    <button
      type="button"
      id="ql-type-btn-laborparts"
      class="ql-type-btn ${isLaborParts ? 'active' : ''}"
      onclick="setQuickLaborJobType('laborparts')"
      aria-pressed="${isLaborParts ? 'true' : 'false'}"
    >
      Labor + Parts
    </button>
  `;
}

/**
 * Generates HTML for the left column step cards.
 * @returns {string} HTML string.
 */
function getQuickLaborLeftColHtml() {
  const isLaborParts = qlJobType === "laborparts";

  return `
    <!-- STEP 1: Labor done -->
    <div class="ql-step-card" id="ql-step-2">
      <div class="ql-step-header">
        <div class="ql-step-badge done" id="ql-step-2-badge">✓</div>
        <div>
          <div class="ql-step-title">Labor done</div>
          <div class="ql-step-subtitle">Select catalog service or add custom labor (required)</div>
        </div>
      </div>

      <!-- Search bar -->
      <div class="rep-search-wrap" style="margin-bottom:12px">
        <span class="search-icon" onclick="$('ql-search-labor').focus()" title="Search">${LINE_ICONS.insp}</span>
        <input
          id="ql-search-labor"
          type="text"
          placeholder="Search labor (press Enter to quick-add)..."
          autocomplete="off"
          onkeydown="if(event.key==='Enter')event.preventDefault()"
        />
      </div>

      <!-- Catalog tiles -->
      <div class="pos-tiles-grid" style="margin-bottom:12px">
        <button type="button" class="pos-tile in-cart" data-demo="true" onclick="showDemoNotice()" title="Change Oil">
          <span class="pos-tile-badge">1</span>
          <div>
            <span class="cat-badge labor">Labor</span>
            <div class="pos-tile-name">Change Oil</div>
          </div>
          <div class="pos-tile-price">₱150.00</div>
        </button>
        <button type="button" class="pos-tile in-cart" data-demo="true" onclick="showDemoNotice()" title="Engine Tune-up">
          <span class="pos-tile-badge">1</span>
          <div>
            <span class="cat-badge labor">Labor</span>
            <div class="pos-tile-name">Engine Tune-up</div>
          </div>
          <div class="pos-tile-price">₱350.00</div>
        </button>
        <button type="button" class="pos-tile" data-demo="true" onclick="showDemoNotice()" title="Brake Cleaning">
          <div>
            <span class="cat-badge labor">Labor</span>
            <div class="pos-tile-name">Brake Cleaning &amp; Adjust</div>
          </div>
          <div class="pos-tile-price">₱200.00</div>
        </button>
        <button type="button" class="pos-tile" data-demo="true" onclick="showDemoNotice()" title="Chain Maintenance">
          <div>
            <span class="cat-badge labor">Labor</span>
            <div class="pos-tile-name">Drive Chain Tension &amp; Lube</div>
          </div>
          <div class="pos-tile-price">₱100.00</div>
        </button>
      </div>

      <!-- Chosen labor lines box -->
      <div class="ql-chosen-box" id="ql-chosen-labor-wrap">
        <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:8px">Selected Labor (2 services)</div>
        <div class="pos-cart-line" style="margin-bottom:6px">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
              <span class="cat-badge labor">Labor</span>
              <b style="font-size:13px;color:var(--text-primary)">Change Oil</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom" style="justify-content:space-between">
            <span style="font-size:12px;color:var(--text-secondary)">Standard Service Fee</span>
            <b style="font-size:13px;color:var(--text)">₱150.00</b>
          </div>
        </div>
        <div class="pos-cart-line">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
              <span class="cat-badge labor">Labor</span>
              <b style="font-size:13px;color:var(--text-primary)">Engine Tune-up</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom" style="justify-content:space-between">
            <span style="font-size:12px;color:var(--text-secondary)">Standard Service Fee</span>
            <b style="font-size:13px;color:var(--text)">₱350.00</b>
          </div>
        </div>
      </div>
    </div>

    <!-- STEP 2: Parts replaced (Labor + Parts only) -->
    ${
      isLaborParts
        ? `
          <div class="ql-step-card" id="ql-step-3">
            <div class="ql-step-header">
              <div class="ql-step-badge done" id="ql-step-3-badge">✓</div>
              <div>
                <div class="ql-step-title">Parts replaced</div>
                <div class="ql-step-subtitle">Select catalog parts/fluids or add custom item</div>
              </div>
            </div>

            <!-- Search bar -->
            <div class="rep-search-wrap" style="margin-bottom:12px">
              <span class="search-icon" onclick="$('ql-search-part').focus()" title="Search">${LINE_ICONS.insp}</span>
              <input
                id="ql-search-part"
                type="text"
                placeholder="Search parts and fluids..."
                autocomplete="off"
                onkeydown="if(event.key==='Enter')event.preventDefault()"
              />
            </div>

            <!-- Part catalog tiles -->
            <div class="pos-tiles-grid" style="margin-bottom:12px">
              <button type="button" class="pos-tile in-cart" data-demo="true" onclick="showDemoNotice()" title="Oil Filter">
                <span class="pos-tile-badge">1</span>
                <div>
                  <span class="cat-badge part">Part</span>
                  <div class="pos-tile-name">Engine Oil Filter</div>
                </div>
                <div class="pos-tile-price">₱180.00</div>
              </button>
              <button type="button" class="pos-tile" data-demo="true" onclick="showDemoNotice()" title="Spark Plug">
                <div>
                  <span class="cat-badge part">Part</span>
                  <div class="pos-tile-name">Spark Plug CPR9EA-9</div>
                </div>
                <div class="pos-tile-price">₱180.00</div>
              </button>
              <button type="button" class="pos-tile" data-demo="true" onclick="showDemoNotice()" title="Brake Pads">
                <div>
                  <span class="cat-badge part">Part</span>
                  <div class="pos-tile-name">Front Brake Pads</div>
                </div>
                <div class="pos-tile-price">₱650.00</div>
              </button>
              <button type="button" class="pos-tile" data-demo="true" onclick="showDemoNotice()" title="Drive Belt">
                <div>
                  <span class="cat-badge part">Part</span>
                  <div class="pos-tile-name">Drive Belt (CVT)</div>
                </div>
                <div class="pos-tile-price">₱850.00</div>
              </button>
            </div>

            <!-- Chosen parts lines box -->
            <div class="ql-chosen-box" id="ql-chosen-part-wrap">
              <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:8px">Selected Parts (1 item)</div>
              <div class="pos-cart-line">
                <div class="pos-cart-line-top">
                  <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
                    <span class="cat-badge part">Part</span>
                    <b style="font-size:13px;color:var(--text-primary)">Engine Oil Filter</b>
                  </div>
                  <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
                </div>
                <div class="pos-cart-line-bottom">
                  <div class="pos-qty-stepper">
                    <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Decrease quantity">−</button>
                    <span class="pos-qty-val">1</span>
                    <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Increase quantity">+</button>
                  </div>
                  <div style="display:flex;align-items:center;gap:4px">
                    <span style="font-size:11px;color:var(--text-muted)">@ ₱</span>
                    <input
                      type="number"
                      class="pos-price-input"
                      value="180"
                      readonly
                      disabled
                      style="background:var(--bg-subtle);color:var(--text-muted)"
                    />
                  </div>
                  <b style="font-size:13px;color:var(--text);min-width:60px;text-align:right">₱180.00</b>
                </div>
              </div>
            </div>
          </div>
        `
        : ""
    }

    <div class="ql-steps-footer-note">
      ${isLaborParts
        ? "Steps 1 and 2 can be done in any order, but the job is recorded only after the work is done."
        : "The job is recorded after the work is done."}
    </div>
  `;
}

/**
 * Generates full HTML for the right column Quick Fix Summary panel.
 * @returns {string} HTML string.
 */
function getQuickLaborRightPanelHtml() {
  const isLaborParts = qlJobType === "laborparts";
  const totalStr = isLaborParts ? "₱680.00" : "₱500.00";
  const amountVal = isLaborParts ? "680" : "500";

  return `
    <div class="pos-cart-panel" style="padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:15px;font-weight:800;color:var(--text-primary)">Quick Fix Summary</span>
          <span class="badge" style="font-size:11px;font-weight:700;background:var(--bg-subtle);color:var(--text-primary);padding:2px 8px;border-radius:999px;border:1px solid var(--border)">
            ${isLaborParts ? 'Labor + Parts' : 'Labor Only'}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button
            type="button"
            class="btn g sm"
            id="ql-btn-clear-all"
            data-demo="true"
            onclick="showDemoNotice()"
            title="Clear all"
          >
            Clear all
          </button>
          <button type="button" class="pos-sheet-close" onclick="closeQuickLaborBottomSheet()" aria-label="Close summary">✕</button>
        </div>
      </div>

      <!-- Customer / Plate -->
      <div style="background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:12px">
        <input
          id="ql-customer-input"
          type="text"
          placeholder="Customer or plate (optional)"
          style="width:100%;height:34px;box-sizing:border-box;border-radius:6px;border:1px solid var(--border);padding:0 8px;font-size:12px;background:var(--bg-surface);color:var(--text)"
        />
      </div>

      <!-- Itemized Cart List in Summary -->
      <div class="pos-cart-list" id="ql-summary-cart-list">
        <div class="pos-cart-line">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
              <span class="cat-badge labor" style="background:#F5F3FF;color:#7C3AED;border-color:#DDD6FE">Labor</span>
              <b style="font-size:13px;color:var(--text-primary)">Change Oil</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom" style="justify-content:space-between">
            <span style="font-size:12px;color:var(--text-secondary)">Fee: ₱150.00</span>
            <b style="font-size:13px;color:var(--text)">₱150.00</b>
          </div>
        </div>

        <div class="pos-cart-line">
          <div class="pos-cart-line-top">
            <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
              <span class="cat-badge labor" style="background:#F5F3FF;color:#7C3AED;border-color:#DDD6FE">Labor</span>
              <b style="font-size:13px;color:var(--text-primary)">Engine Tune-up</b>
            </div>
            <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
          </div>
          <div class="pos-cart-line-bottom" style="justify-content:space-between">
            <span style="font-size:12px;color:var(--text-secondary)">Fee: ₱350.00</span>
            <b style="font-size:13px;color:var(--text)">₱350.00</b>
          </div>
        </div>

        ${
          isLaborParts
            ? `
              <div class="pos-cart-line">
                <div class="pos-cart-line-top">
                  <div style="flex:1;min-width:0;display:flex;align-items:center;gap:4px">
                    <span class="cat-badge part">Part</span>
                    <b style="font-size:13px;color:var(--text-primary)">Engine Oil Filter</b>
                  </div>
                  <button type="button" class="pos-line-del-btn" data-demo="true" onclick="showDemoNotice()" title="Remove item">✕</button>
                </div>
                <div class="pos-cart-line-bottom">
                  <div class="pos-qty-stepper">
                    <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Decrease quantity">−</button>
                    <span class="pos-qty-val">1</span>
                    <button type="button" class="pos-qty-btn" data-demo="true" onclick="showDemoNotice()" title="Increase quantity">+</button>
                  </div>
                  <div style="display:flex;align-items:center;gap:4px">
                    <span style="font-size:11px;color:var(--text-muted)">@ ₱</span>
                    <input
                      type="number"
                      class="pos-price-input"
                      value="180"
                      readonly
                      disabled
                      style="background:var(--bg-subtle);color:var(--text-muted)"
                    />
                  </div>
                  <b style="font-size:13px;color:var(--text);min-width:60px;text-align:right">₱180.00</b>
                </div>
              </div>
            `
            : ""
        }
      </div>

      <!-- Subtotals and Grand Total Breakdown -->
      <div class="pos-totals-block" style="margin-top:12px">
        <div class="pos-totals-row" style="font-size:12px;color:var(--text-secondary)">
          <span>Labor Subtotal</span>
          <span>₱500.00</span>
        </div>
        ${
          isLaborParts
            ? `
              <div class="pos-totals-row" style="font-size:12px;color:var(--text-secondary)">
                <span>Parts Subtotal</span>
                <span>₱180.00</span>
              </div>
            `
            : ""
        }
        <div class="pos-totals-row grand-total" style="border-top:1px solid var(--border);padding-top:8px;margin-top:6px">
          <span>Total</span>
          <span id="ql-grand-total">${totalStr}</span>
        </div>
      </div>

      <!-- Work is finished check row (display-only) -->
      <div style="margin-top:14px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
        <label style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:var(--text-primary);cursor:pointer">
          <input
            id="ql-work-finished-chk"
            type="checkbox"
            checked
            data-demo="true"
            onclick="showDemoNotice()"
            style="width:16px;height:16px;cursor:pointer"
          />
          Work is finished (ready to record)
        </label>
        <div style="font-size:11px;color:var(--text-muted);margin-top:4px;padding-left:24px">
          Confirmed verified and ready for customer pickup.
        </div>
      </div>

      <!-- Payment Method Toggle: Cash, GCash, Maya -->
      <div style="margin-top:14px">
        <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:6px">Payment Method</label>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:6px">
          <button
            type="button"
            class="btn g sm on"
            style="background:var(--accent);color:#FFF;border-color:var(--accent);font-weight:700"
            data-demo="true"
            onclick="showDemoNotice()"
          >
            <span style="display:inline-flex;align-items:center;margin-right:4px">${ICONS.money}</span>Cash
          </button>
          <button
            type="button"
            class="btn g sm"
            data-demo="true"
            onclick="showDemoNotice()"
          >
            <span style="display:inline-flex;align-items:center;margin-right:4px">${ICONS.phone}</span>GCash
          </button>
          <button
            type="button"
            class="btn g sm"
            data-demo="true"
            onclick="showDemoNotice()"
          >
            <span style="display:inline-flex;align-items:center;margin-right:4px">${LINE_ICONS.bill}</span>Maya
          </button>
        </div>
      </div>

      <!-- Amount received and Change breakdown -->
      <div style="margin-top:12px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <label for="ql-tendered-input" style="font-size:12px;font-weight:700;color:var(--text-secondary)">Amount Received (PHP):</label>
          <input
            id="ql-tendered-input"
            type="number"
            min="0"
            step="1"
            value="${amountVal}"
            style="width:100px;height:32px;border-radius:6px;border:1px solid var(--border);padding:0 8px;text-align:right;font-size:13px;font-weight:700;background:var(--bg-surface);color:var(--text)"
          />
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:12px" id="ql-cash-calc-row">
          <span style="font-weight:700;color:var(--text-primary)">Change:</span>
          <b style="font-size:14px;color:var(--success)">₱0.00</b>
        </div>
      </div>

      <!-- Primary Action Button: Record Quick Fix -->
      <button
        type="button"
        class="pos-charge-btn"
        id="ql-charge-btn"
        data-demo="true"
        onclick="showDemoNotice()"
        style="margin-top:14px"
      >
        Record Quick Fix · ${totalStr}
      </button>
    </div>
  `;
}

/**
 * Generates full HTML markup for the Quick Labor page view.
 * @returns {string} HTML markup string.
 */
function getQuickLaborViewHtml() {
  const isLP = qlJobType === "laborparts";

  return `
    <h1 class="sr-only">Quick Labor</h1>

    <div class="ql-mode-bar ql-type-bar" id="ql-type-bar-wrap" role="group" aria-label="Job Type">
      ${getQuickLaborTypeBarHtml()}
    </div>

    <div class="pos-layout">
      <!-- Left Column: Step Cards stacked -->
      <div class="pos-left-col" id="ql-left-col">
        ${getQuickLaborLeftColHtml()}
      </div>

      <!-- Right Column: Quick Fix Summary Panel -->
      <div class="pos-right-col" id="ql-right-panel">
        ${getQuickLaborRightPanelHtml()}
      </div>
    </div>

    <!-- Mobile Floating Checkout Bar (<900px) -->
    <div class="pos-mobile-bar" id="ql-mobile-bar" onclick="openQuickLaborBottomSheet()">
      View summary · ${isLP ? '3 items · ₱680.00' : '2 items · ₱500.00'}
    </div>
  `;
}

/* ==========================================================
   10. INIT
   ========================================================== */

/**
 * Bootstraps authentication and application state on page load.
 * Restores session, active role, and active view with zero flash.
 */
function initAuth() {
  const yearEl = $("login-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 1. Sync sidebar mode and controls placement before first authenticated paint
  syncSidebarMode();

  // Read users & session
  const users = loadUsers();
  const session = getSession();

  // Reset demo cancelled jobs after data load & migration and before first render
  resetDemoCancelledJobs();
  seedAuditEntries();

  let validUser = null;
  if (session && session.userId) {
    const found = users.find((u) => u.id === session.userId);
    if (found && found.active !== false) {
      validUser = found;
    }
  }

  // 2. If session is valid
  if (validUser) {
    const activeRole = session.role && ROLES[session.role] ? session.role : validUser.role;

    // Render sidebar user profile and navigation
    renderSidebarUser();
    renderNav();
    syncSidebarMode();

    // 3. Choose the page in order:
    // a. URL hash if present (if allowed, open it; if disallowed, route to dash/first allowed)
    // b. session.view if allowed
    // c. First allowed page (dash if allowed, else allowed[0])
    // d. renderNoAccess()
    const allowed = getRoleNav(activeRole);
    const hashKey = (typeof window !== "undefined" && window.location && window.location.hash
      ? window.location.hash.replace(/^#/, "").trim()
      : "");

    let targetPage = null;
    if (hashKey) {
      if (canOpen(hashKey)) {
        targetPage = hashKey;
      } else if (hashKey === "qlabor" && canOpen("pos")) {
        targetPage = "pos";
      } else if (allowed.length > 0) {
        targetPage = allowed.includes("dash") ? "dash" : allowed[0];
      }
    } else if (session.view && canOpen(session.view)) {
      targetPage = session.view;
    } else if (session.view === "qlabor" && canOpen("pos")) {
      targetPage = "pos";
    } else if (allowed.length > 0) {
      targetPage = allowed.includes("dash") ? "dash" : allowed[0];
    }

    if (targetPage) {
      go(targetPage);
    } else {
      view = "";
      $("main").innerHTML = renderNoAccess();
    }

    // Show the app shell after mode and controls are synced
    syncSidebarMode();
    document.body.classList.remove("logged-out");
    document.body.classList.add("logged-in");
  } else {
    // 4. If no valid session, corrupted, or user deactivated/deleted:
    clearSession();
    if (typeof window !== "undefined" && window.location && window.location.hash) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", (window.location.pathname || "") + (window.location.search || ""));
      } else {
        window.location.hash = "";
      }
    }
    if (document.documentElement) document.documentElement.classList.remove("has-session");
    document.body.classList.remove("logged-in");
    document.body.classList.add("logged-out");
    syncSidebarMode();

    const emailEl = $("login-email");
    if (emailEl) {
      emailEl.value = "";
      emailEl.focus();
      openLoginDropdown();
    }
  }
}

// Listen to browser Back and Forward hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", () => {
    const u = getCurrentUser();
    if (!u) return;
    const hashKey = (window.location && window.location.hash ? window.location.hash : "").replace(/^#/, "").trim();
    if (hashKey && hashKey !== view) {
      if (canOpen(hashKey)) {
        go(hashKey);
      } else if (hashKey === "qlabor" && canOpen("pos")) {
        go("pos");
      } else if (canOpen("dash")) {
        go("dash");
      }
    }
  });
}

initAuth();