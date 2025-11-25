# Humboldt's Cabinet - Sales Offer Page

A modern, responsive sales offer page for Humboldt's Cabinet featuring a clean design with smooth animations and interactive elements.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching header with call-to-action
- **Features Grid**: Highlights key benefits and values
- **Pricing Plans**: Three-tier pricing structure with featured option
- **Testimonials**: Customer reviews and feedback
- **Email Signup**: Newsletter subscription form
- **Smooth Animations**: Scroll-triggered animations and smooth navigation

## Project Structure

```
Offer Pages 1-3/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles and responsive design
├── js/
│   └── main.js         # JavaScript for interactions and animations
├── .github/
│   └── copilot-instructions.md  # Project instructions
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Live Server extension for VS Code for local development

### Running the Project

1. **Simple Method**: 
   - Open `index.html` directly in your web browser

2. **Using Live Server** (Recommended for development):
   - Install the Live Server extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The page will open at `http://localhost:5500` (or similar)

## Customization

### Colors

The color scheme is defined in CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97c160;
    --accent-color: #d4a574;
    --text-dark: #2d3436;
    --text-light: #636e72;
    --bg-light: #f8f9fa;
}
```

### Content

- **Hero Section**: Edit the heading and subtitle in the `.hero-content` section of `index.html`
- **Features**: Modify the feature cards in the `#features` section
- **Pricing**: Update pricing tiers in the `#pricing` section
- **Testimonials**: Change customer reviews in the `#testimonials` section

### Images

To add images:
1. Create an `images/` folder
2. Add your images
3. Update the relevant sections in `index.html`

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Intersection Observer API for scroll animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add actual product images
- Integrate with email service (MailChimp, SendGrid, etc.)
- Add payment processing integration
- Include analytics tracking
- Add more interactive elements

## License

This project is created for Humboldt's Cabinet.

## Contact

For questions or support, please contact: info@humboldtscabinet.com
