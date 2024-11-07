// elemen bulat
const circle = document.querySelector('.circle');

// Menambahkan event listener untuk mousemove
document.addEventListener('mousemove', (event) => {
    // Mengupdate posisi elemen bulat mengikuti posisi cursor
    circle.style.left = `${event.pageX - circle.offsetWidth / 2}px`;
    circle.style.top = `${event.pageY - circle.offsetHeight / 2}px`;
});

window.onscroll = function () {
    const nav = document.getElementById('nav');
    if (document.documentElement.scrollTop > 100) {
        nav.style.background = "rgba(0,0,0,0.5)"
    } else {
        nav.style.backgroundColor = "transparent"
    }
}

// popup open
const kontak = document.querySelectorAll('.kontak');
kontak.forEach(card => {
    card.addEventListener('click', function () {
        const popup = this.querySelector('.popup');
        popup.style.display = "flex";
    })
})
const project = document.querySelectorAll('.icon-project');
project.forEach(card => {
    card.addEventListener('click', function () {
        const popup = this.querySelector('.popup');
        popup.style.display = "flex";
    })
})


const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        const popup = this.closest('.popup');
        popup.style.display = 'none';
    });
});

// kunci klik kanan bray
// Mencegah klik kanan di seluruh halaman
document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Mencegah menu konteks muncul
});
document.addEventListener('keydown', function (e) {
    // Mencegah kombinasi Ctrl + S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
    // Mencegah kombinasi Ctrl + P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
    }
    // Mencegah kombinasi Ctrl + U (View source code)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

const logoElement = document.querySelector('.judul-1');
const text = "Hallo, nama saya Derris.h";
let index = 0;
let isDeleting = false; // Menandakan apakah sedang menghapus
let delay = 100; // Delay antara karakter

logoElement.style.whiteSpace = 'normal'; // Mengizinkan teks membungkus ke baris berikutnya
logoElement.style.width = '100%'; // Mengatur lebar ke 100% agar sesuai dengan layar
logoElement.style.maxWidth = '600px'; // Mengatur lebar maksimum jika diperlukan
logoElement.style.margin = '0 auto'; // Memusatkan elemen

function type() {
    if (!isDeleting) {
        if (index < text.length) {
            logoElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay); // Delay antara karakter
        } else {
            // Setelah selesai mengetik, tunggu sebentar sebelum menghapus
            isDeleting = true;
            setTimeout(type, 1000); // Tunggu 1 detik sebelum menghapus
        }
    } else {
        // Menghapus karakter
        if (index > 0) {
            logoElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(type, delay); // Delay antara karakter
        } else {
            // Setelah selesai menghapus, mulai lagi
            isDeleting = false;
            setTimeout(type, 500); // Tunggu sebentar sebelum mulai mengetik lagi
        }
    }
}

type();

