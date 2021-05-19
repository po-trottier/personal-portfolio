<script lang="ts">
	import { fade } from 'svelte/transition';
	import PageLoadingBar from 'sapper-page-loading-bar/PageLoadingBar.svelte';

	import { getStores } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import '$lib/styles/global.scss';
	import '$lib/styles/styles.scss';

	import Tailwind from '$lib/components/tailwind.svelte';

	const { navigating } = getStores();
</script>

<PageLoadingBar preloading={navigating} color1="#00D1FF" color2="#00FF94" />
<Tailwind />

{#if !$navigating}
	<Header />

	<main transition:fade>
		<slot />
	</main>

	<Footer />
{/if}

<style>
</style>
