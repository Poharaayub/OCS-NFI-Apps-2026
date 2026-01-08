function vibrate() { if(navigator.vibrate) navigator.vibrate(15); }

function setActive(el, menu) {
  document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  vibrate();

  const c = document.getElementById('content');

  if(menu === 'Job Desk') {
    c.innerHTML = `
      <h1>Job Desk</h1>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBJaRSwf1ki6YLILhX1jfc8lntgZYa2WtnM8vFmskFgEhQo4L89xWIBt4f12wVO8egkAyO-rdO4hRr/pubhtml"></iframe>
    `;
    return;
  }

  let btns = [];
  if(menu === 'Beranda') {
  btns = [
    ['download', 'Download OCS NFI Apps 26', 'link',
     'https://drive.google.com/file/d/1kTBmccjjSEjbIAP8e-LWyb4Fytd0itrC/view?usp=drivesdk'
    ],

    ['campaign', 'Update informasi terbaru', 'link',
     'https://docs.google.com/document/d/1xBx-CVQ4K1lBEaIKjaKhmesfO8q3LyXs4rhQqH-ymPQ/edit?usp=drivesdk'
    ],
    ['call', 'Hubungi pak Ayub', 'link', 'https://wa.me/6289637126728'],
    ['call', 'Hubungi pak Sadulloh', 'link', 'https://wa.me/6285281587927'],
    ['groups', 'All Members', 'members']
  ];
}
  if(menu === 'Laporan') {
    btns = [
      ['download', 'Download Kamstamwa', 'link', 'https://drive.google.com/file/d/1Rhy1s2R5G0QdilOMmbiQ5AhgaSuvtsWQ/view?usp=drivesdk'],
      ['download', 'Download Cam To PDF', 'link', 'https://drive.google.com/uc?id=105kaVbODYTpiGii9At-0kAPCHPkltyS4'],
      ['picture_as_pdf', 'Before After to PDF', 'link', 'https://poharaayub.github.io/Before-After-PDF/'],
      ['article', 'Laporan Kehadiran Teks Generate', 'link', 'https://poharaayub.github.io/laporan-kehadiran-clipboard-generator/'],
      ['share', 'Upload ke WhatsApp Grup OCS NFI', 'link', 'https://chat.whatsapp.com/KnxTC4uGQdGI6WAAVh0UGg'],
      ['person', 'Upload ke Team Leader', 'update'],
      ['local_laundry_service', 'Laporan pencucian box', 'link', 'https://docs.google.com/spreadsheets/d/1vf2pzwlvdsm17cyo1Zrc6DBUL4EeQOng5uJjU12aYvg/edit?usp=drivesdk'],
      ['warehouse', 'Laporan pembersihan pallet warehouse tepung', 'link', 'https://docs.google.com/spreadsheets/d/1C9Zrywvi_ggnHnKHB9fxUU9f-DCWaGNFJflKqbHVEnI/edit?usp=drivesdk'],
      ['inventory', 'Laporan pencucian pallet', 'link', 'https://docs.google.com/spreadsheets/d/13dPCq4lEhV4PRA4z2RLQEmPbOIBK9emuclkxk-Dh7iU/edit?usp=drivesdk']
    ];
  }
  if(menu === 'Absensi') {
    btns = [
      ['apps', 'Greatday apps', 'link', 'https://app.greatdayhr.com/'],
      ['summarize', 'Rekapitulasi absensi', 'link', 'https://drive.google.com/drive/folders/1o0sr3Ee6r4VOCGT_a-1dTJ-KVZ0GMX-J'],
      ['mail', 'Ajukan izin absensi', 'absen'],
      ['swap_horiz', 'Ajukan tukar shift', 'link', 'https://wa.me/6289637126728?text=Assalamualaikum%20pak%20Ayub%2C%20saya%20ingin%20mengajukan%20tukar%20shift%0A%0AKeperluan%20pengajuan%20tukar%20shift%3A%0ATukar%20shift%20dengan%3A%0AShift%20sebelumnya%3A%0A%0ADemikian%20terimakasih'],
      ['assignment', 'Penilaian kualitas karyawan', 'link', 'https://docs.google.com/spreadsheets/d/1o3yFehBFjD7SDgmJqRqlbl36nv77uS8EiqUVMLoc3DA/edit?usp=drivesdk'],
      ['warning', 'Surat peringatan', 'link', 'https://drive.google.com/drive/folders/10JcMB3LGNLOL84YjRa2R-Fp7toZR_v2y']
    ];
  }
  if(menu === 'Lainnya') {
    btns = [
      ['article', 'Job Desk Teks Generator', 'link', 'https://poharaayub.github.io/grup-jod-desk-input/'],
      ['calendar_month', 'Data Schedule & Job Desk Pekerjaan', 'link', 'https://drive.google.com/drive/folders/1UyO20_isk-EMRCLpKhwSBI_BYoP2Vy9A'],
      ['account_balance_wallet', 'Program Uang Kas 2026', 'kas'],
      ['build', 'Data Peralatan & Alat Bantu Kerja', 'tools'],
      ['photo_camera', 'OCS Global Services Indonesia', 'link', 'https://www.instagram.com/ocsindonesia/'],
      ['collections', 'OCS NFI Gallery 2026', 'link', 'https://drive.google.com/drive/folders/1wtyzi9lhpi7JjY67H76NHGk-qgbOwwd1']
    ];
  }

  c.innerHTML = `
    <h1>${menu}</h1>
    <div class="buttons">
      ${btns.map(b => `
        <button 
          onclick="${
            b[2] === 'members' ? 'openMembersSheet()' :
            b[2] === 'absen' ? 'openAbsenSheet()' :
            b[2] === 'kas' ? 'openKasSheet()' :
            b[2] === 'tools' ? 'openToolsSheet()' :
            b[2] === 'update' ? 'openUpdateSheet()' :
            b[2] === 'link' ? `window.open('${b[3]}','_blank')` : ''
          }"
        >
          <span class="material-symbols-rounded">${b[0]}</span>${b[1]}
        </button>
      `).join('')}
    </div>
  `;
}

