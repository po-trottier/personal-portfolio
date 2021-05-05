<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getStores } from '$app/stores';
	import PageLoadingBar from 'sapper-page-loading-bar/PageLoadingBar.svelte';

	import '$lib/styles/global.scss';

	const { navigating } = getStores();
</script>

<PageLoadingBar {navigating} />

{#if !$navigating}
	<main transition:fade>
		<slot />
	</main>
{/if}

<style>
</style>
