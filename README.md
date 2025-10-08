# Local Development

## Node.js Version

You can use nvm to manage your Node versions or manually install the Node version in the .nvmrc file.

```bash
nvm use # Ensure the correct Node.js version is installed
```

## Installing Dependencies

PNPM is being used as the package manager: https://pnpm.io/installation

```bash
pnpm install
```

## Starting Next.js Development Server

```bash
pnpm dev
```

# Deployment

## Deployment Tool

Kamal is being used to deploy the app to a private VPS: https://kamal-deploy.org. **Be sure to install version 2**. The configuration can be found in `config/deploy.yaml` and the secrets can be found in `.kamal/secrets`.

TODO: Add information on how deployment works
