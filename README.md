## Saurya Bhatt – Portfolio

This repository contains a simple, static portfolio site powered by a lightweight React setup (via CDN, no build tooling).

### Project structure

- `index.html` – main entry point that loads React and mounts the app.
- `style.css` – global styles and navbar styling.
- `main.js` – React app and navigation logic.
- `content/` – data-only files you can edit without touching layout:
  - `projects.js` – list of projects.
  - `experiences.js` – experience timeline.
  - `contact.js` – email, location, and external links.

### Running a local preview

Requirements: [Python](https://www.python.org/) 3.x installed and available on your PATH.

1. Open a terminal in the project folder:

   ```bash
   cd "C:\Users\bhatt_r9sf\OneDrive\Desktop\Portfolio"
   ```

2. Start a simple static server on port 8000:

   ```bash
   python -m http.server 8000
   ```

3. Open the site in a browser:

   - `http://localhost:8000/index.html`

To stop the server, press `Ctrl + C` in the terminal.

### Updating content

- **Projects**: edit or add entries in `content/projects.js`.
- **Experiences**: edit or add entries in `content/experiences.js`.
- **Contact**: update email, location, and links in `content/contact.js`.

No changes to `index.html` or `main.js` are required for simple content updates.

