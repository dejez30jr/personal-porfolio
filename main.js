window.onscroll=  function(){
    const nav = document.getElementById('nav');
    if(document.documentElement.scrollTop > 100){
        nav.style.background="rgba(0,0,0,0.5)"
    }else{
        nav.style.background= "transparent"
    }
}