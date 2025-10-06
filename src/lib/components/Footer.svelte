<footer>
	<div class="container">
		<div class="footer-content">
			<div class="footer-section">
				<h3><i class="fas fa-cookie-bite"></i> Stuffie's Cookies</h3>
				<p>Big, chewy cookies with less sugar, baked fresh and delivered to your door.</p>
			</div>
			<div class="footer-section">
				<h4>Contact Us</h4>
				<p><i class="fas fa-phone"></i> (555) 123-4567</p>
				<p><i class="fas fa-envelope"></i> hello@stuffiescookies.com</p>
				<p><i class="fas fa-map-marker-alt"></i> Your City, State</p>
			</div>
			<div class="footer-section">
				<h4>Hours</h4>
				<p><i class="fas fa-clock"></i> Monday - Friday: 9am - 6pm</p>
				<p><i class="fas fa-clock"></i> Saturday: 10am - 4pm</p>
				<p><i class="fas fa-clock"></i> Sunday: Closed</p>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Stuffie's Cookies. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--primary-color);
		color: var(--white);
		padding: 3rem 0 1rem;
		margin-top: 4rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.footer-section h3,
	.footer-section h4 {
		color: var(--white);
		margin-bottom: 1rem;
	}

	.footer-section p {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-section i {
		width: 20px;
	}

	.footer-bottom {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.footer-section p {
			justify-content: center;
		}
	}
</style>
