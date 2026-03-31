# Arganity Store Customization Package

Custom CSS and JavaScript to refine the Arganity WooCommerce store design.

---

## Files Overview

| File | Purpose |
|------|---------|
| `custom-styles.css` | Core visual refinements — colors, typography, header, hero, product cards, testimonials, footer |
| `woocommerce-fixes.css` | WooCommerce-specific overrides — shop page grid, cart, checkout, notices, my account |
| `product-page-enhancements.css` | Single product page — gallery, tabs, buttons, reviews, related products |
| `custom-scripts.js` | Interactive features — sticky header shadow, back-to-top button, search overlay |
| `admin-checklist.md` | Manual WooCommerce admin fixes to complete before applying CSS/JS |

---

## Step 1: Complete Admin Fixes First

Before applying the CSS/JS, complete the tasks in `admin-checklist.md`:
- Fix the broken shop page URL
- Re-upload missing product images
- Fix page title format
- Add product categories

---

## Step 2: Apply the CSS

### Option A: WordPress Customizer (Quick)

1. Go to **Appearance > Customize > Additional CSS**
2. Copy and paste the contents of all 3 CSS files in this order:
   1. `custom-styles.css`
   2. `woocommerce-fixes.css`
   3. `product-page-enhancements.css`
3. Click **Publish**

> **Note:** The Additional CSS field has a size limit. If you hit it, use Option B.

### Option B: Custom CSS & JS Plugin (Recommended)

1. Install the **"Simple Custom CSS and JS"** plugin from WordPress plugin directory
2. Go to **Custom CSS & JS > Add Custom CSS**
3. Create a new entry called "Arganity Styles"
4. Paste all 3 CSS files combined
5. Set it to load on **Frontend** and **In Header**
6. Click **Publish**

### Option C: Child Theme (Advanced)

1. Create a child theme folder in `wp-content/themes/your-theme-child/`
2. Add a `style.css` with the child theme header
3. Import or enqueue the custom CSS files
4. Activate the child theme

---

## Step 3: Apply the JavaScript

### Using Simple Custom CSS & JS Plugin:

1. Go to **Custom CSS & JS > Add Custom JS**
2. Create a new entry called "Arganity Scripts"
3. Paste the contents of `custom-scripts.js`
4. Set it to load on **Frontend** and **In Footer**
5. Click **Publish**

---

## Step 4: Font Setup

The brand uses **DIN Next LT Arabic**. If not already loaded by your theme:

1. Upload the font files (`.woff2`, `.woff`) to your WordPress media library or via FTP to a `/fonts/` folder
2. Add this CSS at the very top of `custom-styles.css`:

```css
@font-face {
  font-family: 'DIN Next LT Arabic';
  src: url('/wp-content/themes/your-theme/fonts/DINNextLTArabic-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DIN Next LT Arabic';
  src: url('/wp-content/themes/your-theme/fonts/DINNextLTArabic-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DIN Next LT Arabic';
  src: url('/wp-content/themes/your-theme/fonts/DINNextLTArabic-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

> Update the `url()` paths to match where you upload the font files.

---

## Brand Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Brand Green) | `#45a750` | Buttons, links, active states |
| Accent (Warm Gold) | `#E9C177` | CTAs, highlights, Moroccan touch |
| Background | `#FDFAF6` | Page background |
| Alt Background | `#F5F0E8` | Section backgrounds |
| Text | `#231f20` | Headings, body text |
| Muted Text | `#6B6B6B` | Descriptions, secondary text |
| Border | `#E8E2D9` | Dividers, card borders |

---

## What This Package Changes

- **Header**: Clean white with subtle scroll shadow, refined nav links with gold underline hover
- **Buttons**: Rounded pill-shape, green (Add to Cart) and gold (Buy Now/CTA) variants
- **Product cards**: Hover zoom + shadow lift effect, consistent styling
- **Testimonials**: Card-based layout with gold quote marks and avatar borders
- **Footer**: Dark background with organized links and gold-accented social icons
- **Product page**: Refined gallery, clean tabs, styled checkout badges
- **Cart/Checkout**: Consistent form styling, prominent CTA buttons
- **Search**: Full-screen search overlay (triggered by search icon in header)
- **Back to top**: Green floating button that appears on scroll
- **Mobile**: Responsive adjustments for all screen sizes
