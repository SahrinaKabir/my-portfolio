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


function typingAnimation() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1400
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            charIndex = 0;

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(
        typingAnimation,
        deleting ? 55 : 110
    );

}


typingAnimation();



/* =========================
   MOBILE MENU
========================= */

const menuIcon =
    document.querySelector("#menu-icon");

const navbar =
    document.querySelector(".navbar");


if (menuIcon && navbar) {

    menuIcon.addEventListener(
        "click",
        () => {

            navbar.classList.toggle("active");

            const icon =
                menuIcon.querySelector("i");


            if (
                navbar.classList.contains("active")
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    /* =========================
       CLOSE MOBILE MENU
       AFTER LINK CLICK
    ========================= */

    document
        .querySelectorAll(".navbar a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navbar.classList.remove(
                        "active"
                    );


                    const icon =
                        menuIcon.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });


    /* =========================
       CLOSE MENU OUTSIDE
    ========================= */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !navbar.contains(event.target) &&
                !menuIcon.contains(event.target)
            ) {

                navbar.classList.remove(
                    "active"
                );


                const icon =
                    menuIcon.querySelector("i");


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );

}



/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


function updateActiveNav() {

    let current = "";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        `
        .section,
        .project-card,
        .skill-box,
        .timeline-content,
        .education-card,
        .publication-card,
        .professional-card,
        .contact-location-card,
        .contact-form,
        .about-cards .card
        `
    );


function revealOnScroll() {

    revealElements.forEach(
        element => {

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;


            if (
                elementTop <
                window.innerHeight - 100
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


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


if (topButton) {

    topButton.style.display = "none";


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 400
            ) {

                topButton.style.display =
                    "flex";

            } else {

                topButton.style.display =
                    "none";

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =========================
   PROJECT IMAGE ZOOM
========================= */

const projectImages =
    document.querySelectorAll(
        ".project-card img"
    );


projectImages.forEach(
    image => {

        image.addEventListener(
            "mouseenter",
            () => {

                image.style.transform =
                    "scale(1.08)";

            }
        );


        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1)";

            }
        );

    }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            alert(
                "Thank you for contacting me! I will get back to you soon."
            );


            contactForm.reset();

        }
    );

}



/* =========================
   HERO STATS COUNTER
========================= */

const heroStats =
    document.querySelectorAll(
        ".hero-stat strong"
    );


let statsAnimated = false;


function animateStats() {

    if (statsAnimated) return;


    const heroStatsContainer =
        document.querySelector(
            ".hero-stats"
        );


    if (!heroStatsContainer) {
        return;
    }


    const position =
        heroStatsContainer
            .getBoundingClientRect()
            .top;


    if (
        position <
        window.innerHeight - 100
    ) {

        statsAnimated = true;


        heroStats.forEach(
            stat => {

                const originalText =
                    stat.textContent.trim();


                const number =
                    parseInt(
                        originalText
                    );


                if (isNaN(number)) {
                    return;
                }


                const suffix =
                    originalText
                        .replace(number, "")
                        .trim();


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(number / 30)
                    );


                const counter =
                    setInterval(
                        () => {

                            current +=
                                increment;


                            if (
                                current >=
                                number
                            ) {

                                current =
                                    number;

                                clearInterval(
                                    counter
                                );

                            }


                            stat.textContent =
                                current +
                                suffix;

                        },
                        35
                    );

            }
        );

    }

}


window.addEventListener(
    "scroll",
    animateStats
);


animateStats();



/* =========================
   SMOOTH NAVIGATION
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        }
    );



/* =========================
   ACTIVE HEADER EFFECT
========================= */

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =========================
   PUBLICATION CARD HOVER
========================= */

const publicationCards =
    document.querySelectorAll(
        ".publication-card"
    );


publicationCards.forEach(
    card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "hovered"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "hovered"
                );

            }
        );

    }
);



/* =========================
   PROFESSIONAL CARD HOVER
========================= */

const professionalCards =
    document.querySelectorAll(
        ".professional-card"
    );


professionalCards.forEach(
    card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "hovered"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "hovered"
                );

            }
        );

    }
);



/* =========================
   CURRENT YEAR
========================= */

const footerYear =
    document.querySelector(
        "footer .year"
    );


if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}
