<script>
  let { name, description, image } = $props();

  // Check if this is a placeholder URL
  const isPlaceholder = image.includes("placeholder") || image.includes("via.placeholder.com");
</script>

<div class="cookie-card">
  <div class="cookie-image">
    {#if isPlaceholder}
      <div class="placeholder-content">
        <i class="fas fa-cookie-bite cookie-icon"></i>
        <p>Photo coming soon!</p>
      </div>
    {:else}
      <img src={image} alt={name} />
    {/if}
  </div>
  <div class="cookie-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
</div>

<style>
  .cookie-card {
    background: var(--white);
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(212, 165, 165, 0.15);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
  }

  .cookie-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(212, 165, 165, 0.25);
  }

  .cookie-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .cookie-image img {
    width: 150%;
    height: 150%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .cookie-card:hover .cookie-image img {
    transform: scale(1.08);
  }

  .placeholder-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--gray);
  }

  .cookie-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    opacity: 0.7;
  }

  .placeholder-content p {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    color: var(--secondary-color);
  }

  .cookie-info {
    padding: 1.8rem;
  }

  .cookie-info h3 {
    margin-bottom: 0.5rem;
    color: var(--brown-text);
    font-size: 1.4rem;
  }

  .cookie-info p {
    color: var(--gray);
    margin-bottom: 0;
    line-height: 1.6;
  }
</style>
