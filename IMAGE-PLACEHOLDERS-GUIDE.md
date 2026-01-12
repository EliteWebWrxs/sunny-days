# Image Placeholder Guide

This guide explains where and how to add your background images to the Sunny Days Companion Services website.

## Where to Add Your Images

All your images should be placed in the `/static/images/` directory. They will be accessible at `/images/your-image-name.jpg` in the website.

## Image Placeholder Locations

### Home Page (`src/routes/+page.svelte`)

1. **Hero Section** (Line ~11)
   - Current: Gradient background
   - Suggested image: A warm, welcoming photo of companions with seniors
   - How to add: Add `style="background-image: url('/images/your-hero-image.jpg'); background-size: cover; background-position: center;"` to the `<section>` tag
   - Adjust the overlay opacity on line 14 if needed (currently `from-white/90 via-white/85 to-white/90`)

2. **Image Section 1 - Companion Care** (Line ~87)
   - Current: Gold/orange gradient
   - Suggested image: Companions engaging with clients, showing conversation and activities
   - How to add: Add `style="background-image: url('/images/companion-care.jpg');"` to the `<section>` tag
   - Adjust the dark overlay opacity on line 89 if needed (currently `bg-warmGray-900/40`)

3. **Image Section 2 - Community** (Line ~231)
   - Current: Orange/gold gradient
   - Suggested image: Community setting, outdoor activities, or group interactions
   - How to add: Add `style="background-image: url('/images/community-care.jpg');"` to the `<section>` tag
   - Adjust the dark overlay opacity on line 233 if needed

### Services Page (`src/routes/services/+page.svelte`)

1. **Hero Section** (Line ~12)
   - Current: Gradient background
   - Suggested image: Professional companions providing various services
   - How to add: Add `style="background-image: url('/images/services-hero.jpg');"` to the `<section>` tag
   - Adjust the overlay opacity on line 14 if needed

2. **Image Section - Quality Care** (Line ~246)
   - Current: Gold/orange gradient
   - Suggested image: Close-up of quality care being provided, showing professionalism
   - How to add: Add `style="background-image: url('/images/quality-care.jpg');"` to the `<section>` tag
   - Adjust the dark overlay opacity on line 248 if needed

### Connect Page (`src/routes/connect/+page.svelte`)

1. **Hero Section** (Line ~48)
   - Current: Gradient background
   - Suggested image: Welcoming, approachable image that encourages contact
   - How to add: Add `style="background-image: url('/images/connect-hero.jpg');"` to the `<section>` tag
   - Adjust the overlay opacity on line 50 if needed

2. **Image Section - Ready to Help** (Line ~173)
   - Current: Gold/orange gradient
   - Suggested image: Supportive, listening environment or consultation setting
   - How to add: Add `style="background-image: url('/images/ready-to-help.jpg');"` to the `<section>` tag
   - Adjust the dark overlay opacity on line 175 if needed

## Image Specifications

### Recommended Settings:
- **Format**: JPG or WebP (WebP preferred for better performance)
- **Dimensions**: At least 1920px wide for desktop displays
- **Aspect Ratio**: 16:9 or wider for full-width sections
- **File Size**: Optimize images to be under 500KB each for faster loading
- **Quality**: Balance between quality and file size (70-80% JPEG quality)

### Image Optimization Tips:
1. Use tools like TinyPNG or ImageOptim to compress images
2. Consider using WebP format for better compression
3. Ensure images are bright enough to work with the overlay

## How to Add an Image

1. Place your image in `/static/images/`
2. Find the section you want to update (use the line numbers above)
3. Add the `style` attribute to the `<section>` tag:
   ```html
   <section class="..." style="background-image: url('/images/your-image.jpg'); background-size: cover; background-position: center;">
   ```

## Adjusting Overlays

Each image section has an overlay to ensure text remains readable. You can adjust the opacity:

- **Light overlay** (for hero sections): `from-white/90 via-white/85 to-white/90`
  - Change numbers (0-100) to adjust transparency
  - Lower numbers = more image visible

- **Dark overlay** (for image sections with white text): `bg-warmGray-900/40`
  - Change the number after `/` (0-100) to adjust darkness
  - Lower numbers = lighter overlay

## Example

Before:
```html
<section class="relative h-96 bg-gradient-to-r from-gold/20 to-orange/20 bg-cover bg-center bg-no-repeat">
```

After:
```html
<section class="relative h-96 bg-gradient-to-r from-gold/20 to-orange/20 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/companion-care.jpg');">
```

## Need Help?

If you need assistance with images or styling, refer to the Tailwind CSS documentation for background utilities, or reach out for support.
