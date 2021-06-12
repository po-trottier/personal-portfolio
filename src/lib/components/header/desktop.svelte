<script lang="ts">
	import IoIosDocument from 'svelte-icons/io/IoIosDocument.svelte'
	import MdBugReport from 'svelte-icons/md/MdBugReport.svelte'
	import MdCode from 'svelte-icons/md/MdCode.svelte'

	export let resumeCallback;
	export let bugCallback;

	let sections = [
		{
			icon: IoIosDocument,
			text: 'View My Resume',
			action: () => { resumeCallback(); }
		},
		{
			icon: MdCode,
			text: 'View Source Code',
			url: "https://github.com/po-trottier/website-personal-portfolio"
		},
		{
			icon: MdBugReport,
			text: 'Report a Bug',
			action: () => { bugCallback(); }
		},
	];
</script>

<div class="px-4 py-2 bg-darker bg-opacity-80 border border-white border-opacity-30 rounded-lg">
	<ul>
		{#each sections as section}
			<li>
				{#if section.url}
					<a href={section.url} target='_blank' class='p-1 my-1'>
						<span class='flex align-center'>
							<span class='mr-2 w-6 h-6'>
								<svelte:component this={section.icon} />
							</span>
							{section.text}
						</span>
					</a>
				{:else}
					<button on:click={section.action} class='p-1 my-1'>
						<span class='flex align-center'>
							<span class='mr-2 w-6 h-6'>
								<svelte:component this={section.icon} />
							</span>
							{section.text}
						</span>
					</button>
				{/if}
			</li>
		{/each}
	</ul>
</div>
