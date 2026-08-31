/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typing");

const roles = [
    "Backend Developer",
    "Java Spring Boot Developer",
    "AI Engineer",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typingAnimation(){

    const currentRole = roles[roleIndex];


    if(!deleting){

        typingText.textContent =
        currentRole.substring(0,charIndex++);


        if(charIndex > currentRole.length){

            deleting = true;

            setTimeout(typingAnimation,1200);

            return;

        }

    }

    else{


        typingText.textContent =
        currentRole.substring(0,charIndex--);


        if(charIndex === 0){

            deleting=false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex=0;

            }

        }

    }


    setTimeout(typingAnimation,
        deleting ? 60 : 120);

}


typingAnimation();





/* =========================
   MOBILE MENU
========================= */


const menuIcon =
document.querySelector("#menu-icon");


const navbar =
document.querySelector(".navbar");


menuIcon.onclick = ()=>{

    navbar.classList.toggle("active");

};



document.querySelectorAll(".navbar a")
.forEach(link=>{


    link.onclick=()=>{

        navbar.classList.remove("active");

    }


});





/* =========================
   ACTIVE NAVBAR
========================= */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")
        === "#" + current){


            link.classList.add("active");


        }


    });



});





/* =========================
   SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(
".section, .project-card, .skill-box, .timeline-content"
);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const elementTop =
        element.getBoundingClientRect()
        .top;


        if(elementTop < window.innerHeight - 100){


            element.classList.add("show");


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();





/* =========================
   BACK TO TOP BUTTON
========================= */


const topButton =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        topButton.style.display="flex";


    }

    else{


        topButton.style.display="none";


    }


});



topButton.onclick=()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};





/* =========================
   PROJECT IMAGE ZOOM
========================= */


const projectImages =
document.querySelectorAll(
".project-card img"
);



projectImages.forEach(image=>{


    image.addEventListener(
    "mouseenter",
    ()=>{


        image.style.transform=
        "scale(1.08)";


    });



    image.addEventListener(
    "mouseleave",
    ()=>{


        image.style.transform=
        "scale(1)";


    });


});





/* =========================
   CONTACT FORM MESSAGE
========================= */


const form =
document.querySelector("form");



form.addEventListener(
"submit",
(e)=>{


    e.preventDefault();


    alert(
    "Thank you for contacting me! I will get back to you soon."
    );


    form.reset();


});