// --- FUNGSI BOTTOM SHEET ---
function openMembersSheet() {
  vibrate();
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById('membersSheet').classList.add('show');
  const members = [
    {name: 'Pohara Ayub', wa: 'https://wa.me/6289637126728'},
    {name: 'Sadulloh', wa: 'https://wa.me/6285281587927'},
    {name: 'Edi Ahmad Jubaedi', wa: 'https://wa.me/6285883524329'},
    {name: 'Saiful Bahri', wa: 'https://wa.me/6281389327308'},
    {name: 'Wahidin', wa: 'https://wa.me/6283819602330'},
    {name: 'Amrullah', wa: 'https://wa.me/6283879624040'},
    {name: 'Ade Surahman', wa: 'https://wa.me/6281947172711'},
    {name: 'M. Rifai', wa: 'https://wa.me/6285810611074'},
    {name: 'Muhammad Toni', wa: 'https://wa.me/6281286448626'},
    {name: 'Nabrih', wa: 'https://wa.me/6281295412005'},
    {name: 'Sulaiman', wa: 'https://wa.me/6285716230391'},
    {name: 'Siti Maemunah', wa: 'https://wa.me/6285771090915'}
  ];
  document.getElementById('membersButtons').innerHTML = members.map(m => `
    <button onclick="window.open('${m.wa}','_blank')"><span class="material-symbols-rounded">person</span>${m.name}</button>
  `).join('');
}

function openAbsenSheet() {
  vibrate();
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById('absenSheet').classList.add('show');
  const btns = [
    ['mail','Ajukan izin ke pak Ayub','https://wa.me/6289637126728?text=Assalamualaikum%20pak%20Ayub%2C%20saya%20ingin%20mengajukan%20izin%20absensi%0AKeperluan%20mengajukan%20izin%3A%0AIzin%20untuk%20berapa%20hari%3A%0A%0ADemikian%20terimakasih'],
    ['mail','Ajukan izin ke pak Sadulloh','https://wa.me/6285281587927?text=Assalamualaikum%20pak%20Sadulloh%2C%20saya%20ingin%20mengajukan%20izin%20absensi%0AKeperluan%20mengajukan%20izin%3A%0AIzin%20untuk%20berapa%20hari%3A%0A%0ADemikian%20terimakasih']
  ];
  document.getElementById('absenButtons').innerHTML = btns.map(b => `
    <button onclick="window.open('${b[2]}','_blank')"><span class="material-symbols-rounded">${b[0]}</span>${b[1]}</button>
  `).join('');
}

