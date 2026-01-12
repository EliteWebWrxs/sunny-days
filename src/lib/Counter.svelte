<script>
	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="flex border-t border-b border-black/10 my-4">
	<button
		onclick={() => (count -= 1)}
		aria-label="Decrease the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent touch-manipulation text-[#444444] text-3xl hover:bg-secondary [&_svg]:w-1/4 [&_svg]:h-1/4 [&_path]:[vector-effect:non-scaling-stroke] [&_path]:stroke-[2px] [&_path]:stroke-[#444444]"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="w-32 h-16 overflow-hidden text-center relative">
		<div class="absolute w-full h-full" style="transform: translate(0, {100 * offset}%)">
			<strong class="absolute flex w-full h-full font-normal text-accent text-6xl items-center justify-center -top-full select-none" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong class="absolute flex w-full h-full font-normal text-accent text-6xl items-center justify-center">{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button
		onclick={() => (count += 1)}
		aria-label="Increase the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent touch-manipulation text-[#444444] text-3xl hover:bg-secondary [&_svg]:w-1/4 [&_svg]:h-1/4 [&_path]:[vector-effect:non-scaling-stroke] [&_path]:stroke-[2px] [&_path]:stroke-[#444444]"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>
