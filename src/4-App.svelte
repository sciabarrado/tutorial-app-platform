<script>
	const url =
		location.hostname == "localhost" ? "http://localhost:8080/" : "/api/";
</script>

<main>
	<h1>Guest Book</h1>
	{#await fetch(url).then((r) => r.json()) then data}
		<ul>
			{#each data as entry}
				<li>{entry.message}</li>
			{/each}
		</ul>
	{/await}
	<form method="post" action={url}>
		<input type="text" name="msg" />
		<input type="submit" value="Submit" />
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
