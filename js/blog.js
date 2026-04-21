// ═══════════════════════════════════════════
//  blog.js – Blog cikkek adatai és modal
// ═══════════════════════════════════════════

const POSTS = {
  hidraulikus: {
    title: '🔧 Hidraulikus fék légtelenítés – lépésről lépésre',
    body: `
      <p>A hidraulikus fékrendszer karbantartása az egyik legfontosabb – és sokszor legelhalasztottabb – szervizfeladat. Ha a fékkaron puha érzést tapasztalsz, ideje légteleníteni.</p>
      <h3>Mire lesz szükséged?</h3>
      <ul>
        <li>Shimano mineral oil (nem DOT folyadék!)</li>
        <li>Légtelenítő készlet (funnel, syringe)</li>
        <li>Imbuszkulcs készlet</li>
        <li>Tiszta kesztyű és kendők</li>
      </ul>
      <h3>A folyamat lépései</h3>
      <p><strong>1. Előkészítés:</strong> Állítsd a féknyerget teljesen kinyitott állapotba, és a fékbetétet maximálisan távolítsd el. A folyadékfoglalatot nyisd ki.</p>
      <p><strong>2. Felső légtelenítés:</strong> A fékkar tölcsérét töltsd meg mineral oil-lal. Nyisd meg az alsó szelepcserét, és enged ki a régi folyadékot, amíg tiszta, buborékmentes folyadék jön ki.</p>
      <p><strong>3. Ellenőrzés:</strong> Zárd a szelepet, töltsd fel a tölcsért, zárd le. Pumikáld a fékeket párszor, ellenőrizd a feszességet.</p>
      <h3>Fontos tudnivalók</h3>
      <p>Shimano rendszerekben <strong>soha ne használj DOT folyadékot</strong> — az tönkreteszi a tömítőket. Csak Shimano mineral oil a megoldás. Ha bizonytalan vagy, hozd be — elvégzem!</p>
    `
  },
  di2: {
    title: '⚡ Mi az a Shimano Di2? – Elektronikus váltók világa',
    body: `
      <p>A Di2 (Digital Integrated Intelligence) a Shimano elektronikus váltórendszere. Elektromos motorok végzik a váltást — nem bowdenkábel húzza a váltót, hanem egy precíz, programozható motor.</p>
      <h3>Miért érdemes Di2?</h3>
      <ul>
        <li><strong>Precizitás:</strong> Minden váltás tökéletesen pontos, nem kell kézzel állítani</li>
        <li><strong>Könnyű kezelés:</strong> Kevesebb erőt igényel, különösen hegyen felfelé</li>
        <li><strong>Szinkronizált váltás:</strong> Első és hátsó váltó automatikusan összehangolódhat</li>
        <li><strong>Karbantartás:</strong> Nincs bowden, nincs feszességállítás — csak akkumulátor töltés</li>
      </ul>
      <h3>Tapasztalataim az XT M8050 Di2-vel</h3>
      <p>Az XT M8050 Di2 az egyik legelterjedtebb MTB elektronikus rendszer. Beállítása az E-TUBE applikáción keresztül történik, ahol a gomb funkciókat is testre szabhatod.</p>
      <h3>Megéri az ár?</h3>
      <p>Ha sokat biciklizol, különösen hegyes terepen, <strong>igen</strong>. Ha van kérdésed, írj!</p>
    `
  },
  webapp: {
    title: '🚀 Hogyan készítettem szerviz munkalap rendszert Node.js-sel?',
    body: `
      <p>A GyulaBringa munkalap rendszer egy valós igényből született: a papír alapú munkalapok nehezen kezelhetők, könnyen elvesznek.</p>
      <h3>A kihívások</h3>
      <ul>
        <li>Duplikált mentések elkerülése</li>
        <li>Megbízható JSON adatkezelés fájlszinten</li>
        <li>PDF export és nyomtatás közvetlen böngészőből</li>
        <li>Naptár nézet a munkaterhelés vizualizálásához</li>
      </ul>
      <h3>A megoldás</h3>
      <p>Node.js + Express backend JSON fájl alapú tárolással. A legfontosabb technikai megoldás: <strong>mutex-alapú írás</strong> és <strong>atomikus rename</strong> technika, ami megakadályozza az egyidejű írási konfliktusokat.</p>
      <h3>Tanulságok</h3>
      <p>A legegyszerűbb megoldás sokszor a legjobb. SQLite helyett JSON fájl — mert nincs telepítendő extra függőség, és a backup egyetlen fájl másolása.</p>
    `
  },
  grx: {
    title: '🪨 Shimano GRX – A gravel világ vezető rendszere',
    body: `
      <p>A gravel kerékpározás az elmúlt évek egyik legnagyobb trendje — és a Shimano GRX sorozata kifejezetten erre a stílusra lett tervezve.</p>
      <h3>Mi különbözteti meg a GRX-et?</h3>
      <ul>
        <li><strong>Wider range:</strong> Nagyobb fogasszám-tartomány a változatos terepen való haladáshoz</li>
        <li><strong>1x és 2x konfiguráció:</strong> Mindkét hajtásrendszert támogatja</li>
        <li><strong>Shimano kavics kerekek:</strong> Tubeless-kompatibilis, gravel-optimalizált kerekek</li>
        <li><strong>GRX Di2:</strong> Elektronikus verzió is elérhető</li>
      </ul>
      <h3>GRX RX610 – az entry level csúcsa</h3>
      <p>A legújabb RX610 sorozat fantasztikus ár/érték arányt kínál. T.E.C. képzésen részletesen megismertem az egész ökoszisztémát — ha GRX-szel kapcsolatos kérdésed van, szólj!</p>
    `
  },
  sas: {
    title: '📈 Automatizált SAS riport – így spórolhatsz órákat minden héten',
    body: `
      <p>Ha minden héten vagy hónapban ugyanolyan riportot készítesz — adatok kinyerése, formázás, exportálás — akkor nagy valószínűséggel automatizálható.</p>
      <h3>A tipikus folyamat</h3>
      <ul>
        <li>Adatok betöltése különböző forrásból</li>
        <li>Szűrés, aggregálás, számítások</li>
        <li>Formázott output generálása (Excel, PDF, HTML)</li>
        <li>Fájl mentés meghatározott helyre</li>
      </ul>
      <h3>Hogyan csináltam meg SAS-ban?</h3>
      <p>A PROC SQL adatkinyerés után DATA Step-pel végzem a kalkulációkat. Az ODS rendszer HTML, RTF, Excel, PDF outputot is tud generálni ugyanabból a kódból.</p>
      <h3>Mikor éri meg?</h3>
      <p>Ha egy riport elkészítése 30+ percet vesz igénybe és legalább hetente csinálod, az éves szinten napokat jelent. Az automatizálás befektetése általában 2-3 hét alatt megtérül.</p>
    `
  },
  karbantartas: {
    title: '🛠️ 5 dolog amit minden kerékpáros tudnia kellene',
    body: `
      <p>Nem kell profi szerelőnek lenni ahhoz, hogy kerékpárod jó állapotban tartsd. Ez az 5 dolog sokat számít.</p>
      <h3>1. Guminyomás ellenőrzése</h3>
      <p>Hetente egyszer pumpálj! A helyes nyomás megakadályozza a csípődefektet és csökkenti a gördülési ellenállást.</p>
      <h3>2. Lánc kenése</h3>
      <p>Száraz időben száraz kenőanyag, nedves időben nedves kenőanyag. Kenés után töröld le a felesleget.</p>
      <h3>3. Fékek ellenőrzése</h3>
      <p>Havonta egyszer ellenőrizd a fékbetétek vastagságát és a fékkar mozgását. Ha puha a fék, ne halaszd a beállítást!</p>
      <h3>4. Csavarok meghúzása</h3>
      <p>A nyeregoszlop, kormányszár és pedálok csavarjait időnként ellenőrizd. A laza csavar komoly balesetet okozhat.</p>
      <h3>5. Mosás után szárítás</h3>
      <p>Mosás után mindig szárítsd meg a kerékpárt — különösen a hajtáslánc részeit. <strong>Ha valami nem stimmel — hozd be, megnézzük együtt!</strong></p>
    `
  }
};

function openPost(id) {
  const post = POSTS[id];
  if (!post) return;
  document.getElementById('post-modal-title').textContent = post.title;
  document.getElementById('post-modal-body').innerHTML = post.body;
  document.getElementById('post-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePost() {
  document.getElementById('post-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Blog kártyák háttérszínei
  document.querySelectorAll('.blog-card-img[data-bg-color]').forEach(el => {
    el.style.background = el.dataset.bgColor;
  });

  // Blog kategória színek
  const catColors = {
    blue:   'var(--blue)',
    green:  'var(--green)',
    cyan:   '#0284c7',
    orange: '#ea580c',
    purple: '#9333ea',
  };
  document.querySelectorAll('.blog-card-cat[data-color]').forEach(el => {
    el.style.color = catColors[el.dataset.color] || 'var(--blue)';
  });

  // Modal bezárás
  document.getElementById('post-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closePost();
  });
  document.getElementById('post-modal-close').addEventListener('click', closePost);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });
});