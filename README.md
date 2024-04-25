This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/Felixkabange/my-bookstore) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. **Clone the repository**

```bash
git clone https://github.com/Felixkabange/my-bookstore
cd my-bookstore

** Development Choices **

 ** Libraries and Tools **

Next.js: A React framework that enables functionality such as server-side rendering and generating static websites, which is excellent for SEO and overall performance.
React: A JavaScript library for building user interfaces, known for its declarative and component-based approach.
tailwindcss: A utility-first CSS framework for rapidly building custom designs.
next-i18next: A plugin for Next.js projects that allows easy integration of the i18next internationalization framework for multi-language support.

** Development Decisions **

Next.js: Chosen for its hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
TailwindCSS: Utilized for its flexibility and the speed at which custom designs can be implemented without leaving the HTML.
i18next: Incorporated to provide an easy way to add and handle translations in the application, enabling support for multiple languages which can be a great boost for accessibility and user-friendliness.
useState and useEffect hooks: Leveraged for state management and side effects handling in functional components.
ESLint and Prettier: Integrated to maintain code quality and ensure that formatting is consistent.

