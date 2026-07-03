# Loomara

Artifact-driven website assembler and publishing toolkit.

Loomara is an artifact-driven website assembler. It begins as the
engine behind `suhail.ink` and is designed to consume versioned artifacts
from specialized producers such as Codexa, photography pipelines, software
release systems, and tutorial-media tools.

## Current status

This repository contains the first project scaffold:

- an Astro website under `apps/website`
- the installable `loomara` CLI under `packages/cli`
- a private core package under `packages/core`
- GitHub Actions for formatting, linting, type checking, tests, and builds

The current implementation is deliberately small. Codexa integration and the
first artifact renderer will be added as the next vertical slice.

## Requirements

- Node.js 22.12 or newer
- pnpm 10

## Development

```bash
pnpm install
pnpm check
pnpm test
pnpm build
pnpm dev
```

Run the CLI locally:

```bash
pnpm loomara --help
pnpm loomara doctor
```

## Architecture

```text
specialized artifact producers
        ↓
versioned artifacts
        ↓
Loomara
        ↓
static and dynamic website
```

Codexa remains responsible for compiling structured Git-native content.
Loomara consumes published artifact contracts and owns website
assembly, rendering, application integration, and deployment.

## License

MIT
