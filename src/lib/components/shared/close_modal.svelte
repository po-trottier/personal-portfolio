<script lang="ts">
	import MdClose from 'svelte-icons/md/MdClose.svelte'
	export let callback;
</script>

<button
	on:click={callback}
	class='fixed top-0 right-0 m-16 py-1 px-2 border border-white rounded-lg'>
	<span class='flex align-center uppercase'>
		Close
		<span class='ml-1 w-6 h-6 text-yellow'>
			<MdClose />
		</span>
	</span>
</button>