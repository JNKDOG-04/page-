var menusticky = document.getElementById('menusticky');
var height = menusticky.offsetTop;

window.addEventListener('scroll',function(){
    if(window.pageYOffset > height) {
        menusticky.classList.add('fixed');
    }else {
        menusticky.classList.remove('fixed');
    }
})