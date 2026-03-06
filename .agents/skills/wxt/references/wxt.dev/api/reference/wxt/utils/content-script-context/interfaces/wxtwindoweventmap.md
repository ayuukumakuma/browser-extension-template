---
title: "Interface: WxtWindowEventMap – WXT"
source_url: "https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt/utils/content-script-context/interfaces/WxtWindowEventMap.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > [wxt/utils/content-script-context](https://wxt.dev/api/reference/wxt/utils/content-script-context/index.html) > WxtWindowEventMap

# Interface: WxtWindowEventMap [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#interface-wxtwindoweventmap)

## Contents [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contents)

* [Extends](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#extends)
* [Properties](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#properties)
  + [DOMContentLoaded](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#domcontentloaded)
  + [abort](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#abort)
  + [afterprint](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#afterprint)
  + [animationcancel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationcancel)
  + [animationend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationend)
  + [animationiteration](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationiteration)
  + [animationstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationstart)
  + [auxclick](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#auxclick)
  + [beforeinput](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeinput)
  + [beforematch](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforematch)
  + [beforeprint](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeprint)
  + [beforetoggle](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforetoggle)
  + [beforeunload](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeunload)
  + [blur](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#blur)
  + [cancel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cancel)
  + [canplay](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#canplay)
  + [canplaythrough](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#canplaythrough)
  + [change](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#change)
  + [click](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#click)
  + [close](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#close)
  + [compositionend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionend)
  + [compositionstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionstart)
  + [compositionupdate](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionupdate)
  + [contextlost](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextlost)
  + [contextmenu](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextmenu)
  + [contextrestored](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextrestored)
  + [copy](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#copy)
  + [cuechange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cuechange)
  + [cut](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cut)
  + [dblclick](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dblclick)
  + [devicemotion](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#devicemotion)
  + [deviceorientation](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#deviceorientation)
  + [deviceorientationabsolute](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#deviceorientationabsolute)
  + [drag](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#drag)
  + [dragend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragend)
  + [dragenter](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragenter)
  + [dragleave](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragleave)
  + [dragover](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragover)
  + [dragstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragstart)
  + [drop](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#drop)
  + [durationchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#durationchange)
  + [emptied](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#emptied)
  + [ended](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#ended)
  + [error](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#error)
  + [focus](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focus)
  + [focusin](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focusin)
  + [focusout](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focusout)
  + [formdata](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#formdata)
  + [gamepadconnected](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gamepadconnected)
  + [gamepaddisconnected](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gamepaddisconnected)
  + [gotpointercapture](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gotpointercapture)
  + [hashchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#hashchange)
  + [input](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#input)
  + [invalid](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#invalid)
  + [keydown](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keydown)
  + [keypress](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keypress)
  + [keyup](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keyup)
  + [languagechange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#languagechange)
  + [load](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#load)
  + [loadeddata](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadeddata)
  + [loadedmetadata](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadedmetadata)
  + [loadstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadstart)
  + [lostpointercapture](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#lostpointercapture)
  + [message](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#message)
  + [messageerror](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#messageerror)
  + [mousedown](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mousedown)
  + [mouseenter](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseenter)
  + [mouseleave](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseleave)
  + [mousemove](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mousemove)
  + [mouseout](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseout)
  + [mouseover](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseover)
  + [mouseup](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseup)
  + [offline](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#offline)
  + [online](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#online)
  + [orientationchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#orientationchange)
  + [pagehide](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pagehide)
  + [pagereveal](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pagereveal)
  + [pageshow](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pageshow)
  + [pageswap](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pageswap)
  + [paste](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#paste)
  + [pause](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pause)
  + [play](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#play)
  + [playing](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#playing)
  + [pointercancel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointercancel)
  + [pointerdown](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerdown)
  + [pointerenter](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerenter)
  + [pointerleave](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerleave)
  + [pointermove](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointermove)
  + [pointerout](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerout)
  + [pointerover](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerover)
  + [pointerrawupdate](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerrawupdate)
  + [pointerup](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerup)
  + [popstate](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#popstate)
  + [progress](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#progress)
  + [ratechange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#ratechange)
  + [rejectionhandled](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#rejectionhandled)
  + [reset](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#reset)
  + [resize](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#resize)
  + [scroll](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#scroll)
  + [scrollend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#scrollend)
  + [securitypolicyviolation](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#securitypolicyviolation)
  + [seeked](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#seeked)
  + [seeking](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#seeking)
  + [select](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#select)
  + [selectionchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#selectionchange)
  + [selectstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#selectstart)
  + [slotchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#slotchange)
  + [stalled](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#stalled)
  + [storage](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#storage)
  + [submit](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#submit)
  + [suspend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#suspend)
  + [timeupdate](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#timeupdate)
  + [toggle](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#toggle)
  + [touchcancel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchcancel)
  + [touchend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchend)
  + [touchmove](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchmove)
  + [touchstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchstart)
  + [transitioncancel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitioncancel)
  + [transitionend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionend)
  + [transitionrun](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionrun)
  + [transitionstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionstart)
  + [unhandledrejection](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#unhandledrejection)
  + [unload](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#unload)
  + [vite:preloadError](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#vitepreloaderror)
  + [volumechange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#volumechange)
  + [waiting](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#waiting)
  + [webkitanimationend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationend)
  + [webkitanimationiteration](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationiteration)
  + [webkitanimationstart](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationstart)
  + [webkittransitionend](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkittransitionend)
  + [wheel](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#wheel)
  + [wxt:locationchange](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#wxtlocationchange)

## Extends [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#extends)

* `WindowEventMap`

## Properties [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#properties)

### DOMContentLoaded [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#domcontentloaded)

> **DOMContentLoaded**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from)

WindowEventMap.DOMContentLoaded

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36344

---

### abort [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#abort)

> **abort**: `UIEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-1)

WindowEventMap.abort

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-1)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12634

---

### afterprint [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#afterprint)

> **afterprint**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-2)

WindowEventMap.afterprint

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-2)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36808

---

### animationcancel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationcancel)

> **animationcancel**: `AnimationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-3)

WindowEventMap.animationcancel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-3)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12635

---

### animationend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationend)

> **animationend**: `AnimationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-4)

WindowEventMap.animationend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-4)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12636

---

### animationiteration [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationiteration)

> **animationiteration**: `AnimationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-5)

WindowEventMap.animationiteration

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-5)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12637

---

### animationstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#animationstart)

> **animationstart**: `AnimationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-6)

WindowEventMap.animationstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-6)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12638

---

### auxclick [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#auxclick)

> **auxclick**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-7)

WindowEventMap.auxclick

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-7)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12639

---

### beforeinput [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeinput)

> **beforeinput**: `InputEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-8)

WindowEventMap.beforeinput

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-8)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12640

---

### beforematch [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforematch)

> **beforematch**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-9)

WindowEventMap.beforematch

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-9)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12641

---

### beforeprint [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeprint)

> **beforeprint**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-10)

WindowEventMap.beforeprint

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-10)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36809

---

### beforetoggle [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforetoggle)

> **beforetoggle**: `ToggleEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-11)

WindowEventMap.beforetoggle

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-11)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12642

---

### beforeunload [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#beforeunload)

> **beforeunload**: `BeforeUnloadEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-12)

WindowEventMap.beforeunload

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-12)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36810

---

### blur [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#blur)

> **blur**: `FocusEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-13)

WindowEventMap.blur

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-13)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12643

---

### cancel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cancel)

> **cancel**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-14)

WindowEventMap.cancel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-14)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12644

---

### canplay [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#canplay)

> **canplay**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-15)

WindowEventMap.canplay

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-15)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12645

---

### canplaythrough [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#canplaythrough)

> **canplaythrough**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-16)

WindowEventMap.canplaythrough

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-16)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12646

---

### change [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#change)

> **change**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-17)

WindowEventMap.change

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-17)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12647

---

### click [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#click)

> **click**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-18)

WindowEventMap.click

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-18)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12648

---

### close [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#close)

> **close**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-19)

WindowEventMap.close

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-19)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12649

---

### compositionend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionend)

> **compositionend**: `CompositionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-20)

WindowEventMap.compositionend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-20)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12650

---

### compositionstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionstart)

> **compositionstart**: `CompositionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-21)

WindowEventMap.compositionstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-21)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12651

---

### compositionupdate [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#compositionupdate)

> **compositionupdate**: `CompositionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-22)

WindowEventMap.compositionupdate

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-22)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12652

---

### contextlost [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextlost)

> **contextlost**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-23)

WindowEventMap.contextlost

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-23)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12653

---

### contextmenu [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextmenu)

> **contextmenu**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-24)

WindowEventMap.contextmenu

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-24)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12654

---

### contextrestored [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#contextrestored)

> **contextrestored**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-25)

WindowEventMap.contextrestored

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-25)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12655

---

### copy [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#copy)

> **copy**: `ClipboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-26)

WindowEventMap.copy

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-26)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12656

---

### cuechange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cuechange)

> **cuechange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-27)

WindowEventMap.cuechange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-27)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12657

---

### cut [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#cut)

> **cut**: `ClipboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-28)

WindowEventMap.cut

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-28)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12658

---

### dblclick [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dblclick)

> **dblclick**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-29)

WindowEventMap.dblclick

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-29)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12659

---

### devicemotion [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#devicemotion)

> **devicemotion**: `DeviceMotionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-30)

WindowEventMap.devicemotion

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-30)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36345

---

### deviceorientation [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#deviceorientation)

> **deviceorientation**: `DeviceOrientationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-31)

WindowEventMap.deviceorientation

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-31)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36346

---

### deviceorientationabsolute [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#deviceorientationabsolute)

> **deviceorientationabsolute**: `DeviceOrientationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-32)

WindowEventMap.deviceorientationabsolute

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-32)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36347

---

### drag [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#drag)

> **drag**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-33)

WindowEventMap.drag

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-33)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12660

---

### dragend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragend)

> **dragend**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-34)

WindowEventMap.dragend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-34)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12661

---

### dragenter [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragenter)

> **dragenter**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-35)

WindowEventMap.dragenter

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-35)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12662

---

### dragleave [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragleave)

> **dragleave**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-36)

WindowEventMap.dragleave

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-36)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12663

---

### dragover [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragover)

> **dragover**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-37)

WindowEventMap.dragover

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-37)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12664

---

### dragstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#dragstart)

> **dragstart**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-38)

WindowEventMap.dragstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-38)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12665

---

### drop [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#drop)

> **drop**: `DragEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-39)

WindowEventMap.drop

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-39)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12666

---

### durationchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#durationchange)

> **durationchange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-40)

WindowEventMap.durationchange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-40)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12667

---

### emptied [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#emptied)

> **emptied**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-41)

WindowEventMap.emptied

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-41)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12668

---

### ended [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#ended)

> **ended**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-42)

WindowEventMap.ended

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-42)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12669

---

### error [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#error)

> **error**: `ErrorEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-43)

WindowEventMap.error

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-43)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12670

---

### focus [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focus)

> **focus**: `FocusEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-44)

WindowEventMap.focus

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-44)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12671

---

### focusin [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focusin)

> **focusin**: `FocusEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-45)

WindowEventMap.focusin

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-45)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12672

---

### focusout [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#focusout)

> **focusout**: `FocusEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-46)

WindowEventMap.focusout

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-46)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12673

---

### formdata [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#formdata)

> **formdata**: `FormDataEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-47)

WindowEventMap.formdata

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-47)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12674

---

### gamepadconnected [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gamepadconnected)

> **gamepadconnected**: `GamepadEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-48)

WindowEventMap.gamepadconnected

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-48)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36348

---

### gamepaddisconnected [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gamepaddisconnected)

> **gamepaddisconnected**: `GamepadEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-49)

WindowEventMap.gamepaddisconnected

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-49)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36349

---

### gotpointercapture [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#gotpointercapture)

> **gotpointercapture**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-50)

WindowEventMap.gotpointercapture

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-50)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12675

---

### hashchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#hashchange)

> **hashchange**: `HashChangeEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-51)

WindowEventMap.hashchange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-51)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36813

---

### input [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#input)

> **input**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-52)

WindowEventMap.input

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-52)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12676

---

### invalid [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#invalid)

> **invalid**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-53)

WindowEventMap.invalid

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-53)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12677

---

### keydown [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keydown)

> **keydown**: `KeyboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-54)

WindowEventMap.keydown

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-54)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12678

---

### keypress [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keypress)

> **keypress**: `KeyboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-55)

WindowEventMap.keypress

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-55)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12679

---

### keyup [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#keyup)

> **keyup**: `KeyboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-56)

WindowEventMap.keyup

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-56)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12680

---

### languagechange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#languagechange)

> **languagechange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-57)

WindowEventMap.languagechange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-57)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36814

---

### load [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#load)

> **load**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-58)

WindowEventMap.load

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-58)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12681

---

### loadeddata [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadeddata)

> **loadeddata**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-59)

WindowEventMap.loadeddata

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-59)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12682

---

### loadedmetadata [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadedmetadata)

> **loadedmetadata**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-60)

WindowEventMap.loadedmetadata

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-60)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12683

---

### loadstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#loadstart)

> **loadstart**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-61)

WindowEventMap.loadstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-61)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12684

---

### lostpointercapture [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#lostpointercapture)

> **lostpointercapture**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-62)

WindowEventMap.lostpointercapture

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-62)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12685

---

### message [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#message)

> **message**: `MessageEvent`<`any`>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-63)

WindowEventMap.message

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-63)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36815

---

### messageerror [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#messageerror)

> **messageerror**: `MessageEvent`<`any`>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-64)

WindowEventMap.messageerror

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-64)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36816

---

### mousedown [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mousedown)

> **mousedown**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-65)

WindowEventMap.mousedown

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-65)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12686

---

### mouseenter [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseenter)

> **mouseenter**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-66)

WindowEventMap.mouseenter

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-66)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12687

---

### mouseleave [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseleave)

> **mouseleave**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-67)

WindowEventMap.mouseleave

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-67)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12688

---

### mousemove [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mousemove)

> **mousemove**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-68)

WindowEventMap.mousemove

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-68)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12689

---

### mouseout [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseout)

> **mouseout**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-69)

WindowEventMap.mouseout

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-69)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12690

---

### mouseover [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseover)

> **mouseover**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-70)

WindowEventMap.mouseover

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-70)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12691

---

### mouseup [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#mouseup)

> **mouseup**: `MouseEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-71)

WindowEventMap.mouseup

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-71)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12692

---

### offline [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#offline)

> **offline**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-72)

WindowEventMap.offline

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-72)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36817

---

### online [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#online)

> **online**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-73)

WindowEventMap.online

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-73)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36818

---

### orientationchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#orientationchange)

> **orientationchange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-74)

WindowEventMap.orientationchange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-74)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36350

---

### pagehide [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pagehide)

> **pagehide**: `PageTransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-75)

WindowEventMap.pagehide

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-75)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36819

---

### pagereveal [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pagereveal)

> **pagereveal**: `PageRevealEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-76)

WindowEventMap.pagereveal

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-76)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36820

---

### pageshow [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pageshow)

> **pageshow**: `PageTransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-77)

WindowEventMap.pageshow

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-77)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36821

---

### pageswap [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pageswap)

> **pageswap**: `PageSwapEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-78)

WindowEventMap.pageswap

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-78)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36822

---

### paste [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#paste)

> **paste**: `ClipboardEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-79)

WindowEventMap.paste

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-79)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12693

---

### pause [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pause)

> **pause**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-80)

WindowEventMap.pause

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-80)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12694

---

### play [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#play)

> **play**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-81)

WindowEventMap.play

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-81)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12695

---

### playing [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#playing)

> **playing**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-82)

WindowEventMap.playing

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-82)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12696

---

### pointercancel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointercancel)

> **pointercancel**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-83)

WindowEventMap.pointercancel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-83)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12697

---

### pointerdown [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerdown)

> **pointerdown**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-84)

WindowEventMap.pointerdown

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-84)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12698

---

### pointerenter [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerenter)

> **pointerenter**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-85)

WindowEventMap.pointerenter

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-85)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12699

---

### pointerleave [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerleave)

> **pointerleave**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-86)

WindowEventMap.pointerleave

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-86)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12700

---

### pointermove [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointermove)

> **pointermove**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-87)

WindowEventMap.pointermove

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-87)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12701

---

### pointerout [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerout)

> **pointerout**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-88)

WindowEventMap.pointerout

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-88)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12702

---

### pointerover [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerover)

> **pointerover**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-89)

WindowEventMap.pointerover

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-89)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12703

---

### pointerrawupdate [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerrawupdate)

> **pointerrawupdate**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-90)

WindowEventMap.pointerrawupdate

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-90)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12704

---

### pointerup [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#pointerup)

> **pointerup**: `PointerEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-91)

WindowEventMap.pointerup

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-91)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12705

