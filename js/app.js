// یادمان شهدای دانشگاه شهرکرد — منطق برنامه
(function () {
  "use strict";

  const root = document.getElementById("app");

  const ICONS = {
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"/></svg>`,
    university: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 11v6c0 1 2.5 3 6 3s6-2 6-3v-6"/></svg>`,
    people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14c2.6.4 4.5 2.6 4.5 6"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5.5C4 4.7 4.7 4 6 4h6v16H6c-1.3 0-2-.7-2-1.5v-13Z"/><path d="M20 5.5c0-.8-.7-1.5-2-1.5h-6v16h6c1.3 0 2-.7 2-1.5v-13Z"/></svg>`,
    scroll: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h11a2 2 0 0 1 2 2v13a1.5 1.5 0 0 1-3 0V6"/><path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11"/><path d="M8 9h7M8 13h7"/></svg>`,
    diamond: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 21 12 12 21 3 12Z"/><path d="M12 8 16 12 12 16 8 12Z" fill="currentColor" stroke="none"/></svg>`
  };

  function escapeHtml(str) {
    return (str || "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function initials(name) {
    const parts = (name || "").trim().split(" ");
    return parts[0] ? parts[0][0] : "؟";
  }

  function getMartyr(id) {
    return APP_DATA.martyrs.find((m) => String(m.id) === String(id));
  }

  // ---------- قالب‌های رندر ----------

  function renderHome() {
     const u = APP_DATA.university;
    const names = APP_DATA.martyrs.map((m) => `<li>${escapeHtml(m.name)}</li>`).join("");
    return `
      <section class="hero hero-photo">
         
        <div class="uni-logo-wrap"><img src="${u.logo}" alt="آرم دانشگاه شهرکرد"></div>
        <div class=" ">
        <h1>شهدای دانشگاه شهرکرد</h1> </div>
        <p class="lead">به یاد هشت دانشجوی این دانشگاه که در دفاع مقدس به شهادت رسیدند</p>
      </section>
      <div class="home-cards " >
        <a class="plaque" href="#/university">
          <div class="plaque-icon">${ICONS.university}</div>
          <div class="plaque-text">
            <h2>دانشگاه شهرکرد</h2>
            <p>پیشینه دانشگاه و نقش آن در دفاع مقدس</p>
          </div>
          <span class="plaque-arrow">‹</span>
        </a>
        <a class="plaque" href="#/martyrs">
          <div class="plaque-icon">${ICONS.people}</div>
          <div class="plaque-text">
            <h2>شهدای دانشگاه</h2>
            <p>معرفی، زندگینامه و وصیت‌نامه هشت شهید</p>
          </div>
          <span class="plaque-arrow">‹</span>
        </a>
      </div>
      
        <div class="hero-photo1"> <p class="home-footer-note ">یاد و خاطره‌ی شهدا گرامی باد<br>  دکتر فرهاد فرهادیان <br>عضو هیات علمی دانشگاه شهرکرد </p></div>
    `;
  }

  function renderUniversity() {
    const u = APP_DATA.university;
    const names = APP_DATA.martyrs.map((m) => `<li>${escapeHtml(m.name)}</li>`).join("");
    return `
      <div class="topbar hero-photo">
        <button class="back-btn" data-nav="#/home">${ICONS.back}</button>
        <h1>دانشگاه شهرکرد</h1>
      </div>
      <div class="uni-logo-wrap"><img src="${u.logo}" alt="آرم دانشگاه شهرکرد"></div>
      <div class="uni-title">
        <h2>${escapeHtml(u.name)}</h2>
        <p>دانشگاه مادر استان چهارمحال و بختیاری</p>
      </div>
      <div class="content-section">
        <h3>پیشینه دانشگاه</h3>
        <p>${escapeHtml(u.history)}</p>
      </div>
      <div class="content-section">
        <h3>نقش دانشگاه در دفاع مقدس</h3>
        <p>${escapeHtml(u.sacredDefenseRole)}</p>
      </div>
      <div class="honor-names">
        <h3>هشت شهید دانشگاه شهرکرد</h3>
        <ul class="honor-list">${names}</ul>
      </div>
      <div class="cta-row">
        <a class="btn-primary" href="#/martyrs">${ICONS.people} مشاهده شهدا</a>
      </div>
    `;
  }

  function renderMartyrsGallery() {
    const cards = APP_DATA.martyrs.map((m) => {
      const photo = m.photo
        ? `<img src="${m.photo}" alt="${escapeHtml(m.name)}">`
        : `<span>${escapeHtml(initials(m.name))}</span>`;
      return `
        <a class="martyr-card" href="#/martyr/${m.id}">
          <div class="martyr-photo-frame"><div class="photo-inner">${photo}</div></div>
          <div class="name">${escapeHtml(m.name)}</div>
          <span class="tag">شهید دانشگاه شهرکرد</span>
        </a>
      `;
    }).join("");

    return `
      <div class="topbar hero-photo">
        <button class="back-btn" data-nav="#/home">${ICONS.back}</button>
        <h1>شهدای دانشگاه</h1>
      </div>
      <div class="gallery-intro">
        <h2>هشت ستاره دانشگاه</h2>
        <p>برای مشاهده زندگینامه و وصیت‌نامه، روی تصویر هر شهید بزنید</p>
      </div>
      <div class="martyrs-grid">${cards}</div>
    `;
  }

  function metaRow(k, v) {
    if (!v) return "";
    return `<div class="meta-row"><span class="k">${escapeHtml(k)}</span><span class="v">${escapeHtml(v)}</span></div>`;
  }

  function renderMartyrDetail(id) {
    const m = getMartyr(id);
    if (!m) return renderNotFound();

    const photo = m.photo
      ? `<img src="${m.photo}" alt="${escapeHtml(m.name)}">`
      : `<span>${escapeHtml(initials(m.name))}</span>`;

    const metaRows = [
      metaRow("تاریخ تولد", m.birthDate),
      metaRow("محل تولد", m.birthPlace),
      metaRow("دانشکده", m.faculty),
      metaRow("رشته تحصیلی", m.field),
      metaRow("تاریخ شهادت", m.martyrdomDate),
      metaRow("محل شهادت", m.martyrdomPlace),
      metaRow("محل مزار", m.burialPlace)
    ].join("");

    const hasBio = !!(m.biography && m.biography.trim());
    const hasWill = !!(m.will && m.will.trim());

    return `
      <div class="topbar hero-photo">
        <button class="back-btn" data-nav="#/martyrs">${ICONS.back}</button>
        <h1>${escapeHtml(m.name)}</h1>
      </div>
      <div class="martyr-hero ">
        <div class="photo-frame-lg"><div class="photo-inner-lg">${photo}</div></div>
        <h2>${escapeHtml(m.name)}</h2>
        <div class="sub">شهید دانشگاه شهرکرد</div>
      </div>
      ${metaRows ? `<div class="meta-grid">${metaRows}</div>` : ""}
      <div class="detail-actions">
        <a class="action-card" href="#/martyr/${m.id}/bio">
          <div class="ic">${ICONS.book}</div>
          <span class="label">زندگینامه</span>
        </a>
        <a class="action-card" href="#/martyr/${m.id}/will">
          <div class="ic">${ICONS.scroll}</div>
          <span class="label">وصیت‌نامه</span>
        </a>
      </div>
      ${(!hasBio || !hasWill) ? `<div class="empty-note">تکمیل اطلاعات این بخش به‌زودی انجام می‌شود</div>` : ""}
    `;
  }

  function renderTextPage(id, kind) {
    const m = getMartyr(id);
    if (!m) return renderNotFound();
    const isBio = kind === "bio";
    const text = isBio ? m.biography : m.will;
    const title = isBio ? "زندگینامه" : "وصیت‌نامه";

    return `
      <div class="topbar hero-photo">
        <button class="back-btn" data-nav="#/martyr/${m.id}">${ICONS.back}</button>
        <h1>${title} | ${escapeHtml(m.name)}</h1>
      </div>
      <div class="text-page-header">
        <div class="name">${escapeHtml(m.name)}</div>
        <div class="kind">${title}</div>
      </div>
      <div class="text-page-body">${
        text && text.trim() ? escapeHtml(text) : "متن این بخش هنوز ثبت نشده است."
      }</div>
    `;
  }

  function renderNotFound() {
    return `
      <div class="topbar">
        <button class="back-btn" data-nav="#/home">${ICONS.back}</button>
        <h1>یافت نشد</h1>
      </div>
      <div class="empty-note">موردی با این مشخصات پیدا نشد.</div>
    `;
  }

  // ---------- روتر ----------

  function parseRoute() {
    const hash = location.hash || "#/home";
    const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
    return parts;
  }

  function render() {
    const parts = parseRoute();
    let html = "";
    let navKey = "home";

    if (parts.length === 0 || parts[0] === "home") {
      html = renderHome();
      navKey = "home";
    } else if (parts[0] === "university") {
      html = renderUniversity();
      navKey = "university";
    } else if (parts[0] === "martyrs") {
      html = renderMartyrsGallery();
      navKey = "martyrs";
    } else if (parts[0] === "martyr" && parts[1] && !parts[2]) {
      html = renderMartyrDetail(parts[1]);
      navKey = "martyrs";
    } else if (parts[0] === "martyr" && parts[1] && (parts[2] === "bio" || parts[2] === "will")) {
      html = renderTextPage(parts[1], parts[2]);
      navKey = "martyrs";
    } else {
      html = renderNotFound();
    }

    root.innerHTML = `<div class="view active">${html}</div>` + renderBottomNav(navKey);
    bindNav();
    window.scrollTo(0, 0);
  }

  function renderBottomNav(active) {
    const items = [
      { key: "home", href: "#/home", label: "خانه", icon: ICONS.home },
      { key: "university", href: "#/university", label: "دانشگاه", icon: ICONS.university },
      { key: "martyrs", href: "#/martyrs", label: "شهدا", icon: ICONS.people }
    ];
    const btns = items.map((it) => `
      <button data-nav="${it.href}" class="${it.key === active ? "active" : ""}">
        ${it.icon}
        <span>${it.label}</span>
      </button>
    `).join("");
    return `<nav class="bottom-nav">${btns}</nav>`;
  }

  function bindNav() {
    root.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => { location.hash = el.getAttribute("data-nav"); });
    });
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);

  // ثبت Service Worker برای کارکرد آفلاین (PWA)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
})();
