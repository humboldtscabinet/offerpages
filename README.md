# Age Verification Buffer Page

A simple HTML buffer page for cold email campaigns with age verification (21+).

## Features

- Clean, minimal design
- Age verification checkpoint with checkbox
- Disabled "Enter" button until user confirms age
- Redirect to target page after verification

## Usage

1. Open `index.html` in a web browser
2. Update the redirect URL in the JavaScript:
   ```javascript
   window.location.href = "https://yourpage.com";
   ```
   Replace `https://yourpage.com` with your actual destination URL.

## File Structure

```
.
├── .github/
│   └── copilot-instructions.md
├── index.html
└── README.md
```

## Customization

- **Styling**: Modify the `<style>` section in `index.html`
- **Age requirement**: Update the label text if needed
- **Redirect URL**: Change `window.location.href` value in the script

## Deployment

### Railway Deployment

1. Install Railway CLI (if not already installed):
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize and deploy:
   ```bash
   railway init
   railway up
   ```

4. Open your deployed site:
   ```bash
   railway open
   ```

The project includes `railway.json` and `nixpacks.toml` configuration files for automatic deployment.

### Alternative Deployment

Upload `index.html` to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.). No build process or dependencies required.
