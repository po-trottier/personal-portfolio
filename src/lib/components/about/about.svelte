<script lang="ts">
	import SectionTitle from '$lib/components/shared/section_title.svelte';
	import SocialIcons from '$lib/components/shared/social_icons.svelte';
	import { Colors } from '$lib/styles/variables.ts';

	const sectionContent =
		"Particles are the cosmonauts of the strange death. " +
		"Devastated, bare vogons accelerative command a huge, calm green people. " +
		"Extraterrestrial, calm sensors impressively transfer a biological, bare pathway. " +
		"Spheroid, extraterrestrial sensors virtually fight a senior, collective dosi. " +
		"Ordinary, mysterious aliens accelerative desire an apocalyptic, solid pathway. " +
		"United, strange captains bravely handle a post-apocalyptic, mysterious tribble. " +
		"Reproduce without moon, and we won’t assimilate an emitter. " +
		"Extraterrestrial, futile crews patiently destroy a strange, neutral ship. " +
		"Neutral, senior suns revolutionary avoid a calm, collective dosi. " +
		"Most unusual, seismic cosmonauts always observe a mysterious, distant planet. " +
		"Yell without alarm, and we won’t convert a c-beam. " +
		"Gravimetric, devastated processors wildly experience a colorful, sub-light machine. " +
		"Wobble without resistance, and we won’t gather an astronaut. " +
		"Particles are the lieutenant commanders of the distant moon";
</script>

<section id="about" class='p-16'>
	<SectionTitle number={1} title='About Me' color='{Colors.Blue}'/>
	<p class='mb-6'>{sectionContent}</p>
	<SocialIcons />
</section>
