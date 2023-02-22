<div align="center">
    <!-- <img src="" width="80" /> -->
</div>

<p align="center">Open Source Hackathon Management</p>

<div align="center">
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#-team">
        Team
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

**Global:**

- [x] Authentication with Github.
- [ ] Authentication with Google.

**For the participant:**

- [ ] The user can add his project.
- [ ] The user can edit his project before a deadline.
- [ ] When the deadline is reached, the user can only see the project.

**For the admin:**

- [x] The admin can add a new hackathon.
- [x] The admin can edit a hackathon.
- [ ] The admin can delete a hackathon.
- [ ] The admin can share the link to the hackathon.
- [ ] The admin can see the list of participants.
- [ ] The admin can see the list of projects.
- [ ] The user can set a winner (mark a user as a winner).
- [ ] The user can set a project as 'reviewed'.

## 🚀 Getting Started

### ⚙️ **Project settings:**

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

### ⚙️ **Environtment variables:**

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

### ⚙️ **CockroachDB settings:**

4. [**Create a free cluster**](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html?#create-a-free-cluster).
5. [**Create a SQL user**](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html?#create-a-sql-user).
6. To connect to the user, copy the connection string and paste it in the `.env` file,
   replacing the `DATABASE_URL` variable.

### ⚙️ **Github OAuth Provider settings:**

7. [Click here to create new Github OAuth app](https://github.com/settings/applications/new).
8. Go to "Client secrets" and generate new client secret and and paste it into GITHUB_CLIENT_SECRET env.
9. Copy the Client ID and paste it into GITHUB_ID env.

### ⚙️ **Run the project:**

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

## 📦 Overview

```
📂 .vscode      | Visual Studio Code recommended extensions for the project.
📂 public       | Images, fonts, manifest files.
📂 src
|- 📂 components    | Global components.
|- 📂 env           | Manage environment variables with Zod.
|- 📂 layout        | All layouts.
|- 📂 pages         | All the pages of the project.
|- 📂 schema        | Zod schemas.
|- 📂 styles        | All the global styles of the project.
|- 📂 types         | Global types.
|- 📂 ui            | Tailwind CSS UI components.
```

## ☁ Deploy

- **Vercel**: [https://phck.vercel.app](https://phck.vercel.app)

## 🔑 License

- [**MIT License**](https://github.com/pheralb/project-hackathon/blob/main/LICENSE).
