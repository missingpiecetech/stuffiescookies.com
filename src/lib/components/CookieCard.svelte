<script>
	let { name, description, image } = $props();
</script>

<div class="cookie-card">
	<div class="cookie-image">
		<img src={image} alt={name} />
	</div>
	<div class="cookie-info">
		<h3>{name}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.cookie-card {
		background: var(--white);
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.cookie-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.cookie-image {
		width: 100%;
		height: 250px;
		overflow: hidden;
		background: var(--light-gray);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cookie-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cookie-info {
		padding: 1.5rem;
	}

	.cookie-info h3 {
		margin-bottom: 0.5rem;
		color: var(--primary-color);
	}

	.cookie-info p {
		color: var(--gray);
		margin-bottom: 0;
	}
</style>
