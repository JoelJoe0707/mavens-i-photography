<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mavens-i Photography</title>

  <style>
    /* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1754ef84, rgba(255, 98, 0, 0.6)); /* Glossy orange gradient */
  color: #333;
  line-height: 1.6;
  background-size: cover;
}

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem 0;
}

/* Header */
.main-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-image {
  height: 60px;
}

/* Navbar */
.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar .nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 8px;
  transition: color 0.3s ease;
}

.navbar .nav-links a:hover,
.navbar .nav-links a.active {
  color: #e91e63;
}

.navbar .nav-links a.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e91e63;
}

/* Hero Section */
.hero {
  background: url('PICS/your-hero-image.jpg') center/cover no-repeat;
  color: rgba(58, 0, 10, 0.826);
  text-align: center;
  padding: 100px 20px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-top: 1rem;
}

/* Section Titles */
.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #666;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item img {
  width: 100%;
  height: 250px; /* Set a fixed height for uniformity */
  object-fit: cover; /* Ensures images fill the space without distortion */
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.03);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-primary {
  background-color: #e91e63;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #d81b60;
}

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.9);
}

.lightbox-content {
  display: block;
  margin: auto;
  max-width: 80%;
  max-height: 80vh;
}

.caption {
  text-align: center;
  color: #ccc;
  padding: 10px;
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

/* Footer */
.site-footer {
  background-color: #222;
  color: white;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar .nav-links {
      flex-direction: column;
      gap: 1rem;
  }

  .hero-title {
      font-size: 2.2rem;
  }
}
  </style>
</head>
<body>
  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mavens-i Photography</title>
  <link rel="stylesheet" href="Design.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
</head>

<body>

  <!-- Header -->
  <header class="main-header">
    <div class="container header-flex">
      <div class="logo">
        <a href="#home">
          <img src="PICS/1686671012770.png" alt="Mavens-i Logo" class="logo-image" />
        </a>
      </div>
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container text-center">
      <h1 class="hero-title">Welcome to Mavens-i Photography</h1>
      <p class="hero-subtitle">Capturing timeless moments, one frame at a time.</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="section-description">
        I'm a passionate photographer who believes every frame tells a story. Whether it’s a candid wedding shot or a
        planned portrait, I focus on capturing authenticity and emotion.
      </p>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="PICS/4T5A3650.JPG" alt="Golden hour portrait" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3714.JPG" alt="Bride and groom smiling" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3733.JPG" alt="Traditional ceremony moment" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3736.JPG" alt="Candid laugh between couple" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3738.JPG" alt="Sunset couple shot" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3756(1)(1).jpg" alt="Detailed dress photo" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3756.JPG" alt="Same-day candid snap" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3773.JPG" alt="Walking together hand-in-hand" /></div>
        <div class="gallery-item"><img src="PICS/4T5A3788.JPG" alt="Silhouette portrait" /></div>
        <div class="gallery-item"><img src="PICS/4T5A4290.JPG" alt="Ring ceremony moment" /></div>
        <div class="gallery-item"><img src="PICS/4T5A4398.JPG" alt="Family celebration" /></div>
        <div class="gallery-item"><img src="PICS/image (1).jpg" alt="Bride getting ready" /></div>
        <div class="gallery-item"><img src="PICS/Image (2).jpeg" alt="Traditional wear portrait" /></div>
        <div class="gallery-item"><img src="PICS/image (2).jpg" alt="Soft focused portrait" /></div>
        <div class="gallery-item"><img src="PICS/image (4).jpg" alt="Group photo with friends" /></div>
        <div class="gallery-item"><img src="PICS/IMG-20221216-WA0032.jpg" alt="Haldi function moment" /></div>
        <div class="gallery-item"><img src="PICS/IMG_6456.jpg" alt="Candid family photo" /></div>
        <div class="gallery-item"><img src="PICS/IMG_6457.jpg" alt="Smiling bride close-up" /></div>
        <div class="gallery-item"><img src="PICS/IMG_6557.jpg" alt="Wedding stage moment" /></div>
        <div class="gallery-item"><img src="PICS/IMG_6668.jpg" alt="Bride and groom looking away" /></div>
        <!-- Add more images as needed -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <form class="contact-form" action="submit_form.php" method="POST">
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        <button type="submit" class="btn-primary">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div id="lightbox" class="lightbox">
    <span class="close" id="closeLightbox">&times;</span>
    <img class="lightbox-content" id="lightboxImg" src="" />
    <div class="caption" id="caption"></div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container text-center">
      <p>&copy; 2025 Mavens-i Photography. All rights reserved.</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="Photography.js"></script>
</body>
</html>

  <script>
    // Scrollspy Highlight Active Nav Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
  </script>
</body>
</html>
