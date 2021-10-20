let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let mountains = document.getElementById("mountains");
let header = document.getElementById("header");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    sky.style.top = value *0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountains.style.top = value * 0.1 + 'px';
    header.style.top = value * 1 + 'px';
})