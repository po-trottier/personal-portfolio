<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/components/hero/hero.svelte';
	import About from '$lib/components/about/about.svelte';
	import Skills from '$lib/components/skills/skills.svelte';
	import Projects from '$lib/components/projects/projects.svelte';
	import Contact from '$lib/components/contact/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<title>Software Engineer, Graphic Design & Music Producer | Pierre-Olivier Trottier</title>
</svelte:head>

<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
