<script lang="ts">
	export let number;
	export let title;
	export let color;

	let minTwoDigits = (n) => {
		return (n < 10 ? '0' : '') + n;
	}
</script>

<div class='flex items-end w-max sm:w-96 pb-4 mb-10 border-white border-opacity-30 border-b-4'>
	<h4 style='color: {color};' class='mr-4 text-xl sm:text-3xl'>{minTwoDigits(number)}.</h4>
	<h2 class='text-3xl sm:text-5xl font-bold'>{title}</h2>
</div>
