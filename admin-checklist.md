# Arganity WooCommerce Admin Fixes Checklist

Complete these fixes in your WordPress admin panel before applying the CSS/JS customizations.

---

## 1. Fix Broken Shop Page URL

**Problem:** `/shop` shows an empty page. The actual shop is at `/shop-2`.

**Fix:**
1. Go to **WooCommerce > Settings > Products** tab
2. Under **Shop page**, select the correct page (the one that has your products)
3. Click **Save changes**
4. Alternatively, delete the empty `/shop` page to avoid confusion

---

## 2. Fix Missing Product Images

**Problem:** Anti-Age Expert Cream and Natural Moroccan Cannabis Oil show blank images on homepage.

**Fix:**
1. Go to **Products > All Products**
2. Edit **Anti-Age Expert Cream**
3. In the right sidebar, click **Set product image** and upload/select the correct image
4. Also add images to the **Product gallery** section
5. Repeat for **Natural Moroccan Cannabis Oil**
6. Click **Update** for each product

---

## 3. Fix Page Titles (Trailing Dash)

**Problem:** Page titles show "Home -" with a trailing dash and no site name.

**Fix:**
1. Go to **Settings > General**
2. Set **Site Title** to `Arganity`
3. Set **Tagline** to `Moroccan Beauty Secrets` (or your preferred tagline)
4. If using an SEO plugin (Yoast/RankMath), go to its settings and configure the title separator and format

---

## 4. Add Product Categories

**Fix:**
1. Go to **Products > Categories**
2. Create these categories:
   - **Serums** (slug: serums)
   - **Creams** (slug: creams)
   - **Oils** (slug: oils)
   - **Hair Care** (slug: hair-care)
3. Assign each product to its appropriate category
4. Optionally add a category description and thumbnail image

---

## 5. Recommended Plugins

Install these if not already active:

| Plugin | Purpose |
|--------|---------|
| **Yoast SEO** or **RankMath** | SEO optimization, meta descriptions, sitemaps |
| **WP Super Cache** or **LiteSpeed Cache** | Page caching for faster load times |
| **Smush** or **ShortPixel** | Image compression and WebP conversion |
| **Custom CSS & JS** | Easy way to add the custom CSS/JS files from this project |
| **WPML** or **Polylang** | If you want full Arabic translation support |

---

## 6. Image Optimization

For all product images:
- Use **1000x1000px** minimum for product images (square aspect ratio)
- Save as **WebP** format when possible (or use Smush plugin to auto-convert)
- Keep file sizes under **200KB** per image
- Use descriptive filenames: `arganity-power-lifting-serum.webp` (not `IMG_2847.jpg`)
- Add **Alt text** to every image for SEO (e.g., "Arganity Power Lifting Serum - Organic Prickly Pear Seed Oil")
