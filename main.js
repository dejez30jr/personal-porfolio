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
        nav.style.backgroundImage= "url(https://cdn.wallpapersafari.com/53/38/tiSKIN.jpg)";
        nav.style.backgroundSize= "cover";
    } else {
        nav.style.backgroundImage = "none"
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

const kartu = document.querySelectorAll('.kartu_project');
kartu.forEach(card => {
    card.addEventListener('click', function () {
     alert('maaf untuk melihat project silahkan hubungi saya di kontak saya')
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
