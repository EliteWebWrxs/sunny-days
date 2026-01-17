<script>
  import SEO from '$lib/SEO.svelte';
  import { contactPageSchema, getBreadcrumbSchema } from '$lib/schema.js';

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    serviceInterest: '',
    bestTimeToCall: '',
    message: ''
  };

  let formStatus = 'idle'; // 'idle', 'submitting', 'success', 'error'
  let errorMessage = '';

  // @ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();
    formStatus = 'submitting';
    errorMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        formStatus = 'success';
        // Reset form
        formData = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredContact: 'phone',
          serviceInterest: '',
          bestTimeToCall: '',
          message: ''
        };
      } else {
        formStatus = 'error';
        errorMessage = 'Failed to send message. Please try again or call us directly.';
      }
    } catch (error) {
      formStatus = 'error';
      errorMessage = 'Failed to send message. Please try again or call us directly.';
      console.error('Form submission error:', error);
    }
  }

  function resetForm() {
    formStatus = 'idle';
  }

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://sunnydayscare.com' },
    { name: 'Connect', url: 'https://sunnydayscare.com/connect' }
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [contactPageSchema, breadcrumbs]
  };
</script>

<SEO
  title="Connect With Us - Sunny Days Companion Services | Free Consultation"
  description="Get in touch with Sunny Days Companion Services in Central Florida. Request a free consultation, schedule a televisit, or call us at 813-433-0688. We're here to help."
  url="https://sunnydayscare.com/connect"
  image="https://sunnydayscare.com/images/heroImage-1.webp"
  type="website"
  schema={combinedSchema}
/>

<!-- Hero Section -->
<!-- TO ADD YOUR IMAGE: Add style="background-image: url('/images/connect-hero.jpg');" to the section tag below -->
<section
  class="relative bg-gradient-to-br from-gold/10 via-orange/5 to-white section pt-20 min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/heroImage-1.webp'); background-size: cover; background-position: top;"
>
  <!-- Background Image Overlay (adjust opacity as needed) -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-warmGray-900/60 via-warmGray-900/50 to-warmGray-900/60 z-0"
  ></div>

  <div class="container-custom relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="mb-4 text-white">Let's Connect</h1>
      <p class="text-xl text-white/90 leading-relaxed">
        We'd love to hear from you. Whether you have questions about our services or want to
        schedule a consultation, we're here to help.
      </p>
    </div>
  </div>
</section>

<!-- Contact Information Cards -->
<section class="section bg-white">
  <div class="container-custom">
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <!-- Phone -->
        <a
          href="tel:813-433-0688"
          class="bg-gradient-to-br from-gold/10 to-orange/10 rounded-2xl p-6 border-2 border-gold/20 hover:border-orange/40 transition-all group"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-gold to-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          >
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-warmGray-900 mb-2">Call Us</h3>
          <p class="text-orange font-bold text-xl mb-1">813-433-0688</p>
          <p class="text-warmGray-600 text-sm">Monday - Friday, 8am - 5pm</p>
        </a>

        <!-- Schedule Televisit -->
        <a
          href="https://outlook.office.com/bookwithme/user/116080fcb381447a86b444a034df8b3b@sunnydayscare.com?anonymous&ismsaljsauthenabled&ep=pcard"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-br from-gold/10 to-orange/10 rounded-2xl p-6 border-2 border-gold/20 hover:border-orange/40 transition-all group"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-gold to-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          >
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-warmGray-900 mb-2">Schedule a Televisit</h3>
          <p class="text-warmGray-700 text-sm leading-relaxed">
            Book your virtual consultation online at a time that works for you
          </p>
        </a>

        <!-- License -->
        <div
          class="bg-gradient-to-br from-gold/10 to-orange/10 rounded-2xl p-6 border-2 border-gold/20"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-gold to-orange rounded-xl flex items-center justify-center mb-4"
          >
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-warmGray-900 mb-2">Licensed, Certified & Bonded</h3>
          <p class="text-warmGray-700 text-sm mb-1">Florida AHCA License</p>
          <p class="text-orange font-bold text-lg">#240843</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Areas -->
<section class="section bg-warmGray-50">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-4">Serving Central Florida</h2>
      <p class="text-lg text-warmGray-700 mb-8">
        We're proud to provide compassionate companion care services throughout the following
        counties:
      </p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200">
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Hardee</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200">
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Highlands</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200">
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Hillsborough</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200">
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Manatee</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm border border-warmGray-200">
          <div class="text-2xl mb-1">📍</div>
          <p class="font-semibold text-warmGray-900">Polk</p>
          <p class="text-xs text-warmGray-600">County</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Image Section - Ready to Help -->
