<script>
  import CTASection from '$lib/CTASection.svelte';
  import Testimonials from '$lib/Testimonials.svelte';
  import FAQ from '$lib/FAQ.svelte';
</script>

<svelte:head>
  <title>Sunny Days Companion Services - Compassionate Care for Your Loved Ones</title>
  <meta
    name="description"
    content="Sunny Days Companion Services provides warm, professional companion care to enhance quality of life. Offering companionship, meal prep, errands, and more."
  />
</svelte:head>

<!-- Hero Section -->
<!-- TO ADD YOUR IMAGE: Replace the background classes below with: style="background-image: url('/images/your-hero-image.jpg'); background-size: cover; background-position: center;" -->
<section
  class="relative bg-gradient-to-br from-gold/10 via-orange/5 to-white section pt-20 pb-24 overflow-hidden md:bg-fixed"
  style="background-image: url('/images/hero-2.webp'); background-size: cover; background-position: center;"
>
  <!-- Background Image Overlay (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-white/40 to-white/50 z-0"></div>

  <div class="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl -z-10"></div>

  <div class="container-custom relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="mb-6 animate-fade-in">Bringing Warmth & Companionship to Every Day</h1>
      <p class="text-xl md:text-2xl text-warmGray-700 mb-8 leading-relaxed">
        Professional companion care services designed to enhance quality of life, provide meaningful
        connections, and support independent living with dignity and joy.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/connect" class="btn-primary text-lg px-8 py-4">Get Started Today</a>
        <a href="/services" class="btn-outline text-lg px-8 py-4 bg-white">Explore Our Services</a>
      </div>
    </div>
  </div>
</section>

<!-- Overview Section -->
<section class="section bg-white">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h2 class="mb-4">What is Companion Care?</h2>
      <p class="text-lg text-warmGray-700 leading-relaxed">
        Companion care is more than assistance—it's about fostering meaningful relationships and
        bringing joy to daily life. Our services provide emotional support, practical help, and
        genuine companionship to individuals who want to maintain their independence while enjoying
        the comfort of friendly assistance.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mt-12">
      <div class="text-center">
        <div
          class="w-16 h-16 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
        <h3 class="mb-2">Personalized Care</h3>
        <p class="text-warmGray-600">
          Every individual is unique. We tailor our services to match your specific needs,
          preferences, and personality.
        </p>
      </div>

      <div class="text-center">
        <div
          class="w-16 h-16 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 class="mb-2">Compassionate Team</h3>
        <p class="text-warmGray-600">
          Our carefully selected companions are trained, background-checked, and genuinely
          passionate about making a difference.
        </p>
      </div>

      <div class="text-center">
        <div
          class="w-16 h-16 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 class="mb-2">Peace of Mind</h3>
        <p class="text-warmGray-600">
          Families trust us to provide reliable, professional care that ensures safety, happiness,
          and quality of life.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Image Section 1 - Companion Care -->
<!-- TO ADD YOUR IMAGE: Add style="background-image: url('/images/companion-care.jpg');" to the section tag below -->
<section
  class="relative h-[500px] md:h-[600px] bg-gradient-to-r from-gold/20 to-orange/20 bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/hero-3.webp'); background-size: cover; background-position: center;"
>
  <!-- Overlay to ensure text readability (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-warmGray-900/50"></div>

  <div class="container-custom h-full flex items-center justify-center relative z-10">
    <div class="text-center text-white max-w-3xl">
      <h2 class="text-white mb-4">Compassionate Care, Every Day</h2>
      <p class="text-xl text-white/90">
        Building meaningful relationships that bring joy and comfort to those we serve.
      </p>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="section bg-warmGray-50">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h2 class="mb-4">Why Choose Sunny Days?</h2>
      <p class="text-lg text-warmGray-700">
        We're dedicated to enriching lives through meaningful companionship and thoughtful support.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 class="mb-2">Flexible Scheduling</h4>
            <p class="text-warmGray-600 text-sm">
              From a few hours a week to daily visits, we adapt to your schedule and changing needs.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <div>
            <h4 class="mb-2">Meaningful Engagement</h4>
            <p class="text-warmGray-600 text-sm">
              From conversations to hobbies, we focus on activities that bring joy and mental
              stimulation.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <h4 class="mb-2">Support at Home</h4>
            <p class="text-warmGray-600 text-sm">
              Helping individuals stay comfortable and independent in their own familiar
              environment.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div>
            <h4 class="mb-2">Family Peace of Mind</h4>
            <p class="text-warmGray-600 text-sm">
              Regular communication and updates keep families informed and confident in their loved
              one's care.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trust Indicators Section -->
<section class="section bg-white">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="mb-4">Built on Trust & Experience</h2>
        <p class="text-lg text-warmGray-700">
          Our commitment to excellence is reflected in everything we do.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="p-6">
          <div class="text-4xl font-display font-bold text-orange mb-2">100%</div>
          <div class="text-warmGray-900 font-semibold mb-2">Background Checked</div>
          <p class="text-sm text-warmGray-600">
            All companions undergo thorough screening and verification
          </p>
        </div>

        <div class="p-6">
          <div class="text-4xl font-display font-bold text-orange mb-2">Years</div>
          <div class="text-warmGray-900 font-semibold mb-2">of Experience</div>
          <p class="text-sm text-warmGray-600">
            Dedicated to providing compassionate companion care
          </p>
        </div>

        <div class="p-6">
          <div class="text-4xl font-display font-bold text-orange mb-2">24/7</div>
          <div class="text-warmGray-900 font-semibold mb-2">Support Available</div>
          <p class="text-sm text-warmGray-600">
            We're here when you need us, providing reliability and peace of mind
          </p>
        </div>
      </div>

      <div
        class="mt-12 bg-gradient-to-r from-gold/10 to-orange/10 rounded-2xl p-8 border border-gold/20"
      >
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div
            class="w-20 h-20 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
          >
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h3 class="mb-2">Quality You Can Trust</h3>
            <p class="text-warmGray-700">
              We maintain the highest standards of care through continuous training, regular quality
              assessments, and a genuine commitment to the well-being of those we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<Testimonials />

<!-- Image Section 2 - Community -->
<!-- TO ADD YOUR IMAGE: Add style="background-image: url('/images/community-care.jpg');" to the section tag below -->
<section
  class="relative h-[500px] md:h-[600px] bg-gradient-to-r from-orange/20 to-gold/20 bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/hero-4.webp'); background-size: cover; background-position: center;"
>
  <!-- Overlay to ensure text readability (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-warmGray-900/50"></div>

  <div class="container-custom h-full flex items-center justify-center relative z-10">
    <div class="text-center text-white max-w-3xl">
      <h2 class="text-white mb-4">Serving Our Community with Pride</h2>
      <p class="text-xl text-white/90">
        Trusted by families across Central Florida for compassionate, reliable companion care.
      </p>
    </div>
  </div>
</section>

<!-- Service Areas Section -->
<section class="section bg-warmGray-50">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-4">Proudly Serving Central Florida</h2>
      <p class="text-lg text-warmGray-700 mb-8">
        We provide compassionate companion care services throughout the following Florida counties:
      </p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div
          class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200 hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Hardee</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div
          class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200 hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Highlands</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div
          class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200 hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Hillsborough</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div
          class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200 hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Manatee</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div
          class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200 hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Polk</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
      </div>
      <div
        class="bg-gradient-to-r from-gold/10 to-orange/10 rounded-xl p-6 border border-gold/20 inline-block"
      >
        <p class="text-warmGray-800 font-medium">
          <span class="text-orange font-bold">Licensed & Certified</span> | Florida AHCA License #240843
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<FAQ />

<!-- CTA Section -->
<CTASection />
