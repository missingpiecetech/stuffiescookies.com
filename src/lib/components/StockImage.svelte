<script>
  const PLACEHOLDER_TEXT = 'STOCK_IMAGE_PLACEHOLDER';
  let { src, alt = "Stock Image", className = "" } = $props();
  
  // Check if this is a placeholder
  const isPlaceholder = !src || src === PLACEHOLDER_TEXT || src.includes(PLACEHOLDER_TEXT);
</script>

{#if isPlaceholder}
  <div class="stock-placeholder {className}">
    <div class="placeholder-content">
      <i class="fas fa-image"></i>
      <span>{PLACEHOLDER_TEXT}</span>
    </div>
  </div>
{:else}
  <img {src} {alt} class={className} />
{/if}

<style>
  .stock-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--light-gray) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
  }

  .placeholder-content {
    text-align: center;
    color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .placeholder-content i {
    font-size: 4rem;
    opacity: 0.6;
  }

  .placeholder-content span {
    font-weight: 600;
    font-size: 1.1rem;
    font-family: monospace;
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