<!-- TO ADD YOUR IMAGE: Add style="background-image: url('/images/ready-to-help.jpg');" to the section tag below -->
<section
  class="relative h-[500px] md:h-[600px] bg-gradient-to-r from-gold/20 to-orange/20 bg-cover bg-center bg-no-repeat md:bg-fixed"
  style="background-image: url('/images/toast.webp'); background-size: cover; background-position: top;"
>
  <!-- Overlay to ensure text readability (adjust opacity as needed) -->
  <div class="absolute inset-0 bg-warmGray-900/50"></div>

  <div class="container-custom h-full flex items-center justify-center relative z-10">
    <div class="text-center text-white max-w-3xl">
      <h2 class="text-white mb-4">We're Here to Listen</h2>
      <p class="text-xl text-white/90">
        Your questions and concerns matter to us. Let's start a conversation about how we can help.
      </p>
    </div>
  </div>
</section>

<!-- Contact Form -->
<section class="section bg-warmGray-50">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="mb-4">Request a Free Consultation</h2>
        <p class="text-lg text-warmGray-700">
          Let us learn about your needs. Fill out the form below and a member of our care team will
          reach out to schedule your complimentary consultation.
        </p>
      </div>

      {#if formStatus === 'success'}
        <div
          class="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 mb-6 text-center"
        >
          <div
            class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-display font-bold text-green-900 mb-2">Thank You!</h3>
          <p class="text-green-800 mb-4">
            We've received your request and will contact you within 24 hours.
          </p>
          <button
            on:click={resetForm}
            class="btn-outline text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
          >
            Send Another Message
          </button>
        </div>
      {:else}
        {#if formStatus === 'error'}
          <div
            class="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-2xl p-6 mb-6"
          >
            <div class="flex items-start">
              <svg
                class="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 class="text-red-900 font-semibold mb-1">Unable to Send Message</h4>
                <p class="text-red-800 text-sm">{errorMessage}</p>
              </div>
            </div>
          </div>
        {/if}

        <form
          on:submit={handleSubmit}
          class="bg-white rounded-2xl shadow-lg p-8 border border-warmGray-200"
        >
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="firstName" class="block text-sm font-semibold text-warmGray-900 mb-2">
                First Name <span class="text-orange">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                bind:value={formData.firstName}
                required
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                placeholder="John"
              />
            </div>

            <div>
              <label for="lastName" class="block text-sm font-semibold text-warmGray-900 mb-2">
                Last Name <span class="text-orange">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                bind:value={formData.lastName}
                required
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                placeholder="Smith"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="phone" class="block text-sm font-semibold text-warmGray-900 mb-2">
                Phone Number <span class="text-orange">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                required
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                placeholder="(813) 555-1234"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-warmGray-900 mb-2">
                Email Address <span class="text-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                for="preferredContact"
                class="block text-sm font-semibold text-warmGray-900 mb-2"
              >
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                bind:value={formData.preferredContact}
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-white"
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="either">Either</option>
              </select>
            </div>

            <div>
              <label
                for="bestTimeToCall"
                class="block text-sm font-semibold text-warmGray-900 mb-2"
              >
                Best Time to Call
              </label>
              <select
                id="bestTimeToCall"
                bind:value={formData.bestTimeToCall}
                class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          </div>

          <div class="mb-6">
            <label for="serviceInterest" class="block text-sm font-semibold text-warmGray-900 mb-2">
              Service of Interest
            </label>
            <select
              id="serviceInterest"
              bind:value={formData.serviceInterest}
              class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">Select a service</option>
              <option value="Travel Companion">Travel Companion</option>
              <option value="companionship">Companionship & Conversation</option>
              <option value="meals">Meal Preparation</option>
              <option value="housekeeping">Light Housekeeping</option>
              <option value="transportation">Transportation & Errands</option>
              <option value="medication">Medication Reminders</option>
              <option value="multiple">Multiple Services</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm font-semibold text-warmGray-900 mb-2">
              Tell Us About Your Needs <span class="text-orange">*</span>
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="w-full px-4 py-3 border-2 border-warmGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all resize-none"
              placeholder="Please share any specific needs, preferences, or questions you have about our companion care services..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {#if formStatus === 'submitting'}
              <span class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting Request...
              </span>
            {:else}
              Request Free Consultation
            {/if}
          </button>

          <p class="text-center text-sm text-warmGray-600 mt-4">
            By submitting this form, you agree to be contacted by Sunny Days Companion Services
            regarding your care needs.
          </p>
        </form>
      {/if}
    </div>
  </div>
</section>
