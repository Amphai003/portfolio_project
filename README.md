# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Docker & CI

This project includes a production-ready `Dockerfile` (multi-stage) and a `docker-compose.yml` for local testing. It also includes a GitHub Actions workflow that builds the app, runs lint, builds a Docker image and pushes it to Docker Hub.

### GitHub Actions

The workflow is located at `.github/workflows/ci.yml` and runs on pushes to `main` and on pull requests targeting `main`.

Secrets required in your repository settings:
- `DOCKERHUB_USERNAME` — your Docker Hub username or organization
- `DOCKERHUB_TOKEN` — a Docker Hub access token (recommended) or password

What the workflow does:
- Checks out the code
- Installs deps with `npm ci`
- Runs `npm run lint`
- Runs `npm run build` (Vite)
- Logs in to Docker Hub and pushes the built image tagged as `${DOCKERHUB_USERNAME}/portfolio_project:latest` and also with the commit SHA

### Local Docker / docker-compose

Build and run locally (docker must be installed):

```cmd
docker-compose up --build
```

Open http://localhost:8080

Or build and run the image directly:

```cmd
docker build -t portfolio_project:latest .
docker run --rm -p 8080:80 portfolio_project:latest
```

