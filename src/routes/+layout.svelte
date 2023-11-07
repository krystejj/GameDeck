<script>
    import '../app.scss';
    import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<div class="flex justify-center w-full">
    <slot />
</div>
