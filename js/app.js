// ==== DATA DUMMY (ganti dengan fetch API / sensor IoT nanti) ====

const dataWilayah = [
  { nama: "Jayapura", status: "aman" },
  { nama: "Nabire", status: "waspada" },
  { nama: "Wamena", status: "kritis" },
  { nama: "Merauke", status: "aman" },
];

const dataWarning = [
  { pesan: "Stok beras Wamena < 15%", status: "danger", label: "Kritis" },
  { pesan: "Cuaca buruk jalur Nabire-Enarotali", status: "warning", label: "Perhatian" },
];

// ==== RENDER SEBARAN WILAYAH ====
function renderWilayah() {
  const container = document.getElementById("wilayahList");
  container.innerHTML = "";
  dataWilayah.forEach(w => {
    const span = document.createElement("span");
    span.className = `badge badge-${w.status} p-2`;
    span.textContent = w.nama;
    container.appendChild(span);
  });
}

// ==== RENDER EARLY WARNING ====
function renderWarning() {
  const container = document.getElementById("warningList");
  container.innerHTML = "";
  dataWarning.forEach(w => {
    const item = document.createElement("div");
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <span>${w.pesan}</span>
      <span class="badge bg-${w.status}">${w.label}</span>
    `;
    container.appendChild(item);
  });
}

// ==== HANDLE TOMBOL REKOMENDASI ====
function setupRekomendasi() {
  const btn = document.getElementById("btnSetuju");
  btn.addEventListener("click", () => {
    btn.textContent = "Rekomendasi Disetujui ✓";
    btn.disabled = true;
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
  });
}

// ==== INIT ====
document.addEventListener("DOMContentLoaded", () => {
  renderWilayah();
  renderWarning();
  setupRekomendasi();
});