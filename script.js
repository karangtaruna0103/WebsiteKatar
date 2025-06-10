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
const jadwalKegiatan = {
  "Senin": ["Rapat Koordinasi - 19:00", "Kegiatan Sosial - 20:00"],
  "Selasa": ["Akan Segera Hadir"],
  "Rabu": ["Kerja Bakti - 07:00", "Bimbingan Karir - 20:00"],
  "Kamis": [],
  "Jumat": ["Diskusi Pemuda - 20:00"],
  "Sabtu": ["Kegiatan Lomba - 09:00", "Senam Pagi - 06:00"],
  "Minggu": ["Pengajian Umum - 10:00"]
};

function tampilkanJadwalHariIni() {
  const hari = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const list = document.getElementById('jadwal-hari-ini');
  list.innerHTML = "";

  const jadwal = jadwalKegiatan[hari] || [];
  if (jadwal.length === 0) {
    list.innerHTML = "<li>Tidak ada kegiatan hari ini.</li>";
  } else {
    jadwal.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", tampilkanJadwalHariIni);
