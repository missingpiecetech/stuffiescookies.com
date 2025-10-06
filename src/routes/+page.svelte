<svelte:head>
	<title>Stuffie's Cookies - Big, Chewy, Less Sugar</title>
	<meta name="description" content="Stuffie's Cookies offers big, chewy cookies with less sugar, baked fresh and delivered to your door. Order your favorite flavors today!" />
	<meta name="keywords" content="cookies, fresh baked, delivery, less sugar, chewy cookies" />
</svelte:head>

<div class="hero">
	<div class="container">
		<div class="hero-content">
			<h1>Big, Chewy Cookies with Less Sugar</h1>
			<p class="tagline">Deliciously satisfying treats, baked fresh and delivered to your door</p>
			<a href="/flavors" class="cta-button">
				<i class="fas fa-cookie"></i> Browse Flavors
			</a>
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
					<i class="fas fa-truck"></i>
				</div>
				<h3>Local Delivery</h3>
				<p>We deliver directly to your door, so you can enjoy fresh cookies without leaving the comfort of your home.</p>
			</div>
		</div>
	</div>
</section>

<section class="about">
	<div class="container">
		<div class="about-content">
			<div class="about-text">
				<h2>About Stuffie's Cookies</h2>
				<p>At Stuffie's Cookies, we believe that cookies should be a guilt-free pleasure. That's why we've perfected our recipe to create big, satisfying cookies that use less sugar without compromising on taste.</p>
				<p>Each cookie is carefully crafted with high-quality ingredients and baked fresh to order. Whether you're treating yourself or sharing with friends and family, our cookies are sure to delight.</p>
				<p>We're proud to serve our local community with convenient delivery service, bringing fresh-baked happiness right to your door.</p>
			</div>
			<div class="about-image">
				<img src="https://via.placeholder.com/500x400?text=Fresh+Baked+Cookies" alt="Fresh baked cookies" />
			</div>
		</div>
	</div>
</section>

<section class="cta-section">
	<div class="container">
		<h2>Ready to Order?</h2>
		<p>Check out our delicious flavors and place your order today!</p>
		<a href="/flavors" class="cta-button">
			<i class="fas fa-list"></i> View All Flavors
		</a>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(135deg, var(--accent-color) 0%, var(--secondary-color) 100%);
		color: var(--white);
		padding: 6rem 0;
		text-align: center;
	}

	.hero-content h1 {
		color: var(--white);
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		opacity: 0.95;
	}

	.cta-button {
		display: inline-block;
		background: var(--primary-color);
		color: var(--white);
		padding: 1rem 2rem;
		border-radius: 50px;
		font-size: 1.1rem;
		font-weight: bold;
		transition: transform 0.3s, box-shadow 0.3s;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.cta-button i {
		margin-right: 0.5rem;
	}

	.features {
		padding: 4rem 0;
		background: var(--white);
	}

	.features h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.feature {
		text-align: center;
		padding: 2rem;
		border-radius: 10px;
		transition: transform 0.3s;
	}

	.feature:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 3rem;
		color: var(--secondary-color);
		margin-bottom: 1rem;
	}

	.feature h3 {
		margin-bottom: 0.5rem;
	}

	.feature p {
		color: var(--gray);
		margin-bottom: 0;
	}

	.about {
		padding: 4rem 0;
		background: var(--light-bg);
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.about-text h2 {
		margin-bottom: 1.5rem;
	}

	.about-text p {
		margin-bottom: 1rem;
		line-height: 1.8;
	}

	.about-image {
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.about-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.cta-section {
		padding: 4rem 0;
		text-align: center;
		background: var(--white);
	}

	.cta-section h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.cta-section p {
		font-size: 1.2rem;
		color: var(--gray);
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2rem;
		}

		.tagline {
			font-size: 1.2rem;
		}

		.about-content {
			grid-template-columns: 1fr;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

