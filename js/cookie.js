// ═══════════════════════════════════════════
//  cookie.js – Cookie elfogadó sáv
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const COOKIE_KEY = 'cookie_accepted';

  // Ha már elfogadta, nem mutatjuk
  if (localStorage.getItem(COOKIE_KEY)) return;

  // Sáv létrehozása
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-banner-inner">
      <div class="cookie-banner-text">
        <span class="cookie-banner-ico">🍪</span>
        <span>Ez az oldal egy technikai sütit használ a működéshez.
          Személyes adatot nem gyűjtünk.
          <a href="/pages/cookie.html" class="cookie-banner-link">Részletek</a>
        </span>
      </div>
      <div class="cookie-banner-btns">
        <button id="cookie-accept" class="cookie-btn-accept">Elfogadom</button>
        <button id="cookie-decline" class="cookie-btn-decline">Elutasítom</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  // Megjelenítés kis késleltetéssel
  setTimeout(() => banner.classList.add('show'), 800);

  function dismiss(accepted) {
    if (accepted) localStorage.setItem(COOKIE_KEY, '1');
    banner.classList.remove('show');
    setTimeout(() => banner.remove(), 400);
  }

  document.getElementById('cookie-accept').addEventListener('click',  () => dismiss(true));
  document.getElementById('cookie-decline').addEventListener('click', () => dismiss(false));
});