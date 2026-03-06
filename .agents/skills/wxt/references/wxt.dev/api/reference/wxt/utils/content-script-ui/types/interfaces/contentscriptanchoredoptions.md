---
title: "Interface: ContentScriptAnchoredOptions – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-ui/types/interfaces/ContentScriptAnchoredOptions.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-ui/types](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/index.html) > ContentScriptAnchoredOptions

# Interface: ContentScriptAnchoredOptions [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#interface-contentscriptanchoredoptions)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#contents)

* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#properties)
  + [anchor](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#anchor)
  + [append](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#append)

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#properties)

### anchor [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#anchor)

> **anchor**?: `null` | `string` | `Element` | () => `undefined` | `null` | `string` | `Element`

A CSS selector, XPath expression, element, or function that returns one of the three. Along with `append`, the `anchor` dictates where in the page the UI will be added.

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#source)

[packages/wxt/src/utils/content-script-ui/types.ts:87](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L87)

---

### append [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#append)

> **append**?: [`ContentScriptAppendMode`](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/type-aliases/contentscriptappendmode.html) | (`anchor`, `ui`) => `void`

In combination with `anchor`, decide how to add the UI to the DOM.

* `"last"` (default) - Add the UI as the last child of the `anchor` element
* `"first"` - Add the UI as the first child of the `anchor` element
* `"replace"` - Replace the `anchor` element with the UI.
* `"before"` - Add the UI as the sibling before the `anchor` element
* `"after"` - Add the UI as the sibling after the `anchor` element
* `(anchor, ui) => void` - Customizable function that let's you add the UI to the DOM

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-ui/types/interfaces/contentscriptanchoredoptions.html#source-1)

[packages/wxt/src/utils/content-script-ui/types.ts:104](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-ui/types.ts#L104)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
