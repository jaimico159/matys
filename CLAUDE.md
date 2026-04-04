# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
hugo server

# Production build
hugo --minify

# Docker build
docker build -t matys-laundry .
```

## Architecture

This is a **Hugo static site** for Matys Laundry (Lavandería Matys), a laundry business in Arequipa, Peru. It uses **no external Hugo theme** — all layouts are custom-built.

**UI Framework:** Materialize CSS (Material Design) with jQuery, bundled in `/static/materialize/`.

**Template system:** Hugo block-based templates via `layouts/_default/baseof.html`. Each section defines its own blocks:
- `{{ define "nav" }}` — navbar (customized per page)
- `{{ define "slider" }}` — hero image carousel
- `{{ define "main" }}` — page content

**Sections:** `servicios` (services), `acerca` (about), `promociones` (promotions). Each section has `list.html` and `single.html` in `layouts/<section>/`. Content lives in `content/<section>/_index.md`.

**Partials:** `layouts/partials/fixed_nav.html` (navigation) and `layouts/partials/footer.html` (footer with Google Maps embed, WhatsApp button, contact info).

**Static assets:** `/static/assets/images/` contains all site images. Custom CSS is in `/static/assets/css/styles.css`. Font Awesome icons are bundled locally.

**Config:** `hugo.toml` is the primary config (`baseURL`, `languageCode = 'es-PE'`, `title`). `config.toml` adds sitemap settings.

**Deployment:** Multi-stage Docker build — Hugo builds the site, then Nginx serves it from the generated `/public` directory.
