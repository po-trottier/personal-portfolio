<script context="module" lang="ts">
	let year = new Date().getFullYear();
</script>

<script lang="ts">
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
	import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte'
	import FaDev from 'svelte-icons/fa/FaDev.svelte'

	let links = [
		{ component: IoLogoGithub, url: 'https://github.com/po-trottier' },
		{ component: IoLogoLinkedin, url: 'https://www.linkedin.com/in/po-trottier/' },
		{ component: FaDev, url: 'https://devpost.com/potrottier' },
	];
</script>

<footer class='flex flex-col items-center p-12'>
	<p class='mb-4'>&copy; Copyright {year} - <b>PO_Design</b></p>
	<div class='flex'>
		{#each links as link}
			<a class='mx-2 w-6 h-6' target='_blank' href={link.url}>
				<svelte:component this={link.component}/>
			</a>
		{/each}
	</div>
</footer>

<style>
</style>
