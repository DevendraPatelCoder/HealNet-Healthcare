# HealNet — Digital Healthcare Website

HealNet is a fully responsive healthcare website that lets patients book appointments, consult certified doctors online, manage prescriptions, and get quick answers through an FAQ — all from one clean, modern interface.

This Website will update and came with new features in future.

---

## Live Preview

```
🔗 https://healnet-healthcare.vercel.app/
```

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, services, about, how it works, testimonials, specialist doctors, appointment booking, help desk |
| Privacy Policy | `privacy-policy.html` | Data collection & privacy terms |
| Terms & Conditions | `terms.html` | Usage terms and medical disclaimer |
| FAQs | `faq.html` | Interactive accordion of common questions |

All pages share the same header, navigation, and footer for a consistent experience site-wide.

---

## Features

- **Fully responsive design** — tested and tuned across 4 breakpoints (1200px, 1024px, 768px, 480px) for desktop, laptop, tablet, and mobile
- **Mobile hamburger navigation** — slide-in menu with smooth open/close animation, auto-closes on link tap
- **FAQ accordion** — click-to-expand questions with animated icon rotation, only one answer open at a time
- **Fluid, self-scaling images** — hero and doctor images resize smoothly with the viewport instead of jumping between fixed sizes
- **Reusable design system** — gradient borders, consistent color palette, and typography reused across every page and new section
- **Anchor-based section navigation** — nav links scroll smoothly to the right section from any page
- **Appointment booking form** — collects email, contact number, and preferred date
- **Help desk contact form**

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS variables), CSS Grid & Flexbox, media queries
- **JavaScript (Vanilla)** — DOM manipulation, event listeners, no external frameworks
- **[Font Awesome](https://fontawesome.com/)** — icon library (loaded via CDN kit)
- **Google Fonts** — Inter, Outfit, Manrope, Baloo Bhai 2

No build tools, frameworks, or package managers required — open `index.html` in a browser or run through a local dev server (e.g. Live Server).

---

## Project Structure

```
Project_01_HealNet_Healthcare_Website/
│
├── assets/
│   ├── favicon.ico
│   └── images/
│       ├── HealNet_logo.webp
│       ├── doctor_image_01.webp ... doctor_image_07.webp
│       └── patient_01.webp ... patient_04.webp
│
├── index.html              # Homepage
├── privacy-policy.html     # Privacy Policy page
├── terms.html               # Terms & Conditions page
├── faq.html                  # FAQ page with accordion
│
├── 02_style.css              # All styles (base + responsive)
├── 03_script.js              # Mobile nav toggle + FAQ accordion logic
│
└── README.md
```

---

## Getting Started

1. Clone or download this repository
2. Make sure the `assets/` folder sits in the same directory as the HTML files
3. Open `index.html` directly in your browser, **or** serve it locally for the best experience:
   - VS Code: install the **Live Server** extension → right-click `index.html` → *Open with Live Server*
   - Or any static server of your choice

No installation, build step, or dependencies needed.

---

## Responsive Breakpoints

| Breakpoint | Target Devices |
|---|---|
| `> 1200px` | Large desktops |
| `≤ 1200px` | Small laptops |
| `≤ 1024px` | Tablets (landscape) — hamburger nav activates |
| `≤ 768px`  | Tablets (portrait) |
| `≤ 480px`  | Mobile phones |

---

## Roadmap

Planned for future updates:

- [ ] Blog listing + article page
- [ ] Dedicated "Find Doctors" listing page with search/filter
- [ ] Testimonial carousel
- [ ] Scroll-triggered animations
- [ ] Working form submissions (Formspree / EmailJS integration)
- [ ] Doctor profile pages
- [ ] Basic SEO enhancements (sitemap.xml, robots.txt)

---

## Author

**Name:** Devendra Patel

**Email:** [devendrapatelcoder@gmail.com](mailto:devendrapatelcoder@gmail.com)

**GitHub:** [DevendraPatelCoder](https://github.com/DevendraPatelCoder)


Built and designed solo as a personal front-end development project. Open to feedback, suggestions, and contributions — feel free to reach out.

---

## License

This project is open for personal and educational use. Please credit the original author if reused publicly.
