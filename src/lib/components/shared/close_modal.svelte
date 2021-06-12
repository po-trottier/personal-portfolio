<script lang="ts">
	import MdClose from 'svelte-icons/md/MdClose.svelte'
	export let callback;
</script>

<div class='fixed cursor-pointer flex items-center top-0 right-0 m-16' on:click|preventDefault={callback}>
	<span>Close</span>
	<button class='ml-2 w-8 h-8 p-2 rounded-full bg-light hover:bg-lighter'>
		<MdClose />
	</button>
</div>
