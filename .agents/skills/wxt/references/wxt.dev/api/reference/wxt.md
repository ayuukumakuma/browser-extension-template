---
title: "Module: wxt – WXT"
source_url: "https://wxt.dev/api/reference/wxt"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/reference/wxt.md for this page in Markdown format

[API](https://wxt.dev/api/reference/index.html) > wxt

# Module: wxt [​](https://wxt.dev/api/reference/wxt.html#module-wxt)

This module contains:

* JS APIs used by the CLI to build extensions or start dev mode.
* Helper functions for defining project config.
* Types for building and extension or configuring WXT.

## Index [​](https://wxt.dev/api/reference/wxt.html#index)

### Interfaces [​](https://wxt.dev/api/reference/wxt.html#interfaces)

* [BackgroundDefinition](https://wxt.dev/api/reference/wxt/interfaces/backgrounddefinition.html)
* [BackgroundEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypoint.html)
* [BackgroundEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/backgroundentrypointoptions.html)
* [BaseContentScriptEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/basecontentscriptentrypointoptions.html)
* [BaseEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/baseentrypoint.html)
* [BaseEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/baseentrypointoptions.html)
* [BaseScriptEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/basescriptentrypointoptions.html)
* [BuildOutput](https://wxt.dev/api/reference/wxt/interfaces/buildoutput.html)
* [BuildStepOutput](https://wxt.dev/api/reference/wxt/interfaces/buildstepoutput.html)
* [ConfigEnv](https://wxt.dev/api/reference/wxt/interfaces/configenv.html)
* [ContentScriptEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/contentscriptentrypoint.html)
* [CopiedPublicFile](https://wxt.dev/api/reference/wxt/interfaces/copiedpublicfile.html)
* [Dependency](https://wxt.dev/api/reference/wxt/interfaces/dependency.html)
* [EntrypointInfo](https://wxt.dev/api/reference/wxt/interfaces/entrypointinfo.html)
* [Eslintrc](https://wxt.dev/api/reference/wxt/interfaces/eslintrc.html)
* [ExtensionRunner](https://wxt.dev/api/reference/wxt/interfaces/extensionrunner.html)
* [FsCache](https://wxt.dev/api/reference/wxt/interfaces/fscache.html)
* [GeneratedPublicFile](https://wxt.dev/api/reference/wxt/interfaces/generatedpublicfile.html)
* [GenericEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/genericentrypoint.html)
* [InlineConfig](https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html)
* [IsolatedWorldContentScriptDefinition](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptdefinition.html)
* [IsolatedWorldContentScriptEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/isolatedworldcontentscriptentrypointoptions.html)
* [Logger](https://wxt.dev/api/reference/wxt/interfaces/logger.html)
* [MainWorldContentScriptDefinition](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptdefinition.html)
* [MainWorldContentScriptEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/mainworldcontentscriptentrypointoptions.html)
* [OptionsEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypoint.html)
* [OptionsEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/optionsentrypointoptions.html)
* [OutputAsset](https://wxt.dev/api/reference/wxt/interfaces/outputasset.html)
* [OutputChunk](https://wxt.dev/api/reference/wxt/interfaces/outputchunk.html)
* [PopupEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/popupentrypoint.html)
* [PopupEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/popupentrypointoptions.html)
* [ReloadContentScriptPayload](https://wxt.dev/api/reference/wxt/interfaces/reloadcontentscriptpayload.html)
* [ResolvedBasePublicFile](https://wxt.dev/api/reference/wxt/interfaces/resolvedbasepublicfile.html)
* [ResolvedConfig](https://wxt.dev/api/reference/wxt/interfaces/resolvedconfig.html)
* [ResolvedEslintrc](https://wxt.dev/api/reference/wxt/interfaces/resolvedeslintrc.html)
* [ServerInfo](https://wxt.dev/api/reference/wxt/interfaces/serverinfo.html)
* [SidepanelEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypoint.html)
* [SidepanelEntrypointOptions](https://wxt.dev/api/reference/wxt/interfaces/sidepanelentrypointoptions.html)
* [ThemeIcon](https://wxt.dev/api/reference/wxt/interfaces/themeicon.html)
* [UnlistedScriptDefinition](https://wxt.dev/api/reference/wxt/interfaces/unlistedscriptdefinition.html)
* [UnlistedScriptEntrypoint](https://wxt.dev/api/reference/wxt/interfaces/unlistedscriptentrypoint.html)
* [WebExtConfig](https://wxt.dev/api/reference/wxt/interfaces/webextconfig.html)
* [Wxt](https://wxt.dev/api/reference/wxt/interfaces/wxt.html)
* [WxtBuilder](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilder.html)
* [WxtBuilderServer](https://wxt.dev/api/reference/wxt/interfaces/wxtbuilderserver.html)
* [WxtDevServer](https://wxt.dev/api/reference/wxt/interfaces/wxtdevserver.html)
* [WxtDirFileEntry](https://wxt.dev/api/reference/wxt/interfaces/wxtdirfileentry.html)
* [WxtDirTypeReferenceEntry](https://wxt.dev/api/reference/wxt/interfaces/wxtdirtypereferenceentry.html)
* [WxtHooks](https://wxt.dev/api/reference/wxt/interfaces/wxthooks.html)
* [WxtModule](https://wxt.dev/api/reference/wxt/interfaces/wxtmodule.html)
* [WxtModuleWithMetadata](https://wxt.dev/api/reference/wxt/interfaces/wxtmodulewithmetadata.html)
* [WxtPackageManager](https://wxt.dev/api/reference/wxt/interfaces/wxtpackagemanager.html)

### Type Aliases [​](https://wxt.dev/api/reference/wxt.html#type-aliases)

* [ContentScriptDefinition](https://wxt.dev/api/reference/wxt/type-aliases/contentscriptdefinition.html)
* [Entrypoint](https://wxt.dev/api/reference/wxt/type-aliases/entrypoint.html)
* [EntrypointGroup](https://wxt.dev/api/reference/wxt/type-aliases/entrypointgroup.html)
* [EslintGlobalsPropValue](https://wxt.dev/api/reference/wxt/type-aliases/eslintglobalspropvalue.html)
* [ExtensionRunnerConfig](https://wxt.dev/api/reference/wxt/type-aliases/extensionrunnerconfig.html)
* [HookResult](https://wxt.dev/api/reference/wxt/type-aliases/hookresult.html)
* [OnContentScriptStopped](https://wxt.dev/api/reference/wxt/type-aliases/oncontentscriptstopped.html)
* [OutputFile](https://wxt.dev/api/reference/wxt/type-aliases/outputfile.html)
* [PerBrowserMap](https://wxt.dev/api/reference/wxt/type-aliases/perbrowsermap.html)
* [PerBrowserOption](https://wxt.dev/api/reference/wxt/type-aliases/perbrowseroption.html)
* [ResolvedPerBrowserOptions](https://wxt.dev/api/reference/wxt/type-aliases/resolvedperbrowseroptions.html)
* [ResolvedPublicFile](https://wxt.dev/api/reference/wxt/type-aliases/resolvedpublicfile.html)
* [TargetBrowser](https://wxt.dev/api/reference/wxt/type-aliases/targetbrowser.html)
* [TargetManifestVersion](https://wxt.dev/api/reference/wxt/type-aliases/targetmanifestversion.html)
* [UserConfig](https://wxt.dev/api/reference/wxt/type-aliases/userconfig.html)
* [UserManifest](https://wxt.dev/api/reference/wxt/type-aliases/usermanifest.html)
* [UserManifestFn](https://wxt.dev/api/reference/wxt/type-aliases/usermanifestfn.html)
* [WxtCommand](https://wxt.dev/api/reference/wxt/type-aliases/wxtcommand.html)
* [WxtDirEntry](https://wxt.dev/api/reference/wxt/type-aliases/wxtdirentry.html)
* [WxtModuleOptions](https://wxt.dev/api/reference/wxt/type-aliases/wxtmoduleoptions.html)
* [WxtModuleSetup](https://wxt.dev/api/reference/wxt/type-aliases/wxtmodulesetup.html)
* [WxtPlugin](https://wxt.dev/api/reference/wxt/type-aliases/wxtplugin.html)
* [WxtResolvedUnimportOptions](https://wxt.dev/api/reference/wxt/type-aliases/wxtresolvedunimportoptions.html)
* [WxtUnimportOptions](https://wxt.dev/api/reference/wxt/type-aliases/wxtunimportoptions.html)
* [WxtViteConfig](https://wxt.dev/api/reference/wxt/type-aliases/wxtviteconfig.html)

### Variables [​](https://wxt.dev/api/reference/wxt.html#variables)

* [version](https://wxt.dev/api/reference/wxt/variables/version.html)

### Functions [​](https://wxt.dev/api/reference/wxt.html#functions)

* [build](https://wxt.dev/api/reference/wxt/functions/build.html)
* [clean](https://wxt.dev/api/reference/wxt/functions/clean.html)
* [createServer](https://wxt.dev/api/reference/wxt/functions/createserver.html)
* [defineConfig](https://wxt.dev/api/reference/wxt/functions/defineconfig.html)
* [defineRunnerConfig](https://wxt.dev/api/reference/wxt/functions/definerunnerconfig.html)
* [defineWebExtConfig](https://wxt.dev/api/reference/wxt/functions/definewebextconfig.html)
* [initialize](https://wxt.dev/api/reference/wxt/functions/initialize.html)
* [normalizePath](https://wxt.dev/api/reference/wxt/functions/normalizepath.html)
* [prepare](https://wxt.dev/api/reference/wxt/functions/prepare.html)
* [zip](https://wxt.dev/api/reference/wxt/functions/zip)

---

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
