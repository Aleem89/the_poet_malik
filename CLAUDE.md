# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 15 portfolio website for "The Poet Malik" built with:

### Core Technologies
- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS 4.0** for styling with custom design system
- **Framer Motion** for animations and transitions
- **Lucide React** for iconography

### Project Structure
- **App Router**: Uses Next.js App Router with route groups
  - `app/(home)/page.tsx` - Homepage (route group for organization)
  - `app/bio/page.tsx` - Bio page
  - `app/gallery/page.tsx` - Gallery page  
  - `app/music/page.tsx` - Music page
  - `app/contact/page.tsx` - Contact page
- **Components**: Reusable UI components in `/components`
  - Each page has a corresponding content component (e.g., `HomeContent.tsx`)
  - `Header.tsx` - Navigation with mobile responsive menu
  - `Footer.tsx` - Site footer
  - `SocialLinks.tsx` - Social media links component
- **Types**: TypeScript definitions for Contentful-like data structures in `/types`

### Design System
The site uses a custom dark theme color palette defined in `globals.css`:
- `--color-off-black: #111111` (main background)
- `--color-accent-gold: #d4af37` (primary accent)
- `--color-soft-white: #f5f5f5` (main text)
- Custom utility classes for gradients, animations, and focus styles

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Framer Motion for page transitions and interactive elements
- **Image Optimization**: Next.js Image component with remote pattern support for picsum.photos
- **Custom Scrollbar**: Dark theme custom scrollbar styling
- **SEO Optimized**: Proper metadata and semantic HTML structure

### Development Notes
- Uses experimental React Compiler for optimization
- Strict TypeScript configuration with path aliases (`@/*`)
- ESLint configured with Next.js and TypeScript rules
- PostCSS setup for Tailwind CSS processing
- No current CMS integration - uses placeholder data structures

### Component Patterns
- Client components use "use client" directive for interactivity
- Server components for static content and initial rendering
- Consistent styling patterns with Tailwind utility classes
- Custom focus and hover states for accessibility