---

### popstate [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#popstate)

> **popstate**: `PopStateEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-92)

WindowEventMap.popstate

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-92)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36823

---

### progress [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#progress)

> **progress**: `ProgressEvent`<`EventTarget`>

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-93)

WindowEventMap.progress

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-93)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12706

---

### ratechange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#ratechange)

> **ratechange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-94)

WindowEventMap.ratechange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-94)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12707

---

### rejectionhandled [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#rejectionhandled)

> **rejectionhandled**: `PromiseRejectionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-95)

WindowEventMap.rejectionhandled

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-95)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36824

---

### reset [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#reset)

> **reset**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-96)

WindowEventMap.reset

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-96)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12708

---

### resize [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#resize)

> **resize**: `UIEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-97)

WindowEventMap.resize

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-97)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12709

---

### scroll [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#scroll)

> **scroll**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-98)

WindowEventMap.scroll

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-98)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12710

---

### scrollend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#scrollend)

> **scrollend**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-99)

WindowEventMap.scrollend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-99)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12711

---

### securitypolicyviolation [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#securitypolicyviolation)

> **securitypolicyviolation**: `SecurityPolicyViolationEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-100)

WindowEventMap.securitypolicyviolation

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-100)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12712

---

### seeked [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#seeked)

> **seeked**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-101)

