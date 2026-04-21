// ═══════════════════════════════════════════
//  kapcsolat.js – Kapcsolati form és FAQ
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Kapcsolati form ──
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const nev    = document.getElementById('cf-nev').value.trim();
    const email  = document.getElementById('cf-email').value.trim();
    const tema   = document.getElementById('cf-tema').value;
    const uzenet = document.getElementById('cf-uzenet').value.trim();

    if (!nev || !email || !uzenet) return;

    const subject = encodeURIComponent('Portfólió megkeresés – ' + (tema || 'Általános'));
    const body    = encodeURIComponent('Feladó: ' + nev + '\nEmail: ' + email + '\nTéma: ' + tema + '\n\n' + uzenet);
    window.location.href = 'mailto:canonfax.danielg@gmail.com?subject=' + subject + '&body=' + body;

    successMsg?.classList.add('show');
    form.reset();
  });

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});