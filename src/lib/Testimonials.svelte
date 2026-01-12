<script>
	export let testimonials = [
		{
			name: 'Mary Johnson',
			relation: 'Daughter of Client',
			text: 'Sunny Days has been a blessing for our family. The companion who visits my mother is patient, kind, and genuinely cares about her well-being. Mom looks forward to every visit!',
			rating: 5
		},
		{
			name: 'Robert Martinez',
			relation: 'Family Member',
			text: 'The professionalism and compassion shown by the Sunny Days team is outstanding. They helped my father maintain his independence while ensuring he was never alone. Highly recommend!',
			rating: 5
		},
		{
			name: 'Susan Thompson',
			relation: 'Client',
			text: 'I was hesitant at first, but my companion has become a dear friend. We enjoy our conversations, cooking together, and she helps me with errands. It\'s made such a difference in my life.',
			rating: 5
		}
	];
</script>

<section class="section bg-white">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="mb-4">What Families Are Saying</h2>
			<p class="text-lg text-warmGray-700">
				We're honored to serve our community and grateful for the trust families place in us.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{#each testimonials as testimonial}
				<div class="bg-warmGray-50 rounded-2xl p-6 border border-warmGray-200 hover:shadow-lg transition-shadow">
					<!-- Stars -->
					<div class="flex gap-1 mb-4">
						{#each Array(testimonial.rating) as _}
							<svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{/each}
					</div>

					<!-- Testimonial Text -->
					<p class="text-warmGray-700 leading-relaxed mb-6 italic">
						"{testimonial.text}"
					</p>

					<!-- Author -->
					<div class="border-t border-warmGray-300 pt-4">
						<p class="font-semibold text-warmGray-900">{testimonial.name}</p>
						<p class="text-sm text-warmGray-600">{testimonial.relation}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Add Your Review CTA -->
		<div class="text-center mt-12">
			<p class="text-warmGray-700 mb-4">
				Have an experience to share? We'd love to hear from you.
			</p>
			<a href="/connect" class="btn-secondary">Share Your Story</a>
		</div>
	</div>
</section>
