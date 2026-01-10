/**
 * OCS NFI APPS 26 - Full Complete Script
 * Developer: Pohara Ayub
 */

// 1. FUNGSI GETAR (Haptic Feedback)
function vibrate() { 
  if(navigator.vibrate) navigator.vibrate(15); 
}

// 2. FUNGSI NAVIGASI UTAMA
function setActive(el, menu) {
  vibrate();
  
  // Update UI Navigasi
  document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  const content = document.getElementById('content');
  content.scrollTop = 0; 

  // Logika Khusus: Menu Job Desk (Iframe Full)
  if(menu === 'Job Desk') {
    content.innerHTML = `
      <h1>Job Desk</h1>
      <p class="subtitle">Pekerjaan harian & periodik tim OCS NFI</p>
      <iframe src="https://poharaayub.github.io/OCS-NFI-Apps-26-Job-Desk/"></iframe>
    `;
    return;
  }
  
  // --- DATABASE TOMBOL & LINK ---
  let btns = [];
  
  if(menu === 'Beranda') {
    btns = [
      ['download', 'Download OCS NFI Apps 26', 'link', 'https://drive.google.com/file/d/1kTBmccjjSEjbIAP8e-LWyb4Fytd0itrC/view?usp=drivesdk'],
      ['campaign', 'Update Informasi Terbaru', 'link', 'https://docs.google.com/document/d/1xBx-CVQ4K1lBEaIKjaKhmesfO8q3LyXs4rhQqH-ymPQ/edit?usp=drivesdk'],
      ['call', 'Hubungi pak Ayub', 'link', 'https://wa.me/6289637126728'],
      ['call', 'Hubungi pak Sadulloh', 'link', 'https://wa.me/6285281587927'],
      ['groups', 'Semua Anggota Tim', 'members']
    ];
  } else if(menu === 'Laporan') {
    btns = [
      ['download', 'Download Kamstamwa', 'link', 'https://drive.google.com/file/d/1Rhy1s2R5G0QdilOMmbiQ5AhgaSuvtsWQ/view?usp=drivesdk'],
      ['download', 'Download Cam To PDF', 'link', 'https://drive.google.com/uc?id=105kaVbODYTpiGii9At-0kAPCHPkltyS4'],
      ['picture_as_pdf', 'Before After to PDF', 'link', 'https://poharaayub.github.io/Before-After-PDF/'],
      ['article', 'Laporan Kehadiran Teks', 'link', 'https://poharaayub.github.io/laporan-kehadiran-clipboard-generator/'],
      ['share', 'WhatsApp Grup OCS NFI', 'link', 'https://chat.whatsapp.com/KnxTC4uGQdGI6WAAVh0UGg'],
      ['person', 'Upload ke Team Leader', 'update'],
      ['local_laundry_service', 'Laporan Pencucian Box', 'link', 'https://docs.google.com/spreadsheets/d/1vf2pzwlvdsm17cyo1Zrc6DBUL4EeQOng5uJjU12aYvg/edit?usp=drivesdk'],
      ['warehouse', 'Laporan Warehouse Tepung', 'link', 'https://docs.google.com/spreadsheets/d/1C9Zrywvi_ggnHnKHB9fxUU9f-DCWaGNFJflKqbHVEnI/edit?usp=drivesdk'],
      ['inventory', 'Laporan Pencucian Pallet', 'link', 'https://docs.google.com/spreadsheets/d/13dPCq4lEhV4PRA4z2RLQEmPbOIBK9emuclkxk-Dh7iU/edit?usp=drivesdk']
    ];
    } else if(menu === 'Absensi') {
    // Template Pesan Tukar Shift
    const pesanTukar = encodeURIComponent(
      "Assalamualaikum, saya ingin mengajukan tukar shift\n\n" +
      "Keperluan mengajukan tukaran shift:\n" +
      "Shift sebelumnya:\n\n" +
      "Demikian terimakasih"
    );

    btns = [
      ['apps', 'Greatday Apps', 'link', 'https://app.greatdayhr.com/'],
      ['summarize', 'Rekapitulasi Absensi', 'link', 'https://drive.google.com/drive/folders/1o0sr3Ee6r4VOCGT_a-1dTJ-KVZ0GMX-J'],
      ['mail', 'Ajukan Izin Absensi', 'absen'],
      ['swap_horiz', 'Ajukan Tukar Shift', 'link', `https://wa.me/6289637126728?text=${pesanTukar}`],
      ['assignment', 'Penilaian Karyawan', 'link', 'https://docs.google.com/spreadsheets/d/1o3yFehBFjD7SDgmJqRqlbl36nv77uS8EiqUVMLoc3DA/edit?usp=drivesdk'],
      ['warning', 'Surat Peringatan (SP)', 'link', 'https://drive.google.com/drive/folders/10JcMB3LGNLOL84YjRa2R-Fp7toZR_v2y']
    ];

  } else if(menu === 'Lainnya') {
    btns = [
      ['article', 'Job Desk Teks Generator', 'link', 'https://poharaayub.github.io/grup-jod-desk-input/'],
      ['calendar_month', 'Data Schedule & Job Desk', 'link', 'https://drive.google.com/drive/folders/1UyO20_isk-EMRCLpKhwSBI_BYoP2Vy9A'],
      ['account_balance_wallet', 'Program Uang Kas 2026', 'kas'],
      ['build', 'Data Peralatan Kerja', 'tools'],
      ['photo_camera', 'Instagram OCS Indonesia', 'link', 'https://www.instagram.com/ocsindonesia/'],
      ['collections', 'OCS NFI Gallery 2026', 'link', 'https://drive.google.com/drive/folders/1wtyzi9lhpi7JjY67H76NHGk-qgbOwwd1'],
      ['info', 'About Apps', 'about']
    ];
  }

  content.innerHTML = `
    <h1>${menu}</h1>
    <p class="subtitle">Akses cepat menu ${menu.toLowerCase()}</p>
    <div class="buttons">
      ${btns.map(b => `
        <button onclick="handleButtonClick('${b[2]}', '${b[3] || ''}')">
          <span class="material-symbols-rounded">${b[0]}</span>
          <span>${b[1]}</span>
        </button>
      `).join('')}
    </div>
  `;
}

