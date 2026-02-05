<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Stuffie's Cookies</h3>
        <p>Big, chewy cookies with less sugar, baked fresh and available for local pickup.</p>
      </div>
      <div class="footer-section">
        <h4>Order & Connect</h4>
        <p>
          <a href="https://www.instagram.com/blubeaar2/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
            @blubeaar2
          </a>
        </p>
        <p>Local pickup available</p>
      </div>
      <div class="footer-section">
        <h4>Hours</h4>
        <p>Monday - Friday: 9am - 6pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Stuffie's Cookies. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: var(--secondary-color);
    padding: 4rem 0 2rem;
    margin-top: 0;
    position: relative;
    color: var(--white);
  }
  .footer-content p,
  .footer-content h3 {
    color: var(--white);
  }

  footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary-color);
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .footer-section h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer-section h4 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.95;
  }

  .footer-section p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    opacity: 0.9;
  }

  .footer-section a {
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
  }

  .footer-section a:hover {
    color: var(--accent-color);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    footer {
      padding: 3rem 0 1.5rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
  }
</style>
