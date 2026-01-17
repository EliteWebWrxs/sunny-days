<script>
  import CTASection from '$lib/CTASection.svelte';
  import FAQ from '$lib/FAQ.svelte';
  import SEO from '$lib/SEO.svelte';
  import { servicesSchema, getBreadcrumbSchema } from '$lib/schema.js';

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://sunnydayscare.com' },
    { name: 'Services', url: 'https://sunnydayscare.com/services' }
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [servicesSchema, breadcrumbs]
  };
</script>

<SEO
  title="Companion Care Services - Sunny Days | Central Florida"
  description="Comprehensive companion care services including companionship, meal preparation, light housekeeping, transportation, medication reminders, and travel companions. Serving Central Florida counties."
  url="https://sunnydayscare.com/services"
  image="https://sunnydayscare.com/images/hero-6.webp"
  type="website"
  schema={combinedSchema}
/>

<!-- Hero Section -->
<section
  class="relative bg-gradient-to-br from-gold/10 via-orange/5 to-white section pt-20 min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/hero-6.webp'); background-size: cover; background-position: top;"
>
  <!-- Background Image Overlay (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-gradient-to-br from-warmGray-900/60 via-warmGray-900/50 to-warmGray-900/60 z-0"></div>

  <div class="container-custom relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="mb-4 text-white">Companion Care Services</h1>
      <p class="text-xl text-white/90 leading-relaxed">
        Our comprehensive services are designed to support independent living while providing
        meaningful companionship and practical assistance for daily activities.
      </p>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="section bg-white">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto">
      <div
        class="bg-gradient-to-r from-gold/10 to-orange/10 rounded-2xl p-8 mb-12 border border-gold/20"
      >
        <h2 class="text-2xl mb-4 text-center">What We Offer</h2>
        <p class="text-warmGray-700 leading-relaxed text-center">
          Companion care focuses on enhancing quality of life through emotional support, social
          engagement, and assistance with everyday tasks. Our services are tailored to each
          individual's needs, preferences, and lifestyle, ensuring personalized care that promotes
          independence and well-being.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Services List -->
<section class="section bg-warmGray-50">
  <div class="container-custom">
    <div class="max-w-5xl mx-auto space-y-8">
      <!-- Service 1: Companionship and Conversation -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/conversation.webp"
              alt="Companionship and Conversation"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Companionship & Conversation</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              Sometimes, the most valuable gift we can offer is our time and attention. Our
              companions provide friendly conversation, active listening, and genuine engagement to
              combat loneliness and isolation.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Engaging conversations and reminiscence</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700"
                  >Shared activities like reading, puzzles, or games</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Support for hobbies and personal interests</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 2: Meal Preparation -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex md:flex-row-reverse">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/mealprep.webp"
              alt="Meal Preparation"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Meal Preparation</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              Nutritious meals are essential for health and well-being. We help plan, prepare, and
              serve meals according to dietary preferences and requirements, making mealtimes
              enjoyable and stress-free.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Planning balanced, nutritious meals</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Cooking meals according to dietary needs</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Kitchen cleanup and food storage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 3: Light Housekeeping -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/housekeeping.webp"
              alt="Light Housekeeping"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Light Housekeeping</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              A clean, organized home contributes to safety, comfort, and peace of mind. We provide
              assistance with light housekeeping tasks to maintain a pleasant living environment.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Tidying and organizing living spaces</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Laundry and linen changes</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Vacuuming, dusting, and general cleaning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 4: Transportation and Errands -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex md:flex-row-reverse">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/errand.webp"
              alt="Transportation and Errands"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Transportation & Errands</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              Staying connected to the community is important for well-being. We provide safe,
              reliable transportation and assistance with errands to help maintain an active,
              engaged lifestyle.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Rides to appointments and social activities</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Grocery shopping and pharmacy pickups</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Running errands and accompanying on outings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 5: Medication Reminders -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/reminder.webp"
              alt="Medication Reminders"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Medication Reminders</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              Taking medications as prescribed is crucial for health management. Our companions
              provide friendly reminders to help ensure medications are taken on schedule.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Timely reminders for medications</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700">Support with organizing pill boxes</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700"
                  >Communication with family about medication routines</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 6: Travel Companions -->
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div class="md:flex md:flex-row-reverse">
          <div
            class="md:w-1/3 bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/travel.webp"
              alt="Travel Companions"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-8">
            <h3 class="mb-3">Travel Companions</h3>
            <p class="text-warmGray-700 mb-4 leading-relaxed">
              Traveling Aide, to provide light assistance, or specialized support, our services are
              designed to ensure safety, dignity, and peace of mind throughout your trip.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700"
                  >For travelers who value a reassuring, steady presence without needing hands-on
                  care. We offer guidance through airports and transportation hubs, help managing
                  schedules and reservations, and provide emotional support to ease anxiety and
                  enhance comfort.</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700"
                  >Vacation Companion designed to provide peace of mind during vacations, family
                  events, or cruises. This service includes daily companionship, support during
                  outings, and gentle assistance to help clients fully enjoy their travel
                  experience.</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-warmGray-700"
                  >Recovery Travel Support for clients traveling before, during, or after medical
                  procedures. We offer medication reminders, post-surgical support, and communication
                  with family or healthcare providers to ensure a smooth and safe journey.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Image Section - Quality Care -->
<section
  class="relative h-[500px] md:h-[600px] bg-gradient-to-r from-gold/20 to-orange/20 bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/hero-5.webp'); background-size: cover; background-position: top;"
>
  <!-- Overlay to ensure text readability (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-warmGray-900/50"></div>

  <div class="container-custom h-full flex items-center justify-center relative z-10">
    <div class="text-center text-white max-w-3xl">
      <h2 class="text-white mb-4">Dedicated to Your Well-Being</h2>
      <p class="text-xl text-white/90">
        Our trained companions bring warmth, professionalism, and genuine care to every interaction.
      </p>
    </div>
  </div>
</section>

<!-- Bottom Info Section -->
<section class="section bg-white">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="mb-4">Personalized to Your Needs</h2>
      <p class="text-lg text-warmGray-700 leading-relaxed mb-6">
        Every person is unique, and so are their care needs. We work closely with you and your
        family to create a customized care plan that addresses specific requirements, respects
        preferences, and adapts as needs change over time.
      </p>
      <p class="text-warmGray-700 leading-relaxed">
        Our focus is on fostering independence, dignity, and joy in daily life. We're here to
        provide the support needed to maintain quality of life while building meaningful
        relationships along the way.
      </p>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<FAQ />

<!-- CTA Section -->
<CTASection
  title="Ready to Learn More About Our Services?"
  description="Schedule a free consultation to discuss how our companion care services can be tailored to meet your specific needs and preferences."
  primaryButtonText="Schedule Consultation"
  secondaryButtonText="View All Services"
  secondaryButtonLink="/services"
  backgroundStyle="orange"
/>
