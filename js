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


    if(document.body.classList.contains('dark-mode')) {
        darkToggle.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkToggle.classList.replace('bx-sun', 'bx-moon');
    }
}
//EMAIL OF FUNCTION//

// تشغيل EmailJS بالمفتاح العام
(function () {
    emailjs.init("y51is3mHZO_VRvhjZ");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Loading
    status.innerHTML = '<span class="spinner"></span> Sending...';
    status.className = "form-status loading";

    // إرسال الإيميل
    emailjs.sendForm("service_jcp0jwt", "template_378x8m6", this)
        .then(() => {
            status.innerHTML = "✅ Message sent successfully!";
            status.className = "form-status success";
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            status.innerHTML = "❌ Failed to send message. Try again.";
            status.className = "form-status error";
        });
});


