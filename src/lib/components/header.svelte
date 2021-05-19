<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import hamburger from '$lib/assets/hamburger.svg';

	let sections = [
		{ text: 'About Me', href: '/#about' },
		{ text: 'Skills', href: '/#skills' },
		{ text: 'Projects', href: '/#projects' },
		{ text: 'Contact Me', href: '/#contact' }
	];

	let y;
	let width;
	let opened = false;

	let onResize = () => {
		if (width <= 768) {
			opened = false;
		}
	};

	let toggleMenu = () => {
		opened = !opened;
		if (width > 768) {
			console.log('Desktop', opened);
		} else {
			console.log('Mobile', opened);
		}
	};
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} on:resize={onResize} />

<header
	id="header"
	class="border-2 border-transparent inset-x-0 top-0 fixed flex rounded-full items-center z-50 m-4 px-8 py-2"
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

	<button
		class="ml-auto h-12 w-12 p-2 rounded-full outline-none focus:outline-none hover:bg-white hover:bg-opacity-20"
		on:click={toggleMenu}>
		<img draggable="false" src={hamburger} alt="Hamburger Menu" class='p-1' style='margin-left: -2px;' />
	</button>
</header>

<style>
</style>
