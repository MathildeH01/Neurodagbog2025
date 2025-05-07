<script>
	let { children, onclick } = $props();
</script>

<button class="btn btn-accent m-2" {onclick}>{@render children()}</button>
