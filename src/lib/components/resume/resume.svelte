<script lang="ts">
	import CloseModal from '$lib/components/shared/close_modal.svelte';
	export let callback;
</script>

<div on:click={callback} class='fixed inset-0 h-screen bg-darker bg-opacity-75'></div>
<div class='fixed inset-0 rounded-lg my-32 mx-16' style='overflow: clip;'>
	<object
		data='/files/Pierre-Olivier_Trottier_EN.pdf'
		type="application/pdf"
		width="100%"
		height="100%">
		<iframe
			src='/files/Pierre-Olivier_Trottier_EN.pdf'
			width="100%"
			height="100%">
			<p>This browser does not support PDF!</p>
		</iframe>
	</object>
</div>
<CloseModal callback={callback} />