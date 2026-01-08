function setActive(el, menu) {
  document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  const c = document.getElementById('content');

  if(menu === 'Job Desk') {
    c.innerHTML = `<h1>Job Desk</h1><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBJaRSwf1ki6YLILhX1jfc8lntgZYa2WtnM8vFmskFgEhQo4L89xWIBt4f12wVO8egkAyO-rdO4hRr/pubhtml"></iframe>`;
    return;
  }

  let btns = [];
  if(menu === 'Beranda') {
    btns = [
      ['campaign', 'Update informasi terbaru', 'link', 'https://docs.google.com/document/d/1xBx-CVQ4K1lBEaIKjaKhmesfO8q3LyXs4rhQqH-ymPQ/edit?usp=drivesdk'],
      ['call', 'Hubungi pak Ayub', 'link', 'https://wa.me/6289637126728'],
      ['call', 'Hubungi pak Sadulloh', 'link', 'https://wa.me/6285281587927'],
      ['groups', 'All Members', 'members']
    ];
  } else if(menu === 'Laporan') {
  btns = [
    ['download', 'Download OCS NFI Apps 2026', 'link',
     'https://drive.google.com/uc?id=1kTBmccjjSEjbIAP8e-LWyb4Fytd0itrC&export=download'
    ],

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
  } else if(menu === 'Absensi') {
    btns = [
      ['apps', 'Greatday apps', 'link', 'https://app.greatdayhr.com/'],
      ['summarize', 'Rekapitulasi absensi', 'link', 'https://drive.google.com/drive/folders/1o0sr3Ee6r4VOCGT_a-1dTJ-KVZ0GMX-J'],
      ['mail', 'Ajukan izin absensi', 'absen'],
      ['swap_horiz', 'Ajukan tukar shift', 'link', 'https://wa.me/6289637126728?text=Assalamualaikum%20pak%20Ayub%2C%20saya%20ingin%20mengajukan%20tukar%20shift'],
      ['assignment', 'Penilaian kualitas karyawan', 'link', 'https://docs.google.com/spreadsheets/d/1o3yFehBFjD7SDgmJqRqlbl36nv77uS8EiqUVMLoc3DA/edit?usp=drivesdk'],
      ['warning', 'Surat peringatan', 'link', 'https://drive.google.com/drive/folders/10JcMB3LGNLOL84YjRa2R-Fp7toZR_v2y']
    ];
  } else if(menu === 'Lainnya') {
    btns = [
      ['article', 'Job Desk Teks Generator', 'link', 'https://poharaayub.github.io/grup-jod-desk-input/'],
      ['calendar_month', 'Data Schedule & Job Desk Pekerjaan', 'link', 'https://drive.google.com/drive/folders/1UyO20_isk-EMRCLpKhwSBI_BYoP2Vy9A'],
      ['account_balance_wallet', 'Program Uang Kas 2026', 'kas'],
      ['build', 'Data Peralatan & Alat Bantu Kerja', 'tools'],
      ['photo_camera', 'OCS Global Services Indonesia', 'link', 'https://www.instagram.com/ocsindonesia/'],
      ['collections', 'OCS NFI Gallery 2026', 'link', 'https://drive.google.com/drive/folders/1wtyzi9lhpi7JjY67H76NHGk-qgbOwwd1']
    ];
  }

  c.innerHTML = `<h1>${menu}</h1><div class="buttons">
    ${btns.map(b => `<button onclick="${b[2]==='link'?`window.open('${b[3]}','_blank')`:`openCustomSheet('${b[2]}')`}"><span class="material-symbols-rounded">${b[0]}</span>${b[1]}</button>`).join('')}
  </div>`;
}

function openCustomSheet(type) {
  document.getElementById('sheetOverlay').classList.add('show');
  if(type==='members') {
    document.getElementById('membersSheet').classList.add('show');
    const members = [
      {name: 'Pohara Ayub', wa: '6289637126728'}, {name: 'Sadulloh', wa: '6285281587927'},
      {name: 'Edi Ahmad Jubaedi', wa: '6285883524329'}, {name: 'Saiful Bahri', wa: '6281389327308'},
      {name: 'Wahidin', wa: '6283819602330'}, {name: 'Amrullah', wa: '6283879624040'},
      {name: 'Ade Surahman', wa: '6281947172711'}, {name: 'M. Rifai', wa: '6285810611074'},
      {name: 'Muhammad Toni', wa: '6281286448626'}, {name: 'Nabrih', wa: '6281295412005'},
      {name: 'Sulaiman', wa: '6285716230391'}, {name: 'Siti Maemunah', wa: '6285771090915'}
    ];
    document.getElementById('membersButtons').innerHTML = members.map(m => `<button onclick="window.open('https://wa.me/${m.wa}','_blank')"><span class="material-symbols-rounded">person</span>${m.name}</button>`).join('');
  } 
  else if(type==='absen') document.getElementById('absenSheet').classList.add('show');
  else if(type==='kas') document.getElementById('kasSheet').classList.add('show');
  else if(type==='tools') document.getElementById('toolsSheet').classList.add('show');
  else if(type==='update') document.getElementById('updateSheet').classList.add('show');
  
  // Isi data tombol statis (absen, kas, tools, update) sesuai data Anda sebelumnya
  // Untuk efisiensi, data statis bisa dimasukkan langsung di HTML atau via script ini.
}

function closeSheet() {
  document.getElementById('sheetOverlay').classList.remove('show');
  document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('show'));
}

window.addEventListener('DOMContentLoaded', () => {
  setActive(document.getElementById('default-menu'), 'Beranda');
});
