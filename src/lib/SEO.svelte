<script>
  export let title = 'Sunny Days Companion Services - Compassionate Care for Your Loved Ones';
  export let description =
    'Sunny Days Companion Services provides warm, professional companion care to enhance quality of life. Offering companionship, meal prep, errands, and more.';
  export let url = 'https://sunnydayscare.com';
  export let image = 'https://sunnydayscare.com/images/logo.webp';
  export let type = 'website';
  /** @type {any} */
  export let schema = null;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content="Sunny Days Companion Services" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />

  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="author" content="Sunny Days Companion Services" />

  <!-- Schema.org markup -->
  {#if schema}
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
  {/if}
</svelte:head>
