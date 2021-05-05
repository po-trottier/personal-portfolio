<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Button } from 'attractions';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Hello</h1>
	<h3>Welcome to my portfolio</h3>
	<Button round class='icon'><DiGithubBadge /></Button>
	<div class='separator' />
</section>

<style lang='scss'>
  @use 'variables.scss';

  h1 {
    color: variables.$blue;
  }
</style>
