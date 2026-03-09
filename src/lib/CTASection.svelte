<script>
	export let title = "Ready to Bring More Joy to Your Days?";
	export let description = "Connect with us today to learn how our companion care services can make a difference in your life or the life of someone you love.";
	export let primaryButtonText = "Get Started";
	export let primaryButtonLink = "/connect";
	export let secondaryButtonText = "";
	export let secondaryButtonLink = "";
	export let backgroundStyle = "white"; // "blue", "gold", or "white"
</script>

<section class="section {backgroundStyle === 'blue' ? 'bg-blue-600 text-white' : backgroundStyle === 'gold' ? 'bg-gold text-warmGray-900' : 'bg-warmGray-50'}">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="{backgroundStyle === 'blue' ? 'text-white' : backgroundStyle === 'gold' ? 'text-warmGray-900' : 'text-warmGray-900'} mb-4">
				{title}
			</h2>
			<p class="{backgroundStyle === 'blue' ? 'text-white/90' : backgroundStyle === 'gold' ? 'text-warmGray-800' : 'text-warmGray-700'} text-lg mb-8">
				{description}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full sm:w-auto px-4 sm:px-0">
				<a href={primaryButtonLink} class="{backgroundStyle === 'blue' ? 'btn bg-white text-blue-600 hover:bg-warmGray-100' : backgroundStyle === 'gold' ? 'btn-primary' : 'btn-primary'} w-full sm:w-auto">
					{primaryButtonText}
				</a>
				{#if secondaryButtonText}
					<a href={secondaryButtonLink} class="{backgroundStyle === 'blue' ? 'btn border-2 border-white text-white hover:bg-white hover:text-blue-600' : 'btn-outline'} w-full sm:w-auto">
						{secondaryButtonText}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
