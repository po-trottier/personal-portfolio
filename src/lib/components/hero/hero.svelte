<script lang="ts">
	import hello from '$lib/assets/hello.svg';
	import portfolio from '$lib/assets/portfolio.svg';
	import scroll from '$lib/assets/scroll.svg';
</script>

<section id="hero">
	<div class="hero-image">
		<img src={hello} alt="Hello" draggable="false" />
		<div class="separator white spaced" />
		<img src={portfolio} alt="Welcome to my Portfolio" draggable="false" width="100%" />
	</div>
	<div class="hero-vertical desktop">
		<h3>Software Engineer</h3>
		<h3>Graphic Designer</h3>
		<h3>Music Producer</h3>
	</div>
	<div class="hero-scroll">
		<h3 style="margin-bottom: 8px; opacity: 75%;">Scroll Down</h3>
		<img src={scroll} alt="Scroll Down" draggable="false" height="24" class="animated" />
	</div>
	<div class="separator rainbow bottom" />
</section>

<style lang="scss">
</style>
