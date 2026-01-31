<script>
  import { page } from "$app/stores";
</script>

<header>
  <div class="container">
    <nav>
      <div class="logo">
        <i class="fas fa-cookie-bite"></i>
        <span>Stuffie's Cookies</span>
        <i class="fas fa-ribbon bow-accent"></i>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
        </li>
        <li>
          <a href="/flavors" class:active={$page.url.pathname === "/flavors"}>Flavors</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    background: var(--white);
    color: var(--secondary-color);
    padding: 1.2rem 0;
    box-shadow: 0 2px 15px rgba(139, 111, 92, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 3px solid var(--accent-color);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    gap: 0.5rem;
    color: var(--brown-text);
  }

  .logo i {
    font-size: 1.8rem;
    color: var(--secondary-color);
  }

  .bow-accent {
    font-size: 1.2rem !important;
    color: var(--primary-color) !important;
    margin-left: 0.2rem;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .nav-links a {
    color: var(--secondary-color);
    font-weight: 600;
    padding: 0.6rem 1.3rem;
    border-radius: 2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .nav-links a:hover,
  .nav-links a.active {
    background: var(--accent-color);
    color: var(--brown-text);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 165, 165, 0.3);
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
