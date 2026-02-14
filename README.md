# Velvino Cosmetics — Static Website

Static website for **Velvino Cosmetics** (velvinocosmetics.com).

## Tech stack (all free)

- **Bootstrap 5.3** — layout, components, responsive grid
- **Font Awesome 6** — icons
- **Google Fonts** — Cormorant Garamond, Outfit (free)
- **Unsplash** — product/hero images (free to use)
- **Vanilla JS** — smooth scroll, footer year

No add-to-cart; product blocks show image, description, and price only.

## Run locally

1. Open the folder in an editor or file manager.
2. Double-click `index.html`, or run a simple local server, e.g.:
   - **Python 3:** `python -m http.server 8000` then visit `http://localhost:8000`
   - **Node (npx):** `npx serve` then open the URL shown

## Structure

- `index.html` — single-page site (hero, products, about, contact, footer)
- `css/style.css` — custom styles and cosmetics theme

## Customize

- **Products:** Edit the product cards in `index.html` (image URL, title, description, price).
- **Colors/fonts:** Adjust CSS variables and font links in `css/style.css` and `index.html`.
- **Contact:** Update email, site URL, and social links in the Contact section and footer.

All assets are loaded from CDNs; no build step required.
