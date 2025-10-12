<svelte:head>
  <title>Stuffie's Cookies - Big, Chewy, Less Sugar</title>
  <meta
    name="description"
    content="Stuffie's Cookies offers big, chewy cookies with less sugar, baked fresh and available for local pickup. Order your favorite flavors today!"
  />
  <meta name="keywords" content="cookies, fresh baked, pickup, less sugar, chewy cookies" />
</svelte:head>

<div class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Big, Chewy Cookies with Less Sugar</h1>
      <p class="tagline">Deliciously satisfying treats, baked fresh and available for local pickup</p>
      <a href="/flavors" class="cta-button">Browse Flavors</a>
    </div>
  </div>
</div>

<section class="features">
  <div class="container">
    <h2>Why Choose Stuffie's?</h2>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-cookie-bite"></i>
        </div>
        <h3>Big & Chewy</h3>
        <p>Our cookies are generously sized and perfectly chewy, giving you the ultimate cookie experience in every bite.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-heart"></i>
        </div>
        <h3>Less Sugar</h3>
        <p>We use less sugar in our recipes without sacrificing taste, creating a more balanced and enjoyable flavor.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-fire"></i>
        </div>
        <h3>Freshly Baked</h3>
        <p>Every batch is baked fresh to order, ensuring you receive warm, soft cookies at their absolute best.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-store"></i>
        </div>
        <h3>Local Pickup</h3>
        <p>Convenient local pickup available, so you can enjoy fresh cookies at your convenience.</p>
      </div>
    </div>
  </div>
</section>

<section class="about">
  <div class="container">
    <div class="about-content">
      <div class="about-text">
        <h2>About Stuffie's Cookies</h2>
        <p>
          At Stuffie's Cookies, we believe that cookies should be a guilt-free pleasure. That's why we've perfected our recipe to create
          big, satisfying cookies that use less sugar without compromising on taste.
        </p>
        <p>
          Each cookie is carefully crafted with high-quality ingredients and baked fresh to order. Whether you're treating yourself or
          sharing with friends and family, our cookies are sure to delight.
        </p>
        <p>We're proud to serve our local community with convenient pickup service, bringing fresh-baked happiness straight to you.</p>
      </div>
      <div class="about-image">
        <video
          src="/stuffiescookies.mp4"
          autoplay
          loop
          muted
          playsinline
          style="width:100%; height:auto; display:block;"
          aria-label="Fresh baked cookies video"
        ></video>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to Order?</h2>
    <p>Check out our delicious flavors and connect with us on Instagram to place your order!</p>
    <a href="/flavors" class="cta-button">View All Flavors</a>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/cookies_tray.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--white);
    padding: 8rem 0;
    text-align: center;
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
  }

  .hero-content h1 {
    color: var(--white);
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .tagline {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 3rem;
    opacity: 0.95;
    font-weight: 300;
    color: white;
  }

  .cta-button {
    display: inline-block;
    background: var(--white);
    color: var(--primary-color);
    padding: 1.2rem 3rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background: var(--secondary-color);
    color: var(--white);
  }

  .features {
    padding: 6rem 0;
    background: var(--white);
  }

  .features h2 {
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 4rem;
    font-weight: 700;
    color: var(--primary-color);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature {
    background: var(--white);
    padding: 3rem 2rem;
    border-radius: 1rem;
    transition: all 0.4s ease;
    box-shadow: 0 10px 30px rgba(155, 179, 255, 0.1);
    border: 1px solid rgba(155, 179, 255, 0.2);
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .feature::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--secondary-color);
  }

  .feature:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    font-size: 3rem;
    color: var(--secondary-color);
  }

  .feature h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
    font-weight: 600;
  }

  .feature p {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1rem;
  }

  .about {
    padding: 6rem 0;
    background: var(--light-bg);
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-text h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    margin-bottom: 2rem;
    color: var(--primary-color);
    font-weight: 700;
  }

  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
    color: #555;
  }

  .about-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(155, 179, 255, 0.3);
    transform: rotate(-2deg);
    transition: transform 0.4s ease;
  }

  .about-image:hover {
    transform: rotate(0deg) scale(1.02);
  }

  .cta-section {
    padding: 6rem 0;
    text-align: center;
  }

  .cta-section h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .cta-section p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 6rem 0;
      min-height: 60vh;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .about-image {
      transform: rotate(0deg);
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .feature {
      padding: 2rem 1.5rem;
    }
  }
</style>
