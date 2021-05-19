<script lang="ts">
	import Hamburger from './header/hamburger.svelte';
	import logo from '$lib/assets/logo.svg';

	let y;
	let sections = [
		{ text: 'About Me', href: '/#about' },
		{ text: 'Skills', href: '/#skills' },
		{ text: 'Projects', href: '/#projects' },
		{ text: 'Contact Me', href: '/#contact' }
	];
</script>

<svelte:window bind:scrollY={y} />

<header
	id="header"
	class="border-2 inset-x-0 top-0 fixed flex rounded-full items-center z-40 m-4 px-8 py-2"
	class:colored-header={y > 0}>
	<nav class="flex">
		<a href="/#">
			<img draggable="false" src={logo} alt="Brand Logo" class="h-full w-16 mr-8" />
		</a>
		<ul class="flex-row hidden md:flex">
			{#each sections as section}
				<li class="m-1">
					<a href={section.href}>
						<button class="py-2 px-4 rounded-full outline-none focus:outline-none hover:bg-white hover:bg-opacity-20">
							{section.text}
						</button>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<Hamburger />
</header>

<style>
</style>
