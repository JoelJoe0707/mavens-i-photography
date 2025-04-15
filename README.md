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
