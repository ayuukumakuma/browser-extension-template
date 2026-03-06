---
title: "Interface: ContentScriptOverlayPositioningOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/types/interfaces/ContentScriptOverlayPositioningOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/types](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/index.html) > ContentScriptOverlayPositioningOptions

# Interface: ContentScriptOverlayPositioningOptions [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#interface-contentscriptoverlaypositioningoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#properties)
  + [alignment](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#alignment)
  + [position](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#position)
  + [zIndex](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#zindex)

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#properties)

### alignment [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#alignment)

> **alignment**?: [`ContentScriptOverlayAlignment`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptoverlayalignment.html)

When using `type: "overlay"`, the mounted element is 0px by 0px in size. Alignment specifies which corner is aligned with that 0x0 pixel space.

[Visualization of alignment options](https://wxt.dev/content-script-ui-alignment.png)

#### Default [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#default)

ts

```
'top-left'
```

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:58](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L58)

---

### position [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#position)

> **position**: `"overlay"`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:43](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L43)

---

### zIndex [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#zindex)

> **zIndex**?: `number`

The `z-index` used on the `wrapper` element. Set to a positive number to show your UI over website content.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptoverlaypositioningoptions.html#source-2)

[packages/wxt/src/utils/content-script-ui/types.ts:48](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L48)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
