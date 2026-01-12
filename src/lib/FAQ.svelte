<script>
	let openIndex = null;

	function toggle(index) {
		openIndex = openIndex === index ? null : index;
	}

	const faqs = [
		{
			question: 'What is companion care?',
			answer: 'Companion care is non-medical support that focuses on providing companionship, emotional support, and assistance with daily activities. Our companions help with tasks like meal preparation, light housekeeping, transportation, medication reminders, and most importantly, provide meaningful social interaction and friendship.'
		},
		{
			question: 'How do I know if companion care is right for my loved one?',
			answer: 'Companion care is ideal for individuals who want to maintain their independence at home but could benefit from regular companionship and assistance with daily tasks. If your loved one experiences loneliness, needs help with errands or household tasks, or would benefit from social engagement, companion care may be a perfect fit.'
		},
		{
			question: 'Are your companions trained and background-checked?',
			answer: 'Absolutely. All of our companions undergo thorough background checks, reference verification, and comprehensive training. We carefully select individuals who are not only qualified but also genuinely passionate about providing compassionate care.'
		},
		{
			question: 'What areas do you serve?',
			answer: 'We proudly serve five counties in Central Florida: Hardee, Highlands, Hillsborough, Manatee, and Polk. If you\'re unsure whether we serve your specific area, please contact us and we\'ll be happy to help.'
		},
		{
			question: 'How flexible is the scheduling?',
			answer: 'Very flexible! We understand that every family has unique needs. Whether you need a few hours a week, daily visits, or something in between, we can create a schedule that works for you. We can also adjust the schedule as needs change over time.'
		},
		{
			question: 'What is the cost of companion care services?',
			answer: 'Our rates vary based on the level of care needed and the frequency of visits. We offer free consultations to discuss your specific needs and provide a personalized quote. Contact us to learn more about our pricing and to discuss options that fit your budget.'
		},
		{
			question: 'Can I meet the companion before services begin?',
			answer: 'Yes! We believe it\'s important for families to feel comfortable with their companion. We arrange an initial meeting where you can get to know each other, discuss preferences, and ensure it\'s a good fit. Your satisfaction and comfort are our top priorities.'
		},
		{
			question: 'How do I get started?',
			answer: 'Getting started is easy! Simply contact us through our website, give us a call at 813-433-0688, or fill out our consultation request form. We\'ll schedule a free consultation to discuss your needs, answer your questions, and create a personalized care plan.'
		}
	];
</script>

<section class="section bg-warmGray-50">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="mb-4">Frequently Asked Questions</h2>
				<p class="text-lg text-warmGray-700">
					Have questions? We're here to help. Find answers to common questions below.
				</p>
			</div>

			<div class="space-y-4">
				{#each faqs as faq, index}
					<div class="bg-white rounded-xl border border-warmGray-200 overflow-hidden hover:shadow-md transition-shadow">
						<button
							on:click={() => toggle(index)}
							class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange focus:ring-inset"
						>
							<span class="font-semibold text-warmGray-900 pr-4">{faq.question}</span>
							<svg
								class="w-6 h-6 text-orange flex-shrink-0 transition-transform duration-200 {openIndex === index ? 'transform rotate-180' : ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{#if openIndex === index}
							<div class="px-6 pb-6 text-warmGray-700 leading-relaxed">
								{faq.answer}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="text-center mt-12">
				<p class="text-warmGray-700 mb-4">
					Still have questions? We're here to help.
				</p>
				<a href="/connect" class="btn-primary">Contact Us</a>
			</div>
		</div>
	</div>
</section>
