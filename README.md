# Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn React.js](https://beta.reactjs.org) - an interactive React.js tutorial.

# Next JS Application

## Folder Structure

```bash
├── components # React components (button, navbar, etc.)
├── lib # Utility functions (connect to database, etc.)
├── node_modules # Dependencies
├── pages # Next.js pages (index, about, etc.)
│   └── api # Next.js API routes (api/hello, etc.)
├── public # Static files (images, fonts, etc.)
├── styles # Global styles (fonts, colors, etc.)
└── types # TypeScript types and interfaces (user, post, etc.)
```

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MUI](https://mui.com/) - A React component library
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript

## Development

### Routes (pages)

Each page is a `React component` exported from a `.tsx` file in the `pages` directory. The name of the file will be the route name. For example, `pages/index.tsx` will be the index page.

Example :

_Static Routes_

```tsx
- index.tsx - The home page [`/`] : http://localhost:3000/
- about.tsx - The about page [`/about`] : http://localhost:3000/about
```

_Dynamic Routes_

```tsx
- [id].tsx - The post page [`/post/:id`] : http://localhost:3000/post/1
```

### Files

File extensions :

```ts
- ts : TypeScript files
- tsx : TypeScript files with JSX (HTML in React js component)
```

Function name :

```ts
- React component : First letter is capital
- Function : First letter is lowercase
```
