
/* Mengambil elemen dari HTML */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const printCv = document.getElementById("printCv");
const currentYear = document.getElementById("currentYear");

/* 1. Membuka dan menutup menu navigasi */
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

/* Menutup menu setelah tautan dipilih */
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

/* 2. Membaca pilihan tema yang tersimpan */
const savedTheme = localStorage.getItem("tema-fathir");

if (savedTheme === "gelap") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀ Tema";
}

/* 3. Mengubah tema terang dan gelap */
themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("tema-fathir", "gelap");
        themeToggle.textContent = "☀ Tema";
    } else {
        localStorage.setItem("tema-fathir", "terang");
        themeToggle.textContent = "☾ Tema";
    }
});

/* 4. Mencetak CV atau menyimpannya sebagai PDF */
printCv.addEventListener("click", function () {
    window.print();
});

/* 5. Menampilkan tahun secara otomatis */
currentYear.textContent = new Date().getFullYear();
