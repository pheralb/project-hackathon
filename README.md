<div align="center">
<a href="https://phck.vercel.app/">
<img src="public/images/screenshot.png">
</a>
</div>

<p></p>

<div align="center">
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#-team">
        Team
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#-overview">
        Overview
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#-features">
        Features
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#%EF%B8%8F-stack">
        Stack
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="https://phck.vercel.app" target="_blank">
        Deploy ↗︎
    </a>
</div>

</p>

<div align="center">

[![GitHub actions](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Fproject-hackathon%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/project-hackathon/goto?ref=main)
![GitHub stars](https://img.shields.io/github/stars/pheralb/project-hackathon)
![GitHub issues](https://img.shields.io/github/issues/pheralb/project-hackathon)
![GitHub forks](https://img.shields.io/github/forks/pheralb/project-hackathon)
![GitHub license](https://img.shields.io/github/license/pheralb/project-hackathon)

</div>

## ✌ Team

- [**@pheralb**](https://github.com/pheralb) - Pablo Hdez.
- [**@tmchein**](https://github.com/tmchein) - Juan Rojas.

## 🛠️ Stack

- **[Next.js](https://nextjs.org/)** with [TypeScript](https://www.typescriptlang.org/) - The React Framework for Production.
- **[Next-Auth](https://next-auth.js.org/)** - Authentication for Next.js.
- **[Prisma](https://www.prisma.io/)** with **[CockroachDB](https://www.cockroachlabs.com/)** - Next-generation Node.js and TypeScript ORM.
- **[tRPC 10](https://trpc.io/)** - End-to-end typesafe API.
- **[Tailwind CSS](https://tailwindcss.com/)** with [clsx](https://github.com/lukeed/clsx) - A utility-first CSS framework for rapidly building custom designs.
- **[Radix UI Primitives](https://www.radix-ui.com/)** - Unstyled, accessible components for building high‑quality design systems.
- **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React.
- **[Iconoir icons](https://iconoir.com/)** - A set of 1000+ free MIT-licensed high-quality SVG icons.
- **[Prettier](https://prettier.io/)** with [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - An opinionated code formatter + sort tailwindcss classes.
- **[React-Hook-Forms](https://react-hook-form.com/)** - Performant, flexible and extensible forms with easy-to-use validation.
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation.

## ✨ Features

**General:**

- [x] Authentication with Github.

**For the participant:**

- [x] The user can add his project.
- [ ] The user can edit his project before a deadline (soon).
- [ ] When the deadline is reached, the user can only see the project (soon).

**For the admin:**

- [x] The admin can add a new hackathon.
- [x] The admin can edit a hackathon.
- [x] The admin can delete a hackathon.
- [x] The admin can share the link to the hackathon.
- [x] The admin can see the list of projects.
- [x] The user can set a winner (mark a user as a winner).
- [x] The user can set a project as 'reviewed'.

## 🪐 Overview

- [**/prisma**](https://github.com/pheralb/project-hackathon/blob/main/prisma) - Database schema.
- [**/src/animations**](https://github.com/pheralb/project-hackathon/tree/main/src/animations) - Framer motion animations.
- [**/src/components**](https://github.com/pheralb/project-hackathon/tree/main/src/components) - All app components, built with Tailwind CSS.
- [**/src/env**](https://github.com/pheralb/project-hackathon/tree/main/src/env) - Validate all environment variables with Zod.
- [**/src/layout**](https://github.com/pheralb/project-hackathon/tree/main/src/layout) - App header & footer.
- [**/src/lib**](https://github.com/pheralb/project-hackathon/tree/main/src/lib) - getServerAuthSession (next-auth) & Prisma library.
- [**/src/pages/api**](https://github.com/pheralb/project-hackathon/blob/main/src/pages/api) - Next-Auth config & tRPC api route.
- [**/src/schema**](https://github.com/pheralb/project-hackathon/blob/main/src/schema) - Hackathon & Participation Zod schemas.
- [**/src/styles**](https://github.com/pheralb/project-hackathon/blob/main/src/styles) - Tailwind CSS global styles + add custom font.
- [**/src/trpc**](https://github.com/pheralb/project-hackathon/blob/main/src/trpc) - tRPC routers, initialization & global appRouter.
- [**/src/types**](https://github.com/pheralb/project-hackathon/blob/main/src/types) - Hackathon, participation & next-auth types.
- [**/src/ui**](https://github.com/pheralb/project-hackathon/blob/main/src/ui) - All UI components built with Radix + Tailwind (clsx).
- [**/src/ui/icons**](https://github.com/pheralb/project-hackathon/blob/main/src/ui/icons) - Iconoir icons \*.

* We have extracted the icons used in the app due to a bug in the React library - [issue](https://github.com/iconoir-icons/iconoir/issues/243).

## 🚀 Getting Started

### **Project settings:**

1. Clone or [fork](git@github.com:pheralb/project-hackathon.git) the repository:

```bash
git@github.com:pheralb/project-hackathon.git
```

2. Install dependencies with your favorite package manager:

```bash
# with npm:
npm install

# with pnpm:
pnpm install

# with yarn:
yarn install

# with ultra:
ultra install
```

### **Environment variables:**

3. Create a `.env` file in the root of the project with the following variables:

```env
# CockroachDB connection string:
DATABASE_URL = ""

# Next-Auth config:
NEXTAUTH_SECRET="" # Generate a random string.
NEXTAUTH_URL="" # Your project url, e.g. http://localhost:3000.

# Github OAuth Provider:
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

### **CockroachDB settings:**

4. [**Create a free cluster**](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html?#create-a-free-cluster).
5. [**Create a SQL user**](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html?#create-a-sql-user).
6. To connect to the user, copy the connection string and paste it in the `.env` file,
   replacing the `DATABASE_URL` variable.

### **Github OAuth Provider settings:**

7. [Click here to create new Github OAuth app](https://github.com/settings/applications/new).
8. Go to "Client secrets" and generate new client secret and and paste it into GITHUB_CLIENT_SECRET env.
9. Copy the Client ID and paste it into GITHUB_ID env.

### **Run the project:**

10. Run in your terminal:

```bash
# with npm:
npm run dev

# with pnpm:
pnpm run dev

# with yarn:
yarn dev

# with ultra:
ultra dev
```

and open [http://localhost:3000](http://localhost:3000) 🚀.

## 😊 Contributing

<a href="https://github.com/pheralb/project-hackathon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pheralb/project-hackathon" />
</a>

<p></p>

## ☁ Deploy

- **Vercel**: [https://phck.vercel.app](https://phck.vercel.app)

## 🔑 License

- [**MIT License**](https://github.com/pheralb/project-hackathon/blob/main/LICENSE).
