// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    
    /* ======== MOBILE MENU TOGGLE ======== */
    const menuButton = document.querySelector(".topnav-icons");
    const navbar = document.querySelector(".navbar ul");

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    /* ======== SMOOTH SCROLLING EFFECT ======== */
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ======== LIGHTBOX FUNCTIONALITY ======== */
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("caption");
    const closeLightbox = document.getElementById("closeLightbox");

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
            lightboxCaption.innerText = this.alt;
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    /* ======== SCROLL ANIMATIONS FOR GALLERY ======== */
    const galleryItems = document.querySelectorAll(".gallery-item");

    function revealOnScroll() {
        let triggerBottom = window.innerHeight * 0.85;

        galleryItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load

});