// 3. HANDLER KLIK TERPUSAT
function handleButtonClick(action, target) {
  vibrate();
  if (action === 'members') openMembersSheet();
  else if (action === 'absen') openAbsenSheet();
  else if (action === 'kas') openKasSheet();
  else if (action === 'tools') openToolsSheet();
  else if (action === 'update') openUpdateSheet();
  else if (action === 'about') openAboutSheet();
  else if (action === 'link') window.open(target, '_blank');
}

// 4. FUNGSI BUKA BOTTOM SHEET

function openMembersSheet() {
  const container = document.getElementById('membersButtons');
  const members = [
    {name: 'Pohara Ayub', role: 'Team Leader', wa: '6289637126728', icon: 'person'},
    {name: 'Sadulloh', role: 'Team Leader', wa: '6285281587927', icon: 'person'},
    {name: 'Edi Ahmad Jubaedi', role: 'Anggota', wa: '6285883524329', icon: 'person'},
    {name: 'Saiful Bahri', role: 'Anggota', wa: '6281389327308', icon: 'person'},
    {name: 'Wahidin', role: 'Gardener', wa: '6283819602330', icon: 'park'},
    {name: 'Amrullah', role: 'Anggota', wa: '6283879624040', icon: 'person'},
    {name: 'Ade Surahman', role: 'Anggota', wa: '6281947172711', icon: 'person'},
    {name: 'M. Rifai', role: 'Anggota', wa: '6285810611074', icon: 'person'},
    {name: 'Muhammad Toni', role: 'Anggota', wa: '6281286448626', icon: 'person'},
    {name: 'Nabrih', role: 'Anggota', wa: '6281295412005', icon: 'person'},
    {name: 'Sulaiman', role: 'Anggota', wa: '6285716230391', icon: 'person'},
    {name: 'Siti Maemunah', role: 'Anggota', wa: '6285771090915', icon: 'person'}
  ];

  container.innerHTML = members.map(m => `
    <button onclick="window.open('https://wa.me/${m.wa}','_blank')">
      <span class="material-symbols-rounded">${m.icon}</span>
      <div style="display:flex; flex-direction:column; text-align:left;">
        <span style="font-weight:700;">${m.name}</span>
        <span style="font-size:11px; opacity:0.6;">${m.role}</span>
      </div>
    </button>
  `).join('');
  showSheet('membersSheet');
}

