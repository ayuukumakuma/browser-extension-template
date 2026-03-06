---
title: "Build Modes – WXT"
source_url: "https://wxt.dev/guide/essentials/config/build-mode"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /guide/essentials/config/build-mode.md for this page in Markdown format

# Build Modes [​](https://wxt.dev/guide/essentials/config/build-mode.html#build-modes)

Because WXT is powered by Vite, it supports [modes](https://vite.dev/guide/env-and-mode.html#modes) in the same way.

When running any dev or build commands, pass the `--mode` flag:

sh

```
wxt --mode production
wxt build --mode development
wxt zip --mode testing
```

By default, `--mode` is `development` for the dev command and `production` for all other commands (build, zip, etc).

## Get Mode at Runtime [​](https://wxt.dev/guide/essentials/config/build-mode.html#get-mode-at-runtime)

You can access the current mode in your extension using `import.meta.env.MODE`:

ts

```
switch (import.meta.env.MODE) {
  case 'development': // ...
  case 'production': // ...

  // Custom modes specified with --mode
  case 'testing': // ...
  case 'staging': // ...
  // ...
}
```
