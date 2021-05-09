<script lang="ts">
	import { Button } from 'attractions';
	import logo from '$lib/assets/logo.svg';
	import hamburger from '$lib/assets/hamburger.svg';

	let y;
	let width;
	let opened = false;

	let onResize = () => {
		if (width <= 768) {
			opened = false;
		}
	}

	let toggleMenu = () => {
		opened = !opened;
		if (width > 768) {
			console.log('Desktop', opened);
		} else {
			console.log('Mobile', opened);
		}
	}
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} on:resize={onResize} />

<header class="header" class:colored={y > 0}>
	<a href="/#">
		<img draggable="false" src={logo} alt="Brand Logo" class="logo" />
	</a>

	<nav class="desktop">
		<ul>
			<li>
				<Button href="/#about">About Me</Button>
			</li>
			<li>
				<Button href="/#skills">Skills</Button>
			</li>
			<li>
				<Button href="/#projects">Projects</Button>
			</li>
			<li>
				<Button href="/#contact">Contact Me</Button>
			</li>
		</ul>
	</nav>

	<Button round class="hamburger" on:click={toggleMenu}>
		<img draggable="false" src={hamburger} alt="Hamburger Menu" />
	</Button>
</header>

<style>
</style>
