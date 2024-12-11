This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```
## Next.js Starters 

[source](https://gist.github.com/w3cj/4fa5180fec37ececf0fceec0e3fcc8ab)

A list of CLI generators, starter kits / boilerplates and toolkits to kick start your Next.js apps.

- Next.js CLI Generators
    - https://create.t3.gg/
    - https://kirimase.dev/
    - https://pankod.github.io/superplate/
    - https://nx.dev/nx-api/next
- Starter Kits / Boilerplates
    - https://github.com/BearStudio/start-ui-web
    - https://github.com/theodorusclarence/ts-nextjs-tailwind-starter
    - https://github.com/Blazity/next-enterprise
    - https://github.com/ixartz/Next-js-Boilerplate
- SaaS Starters
    - https://github.com/leerob/next-saas-starter
    - https://github.com/mickasmt/next-saas-stripe-starter
    - https://github.com/boxyhq/saas-starter-kit
    - https://github.com/nextacular/nextacular
    - https://github.com/midday-ai/v1
- Toolkits / Wrappers
    - https://blitzjs.com/
    - https://refine.dev/


## Self installation

### Prettier and ESLint

```bash
npm i -D prettier
npm i -D @trivago/prettier-plugin-sort-imports
npm i -D prettier prettier-plugin-tailwindcss
```

Update the **eslint.config.mjs** as following:

 ```javascript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
    },
  },
];
```

Update the **.prettierrc.json** as following:
 ```json
{
  "printWidth": 120,
  "importOrder": ["^(react|next?/?([a-zA-Z/]*))$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"]
}
```
