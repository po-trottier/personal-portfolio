<script lang="ts">
	import CloseModal from '$lib/components/shared/close_modal.svelte';
	export let callback;
</script>

<div on:click={callback} class='fixed inset-0 h-screen bg-darker bg-opacity-75'></div>
<form class='fixed inset-0 w-64 h-32'>
	<h1>Bug Report</h1>
</form>
<CloseModal callback={callback} />