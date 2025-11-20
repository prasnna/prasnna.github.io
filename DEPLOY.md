# Deploying Your Portfolio to GitHub Pages

## Prerequisites
*   A GitHub account.
*   Git installed on your machine.

## Steps

1.  **Create a New Repository**
    *   Go to [GitHub.com](https://github.com) and create a new repository.
    *   Name it **`prasnna.github.io`** (exactly matching your GitHub username).
    *   Make it **Public** (GitHub Pages requires public for free accounts).
    *   **Don't** initialize with README, .gitignore, or license.

2.  **Prepare the Files**
    *   Navigate to the portfolio folder in your terminal:
        ```bash
        cd C:\repo\personal-branding
        ```
    *   Initialize Git (if not already done):
        ```bash
        git init
        ```

3.  **Push to GitHub**
    *   Add all files:
        ```bash
        git add .
        ```
    *   Commit:
        ```bash
        git commit -m "Initial portfolio release"
        ```
    *   Link to your new repository:
        ```bash
        git remote add origin https://github.com/prasnna/prasnna.github.io.git
        ```
    *   Push:
        ```bash
        git branch -M main
        git push -u origin main
        ```

4.  **Enable GitHub Pages**
    *   Go to your repository **Settings** > **Pages**.
    *   Under **Build and deployment**, select **Source** as `Deploy from a branch`.
    *   Select `main` branch and `/ (root)` folder.
    *   Click **Save**.

5.  **Verify**
    *   Wait 1-2 minutes for GitHub to build your site.
    *   Your portfolio will be live at: **`https://prasnna.github.io`**
    *   Visit the link to see your live site!
