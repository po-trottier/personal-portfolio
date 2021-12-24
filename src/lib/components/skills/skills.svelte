<script lang="ts">
	import SectionTitle from '$lib/components/shared/section_title.svelte';
	import SoftwareSkills from './software-skills.svelte';
	import MusicSkills from './music-skills.svelte';
	import GraphicSkills from './graphic-skills.svelte';
	import { Colors } from '$lib/styles/variables.ts';
</script>

<section id="skills" class='bg-darker p-16 shadow-2xl'>
	<SectionTitle number={2} title='My Skills' color='{Colors.Pink}'/>
	<div class='mb-8'>
		<h3 class='text-xl sm:text-2xl font-bold mb-2'>Software Engineering</h3>
		<SoftwareSkills />
	</div>
	<div class='mb-8'>
		<h3 class='text-xl sm:text-2xl font-bold mb-2'>Music Production</h3>
		<MusicSkills />
	</div>
	<div>
		<h3 class='text-xl sm:text-2xl font-bold mb-2'>Graphic Design</h3>
		<GraphicSkills />
	</div>
</section>

<style>
</style>
