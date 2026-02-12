let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
      strings: ['UI/UX Designer', 'Web Devloper' ,'App Devloper'],
      typeSpeed: 80,
      backSpeed:80,
      backDelay:1200,
      loop: true,
    });
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});
// Dark Mode Toggle
let darkToggle = document.querySelector('#darkmode-toggle');

darkToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');

    // تغيير الأيقونة عند التبديل
    if(document.body.classList.contains('dark-mode')) {
        darkToggle.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkToggle.classList.replace('bx-sun', 'bx-moon');
    }
}
