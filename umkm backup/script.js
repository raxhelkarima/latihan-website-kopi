alert('Selamat datang di Website RaBite Dessert!');

const namaUMKM = 'RaBite Dessert';
console.log('Nama UMKM:', namaUMKM);

let produk = 6;
console.log('Jumlah produk saat ini:', produk);

produk += 3;
console.log('Setelah penambahan varian baru:', produk);

// Variabel lain: jumlah produk berdasarkan jenis rasa
let rasaCokelat = 2;
let rasaMatcha = 1;
let rasaStrawberry = 2;

let totalRasa = rasaCokelat + rasaMatcha + rasaStrawberry;
console.log('Total varian rasa yang tersedia:', totalRasa);

let promoAktif = true;
console.log('Apakah ada promo hari ini?', promoAktif);

if (promoAktif) {
    console.log('Promo Spesial! Dapatkan diskon 20% untuk semua varian!');
} else {
    console.log('Tidak ada promo hari ini, tetap pantau halaman kami ya!');
}