# Prabjot Kaur - Portfolio Website

A modern, professional one-page portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a dark OLED theme optimized for readability and performance.

## Features

- **One-Page Layout**: Smooth scrolling single-page application with all sections accessible from one page
- **Dark Mode Theme**: Professional OLED dark theme with high contrast and excellent readability
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Accessibility**: WCAG AAA compliant with proper ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Fast loading with optimized fonts and images
- **Professional Typography**: Using Archivo and Space Grotesk font pairing
- **Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS

## Sections

1. **Hero Section**: Name, title, summary, and primary contact buttons
2. **Experience**: Timeline of professional experience with key achievements
3. **Projects**: Showcase of major projects including AI SEO Analyzer, Shopify Merchant Tools, and Pomodoro Pulse
4. **Skills**: Categorized display of technical skills
5. **Education & Certifications**: Academic background and professional certifications
6. **Contact Footer**: Multiple contact methods with social links

## Tech Stack

- **Framework**: Next.js 16.2.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React (professional SVG icons)
- **Fonts**: Google Fonts (Archivo & Space Grotesk)

## Design System

The portfolio follows a professionally designed system based on UI/UX Pro Max recommendations:

- **Style**: Dark Mode (OLED) - optimized for low light and OLED devices
- **Color Palette**: Monochrome with blue accent (#2563EB)
- **Typography**: Archivo (headings) / Space Grotesk (body)
- **Effects**: Minimal glow, smooth transitions (150-300ms), high contrast
- **Accessibility**: 4.5:1 minimum contrast ratio, visible focus states, keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
portfolio-app/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main portfolio page
├── public/                   # Static assets
├── node_modules/             # Dependencies
└── package.json              # Project configuration
```

## Customization

### Update Personal Information

Edit the data objects in `app/page.tsx`:

- `personalInfo`: Name, contact details, social links
- `experience`: Work history
- `projects`: Portfolio projects
- `skills`: Technical skills
- `education`: Academic background
- `certifications`: Professional certifications

### Modify Design

Design tokens are defined in `app/globals.css`:

```css
:root {
  --color-primary: #18181B;
  --color-accent: #2563EB;
  --color-background: #09090B;
  /* ... more tokens */
}
```

## About 21st.dev Templates

Regarding the 21st.dev templates you mentioned:

To integrate 21st.dev templates, you would need to:

1. Visit https://21st.dev/home
2. Browse and select the components you want
3. Install them via their CLI or copy the component code
4. Import and integrate into your portfolio pages

The current portfolio is built with a custom design system but is fully compatible with adding 21st.dev components. Simply install their components and import them where needed.

## Performance Features

- ✓ Optimized Google Fonts loading with `display=swap`
- ✓ Responsive images with proper alt text
- ✓ Minimal JavaScript bundle
- ✓ CSS-in-JS with Tailwind for optimal performance
- ✓ Reduced motion support for accessibility
- ✓ Semantic HTML for SEO

## Accessibility Features

- ✓ ARIA labels on all interactive elements
- ✓ Visible focus states for keyboard navigation
- ✓ Minimum 4.5:1 contrast ratios
- ✓ Semantic HTML structure
- ✓ Screen reader friendly
- ✓ Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live with a production URL

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

© 2026 Prabjot Kaur. All rights reserved.

## Contact

- Email: prabjotkaur4@gmail.com
- LinkedIn: [Prabjot Kaur](https://www.linkedin.com/in/prabjot-kaur-10b6874b/)
- GitHub: [@Prabjot616](https://github.com/Prabjot616)
