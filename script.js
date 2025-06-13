// Pemasukan
const formPemasukan = document.getElementById('formPemasukan');
if (formPemasukan) {
  formPemasukan.onsubmit = function (e) {
    e.preventDefault();
    const data = {
      sumber: formPemasukan.sumber.value,
      jumlah: formPemasukan.jumlah.value,
      tanggal: formPemasukan.tanggal.value
    };
    const pemasukan = JSON.parse(localStorage.getItem('pemasukan')) || [];
    pemasukan.push(data);
    localStorage.setItem('pemasukan', JSON.stringify(pemasukan));
    alert('Pemasukan disimpan!');
    formPemasukan.reset();
  };
}

// Pengeluaran
const formPengeluaran = document.getElementById('formPengeluaran');
if (formPengeluaran) {
  formPengeluaran.onsubmit = function (e) {
    e.preventDefault();
    const data = {
      keperluan: formPengeluaran.keperluan.value,
      jumlah: formPengeluaran.jumlah.value,
      tanggal: formPengeluaran.tanggal.value
    };
    const pengeluaran = JSON.parse(localStorage.getItem('pengeluaran')) || [];
    pengeluaran.push(data);
    localStorage.setItem('pengeluaran', JSON.stringify(pengeluaran));
    alert('Pengeluaran disimpan!');
    formPengeluaran.reset();
  };
}

// Laporan
const dataPemasukan = document.getElementById('dataPemasukan');
const dataPengeluaran = document.getElementById('dataPengeluaran');

if (dataPemasukan && dataPengeluaran) {
  const pemasukan = JSON.parse(localStorage.getItem('pemasukan')) || [];
  const pengeluaran = JSON.parse(localStorage.getItem('pengeluaran')) || [];

  pemasukan.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.tanggal} - ${item.sumber} - Rp ${item.jumlah}`;
    dataPemasukan.appendChild(li);
  });

  pengeluaran.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.tanggal} - ${item.keperluan} - Rp ${item.jumlah}`;
    dataPengeluaran.appendChild(li);
  });
}

//Jadwal Kegiatan
const jadwalKegiatan = {
  "Senin": [
    { waktu: "19:00", kegiatan: "Akan Segera Tesedia" },
    { waktu: "20:00", kegiatan: "Akan Segera Tesedia" }
  ],
  "Selasa": [
    { waktu: "18:30", kegiatan: "Akan Segera Tesedia" }
  ],
  "Rabu": [
    { waktu: "07:00", kegiatan: "Akan Segera Tesedia" },
    { waktu: "20:00", kegiatan: "Akan Segera Tesedia" }
  ],
  "Kamis": [
    { waktu: "07:00", kegiatan: "Akan Segera Tesedia"}
  ],
  "Jumat": [
    { waktu: "20:00", kegiatan: "Akan Segera Tesedia"}
  ],
  "Sabtu": [
    { waktu: "06:00", kegiatan: "Akan Segera Tesedia"},
    { waktu: "09:00", kegiatan: "Akan Segera Tesedia"}
  ],
  "Minggu": [
    { waktu: "10:00", kegiatan: "Akan Segera Tesedia"}
  ]
};

function tampilkanJadwalHariIni() {
  const hari = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const list = document.getElementById('jadwal-hari-ini');
  list.innerHTML = "";

  const jadwal = jadwalKegiatan[hari] || [];

  if (jadwal.length === 0) {
    const li = document.createElement('li');
    li.textContent = "Tidak ada kegiatan hari ini.";
    li.style.opacity = 1;
    list.appendChild(li);
  } else {
    jadwal.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.kegiatan} - ${item.waktu}`;
      li.style.animationDelay = `${index * 0.2}s`;
      list.appendChild(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", tampilkanJadwalHariIni); 

 window.addEventListener("load", () => {
    const pre = document.getElementById("preloader");
    pre.style.opacity = '0';
    setTimeout(() => pre.remove(), 900); // fade-out halus
  });