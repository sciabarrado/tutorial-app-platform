<script>
	import { onMount } from "svelte";
	const api =
		location.hostname == "localhost" ? "http://localhost:8080/" : "/api/";

	let data = [];
	let msg = "";
	function load() {
		fetch(api)
			.then((r) => r.json())
			.then((d) => (data = d));
	}
	function save() {
		let data = JSON.stringify({msg:msg})
		msg = ""
		console.log(api, data)
		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		}).then(load);
	}
	onMount(load);
</script>

<main>
	<h1>Guest Book</h1>
	<ul>
		{#each data as entry}
			<li>{entry.message}</li>
		{/each}
	</ul>
	<form>
		<input type="text" name="msg" bind:value={msg} />
		<button on:click|preventDefault={save}>Send</button>
	</form>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
