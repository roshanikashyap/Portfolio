/*==========================================================
                MOBILE MENU
==========================================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav ul li a");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});


/*==========================================================
                ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================================================
                SCROLL TO TOP
==========================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================================
                HEADER SHADOW
==========================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.10)";

    }

    else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.06)";

    }

});


/*==========================================================
                SCROLL ANIMATION
==========================================================*/

const revealElements = document.querySelectorAll(

".about-card,.education-card,.experience-card,.certificate-card,.activity-item,.project-card,.award-card,.gallery-grid img,.info-box"

);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.style.opacity="1";

            el.style.transform="translateY(0px)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==========================================================
                IMAGE POPUP
==========================================================*/

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";

        overlay.style.left="0";

        overlay.style.top="0";

        overlay.style.width="100%";

        overlay.style.height="100%";

        overlay.style.background="rgba(0,0,0,.9)";

        overlay.style.display="flex";

        overlay.style.justifyContent="center";

        overlay.style.alignItems="center";

        overlay.style.zIndex="99999";

        const img=document.createElement("img");

        img.src=image.src;

        img.style.maxWidth="90%";

        img.style.maxHeight="90%";

        img.style.borderRadius="15px";

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


/*==========================================================
            CERTIFICATE POPUP
==========================================================*/

const certificates=document.querySelectorAll(".certificate-card img");

certificates.forEach(image=>{

    image.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";

        overlay.style.left="0";

        overlay.style.top="0";

        overlay.style.width="100%";

        overlay.style.height="100%";

        overlay.style.background="rgba(0,0,0,.92)";

        overlay.style.display="flex";

        overlay.style.justifyContent="center";

        overlay.style.alignItems="center";

        overlay.style.zIndex="99999";

        const img=document.createElement("img");

        img.src=image.src;

        img.style.maxWidth="90%";

        img.style.maxHeight="90%";

        img.style.borderRadius="15px";

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


/*==========================================================
                CONTACT FORM
==========================================================*/

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");

    form.reset();

});