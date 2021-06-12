<script lang="ts">
	import MdClose from 'svelte-icons/md/MdClose.svelte'

	export let callback;
</script>

<div on:click={callback} class='fixed inset-0 h-screen bg-darker bg-opacity-75 flex items-center justify-center'>
	<form on:click|stopPropagation="" class='inset-0 mx-6 max-w-xl rounded-lg border-2 p-6 colored-borders' name="bug" method="post" netlify netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="test" />
		<input type="hidden" name="bot-field" />
		<div class='flex mb-4 items-center'>
			<p><b>I apologise for the inconvenience.</b> Please describe the issue you are facing and I will fix it as soon as possible.</p>
			<div class='ml-4'>
				<button on:click|preventDefault={callback} class='w-8 h-8 p-2 rounded-full bg-light hover:bg-lighter'>
					<MdClose />
				</button>
			</div>
		</div>
		<div class="flex flex-col">
			<fieldset class='flex flex-col mb-4'>
				<label for='email' class='mb-2'>Enter your email address <i>(I will contact you if I have more questions):</i></label>
				<input required type="email" id='email' name='email' placeholder='E-mail' class='rounded-lg px-2 py-1 text-darker'>
			</fieldset>
			<fieldset class='flex flex-col mb-6'>
				<label for='description' class='mb-2'>Describe your issue:</label>
				<textarea required id='description' name='description' placeholder='Issue description' class='rounded-lg px-2 py-1 text-darker' rows='3'></textarea>
			</fieldset>
			<button type="submit" class='px-4 py-2 bg-light rounded-lg hover:bg-blue'>Submit Report</button>
		</div>
	</form>
</div>
