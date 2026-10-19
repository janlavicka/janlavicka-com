# janlavicka.com

[![Deploy](https://img.shields.io/github/actions/workflow/status/janlavicka/janlavicka-com/deployment.yaml?label=Deploy&logo=github)](https://github.com/janlavicka/janlavicka-com/actions/workflows/deployment.yaml)
[![CI](https://img.shields.io/github/actions/workflow/status/janlavicka/janlavicka-com/ci.yaml?label=CI&logo=github)](https://github.com/janlavicka/janlavicka-com/actions/workflows/ci.yaml)
[![Linted with oxlint](https://img.shields.io/badge/Linted_with-oxlint-3196e5)](https://oxc.rs/docs/guide/usage/linter)
[![Formatted with oxfmt](https://img.shields.io/badge/Formatted_with-oxfmt-1f2937)](https://oxc.rs/docs/guide/usage/formatter)

Source code of my personal website - a React Router app running on Cloudflare Workers.

## Tech stack

- React 19 + React Router 8 (SSR) on Cloudflare Workers
- Tailwind CSS 4
- PostHog
- TypeScript, Vite, Vitest + Playwright
- oxlint + oxfmt for lint and format

## Getting Started

- Install dependencies `npm install`
- Copy the env file `cp .env.example .env` and fill in the values
- Run development server `npm run dev`
