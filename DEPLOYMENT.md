# Deployment Guide

This guide covers deploying the portfolio to GitHub Pages with automated testing.

## Automated Deployment (Recommended)

### Setup

1. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Under "Build and deployment"
   - Select "GitHub Actions" as the source

2. **Configure Workflow**
   - The workflow file is already configured at `.github/workflows/test-and-deploy.yml`
   - It automatically runs on every push to `main` branch

### How It Works

1. **Test Phase**
   - Installs dependencies
   - Runs linter checks
   - Builds the project
   - Verifies build output

2. **Deploy Phase** (only on successful test)
   - Builds the production version
   - Uploads to GitHub Pages
   - Website is live at: `https://Charan4545454.github.io/portfolio`

### Monitoring Deployment

1. Go to repository's "Actions" tab
2. View workflow runs and logs
3. Check deployment status in "Deployments" section

## Manual Deployment

### Prerequisites
- Git configured
- GitHub CLI installed (`gh` command)
- Node.js and npm installed

### Steps

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Verify deployment**
   - Visit: `https://Charan4545454.github.io/portfolio`

## Troubleshooting

### Workflow Failed

**Problem**: GitHub Actions workflow shows failure
**Solution**:
```bash
# Check logs in Actions tab
# Common issues:
# 1. Dependencies not installing
npm ci  # Use instead of npm install

# 2. Build errors
npm run build  # Test locally first

# 3. Node version mismatch
# Edit .github/workflows/test-and-deploy.yml
# Change node-version to match your local version
```

### Pages Not Deploying

**Problem**: No GitHub Pages deployed
**Solution**:
1. Check Settings → Pages → Source is set to "GitHub Actions"
2. Verify workflow completed successfully
3. Check "Deployments" section for errors

### 404 Error After Deployment

**Problem**: Getting 404 when visiting deployed site
**Solution**:
- Ensure `dist` folder was created in build
- Check GitHub Pages URL format
- Verify the repository is public

### Styling Issues After Deployment

**Problem**: Styles not loading correctly
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for CSS errors
- Verify Vite build output includes CSS files

## Performance Optimization

### Current Optimizations
- Code splitting (React vendor separate)
- Minification enabled
- CSS purging via Tailwind
- Asset optimization

### Further Optimization
```bash
# Analyze bundle
npm run build -- --report

# Check performance
npm run preview
# Use browser DevTools > Performance tab
```

## Environment Variables

Currently, no environment variables are required. To add them:

1. Create `.env` file locally
2. Add to `.github/workflows/test-and-deploy.yml`:
   ```yaml
   env:
     VITE_API_URL: ${{ secrets.VITE_API_URL }}
   ```

## Rollback Deployment

If you need to revert to a previous version:

1. **Using GitHub UI**
   - Go to Deployments
   - Select previous deployment
   - Click "Reactivate"

2. **Using Git**
   ```bash
   git revert HEAD
   git push
   ```

## Custom Domain

To use a custom domain:

1. Create `CNAME` file in `public/` with your domain
2. Configure DNS settings at your domain provider
3. Update repository Settings → Pages
4. Point to your custom domain

Example `CNAME` file:
```
yourdomain.com
```

## Scheduled Deployments

To deploy on a schedule (e.g., daily):

Edit `.github/workflows/test-and-deploy.yml`:
```yaml
on:
  push:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
```

## Security

### Best Practices
- Keep dependencies updated: `npm audit`
- Review workflow permissions in Settings
- Use GitHub Secrets for sensitive data
- Enable branch protection on `main`

### Checking Security
```bash
npm audit
npm audit fix
```

## Monitoring

### Check Deployment Status
- GitHub Actions logs
- Deployment history
- Performance metrics

### Analytics
- Set up Google Analytics in `index.html`
- Monitor user interactions

## Support

For deployment issues:
1. Check GitHub Actions logs
2. Review error messages carefully
3. Test build locally: `npm run build`
4. Check GitHub Pages documentation
5. Open an issue on the repository

---

**Last Updated**: 2026-08-19
**Status**: ✓ Production Ready
