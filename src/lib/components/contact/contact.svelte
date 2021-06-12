<script lang="ts">
	import SectionTitle from '$lib/components/shared/section_title.svelte'
</script>

<section id="contact" class='bg-darker p-16 shadow-2xl relative'>
	<div class="h-2 absolute inset-x-0 top-0 rainbow" />
	<SectionTitle number={4} title='Contact Me' color='#00FF94'/>
	<form name="contact" method="post" netlify netlify-honeypot="bot-field" class='flex flex-col'>
		<input type="hidden" name="form-name" value="test" />
		<input type="hidden" name="bot-field" />

		<label for='name' class='mb-2'>Enter your full name:</label>
		<input required type="text" id='name' name='name' placeholder='Full name' class='rounded-lg px-2 py-1 text-darker mb-4'>

		<label for='email' class='mb-2'>Enter your email address:</label>
		<input required type="email" id='email' name='email' placeholder='E-mail' class='rounded-lg px-2 py-1 text-darker mb-4'>

		<label for='message' class='mb-2'>Enter your email address:</label>
		<textarea required id='message' name='message' placeholder='Enter your message here...' rows='4' class='rounded-lg px-2 py-1 text-darker mb-8' />

		<button type="submit" class='px-4 py-2 rounded-lg bg-light hover:bg-blue'>
			Send Message
		</button>
	</form>
</section>

<style>
</style>
