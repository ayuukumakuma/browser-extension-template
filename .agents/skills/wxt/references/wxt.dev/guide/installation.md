---
title: "Installation – WXT"
source_url: "https://wxt.dev/guide/installation"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/installation.md for this page in Markdown format

# Installation [​](https://wxt.dev/guide/installation.html#installation)

Bootstrap a new project, start from scratch, or [migrate an existing project](https://wxt.dev/guide/resources/migrate.html).

* [Bootstrap Project](https://wxt.dev/guide/installation.html#bootstrap-project)
  + [Demo](https://wxt.dev/guide/installation.html#demo)
* [From Scratch](https://wxt.dev/guide/installation.html#from-scratch)
* [Next Steps](https://wxt.dev/guide/installation.html#next-steps)

## Bootstrap Project [​](https://wxt.dev/guide/installation.html#bootstrap-project)

Run the [`init` command](https://wxt.dev/api/cli/wxt-init.html), and follow the instructions.

PNPMBunNPMYarn

sh

```
pnpm dlx wxt@latest init
```

sh

```
bunx wxt@latest init
```

sh

```
npx wxt@latest init
```

sh

```
# Use NPM initially, but select Yarn when prompted
npx wxt@latest init
```

Starter Templates:

[![TypeScript Logo](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/typescript.svg)Vanilla](https://github.com/wxt-dev/wxt/tree/main/templates/vanilla)
[![Vue Logo](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/vue.svg)Vue](https://github.com/wxt-dev/wxt/tree/main/templates/vue)
[![React Logo](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/react.svg)React](https://github.com/wxt-dev/wxt/tree/main/templates/react)
[![Svelte Logo](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/svelte.svg)Svelte](https://github.com/wxt-dev/wxt/tree/main/templates/svelte)
[![Solid Logo](https://www.solidjs.com/img/favicons/favicon-32x32.png)Solid](https://github.com/wxt-dev/wxt/tree/main/templates/solid)

All templates use TypeScript by default. To use JavaScript, change the file extensions.

### Demo [​](https://wxt.dev/guide/installation.html#demo)

![wxt init demo](https://wxt.dev/assets/init-demo.stNB1yEw.gif)

Once you've run the `dev` command, continue to [Next Steps](https://wxt.dev/guide/installation.html#next-steps)!

## From Scratch [​](https://wxt.dev/guide/installation.html#from-scratch)

1. Create a new project

   PNPMBunNPMYarn

   sh

   ```
   cd my-project
   pnpm init
   ```

   sh

   ```
   cd my-project
   bun init
   ```

   sh

   ```
   cd my-project
   npm init
   ```

   sh

   ```
   cd my-project
   yarn init
   ```
2. Install WXT:

   PNPMBunNPMYarn

   sh

   ```
   pnpm i -D wxt
   ```

   sh

   ```
   bun i -D wxt
   ```

   sh

   ```
   npm i -D wxt
   ```

   sh

   ```
   yarn add --dev wxt
   ```
3. Add an entrypoint, `my-project/entrypoints/background.ts`:

   ts

   ts

   ```
   export default defineBackground(() => {
     console.log('Hello world!');
   });
   ```
4. Add scripts to your `package.json`:

   package.json

   json

   ```
   {
     "scripts": {
       "dev": "wxt",
       "dev:firefox": "wxt -b firefox",
       "build": "wxt build",
       "build:firefox": "wxt build -b firefox",
       "zip": "wxt zip",
       "zip:firefox": "wxt zip -b firefox",
       "postinstall": "wxt prepare"
     }
   }
   ```
5. Run your extension in dev mode

   PNPMBunNPMYarn

   sh

   ```
   pnpm dev
   ```

   sh

   ```
   bun run dev
   ```

   sh

   ```
   npm run dev
   ```

   sh

   ```
   yarn dev
   ```

   WXT will automatically open a browser window with your extension installed.

## Next Steps [​](https://wxt.dev/guide/installation.html#next-steps)

* Keep reading on about WXT's [Project Structure](https://wxt.dev/guide/essentials/project-structure.html) and other essential concepts to learn
* Configure [automatic browser startup](https://wxt.dev/guide/essentials/config/browser-startup.html) during dev mode
* Explore [WXT's example library](https://wxt.dev/examples.html) to see how to use specific APIs or perform common tasks
* Checkout the [community page](https://wxt.dev/guide/resources/community.html) for a list of resources made by the community!