WindowEventMap.seeked

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-101)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12713

---

### seeking [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#seeking)

> **seeking**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-102)

WindowEventMap.seeking

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-102)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12714

---

### select [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#select)

> **select**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-103)

WindowEventMap.select

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-103)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12715

---

### selectionchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#selectionchange)

> **selectionchange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-104)

WindowEventMap.selectionchange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-104)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12716

---

### selectstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#selectstart)

> **selectstart**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-105)

WindowEventMap.selectstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-105)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12717

---

### slotchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#slotchange)

> **slotchange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-106)

WindowEventMap.slotchange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-106)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12718

---

### stalled [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#stalled)

> **stalled**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-107)

WindowEventMap.stalled

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-107)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12719

---

### storage [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#storage)

> **storage**: `StorageEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-108)

WindowEventMap.storage

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-108)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36825

---

### submit [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#submit)

> **submit**: `SubmitEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-109)

WindowEventMap.submit

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-109)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12720

---

### suspend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#suspend)

> **suspend**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-110)

WindowEventMap.suspend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-110)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12721

---

### timeupdate [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#timeupdate)

> **timeupdate**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-111)

WindowEventMap.timeupdate

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-111)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12722

---

### toggle [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#toggle)

> **toggle**: `ToggleEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-112)

WindowEventMap.toggle

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-112)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12723

---

### touchcancel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchcancel)

> **touchcancel**: `TouchEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-113)

