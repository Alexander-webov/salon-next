# Demo - https://salon-us.netlify.app/

# Stylicle — Beauty & Wellness Booking Platform

A modern landing + booking experience for beauty and wellness salons, built with **Next.js App Router**.  
The project demonstrates real-world features: dynamic routes, server actions, form handling, and a clean responsive UI.

---

## Tech Stack

- **Next.js 16** (App Router)
- **React** + **TypeScript**
- **Server Actions** (form handling on the server)
- **Tailwind CSS**
- **react-hot-toast** (notifications)
- **Next Font** (`next/font/google`)
- **Next Image** (`next/image`)

---

## Features

### 1. Landing page (`/`)

- Hero section with background image and booking form.
- Booking form:
  - Name, phone, salon, date.
  - Uses **server action** (`bookingSalon`) to handle submission.
  - Validation on the server (required fields).
  - Success / error messages via **react-hot-toast** and `useActionState`.
  - Button state controlled with `useFormStatus` (`Sending...`, disabled while pending).
- Services section with recommended salons.
- Testimonials section with slider.
- Newsletter subscription section.
- Fully responsive layout (mobile → desktop).

### 2. Dynamic salon pages (`/salons/[slug]`)

- Predefined salon data stored in `app/lib/salonsData.ts`.
- **Dynamic routes** for each salon: `/salons/glow-bar`, `/salons/blush-room`, etc.
- Server component (`page.tsx`) resolves `params.slug` and returns 404 via `notFound()` if salon is missing.
- Client component (`SalonPageClient`) receives the salon data and renders:
  - Hero section with salon image, rating and address.
  - “About this salon” content block.
  - Service highlights (cards).
  - **Per-salon booking form** with the same server action (`bookingSalon`).

### 3. Contact page (`/contact`)

- Hero section with title and description.
- Two-column layout (image + text block).
- Contact info cards: address, email, phone.
- Contact form:
  - Name, email, phone, message.
  - Prepared for integration with a server action or API route.
- Fully responsive (stacked layout on mobile, side-by-side on desktop).

### 4. About page (`/about`)

- Hero section with title and CTA button.
- “Our values” section with three value cards.
- Split layout with image + text card describing the platform.
- “The start of the journey” section with story and methodology steps.
- Matches the design style of the homepage and footer.

---

## Project Structure (simplified)

```txt
app/
  layout.tsx           # Root layout, global styles & metadata
  page.tsx             # Home (booking landing)
  about/
    page.tsx           # About page
  contact/
    page.tsx           # Contact page
  salons/
    [slug]/
      page.tsx         # Server component: resolve salon by slug
      SalonPageClient.tsx  # Client component: UI + booking form
  components/
    Container.tsx
    Title.tsx
    Card.tsx
    BlockIcons.tsx
    SliderReview.tsx
    ButtonBookNow.tsx
  lib/
    salonsData.ts      # Static salon data (name, address, rating, slug)
  action.ts            # Server action: bookingSalon
public/
  ...                  # Images, icons, logo, etc.
```
