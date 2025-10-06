<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="container">
		<nav>
			<div class="logo">
				<i class="fas fa-cookie-bite"></i>
				<span>Stuffie's Cookies</span>
			</div>
			<ul class="nav-links">
				<li>
					<a href="/" class:active={$page.url.pathname === '/'}>
						<i class="fas fa-home"></i> Home
					</a>
				</li>
				<li>
					<a href="/flavors" class:active={$page.url.pathname === '/flavors'}>
						<i class="fas fa-list"></i> Flavors
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
		color: var(--white);
		padding: 1rem 0;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 1000;
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
	}

	.logo i {
		font-size: 1.8rem;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	.nav-links a {
		color: var(--white);
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		transition: background 0.3s;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav-links a:hover,
	.nav-links a.active {
		background: rgba(255, 255, 255, 0.2);
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
