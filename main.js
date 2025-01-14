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
    if (document.documentElement.scrollTop > 500) {
        nav.style.background= "rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "none"
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
const project = document.querySelectorAll('.view-link');
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


const kartu = document.querySelectorAll('.kartu_project');
kartu.forEach(card => {
    card.addEventListener('click', function () {
     alert('maaf untuk melihat project silahkan hubungi saya di kontak saya')
    })
})


const card = document.querySelector('.card-judulimg');

card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX: x, clientY: y } = e;

    // Hitung posisi mouse relatif terhadap pusat kartu
    const xPos = (x - card.offsetLeft) / width; // Normalisasi ke 0-1
    const yPos = (y - card.offsetTop) / height; // Normalisasi ke 0-1

    // Hitung sudut rotasi
    const tiltX = (yPos - 0.5) * 20; // 20 derajat maksimum
    const tiltY = (xPos - 0.5) * -20; // 20 derajat maksimum

    // Terapkan transformasi
    card.style.transform = `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
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
