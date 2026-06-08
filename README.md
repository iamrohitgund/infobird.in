# infobird.in

A modern tech blog built with Next.js, Tailwind CSS, and MDX.

## Stack

- Next.js
- React
- Tailwind CSS
- MDX via `next-mdx-remote`
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production Build

```bash
npm run build
npm run start
```

## Content

Blog posts live in `posts/*.mdx`.

Each post should include frontmatter:

```md
---
title: Post title
description: Short summary
date: June 1 2026
---
```
