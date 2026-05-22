# 🚀 Portfolio Deployment & Preview Guide

This guide provides step-by-step instructions on how to **preview your production build locally** and **deploy your portfolio website** to popular hosting platforms like **GitHub Pages**, **Vercel**, and **Netlify**.

---

## ⚠️ Important: Local File Browser Warning (`file://` Protocol CORS Block)

If you compile the project (`npm run build`) and then try to **double-click the `dist/index.html` file** directly in Windows Explorer, you will see a **completely blank page** and errors in your browser console:

> **Access to script at 'file:///C:/.../dist/assets/index.js' from origin 'null' has been blocked by CORS policy...**

### Why does this happen?
This is a standard **browser security feature**. Modern web applications use **ES Modules** (`type="module"`), which modern browsers explicitly **block** from loading via the `file://` protocol. They only allow ES Modules to load over an `http://` or `https://` server protocol.

### How to preview your build locally:
To view your built production website locally on your computer, you must run it through a local preview server:
1. Open your terminal in the project folder.
2. Run the preview command:
   ```bash
   npm run preview
   ```
3. Open the link provided in the terminal (usually `http://localhost:4173/`). It will load **perfectly** and flawlessly!

---

## 🌐 1. Deploying to GitHub Pages (Recommended)

We have pre-configured **two options** for publishing your website to GitHub Pages:

### Option A: Fully Automated Deployment (Via GitHub Actions)
Whenever you push your code to your GitHub repository, a GitHub Action will automatically build and deploy it!

1. Create a new repository on GitHub (e.g., `portfolio`).
2. Initialize Git, commit, and link your local folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. In your browser, open your GitHub repository page:
   - Go to **Settings** -> **Pages** (on the left menu).
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Under **Branch**, select **`gh-pages`** and folder **`/ (root)`**, then click **Save**.
4. That's it! In a couple of minutes, your portfolio will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`!

### Option B: Local-to-GitHub Deployment (Via CLI)
If you want to manually trigger a build and publish it directly from your terminal:

1. Link your project to GitHub (if not already done):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This command will automatically run `npm run build` first, compile the project, and then push the `dist/` folder content to your `gh-pages` branch on GitHub!*

---

## ⚡ 2. Deploying to Vercel (Easiest)

Vercel is the premier hosting platform for React and Vite projects and is completely **free**!

1. Sign up for a free account at [Vercel](https://vercel.com).
2. Install the Vercel CLI globally (optional):
   ```bash
   npm install -g vercel
   ```
   And run `vercel` in the project root folder.
3. **Or (Recommended)**: Import the repository directly in the Vercel Dashboard:
   - Connect Vercel to your GitHub account.
   - Click **Add New** -> **Project**.
   - Select your portfolio repository.
   - Vercel will auto-detect **Vite** and configure the build settings automatically!
   - Click **Deploy**! In 30 seconds, your site will be live on a premium custom Vercel domain.

---

## 🟢 3. Deploying to Netlify

Netlify is another excellent free platform for hosting React apps:

1. Sign up for a free account at [Netlify](https://www.netlify.com).
2. Go to your Netlify dashboard and click **Add new site** -> **Import an existing project**.
3. Link your GitHub account and select your portfolio repository.
4. Leave the default settings (Build Command: `npm run build`, Publish Directory: `dist`).
5. Click **Deploy Site**!

---

## 📁 How the NPTEL NLP Certificate Works Now

We have upgraded the NPTEL certificate integration! Sarthak's actual verified certificate image is saved inside the `public/` directory as `sarthak_jain_nptel_nlp.jpg`.

- **In-App Immersive Lightbox Modal**: When recruiters click **"View Certificate"**, it will instantly load a gorgeous glassmorphism full-screen lightbox modal displaying the high-quality certificate directly in the app. This creates an elegant cinematic flow and operates fully offline and online!
- **Download Controls**: The modal features quick-action buttons to open the certificate in high resolution in a new tab or download it directly to the recruiter's system!
