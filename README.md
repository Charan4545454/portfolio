# AI/ML Engineer Portfolio

A modern, interactive personal portfolio website built with React, Tailwind CSS, and Vite. Features a glassmorphism design with glowing gradient accents and live activity visualizers.

## Features

- 🎨 Modern glassmorphism UI with glowing effects
- 📱 Fully responsive design
- ⚡ Built with React + Vite for fast development and production builds
- 🎯 Live GitHub metrics and LeetCode progress visualization
- 🔗 Social links integration
- 💼 Skills, projects, and certifications showcase
- 🌙 Dark theme optimized for developer portfolios

## Tech Stack

- **React 19.2** - UI framework
- **Vite 8.2** - Build tool and dev server
- **Tailwind CSS 4.3** - Utility-first CSS framework
- **Lucide React 1.32** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
npm run build
npm run preview
```

## Deployment

### GitHub Pages

This project is configured to deploy to GitHub Pages at `https://github.com/Charan4545454/portfolio`

#### Deploy Automatically

```bash
npm run deploy
```

This runs the build and pushes to GitHub Pages using the `gh` CLI.

#### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages:
   ```bash
   gh pages deploy dist
   ```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch and `/ (root)` as the publish directory

## Project Structure

```
src/
├── Portfolio.jsx      # Main portfolio component
├── App.jsx            # React app entry
├── main.jsx           # DOM mount point
├── index.css          # Tailwind directives
└── assets/            # Static assets
```

## Customization

### Update Personal Info

Edit the data arrays in `src/Portfolio.jsx`:
- `socials` - Social media links
- `skillGroups` - Programming skills and technologies
- `projects` - Portfolio projects
- `certifications` - Professional certifications
- `contributionCells` - GitHub contribution data
- `leetCodeBreakdown` - LeetCode statistics

### Styling

The portfolio uses Tailwind CSS classes. Customize colors and spacing in `tailwind.config.js`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run Oxlint code quality checks

## License

MIT - Feel free to use this project as a template for your own portfolio

