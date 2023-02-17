<div align="center">
    <!-- <img src="" width="80" /> -->
</div>

<p align="center">Open Source Hackathon Management</p>

<div align="center">
    <a href="#-getting-started">
        Getting Started
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
    <a href="https://phck.vercel.app/" target="_blank">
        Deploy
    </a>
</div>

</p>

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/pheralb/project-hackathon)
![GitHub issues](https://img.shields.io/github/issues/pheralb/project-hackathon)
![GitHub forks](https://img.shields.io/github/forks/pheralb/project-hackathon)
![GitHub license](https://img.shields.io/github/license/pheralb/project-hackathon)

</div>

## 🛠️ Stack

- **[Next.js](https://nextjs.org/)** with [TypeScript](https://www.typescriptlang.org/) - The React Framework for Production.
- **[Supabase](https://supabase.io/)** - An open source Firebase alternative.
- **[Tailwind CSS](https://tailwindcss.com/)** with [clsx](https://github.com/lukeed/clsx) - A utility-first CSS framework for rapidly building custom designs.
- **[Radix UI Primitives](https://www.radix-ui.com/)** - Unstyled, accessible components for building high‑quality design systems.
- **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React.
- **[Iconoir icons](https://iconoir.com/)** - A set of 1000+ free MIT-licensed high-quality SVG icons.
- **[Prettier](https://prettier.io/)** with [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - An opinionated code formatter + sort tailwindcss classes.
- **[React-Hook-Forms](https://react-hook-form.com/)** with [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Performant, flexible and extensible forms with easy-to-use validation.
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation.

## ✨ Features

**For the participant:**

- [ ] The user can add his project.
- [ ] The user can edit his project before a deadline.
- [ ] When the deadline is reached, the user can only see the project.

**For the admin:**

- [ ] The admin can add a new hackathon.
- [ ] The admin can edit a hackathon.
- [ ] The admin can delete a hackathon.
- [ ] The admin can share the link to the hackathon.
- [ ] The admin can see the list of participants.
- [ ] The admin can see the list of projects.
- [ ] The user can set a winner (mark a user as a winner).
- [ ] The user can set a project as 'reviewed'.

## 🚀 Getting Started

**Project settings:**

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

3. Create a `.env` file in the root of the project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

**Supabase settings:**

1. Create a new [Supabase account](https://app.supabase.com/).
2. Create a new database & select the region.
3. Go to **authentication** -> **providers** -> activate **Github** with your client ID, client secret & redirect url. Then click on 'Save'.
4. Go to **project settings** -> **api**, copy the following variables and paste them into .env file:

- **Project url**: _NEXT_PUBLIC_SUPABASE_URL_.
- **Project API keys** -> **anon public**: _NEXT_PUBLIC_SUPABASE_ANON_KEY_.

**Run the development server:**

1. Run in your terminal:

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

**Deployment:**

We recommend deploying your app to Vercel. It makes it super easy to deploy Next.js apps:

- [Getting Started with Next.js on Vercel](https://vercel.com/docs/concepts/next.js/overview).
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## 📦 Overview

```
📂 .vscode      | Visual Studio Code recommended extensions for the project.
📂 public       | Images, fonts, manifest files.
📂 src
|- 📂 env       | Manage environment variables with Zod.
|- 📂 layout    | All layouts.
|- 📂 pages     | All the pages of the project.
|- 📂 styles    | All the global styles of the project.
|- 📂 ui        | Tailwind CSS UI components.
```

## ☁ Deploy

- **Vercel**: [phck.vercel.app](phck.vercel.app)
