<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	import Desktop from './desktop.svelte';
	import Mobile from './mobile.svelte';
	import Bug from '$lib/components/bug/bug.svelte';
	import Resume from '$lib/components/resume/resume.svelte';

	import hamburger from '../../assets/hamburger.svg';

	let width: number;
	let mobile: boolean;

	let opened = false;

	let resume = false;
	let bug = false;

	onMount(async () => {
		if (width) {
			mobile = width <= 768;
		}
	});

	let toggleMenu = () => {
		opened = !opened;
	};

	let onResize = () => {
		mobile = width <= 768;
		if (width <= 768) {
			opened = false;
		}
	};
</script>

<svelte:window bind:innerWidth={width} on:resize={onResize} />

<div class="ml-auto">
	<button
		class="h-12 w-12 p-2 rounded-full outline-none focus:outline-none hover:bg-white hover:bg-opacity-20"
		on:focusin={toggleMenu}
		on:focusout={toggleMenu}>
		<img
			draggable="false"
			src={hamburger}
			alt="Hamburger Menu"
			class="p-1"
			style="margin-left: -2px;" />
	</button>
	{#if opened}
		<div
			transition:fly={{ y: -5 }}
			class:right-0={!mobile}
			class:mr-8={!mobile}
			class:inset-x-0={mobile}
			class="absolute z-50 mt-5">
			{#if mobile}
				<Mobile />
			{:else}
				<Desktop
					bugCallback={() => bug = true}
					resumeCallback={() => resume = true} />
			{/if}
		</div>
	{/if}
	{#if resume}
		<div transition:fade={{ duration: 300 }}>
			<Resume callback={() => resume = false} />
		</div>
	{/if}
	{#if bug}
		<div transition:fade={{ duration: 300 }}>
			<Bug callback={() => bug = false} />
		</div>
	{/if}
</div>
