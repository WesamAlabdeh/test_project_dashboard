## Dashboard – Run Guide (Vite + React 18 + Ant Design)

This guide explains how to install, configure, run, and build the dashboard locally.

### Prerequisites

- Node.js 18+ (LTS recommended) and npm 9+

### Quick start

```sh
cd dashboard
npm install
copy .env.example .env   # or manually create .env
npm start                 # runs on http://localhost:3000
```

### Environment variables

Vite is configured to load variables that start with `REACT_APP_` (see `vite.config.mjs`). Create a `.env` file in the `dashboard` folder with at least:

```dotenv
REACT_APP_BASE_URL=http://localhost:8000/api
REACT_APP_IMAGE_BASE_URL=http://localhost:8000/storage
```

- **REACT_APP_BASE_URL**: Required. Backend API base URL used by Axios.
- **REACT_APP_IMAGE_BASE_URL**: Optional, but recommended if the app displays media from your backend.

After changing `.env`, restart the dev server.

### Available scripts

- `npm start`: Start Vite dev server on port 3000.
- `npm run build`: Type-check and build to `dist/`.
- `npm run preview`: Preview the production build (default port 4173). You can change the port: `npm run preview -- --port=5000`.

Code generators (optional):

- `npm run g:api`, `npm run g:column`, `npm run g:type`, `npm run g:page`, `npm run g:createPage`, `npm run g:updatePage`, `npm run g:form`, `npm run g:formUtil`, `npm run g:routes`, `npm run g:permissions`, `npm run g:dashboard`.

### Build for production

```sh
cd dashboard
npm run build
# serve the dist/ folder with any static server
npm run preview  # optional local preview
```

### Troubleshooting

- Port already in use: `npm start -- --port=3001`.
- Env not applied: Ensure keys start with `REACT_APP_`, the `.env` file is inside `dashboard/`, and the server is restarted.
- Windows PowerShell one-off env: `$env:REACT_APP_BASE_URL='http://localhost:8000/api'; npm start` (prefer using `.env`).

### Notes

- Source lives in `src/`, with module alias `@Module` pointing to `src/Module`.
- Axios base URLs come from the envs above.
