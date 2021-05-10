<script lang="ts">
	import { onMount } from 'svelte';
	import { OverlayScene } from '../../helpers/scene';

	let wrapper;

	onMount(() => {
		const scene = new OverlayScene(wrapper);
		scene.setup();
		scene.animate();
	});
</script>

<div bind:this={wrapper} class="overlay-wrapper" />
<div class="overlay-vignette" />

<style>
</style>
