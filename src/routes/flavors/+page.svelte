<script>
  import CookieCard from "$lib/components/CookieCard.svelte";

  const classicFlavors = [
    {
      name: "Chocolate Chip",
      description:
        "Our signature recipe with rich chocolate chips and a perfect chewy texture. A timeless favorite made with less sugar for a more balanced taste.",
      image: "/chocolate_chip.jpeg",
      type: "classic",
    },
    {
      name: "Red Velvet Cake",
      description:
        "Rich, velvety red cookies with a hint of cocoa and cream cheese flavor. A sophisticated twist on the classic cake in cookie form.",
      image: "/red_velvet.jpeg",
      type: "classic",
    },
    {
      name: "Cookies and Cream",
      description: "Chocolate cookie base loaded with crushed cookie pieces and white chocolate chips. A delightful crunch in every bite.",
      image: "/cookies_and_cream.jpeg",
      type: "classic",
    },
    {
      name: "Peanut Butter",
      description:
        "Creamy peanut butter cookies with a soft, melt-in-your-mouth texture. Made with real peanut butter and reduced sugar for natural flavor.",
      image: "https://via.placeholder.com/400x300?text=Peanut+Butter",
      type: "classic",
    },
    {
      name: "Birthday Cake",
      description: "Vanilla-based cookies with colorful sprinkles and a festive birthday cake flavor. Celebration in every bite!",
      image: "https://via.placeholder.com/400x300?text=Birthday+Cake",
      type: "classic",
    },
  ];

  const rotatingFlavors = [
    {
      name: "Ube",
      description:
        "Filipino purple yam cookies with a unique, subtly sweet flavor and beautiful purple color. A trendy and delicious Asian-inspired treat.",
      image: "https://via.placeholder.com/400x300?text=Ube",
      type: "rotating",
    },
    {
      name: "Matcha",
      description:
        "Premium Japanese green tea powder creates these earthy, slightly bitter cookies that balance perfectly with our reduced sugar recipe.",
      image: "/matcha.jpeg",
      type: "rotating",
    },
  ];

  const allFlavors = [...classicFlavors, ...rotatingFlavors];
</script>

<svelte:head>
  <title>Cookie Flavors - Stuffie's Cookies</title>
  <meta
    name="description"
    content="Browse our delicious selection of cookie flavors. From classic chocolate chip to unique combinations, all made big, chewy, and with less sugar."
  />
  <meta name="keywords" content="cookie flavors, chocolate chip, oatmeal raisin, peanut butter, cookies menu" />
</svelte:head>

<div class="flavors-page">
  <div class="hero-small">
    <div class="container">
      <h1>Our Cookie Flavors</h1>
      <p>Big, chewy cookies with less sugar - discover your new favorite!</p>
    </div>
  </div>

  <section class="flavors-section">
    <div class="container">
      <div class="flavor-category">
        <h2>Classic Flavors</h2>
        <p class="category-description">Always available - our signature recipes perfected over time</p>
        <div class="flavors-grid">
          {#each classicFlavors as flavor}
            <CookieCard name={flavor.name} description={flavor.description} image={flavor.image} />
          {/each}
        </div>
      </div>

      <div class="flavor-category">
        <h2>Rotating Flavors</h2>
        <p class="category-description">Limited time offerings - available this month only!</p>
        <div class="flavors-grid">
          {#each rotatingFlavors as flavor}
            <CookieCard name={flavor.name} description={flavor.description} image={flavor.image} />
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="order-info">
    <div class="container">
      <div class="info-box">
        <h2>Ordering Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-icon" aria-hidden="true">
              <i class="fa-solid fa-cookie-bite"></i>
            </span>
            <h3>Minimum Order</h3>
            <p>12 cookies (mix and match flavors)</p>
          </div>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true">
              <i class="fa-solid fa-clock"></i>
            </span>
            <h3>Pickup Time</h3>
            <p>Coordinated upon order. Please order at least 72-hours in advance.</p>
          </div>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true">
              <i class="fa-solid fa-money-bill-wave"></i>
            </span>
            <h3>Pricing</h3>
            <p>$30/bakers dozen (13), single flavor</p>
            <p>$39/dozen, mix and match up to 3 flavors</p>
          </div>
        </div>
        <div class="contact-cta">
          <p>
            Ready to order? Connect with us on Instagram
            <strong><a href="https://www.instagram.com/blubeaar2/" target="_blank" rel="noopener noreferrer">@blubeaar2</a></strong>
            to place your order for local pickup!
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .flavors-page {
    background: var(--light-bg);
  }

  .hero-small {
    background: var(--primary-color);
    color: var(--white);
    padding: 4rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-small::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.3;
    animation: float 20s infinite linear;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    100% {
      transform: translate(-30px, -30px) rotate(360deg);
    }
  }

  .hero-small h1 {
    color: var(--white);
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  .hero-small p {
    font-size: 1.3rem;
    opacity: 0.95;
    margin-bottom: 0;
    position: relative;
    z-index: 1;
  }

  .flavors-section {
    padding: 6rem 0;
  }

  .flavor-category {
    margin-bottom: 6rem;
  }

  .flavor-category:last-child {
    margin-bottom: 0;
  }

  .flavor-category h2 {
    text-align: center;
    font-size: clamp(2rem, 4vw, 2.8rem);
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-weight: 700;
  }

  .category-description {
    text-align: center;
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 3rem;
    font-style: italic;
    font-weight: 300;
  }

  .flavors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .order-info {
    padding: 6rem 0;
    background: var(--white);
  }

  .info-box {
    background: var(--white);
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(155, 179, 255, 0.15);
    border: 1px solid rgba(155, 179, 255, 0.2);
    max-width: 1000px;
    margin: 0 auto;
  }

  .info-box h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(2rem, 4vw, 2.5rem);
    color: var(--primary-color);
    font-weight: 700;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
  }

  .info-item {
    background: var(--white);
    padding: 2.5rem 2rem;
    border-radius: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(155, 179, 255, 0.1);
    border: 1px solid rgba(155, 179, 255, 0.15);
    position: relative;
    overflow: hidden;
  }

  .info-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--secondary-color);
  }

  .info-icon {
    font-size: 3rem;
    color: var(--secondary-color);
  }

  .info-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(155, 179, 255, 0.2);
  }

  .info-item h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: var(--secondary-color);
    font-weight: 600;
  }

  .info-item p {
    color: var(--gray);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .info-item p:last-child {
    margin-bottom: 0;
  }

  .contact-cta {
    text-align: center;
    padding: 2.5rem 2rem 0;
    border-top: 2px solid rgba(155, 179, 255, 0.2);
  }

  .contact-cta p {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: var(--gray);
  }

  .contact-cta strong {
    color: var(--secondary-color);
  }

  .contact-cta a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
  }

  .contact-cta a:hover {
    color: var(--primary-color);
    background: rgba(155, 179, 255, 0.1);
  }

  @media (max-width: 768px) {
    .hero-small {
      padding: 3rem 0;
    }

    .flavors-section {
      padding: 4rem 0;
    }

    .flavor-category {
      margin-bottom: 4rem;
    }

    .flavors-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .info-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .info-box {
      padding: 2rem;
      border-radius: 1.5rem;
    }

    .order-info {
      padding: 4rem 0;
    }
  }
</style>
