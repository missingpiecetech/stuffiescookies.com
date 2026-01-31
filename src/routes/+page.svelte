<script>
  import StockImage from '$lib/components/StockImage.svelte';
  import { STOCK_IMAGES } from '$lib/assets/constants.js';
</script>

<svelte:head>
  <title>Stuffie's Cookies - Big, Chewy, Less Sugar</title>
  <meta
    name="description"
    content="Stuffie's Cookies offers big, chewy cookies with less sugar, baked fresh and available for local pickup. Order your favorite flavors today!"
  />
  <meta name="keywords" content="cookies, fresh baked, pickup, less sugar, chewy cookies" />
</svelte:head>

<div class="hero">
  <div class="plaid-overlay"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <div class="teddy-accent">
          <i class="fas fa-dog"></i>
        </div>
        <h1>Big, Chewy Cookies with Less Sugar</h1>
        <p class="tagline">Deliciously satisfying treats, baked fresh and available for local pickup</p>
        <a href="/flavors" class="cta-button">
          Browse Flavors
          <i class="fas fa-ribbon"></i>
        </a>
      </div>
      <div class="hero-image">
        <StockImage src={STOCK_IMAGES.HERO_MAIN} alt="Fresh baked cookies" className="main-hero-img" />
      </div>
    </div>
  </div>
</div>

<section class="features">
  <div class="container">
    <h2>
      Why Choose Stuffie's?
      <i class="fas fa-ribbon bow-accent"></i>
    </h2>
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
        <h2>
          About Stuffie's Cookies
          <i class="fas fa-dog teddy-inline"></i>
        </h2>
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
        <StockImage src={STOCK_IMAGES.ABOUT_IMAGE} alt="Delicious fresh cookies" />
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
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--light-gray) 100%);
    color: var(--brown-text);
    padding: 5rem 0;
    text-align: left;
    position: relative;
    min-height: 75vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* Plaid pattern overlay */
  .plaid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 50px,
        rgba(139, 111, 92, 0.03) 50px,
        rgba(139, 111, 92, 0.03) 52px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 50px,
        rgba(139, 111, 92, 0.03) 50px,
        rgba(139, 111, 92, 0.03) 52px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 100px,
        rgba(212, 165, 165, 0.05) 100px,
        rgba(212, 165, 165, 0.05) 104px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 100px,
        rgba(212, 165, 165, 0.05) 100px,
        rgba(212, 165, 165, 0.05) 104px
      );
    opacity: 0.6;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-text {
    position: relative;
  }

  .teddy-accent {
    font-size: 3.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .hero-content h1 {
    color: var(--brown-text);
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .tagline {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 2.5rem;
    opacity: 0.9;
    font-weight: 400;
    color: var(--secondary-color);
    line-height: 1.5;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    background: var(--secondary-color);
    color: var(--white);
    padding: 1.2rem 2.5rem;
    border-radius: 3rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 8px 25px rgba(139, 111, 92, 0.25);
  }

  .cta-button i {
    font-size: 1rem;
  }

  .cta-button:hover {
    box-shadow: 0 12px 35px rgba(139, 111, 92, 0.35);
    background: var(--brown-text);
    transform: translateY(-3px);
  }

  .hero-image {
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(212, 165, 165, 0.4);
    transform: rotate(2deg);
    transition: transform 0.4s ease;
    height: 450px;
  }

  .hero-image:hover {
    transform: rotate(0deg) scale(1.02);
  }

  :global(.main-hero-img) {
    height: 100%;
    width: 100%;
    object-fit: cover;
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
    color: var(--brown-text);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .bow-accent {
    color: var(--primary-color);
    font-size: 0.8em;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature {
    background: var(--white);
    padding: 3rem 2rem;
    border-radius: 1.5rem;
    transition: all 0.4s ease;
    box-shadow: 0 10px 30px rgba(212, 165, 165, 0.15);
    border: 2px solid var(--accent-color);
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
    background: var(--primary-color);
  }

  .feature:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(212, 165, 165, 0.25);
  }

  .feature-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .feature h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--brown-text);
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
    color: var(--brown-text);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .teddy-inline {
    font-size: 0.8em;
    color: var(--primary-color);
  }

  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
    color: var(--gray);
  }

  .about-image {
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(212, 165, 165, 0.3);
    transform: rotate(-2deg);
    transition: transform 0.4s ease;
    height: 450px;
  }

  .about-image:hover {
    transform: rotate(0deg) scale(1.02);
  }

  .cta-section {
    padding: 6rem 0;
    text-align: center;
    background: var(--white);
  }

  .cta-section h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--brown-text);
  }

  .cta-section p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    color: var(--gray);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 0;
      min-height: auto;
    }

    .hero-content {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .hero-image {
      transform: rotate(0deg);
      height: 300px;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .about-image {
      transform: rotate(0deg);
      height: 300px;
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