function openAbsenSheet() { 
  // Membuat format pesan izin dengan baris baru (\n)
  const formatPesan = encodeURIComponent(
    "Assalamualaikum, saya ingin mengajukan izin absensi\n\n" +
    "Keperluan mengajukan izin:\n" +
    "Izin untuk berapa hari:\n\n" +
    "Demikian terimakasih"
  );

  renderAndShow('absenSheet', 'absenButtons', [
    ['mail', 'Izin ke pak Ayub', `https://wa.me/6289637126728?text=${formatPesan}`],
    ['mail', 'Izin ke pak Sadulloh', `https://wa.me/6285281587927?text=${formatPesan}`]
  ]);
}


function openKasSheet() {
  renderAndShow('kasSheet', 'kasButtons', [
    ['description','Laporan Kas 2026','https://docs.google.com/spreadsheets/d/1mPzw4aiXAvZz0fkyUWAkmzJjCKUgCKRYbDQeUgI95Dk/edit?usp=drivesdk'],
    ['attach_money','Ajukan Pinjaman Kas','https://wa.me/6285281587927'],
    ['gavel','Peraturan Uang Kas','https://docs.google.com/document/d/1pRdzuZYOEsO4gadqvAWk7qT7DMCcA87dlU75tSibAyQ/edit?usp=drivesdk']
  ]);
}

function openToolsSheet() {
  renderAndShow('toolsSheet', 'toolsButtons', [
    ['build','Data Peralatan','https://docs.google.com/spreadsheets/d/16F8PvkiDaDY_ZyIfkf0K0eeXwPvDelRSSgAeCl292fk/edit?usp=drivesdk'],
    ['report_problem','Lapor Kerusakan Alat','https://wa.me/6289637126728'],
    ['add','Request Alat Baru','https://wa.me/6285281587927'],
    ['local_laundry_service','Pemakaian Detergen','https://docs.google.com/spreadsheets/d/11IqbMX3eR3mWIV-i5KZAeFWTb9gNmh1OwDmfqXGLfW8/edit?usp=drivesdk']
  ]);
}

function openUpdateSheet() {
  renderAndShow('updateSheet', 'updateButtons', [
    ['person','Kirim ke pak Ayub','https://wa.me/6289637126728'],
    ['person','Kirim ke pak Sadulloh','https://wa.me/6285281587927']
  ]);
}

function openAboutSheet() { showSheet('aboutSheet'); }

// 5. UTILITY
function renderAndShow(sheetId, containerId, data) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(b => `
    <button onclick="window.open('${b[2]}','_blank')">
      <span class="material-symbols-rounded">${b[0]}</span>
      <span>${b[1]}</span>
    </button>
  `).join('');
  showSheet(sheetId);
}

function showSheet(id) {
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById(id).classList.add('show');
}

function closeSheet() {
  document.getElementById('sheetOverlay').classList.remove('show');
  document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('show'));
}

window.addEventListener('DOMContentLoaded', () => {
  setActive(document.getElementById('default-menu'), 'Beranda');
});