WindowEventMap.touchcancel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-113)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12724

---

### touchend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchend)

> **touchend**: `TouchEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-114)

WindowEventMap.touchend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-114)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12725

---

### touchmove [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchmove)

> **touchmove**: `TouchEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-115)

WindowEventMap.touchmove

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-115)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12726

---

### touchstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#touchstart)

> **touchstart**: `TouchEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-116)

WindowEventMap.touchstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-116)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12727

---

### transitioncancel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitioncancel)

> **transitioncancel**: `TransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-117)

WindowEventMap.transitioncancel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-117)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12728

---

### transitionend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionend)

> **transitionend**: `TransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-118)

WindowEventMap.transitionend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-118)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12729

---

### transitionrun [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionrun)

> **transitionrun**: `TransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-119)

WindowEventMap.transitionrun

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-119)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12730

---

### transitionstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#transitionstart)

> **transitionstart**: `TransitionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-120)

WindowEventMap.transitionstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-120)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12731

---

### unhandledrejection [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#unhandledrejection)

> **unhandledrejection**: `PromiseRejectionEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-121)

WindowEventMap.unhandledrejection

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-121)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36826

---

### unload [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#unload)

> **unload**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-122)

WindowEventMap.unload

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-122)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:36827

---

### vite:preloadError [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#vite-preloaderror)

