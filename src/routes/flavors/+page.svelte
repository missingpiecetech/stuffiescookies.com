<script>
	import CookieCard from '$lib/components/CookieCard.svelte';

	const flavors = [
		{
			name: 'Classic Chocolate Chip',
			description: 'Our signature recipe with rich chocolate chips and a perfect chewy texture. A timeless favorite made with less sugar for a more balanced taste.',
			image: 'https://via.placeholder.com/400x300?text=Chocolate+Chip'
		},
		{
			name: 'Double Chocolate',
			description: 'Rich chocolate cookie loaded with dark chocolate chunks. Perfect for chocolate lovers who want indulgence without excessive sweetness.',
			image: 'https://via.placeholder.com/400x300?text=Double+Chocolate'
		},
		{
			name: 'Oatmeal Raisin',
			description: 'Hearty oats combined with plump raisins and a hint of cinnamon. A wholesome treat that satisfies without being overly sweet.',
			image: 'https://via.placeholder.com/400x300?text=Oatmeal+Raisin'
		},
		{
			name: 'Peanut Butter',
			description: 'Creamy peanut butter cookies with a soft, melt-in-your-mouth texture. Made with real peanut butter and reduced sugar for natural flavor.',
			image: 'https://via.placeholder.com/400x300?text=Peanut+Butter'
		},
		{
			name: 'White Chocolate Macadamia',
			description: 'Premium macadamia nuts paired with white chocolate chips. An elegant cookie with a perfect balance of flavors.',
			image: 'https://via.placeholder.com/400x300?text=White+Chocolate'
		},
		{
			name: 'Snickerdoodle',
			description: 'Cinnamon sugar cookies with a soft, chewy center. Classic comfort with less sugar and more spice for enhanced flavor.',
			image: 'https://via.placeholder.com/400x300?text=Snickerdoodle'
		},
		{
			name: 'Triple Berry',
			description: 'Bursting with strawberries, blueberries, and raspberries. A fruity delight that lets natural sweetness shine through.',
			image: 'https://via.placeholder.com/400x300?text=Triple+Berry'
		},
		{
			name: 'Salted Caramel',
			description: 'Gooey caramel pieces with a touch of sea salt. A sophisticated sweet and salty combination with balanced sugar.',
			image: 'https://via.placeholder.com/400x300?text=Salted+Caramel'
		},
		{
			name: 'Lemon Zest',
			description: 'Bright and refreshing lemon cookies with a subtle tang. Light and airy with just the right amount of sweetness.',
			image: 'https://via.placeholder.com/400x300?text=Lemon+Zest'
		}
	];
</script>

<svelte:head>
	<title>Cookie Flavors - Stuffie's Cookies</title>
	<meta name="description" content="Browse our delicious selection of cookie flavors. From classic chocolate chip to unique combinations, all made big, chewy, and with less sugar." />
	<meta name="keywords" content="cookie flavors, chocolate chip, oatmeal raisin, peanut butter, cookies menu" />
</svelte:head>

<div class="flavors-page">
	<div class="hero-small">
		<div class="container">
			<h1><i class="fas fa-cookie"></i> Our Cookie Flavors</h1>
			<p>Big, chewy cookies with less sugar - discover your new favorite!</p>
		</div>
	</div>

	<section class="flavors-section">
		<div class="container">
			<div class="flavors-grid">
				{#each flavors as flavor}
					<CookieCard 
						name={flavor.name} 
						description={flavor.description}
						image={flavor.image}
					/>
				{/each}
			</div>
		</div>
	</section>

	<section class="order-info">
		<div class="container">
			<div class="info-box">
				<h2><i class="fas fa-info-circle"></i> Ordering Information</h2>
				<div class="info-grid">
					<div class="info-item">
						<i class="fas fa-box"></i>
						<h3>Minimum Order</h3>
						<p>6 cookies (mix and match flavors)</p>
					</div>
					<div class="info-item">
						<i class="fas fa-clock"></i>
						<h3>Delivery Time</h3>
						<p>Same day for orders before 2pm</p>
					</div>
					<div class="info-item">
						<i class="fas fa-dollar-sign"></i>
						<h3>Pricing</h3>
						<p>$3.50 per cookie, bulk discounts available</p>
					</div>
				</div>
				<div class="contact-cta">
					<p>Ready to order? Contact us at <strong>(555) 123-4567</strong> or <strong>hello@stuffiescookies.com</strong></p>
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
		background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
		color: var(--white);
		padding: 3rem 0;
		text-align: center;
	}

	.hero-small h1 {
		color: var(--white);
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.hero-small p {
		font-size: 1.2rem;
		opacity: 0.95;
		margin-bottom: 0;
	}

	.flavors-section {
		padding: 4rem 0;
	}

	.flavors-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	.order-info {
		padding: 3rem 0 4rem;
	}

	.info-box {
		background: var(--white);
		border-radius: 10px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.info-box h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 2rem;
	}

	.info-box h2 i {
		margin-right: 0.5rem;
		color: var(--secondary-color);
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.info-item {
		text-align: center;
		padding: 1.5rem;
		background: var(--light-bg);
		border-radius: 8px;
	}

	.info-item i {
		font-size: 2.5rem;
		color: var(--secondary-color);
		margin-bottom: 1rem;
	}

	.info-item h3 {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	}

	.info-item p {
		color: var(--gray);
		margin-bottom: 0;
	}

	.contact-cta {
		text-align: center;
		padding-top: 2rem;
		border-top: 2px solid var(--light-bg);
	}

	.contact-cta p {
		font-size: 1.1rem;
		margin-bottom: 0;
	}

	.contact-cta strong {
		color: var(--secondary-color);
	}

	@media (max-width: 768px) {
		.hero-small h1 {
			font-size: 2rem;
		}

		.flavors-grid {
			grid-template-columns: 1fr;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
