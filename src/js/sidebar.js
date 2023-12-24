const toggleSidebar = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");
const title = document.getElementById("title");
const dashboard = document.getElementById("dashboard");
const tugas = document.getElementById("tugas");
const riwayat = document.getElementById("riwayat");
const akun = document.getElementById("akun");
const keluar = document.getElementById("keluar");

const Open = () => {
  toggleSidebar.classList.toggle("rotate-180");
  sidebar.classList.toggle("w-[5.4vw]");
  title.classList.toggle("hidden");
  dashboard.classList.toggle("hidden");
  tugas.classList.toggle("hidden");
  riwayat.classList.toggle("hidden");
  akun.classList.toggle("hidden");
  keluar.classList.toggle("hidden");
};