> **vite:preloadError**: `VitePreloadErrorEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-123)

WindowEventMap.vite:preloadError

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-123)

node\_modules/.pnpm/vite@7.3.1\_@types+node@20.19.32\_jiti@2.6.1\_sass@1.97.3\_tsx@4.21.0\_yaml@2.8.2/node\_modules/vite/client.d.ts:278

---

### volumechange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#volumechange)

> **volumechange**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-124)

WindowEventMap.volumechange

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-124)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12732

---

### waiting [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#waiting)

> **waiting**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-125)

WindowEventMap.waiting

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-125)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12733

---

### webkitanimationend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationend)

> **webkitanimationend**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-126)

WindowEventMap.webkitanimationend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-126)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12734

---

### webkitanimationiteration [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationiteration)

> **webkitanimationiteration**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-127)

WindowEventMap.webkitanimationiteration

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-127)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12735

---

### webkitanimationstart [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkitanimationstart)

> **webkitanimationstart**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-128)

WindowEventMap.webkitanimationstart

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-128)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12736

---

### webkittransitionend [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#webkittransitionend)

> **webkittransitionend**: `Event`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-129)

WindowEventMap.webkittransitionend

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-129)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12737

---

### wheel [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#wheel)

> **wheel**: `WheelEvent`

#### Inherited from [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#inherited-from-130)

WindowEventMap.wheel

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-130)

node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:12738

---

### wxt:locationchange [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#wxt-locationchange)

> **wxt:locationchange**: `WxtLocationChangeEvent`

#### Source [​](https://wxt.dev/api/reference/wxt/utils/content-script-context/interfaces/wxtwindoweventmap.html#source-131)

[packages/wxt/src/utils/content-script-context.ts:306](https://github.com/wxt-dev/wxt/blob/55dc263dc99932008006dade6dd9fb7891b7d04e/packages/wxt/src/utils/content-script-context.ts#L306)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
