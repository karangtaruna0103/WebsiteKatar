document.getElementById("pengeluaranForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const tanggal = document.getElementById("tanggal").value;
  const keterangan = document.getElementById("keterangan").value;

  // Simulasi penyimpanan
  console.log("Pengeluaran Disimpan:", { nama, jumlah, tanggal, keterangan });

  const notifikasi = document.getElementById("notifikasi");
  notifikasi.style.display = "block";

  e.target.reset();

  setTimeout(() => {
    notifikasi.style.display = "none";
  }, 3000);
});
