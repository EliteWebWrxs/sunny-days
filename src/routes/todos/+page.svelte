<script>
	import { enhance } from '$app/forms';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let { data } = $props();
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div class="w-full max-w-[42rem] mt-16 mx-auto leading-none">
	<h1>Todos</h1>

	<form
		class="mb-2"
		action="?/create"
		method="post"
		use:enhance={() => {
			return async ({ update, formElement }) => {
				formElement.reset();
				await update();
			};
		}}
	>
		<input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" class="text-[28px] w-full py-2 px-4 box-border bg-white/5 rounded-lg text-center border border-transparent focus-visible:shadow-[inset_1px_1px_6px_rgba(0,0,0,0.1)] focus-visible:!border-accent focus-visible:outline-none" />
	</form>

	{#each data.todos as todo (todo.uid)}
		<div
			class="grid grid-cols-[2rem_1fr_2rem] gap-2 items-center mb-2 p-2 bg-white rounded-lg drop-shadow-[2px_4px_6px_rgba(0,0,0,0.1)] -translate-x-px -translate-y-px transition-[filter,transform] duration-200"
			class:opacity-40={todo.done}
			class:translate-x-0={todo.done}
			class:translate-y-0={todo.done}
			class:drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]={todo.done}
			transition:scale|local={{ start: 0.7 }}
			animate:flip={{ duration: 200 }}
		>
			<form
				action="?/update"
				method="post"
				use:enhance={() => {
					return async ({ update, formData }) => {
						todo.done = !!formData.get('done');
						await update();
					};
				}}
			>
				<input type="hidden" name="uid" value={todo.uid} />
				<input type="hidden" name="done" value={todo.done ? '' : 'true'} />
				<button class="w-8 h-8 border border-black/20 rounded-full box-border bg-transparent bg-center bg-no-repeat bg-[length:1em_auto] {todo.done ? '[background-image:url(data:image/svg+xml,%3Csvg%20width=%2722%27%20height=%2716%27%20viewBox=%270%200%2022%2016%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20.5%201.5L7.4375%2014.5L1.5%208.5909%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3C/svg%3E)]' : ''}" aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"></button>
			</form>

			<form class="relative flex items-center flex-1" action="?/update" method="post" use:enhance>
				<input type="hidden" name="uid" value={todo.uid} />
				<input aria-label="Edit todo" type="text" name="text" value={todo.text} class="flex-1 py-2 pr-8 pl-3 rounded border border-transparent focus-visible:shadow-[inset_1px_1px_6px_rgba(0,0,0,0.1)] focus-visible:!border-accent focus-visible:outline-none" />
				<button class="absolute right-0 w-8 h-8 border-none bg-transparent bg-center bg-no-repeat opacity-0 [background-image:url(data:image/svg+xml,%3Csvg%20width=%2724%27%20height=%2724%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20.5%202H3.5C2.67158%202%202%202.67157%202%203.5V20.5C2%2021.3284%202.67158%2022%203.5%2022H20.5C21.3284%2022%2022%2021.3284%2022%2020.5V3.5C22%202.67157%2021.3284%202%2020.5%202Z%27%20fill=%27%23676778%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M17%202V11H7.5V2H17Z%27%20fill=%27white%27%20stroke=%27white%27%20stroke-width=%271.5%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M13.5%205.5V7.5%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27/%3E%3Cpath%20d=%27M5.99844%202H18.4992%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E)] focus:opacity-100 focus:transition-opacity focus:duration-200 [input:focus+&]:opacity-100 [input:focus+&]:transition-opacity [input:focus+&]:duration-200" aria-label="Save todo"></button>
			</form>

			<form
				action="?/delete"
				method="post"
				use:enhance={() => {
					return async ({ update }) => {
						todo.pending_delete = true;
						await update();
					};
				}}
			>
				<input type="hidden" name="uid" value={todo.uid} />
				<button class="w-8 h-8 border-none bg-transparent bg-center bg-no-repeat opacity-20 hover:opacity-100 hover:transition-opacity hover:duration-200 focus:opacity-100 focus:transition-opacity focus:duration-200 [background-image:url(data:image/svg+xml,%3Csvg%20width=%2724%27%20height=%2724%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M4.5%205V22H19.5V5H4.5Z%27%20fill=%27%23676778%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M10%2010V16.5%27%20stroke=%27white%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M14%2010V16.5%27%20stroke=%27white%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M2%205H22%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3Cpath%20d=%27M8%205L9.6445%202H14.3885L16%205H8Z%27%20fill=%27%23676778%27%20stroke=%27%23676778%27%20stroke-width=%271.5%27%20stroke-linejoin=%27round%27/%3E%3C/svg%3E)]" aria-label="Delete todo" disabled={todo.pending_delete}></button>
			</form>
		</div>
	{/each}
</div>
