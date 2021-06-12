<script lang="ts">
	import Overlay from './overlay.svelte';

	import hello from '$lib/assets/hello.svg';
	import portfolio from '$lib/assets/portfolio.svg';
	import scroll from '$lib/assets/scroll.svg';
</script>

<section id="hero" class="min-h-screen relative">
	<Overlay />
	<div class="absolute inset-center" style="max-width: 50vw;">
		<img src={hello} alt="Hello" draggable="false" />
		<div class="h-2 my-4 bg-white opacity-75" />
		<img src={portfolio} alt="Welcome to my Portfolio" draggable="false" width="100%" />
	</div>
	<div
		id="hero-vertical"
		class="absolute flex-row opacity-75 inset-y-0 right-0 mr-2 hidden md:flex">
		<h3 class='text-xl font-bold'>Software Engineer</h3>
		<h3 class='text-xl font-bold'>Graphic Designer</h3>
		<h3 class='text-xl font-bold'>Music Producer</h3>
	</div>
	<div class="absolute bottom-0 inset-x-0 text-center mb-10">
		<h3 class="mb-2 opacity-75 font-bold">Scroll Down</h3>
		<img src={scroll} alt="Scroll Down" draggable="false" height="24" class="mx-auto bounce-up" />
	</div>
	<div class="h-2 absolute inset-x-0 bottom-0 rainbow" />
</section>

<style lang="scss">
</style>
