window.onscroll=  function(){
    const nav = document.getElementById('nav');
    if(document.documentElement.scrollTop > 100){
        nav.style.background="rgba(0,0,0,0.5)"
    }else{
        nav.style.background= "transparent"
    }
}

// popup open
const kontak = document.querySelectorAll('.kontak');
kontak.forEach(card=>{
    card.addEventListener('click', function(){
        const popup= this.querySelector('.popup');
        popup.style.display= "flex";
    })
})
const project = document.querySelectorAll('.icon-project');
project.forEach(card=>{
    card.addEventListener('click', function(){
        const popup= this.querySelector('.popup');
        popup.style.display= "flex";
    })
})


const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        const popup = this.closest('.popup');
        popup.style.display = 'none';
    });
});

 // Mencegah shortcut keyboard tertentu (misalnya Ctrl+S, Ctrl+P, dll)
 document.addEventListener('keydown', function(e) {
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
    // Tambahkan kombinasi shortcut lain yang ingin dicegah
});
