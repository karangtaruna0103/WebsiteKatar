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
