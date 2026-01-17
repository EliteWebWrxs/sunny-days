<script>
  import { page } from '$app/stores';

  let mobileMenuOpen = false;

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' }
    // { href: '/connect', label: 'Connect' }
  ];
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="container-custom">
    <div class="flex justify-between items-center py-4">
      <!-- Logo/Brand -->
      <a href="/" class="flex items-center space-x-3 group" on:click={closeMenu}>
        <div class="h-16 flex items-center">
          <img
            src="/images/logo.webp"
            alt="Sunny Days Companion Services"
            class="h-16 w-auto object-contain"
          />
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-2">
        <!-- Main Navigation -->
        {#each navItems as item}
          <a
            href={item.href}
            data-sveltekit-preload-data
            class="px-4 py-2 rounded-lg font-medium text-warmGray-700 hover:text-orange hover:bg-orange/5 transition-colors {$page
              .url.pathname === item.href
              ? 'text-orange bg-orange/10'
              : ''}"
          >
            {item.label}
          </a>
        {/each}

        <!-- Primary CTA -->
        <a href="/connect" class="btn-primary ml-2">Get Started</a>

        <!-- Divider -->
        <div class="h-6 w-px bg-warmGray-300 mx-3"></div>

        <!-- Quick Links -->
        <div class="flex items-center space-x-1">
          <a
            href="https://sunnydayscare.caresmartz360.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 rounded-lg text-sm font-medium text-warmGray-600 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Staff
          </a>
          <a
            href="https://sunnydayscarecp.caresmartz360.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 rounded-lg text-sm font-medium text-warmGray-600 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Client
          </a>
          <a
            href="https://sunnydayscare.caresmartz360.com/prospectivecaregiver/caregiverapplicantform.aspx"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 rounded-lg text-sm font-medium text-warmGray-600 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Careers
          </a>
        </div>
      </nav>

      <!-- Tablet Navigation (simplified) -->
      <nav class="hidden md:flex lg:hidden items-center space-x-2">
        <a href="/connect" class="btn-primary">Get Started</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-lg text-warmGray-700 hover:bg-warmGray-100 transition-colors"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          {/if}
        </svg>
      </button>
    </div>

  </div>

  <!-- Mobile Navigation Overlay -->
  {#if mobileMenuOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      on:click={closeMenu}
      on:keydown={(e) => e.key === 'Escape' && closeMenu()}
      role="button"
      tabindex="0"
      aria-label="Close menu"
    ></div>
  {/if}

  <!-- Mobile Navigation Drawer -->
  <nav
    class="fixed top-0 left-0 h-full w-full bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out {mobileMenuOpen
      ? 'translate-x-0'
      : '-translate-x-full'}"
  >
    <div class="p-6">
      <div class="flex items-center justify-between mb-8">
        <div class="h-12 flex items-center">
          <img
            src="/images/logo.webp"
            alt="Sunny Days Companion Services"
            class="h-12 w-auto object-contain"
          />
        </div>
        <button
          on:click={closeMenu}
          class="p-2 rounded-lg text-warmGray-700 hover:bg-warmGray-100 transition-colors"
          aria-label="Close menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="space-y-2">
        <!-- Main Navigation -->
        {#each navItems as item}
          <a
            href={item.href}
            data-sveltekit-preload-data
            on:click={closeMenu}
            class="block px-4 py-3 rounded-lg font-medium text-warmGray-700 hover:text-orange hover:bg-orange/5 transition-colors {$page
              .url.pathname === item.href
              ? 'text-orange bg-orange/10'
              : ''}"
          >
            {item.label}
          </a>
        {/each}

        <!-- Primary CTA -->
        <a href="/connect" class="btn-primary w-full mt-4 block text-center" on:click={closeMenu}
          >Get Started</a
        >

        <!-- Divider -->
        <div class="h-px bg-warmGray-300 my-6"></div>

        <!-- Quick Links Section -->
        <div class="mb-3">
          <p class="text-xs font-semibold text-warmGray-500 uppercase tracking-wider px-4 mb-2">
            Quick Links
          </p>
          <a
            href="https://sunnydayscare.caresmartz360.com"
            target="_blank"
            rel="noopener noreferrer"
            on:click={closeMenu}
            class="block px-4 py-3 rounded-lg font-medium text-warmGray-700 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Staff Portal
          </a>
          <a
            href="https://sunnydayscarecp.caresmartz360.com"
            target="_blank"
            rel="noopener noreferrer"
            on:click={closeMenu}
            class="block px-4 py-3 rounded-lg font-medium text-warmGray-700 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Client Portal
          </a>
          <a
            href="https://sunnydayscare.caresmartz360.com/prospectivecaregiver/caregiverapplicantform.aspx"
            target="_blank"
            rel="noopener noreferrer"
            on:click={closeMenu}
            class="block px-4 py-3 rounded-lg font-medium text-warmGray-700 hover:text-orange hover:bg-orange/5 transition-colors"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