function openKasSheet() {
  vibrate();
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById('kasSheet').classList.add('show');
  const btns = [
    ['description','Laporan program uang kas 2026','https://docs.google.com/spreadsheets/d/1mPzw4aiXAvZz0fkyUWAkmzJjCKUgCKRYbDQeUgI95Dk/edit?usp=drivesdk'],
    ['attach_money','Ajukan pinjaman','https://wa.me/6285281587927?text=Assalamualaikum%20pak%20Sadulloh%2C%20saya%20ingin%20mengajukan%20pinjaman%20uang%20kas%202026%20dengan%20rincian%20sebagai%20berikut%0A%0AKeperluan%20pinjaman%3A%0ANominal%20pinjaman%3A%0A%0ADemikian%20terimakasih'],
    ['rule','Peraturan program uang kas 2026','https://docs.google.com/document/d/1pRdzuZYOEsO4gadqvAWk7qT7DMCcA87dlU75tSibAyQ/edit?usp=drivesdk']
  ];
  document.getElementById('kasButtons').innerHTML = btns.map(b => `
    <button onclick="window.open('${b[2]}','_blank')"><span class="material-symbols-rounded">${b[0]}</span>${b[1]}</button>
  `).join('');
}

function openToolsSheet() {
  vibrate();
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById('toolsSheet').classList.add('show');
  const btns = [
    ['build','Data peralatan & alat bantu kerja','https://docs.google.com/spreadsheets/d/16F8PvkiDaDY_ZyIfkf0K0eeXwPvDelRSSgAeCl292fk/edit?usp=drivesdk'],
    ['add','Request peralatan/alat bantu kerja','https://wa.me/6285281587927?text=Assalamualaikum%20pak%20Sadulloh%2C%20saya%20ingin%20request%20peralatan%2F%20alat%20bantu%20kerja%20dengan%20rincian%20sebagai%20berikut%0A%0ANama%20peralatan%3A%0AJumlah%3A%0AUntuk%20digunakan%20diarea%3A%0A%0ADemikian%20terimakasih'],
    ['report_problem','Laporkan kerusakan peralatan/alat bantu kerja','https://wa.me/6289637126728?text=Assalamualaikum%20pak%20Ayub%2C%20saya%20ingin%20melaporkan%20kerusakan%20peralatan%2F%20alat%20bantu%20kerja%20dengan%20rincian%20sebagai%20berikut%0A%0ANama%20peralatan%3A%0AKerusakan%20dibagian%3A%0AKronologi%20kerusakan%3A%0A%0ADemikian%20terimakasih'],
    ['local_laundry_service','Data pemakaian detergen','https://docs.google.com/spreadsheets/d/11IqbMX3eR3mWIV-i5KZAeFWTb9gNmh1OwDmfqXGLfW8/edit?usp=drivesdk']
  ];
  document.getElementById('toolsButtons').innerHTML = btns.map(b => `
    <button onclick="window.open('${b[2]}','_blank')"><span class="material-symbols-rounded">${b[0]}</span>${b[1]}</button>
  `).join('');
}

function openUpdateSheet() {
  vibrate();
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById('updateSheet').classList.add('show');
  document.getElementById('updateButtons').innerHTML = `
    <button onclick="window.open('https://wa.me/6289637126728','_blank')"><span class="material-symbols-rounded">person</span>Upload ke pak Ayub</button>
    <button onclick="window.open('https://wa.me/6285281587927','_blank')"><span class="material-symbols-rounded">person</span>Upload ke pak Sadulloh</button>
  `;
}

function closeSheet() {
  document.getElementById('sheetOverlay').classList.remove('show');
  document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('show'));
}

window.addEventListener('DOMContentLoaded', () => {
  setActive(document.getElementById('default-menu'), 'Beranda');
});
