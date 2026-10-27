/* script.js - Praktikum 6: DOM dan Event Handling */

// ==========================================
// LATIHAN 1 & 2: Mengubah Teks dan Event Click
// ==========================================
const judul = document.getElementById('judul');
judul.textContent = 'Belajar JavaScript DOM';

const pesan = document.getElementById('pesan');
pesan.textContent = 'Konten berhasil diubah oleh JavaScript.';

const tombolAksi = document.getElementById('tombolAksi');
tombolAksi.addEventListener('click', function() {
    pesan.textContent = "Tombol diklik pada: " + new Date().toLocaleTimeString();
});


// ==========================================
// LATIHAN 3: Mengubah Kelas dan Gaya CSS
// ==========================================
const tombolGaya = document.getElementById('tombolGaya');
const paragrafGaya = document.getElementById('paragrafGaya');

tombolGaya.addEventListener('click', function() {
    paragrafGaya.classList.toggle('highlight');
});


// ==========================================
// LATIHAN 4: Event Input dan Penghitung Karakter
// ==========================================
const inputPesan = document.getElementById('inputPesan');
const jumlahKarakter = document.getElementById('jumlahKarakter');
const maxKarakter = 100;

inputPesan.addEventListener('input', function() {
    const panjangTeks = inputPesan.value.length;
    const sisa = maxKarakter - panjangTeks;
    jumlahKarakter.textContent = sisa;
    
    if (sisa < 0) {
        jumlahKarakter.style.color = 'red';
    } else {
        jumlahKarakter.style.color = 'inherit';
    }
});


// ==========================================
// LATIHAN 5: Validasi Form Pendaftaran
// ==========================================
const formPendaftaran = document.getElementById('formPendaftaran');
const pesanForm = document.getElementById('pesanForm');

formPendaftaran.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const usia = document.getElementById('usia').value.trim();
    
    if (nama === '' || email === '' || usia === '') {
        pesanForm.textContent = 'Semua kolom wajib diisi!';
        pesanForm.className = 'error-msg';
        return;
    }
    
    if (parseInt(usia) < 17) {
        pesanForm.textContent = 'Usia minimal adalah 17 tahun!';
        pesanForm.className = 'error-msg';
        return;
    }
    
    pesanForm.textContent = 'Validasi berhasil! Form siap diproses.';
    pesanForm.className = 'success-msg';
});


// ==========================================
// LATIHAN 6: Daftar Tugas Sederhana (To-Do List)
// ==========================================
const inputTugas = document.getElementById('inputTugas');
const tambahTugas = document.getElementById('tambahTugas');
const daftarTugas = document.getElementById('daftarTugas');

tambahTugas.addEventListener('click', function(e) {
    e.preventDefault();
    const teksTugas = inputTugas.value.trim();
    
    if (teksTugas === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }
    
    // Buat elemen <li>
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = teksTugas;
    li.appendChild(span);
    
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    
    const btnSelesai = document.createElement('button');
    btnSelesai.textContent = 'Selesai';
    btnSelesai.className = 'btn-selesai';
    btnSelesai.addEventListener('click', function() {
        li.classList.toggle('selesai');
    });
    
    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.className = 'btn-hapus';
    btnHapus.addEventListener('click', function() {
        daftarTugas.removeChild(li);
    });
    
    btnGroup.appendChild(btnSelesai);
    btnGroup.appendChild(btnHapus);
    li.appendChild(btnGroup);
    
    daftarTugas.appendChild(li);
    inputTugas.value = '';
});


// ==========================================
// MINI PROJECT: Form Pendaftaran Workshop
// ==========================================
const workshopForm = document.getElementById('workshopForm');
const wsHasil = document.getElementById('wsHasil');

workshopForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('wsNama').value.trim();
    const email = document.getElementById('wsEmail').value.trim();
    const usia = parseInt(document.getElementById('wsUsia').value);
    const topik = document.getElementById('wsTopik').value;
    
    if (usia < 17) {
        wsHasil.innerHTML = '<span style="color: red;">Pendaftaran gagal: Usia minimal peserta workshop adalah 17 tahun.</span>';
        wsHasil.style.background = '#fadbd8';
        wsHasil.style.borderColor = '#f5b7b1';
        return;
    }
    
    wsHasil.innerHTML = `<strong>Pendaftaran Berhasil!</strong><br>
        Nama: ${nama}<br>
        Email: ${email}<br>
        Usia: ${usia} tahun<br>
        Topik: ${topik}`;
    wsHasil.style.background = '#e8f8f5';
    wsHasil.style.borderColor = '#a3e4d7';
});
