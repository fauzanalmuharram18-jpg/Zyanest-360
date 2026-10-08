/* =========================================
   SCRIPT.JS - Zyanest 360 Coffee
   Interaksi JavaScript Sederhana Pesanan Menu
   ========================================= */

// Array untuk menyimpan daftar menu yang dipesan
let daftarPesanan = [];

// 1. Fungsi ketika tombol "Pesan" pada menu diklik
function beliProduk(namaMenu) {
    // Masukkan nama menu kopi ke dalam daftar
    daftarPesanan.push(namaMenu);

    // Perbarui jumlah pesanan di navbar
    updateJumlahPesanan();

    // Tampilkan pesan konfirmasi sederhana
    alert("Menu '" + namaMenu + "' berhasil ditambahkan ke pesanan!");
}

// 2. Fungsi untuk memperbarui angka di navbar
function updateJumlahPesanan() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = daftarPesanan.length;
    }
}

// 3. Fungsi ketika tombol "🛒 Pesanan" di navbar diklik
function lihatKeranjang() {
    // Jika belum ada pesanan
    if (daftarPesanan.length === 0) {
        alert("Daftar pesanan Anda masih kosong.\nSilakan pilih menu kopi atau camilan favorit Anda terlebih dahulu!");
        return;
    }

    // Jika sudah ada pesanan, susun daftar menu
    let pesan = "☕ DAFTAR PESANAN ZYANEST 360 COFFEE (" + daftarPesanan.length + " item):\n\n";
    for (let i = 0; i < daftarPesanan.length; i++) {
        pesan += (i + 1) + ". " + daftarPesanan[i] + "\n";
    }
    pesan += "\nKlik 'OK' jika ingin mereset/mengosongkan pesanan, atau 'Cancel' untuk menutup.";

    // Konfirmasi apakah ingin mengosongkan pesanan
    const inginReset = confirm(pesan);
    if (inginReset) {
        daftarPesanan = [];
        updateJumlahPesanan();
        alert("Daftar pesanan berhasil dikosongkan.");
    }
}

// 4. Efek tombol scroll "Lihat Menu Kopi" di Hero Section
document.addEventListener("DOMContentLoaded", function () {
    const btnHero = document.getElementById("btn-hero");
    if (btnHero) {
        btnHero.addEventListener("click", function () {
            const targetSection = document.getElementById("gallery") || document.getElementById("menu");
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
