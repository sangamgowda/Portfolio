# Sangam — AI Software Engineer Portfolio (Production-Grade)

A premium, interactive, and responsive developer portfolio designed with a futuristic HUD (Heads-Up Display) aesthetic. This project uses **Vite** as a modern bundling and asset-optimization workflow, following standard frontend engineering practices.

---

## 📂 Directory Structure

```text
Portfolio/
├── public/                  # Static assets (copied directly to output without processing)
│   ├── profile.jpg          # Portrait image
│   └── Sangam-Resume.pdf    # Downloadable Resume PDF
├── src/                     # Source files
│   ├── main.js              # Interactivity logic (typewriter, reveals, dock scroll-sync)
│   └── style.css            # Stylesheet (colors, layouts, custom scrollbars, keyframes)
├── dist/                    # Compiled and minified production build (generated via npm run build)
├── index.html               # Main entry HTML file
├── package.json             # Dependency configuration and commands
├── vite.config.js           # Vite configurations for server and packaging
└── README.md                # Documentation (this file)
```

---

## 🎨 Design System & Aesthetics

*   **Palette:**
    *   **Base Background:** Near-black navy (`#060911`) for a deep terminal-like feel.
    *   **Primary Signal:** Electric cyan (`#2DE1C4`) representing computer vision, circuits, and systems.
    *   **Secondary Accent:** Warm amber (`#FFB454`) representing solar forecasting, predictive analytics, and alerts.
*   **Typography:**
    *   **Space Grotesk** (headings) for tech-forward titles.
    *   **JetBrains Mono** (labels, eyebrows, metrics, status chips) for code-like precision.
    *   **Inter** (body text) for clean readability.
*   **Aesthetic Highlights:**
    *   Corner brackets (`.hud` containers) framing the core metrics.
    *   Pulsing status indicator (`OPEN TO OPPORTUNITIES`).
    *   Rotating bicolor gradient ring surrounding the profile image.

---

## 🛠 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher is recommended).

### 1. Install Dependencies
Navigate to the project root and run:
```bash
npm install
```

### 2. Run the Local Development Server
Start the Vite development server with hot-reloading (HMR) enabled:
```bash
npm run dev
```
*   By default, the server will open the application in your browser at `http://localhost:3000`.

### 3. Preview Production Version Locally
To compile the site and run it locally as it would behave in production:
```bash
npm run build
npm run preview
```

---

## 🚀 Deployment Guide

Vite bundles all pages and assets into a highly optimized, minified `dist/` folder when you run `npm run build`. You can deploy this directory to any host.

### Option A: Vercel (Recommended)
Vercel has native support for Vite projects.
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Import the repository on [Vercel](https://vercel.com/).
3.  Vercel will auto-detect Vite. Keep the default configurations:
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
4.  Click **Deploy**.

### Option B: Netlify
1.  Create a site on [Netlify](https://www.netlify.com/).
2.  If deploying via Git, connect your repository and set:
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `dist`
3.  If deploying manually, run `npm run build` locally and drag-and-drop the generated `dist/` directory into Netlify's web console.

### Option C: GitHub Pages
You can configure a GitHub Action to auto-deploy your site on every push:
1.  Create a file at `.github/workflows/deploy.yml` with the following contents:
    ```yaml
    name: Deploy to GitHub Pages
    on:
      push:
        branches: [ main ]
    permissions:
      contents: read
      pages: write
      id-token: write
    concurrency:
      group: 'pages'
      cancel-in-progress: true
    jobs:
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Set up Node
            uses: actions/setup-node@v4
            with:
              node-version: 20
              cache: 'npm'
          - name: Install dependencies
            run: npm ci
          - name: Build
            run: npm run build
          - name: Setup Pages
            uses: actions/configure-pages@v4
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: './dist'
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```
2.  In your repository Settings under **Pages**, set the source to **GitHub Actions**.

### Option D: Traditional Hosting (FTP/Nginx/Apache)
1.  Run `npm run build` to generate the `dist/` folder.
2.  Upload all files inside the `dist/` folder directly to your web root (e.g., `public_html` via FTP or Nginx's `html` root directory).
