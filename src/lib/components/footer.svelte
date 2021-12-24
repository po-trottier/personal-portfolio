<script context="module" lang="ts">
	let year = new Date().getFullYear();
</script>

<script lang="ts">
	import SocialIcons from '$lib/components/shared/social_icons.svelte';
</script>

<footer class='flex flex-col items-center p-12'>
	<p class='mb-4'>&copy; Copyright {year} - <b>PO_Design</b></p>
	<SocialIcons />
</footer>

<style>
</style>
