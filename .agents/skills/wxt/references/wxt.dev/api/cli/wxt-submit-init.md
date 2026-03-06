---
title: "wxt submit init – WXT"
source_url: "https://wxt.dev/api/cli/wxt-submit-init"
fetched_at: "2026-03-06T07:09:09.689083+00:00"
---



Are you an LLM? You can read better optimized documentation at /api/cli/wxt-submit-init.md for this page in Markdown format

# `wxt submit init` [​](https://wxt.dev/api/cli/wxt-submit-init.html#wxt-submit-init)

> Alias for [`publish-browser-extension`](https://www.npmjs.com/package/publish-browser-extension)

```
publish-extension/4.0.4

Usage:
  $ wxt submit init

Options:
  -h, --help                                           Display this message
  --dry-run                                            Check authentication, but don't upload the zip or submit for review
  --chrome-zip [chromeZip]                             Path to extension zip to upload
  --chrome-extension-id [chromeExtensionId]            The ID of the extension to be submitted
  --chrome-client-id [chromeClientId]                  Client ID used for authorizing requests to the Chrome Web Store
  --chrome-client-secret [chromeClientSecret]          Client secret used for authorizing requests to the Chrome Web Store
  --chrome-refresh-token [chromeRefreshToken]          Refresh token used for authorizing requests to the Chrome Web Store
  --chrome-publish-target [chromePublishTarget]        Group to publish to, "default" or "trustedTesters"
  --chrome-deploy-percentage [chromeDeployPercentage]  An integer from 1-100
  --chrome-review-exemption                            Submit update using expedited review process
  --chrome-skip-submit-review                          Just upload the extension zip, don't submit it for review or publish it
  --firefox-zip [firefoxZip]                           Path to extension zip to upload
  --firefox-sources-zip [firefoxSourcesZip]            Path to sources zip to upload
  --firefox-extension-id [firefoxExtensionId]          The ID of the extension to be submitted
  --firefox-jwt-issuer [firefoxJwtIssuer]              Issuer used for authorizing requests to Addon Store APIs
  --firefox-jwt-secret [firefoxJwtSecret]              Secret used for authorizing requests to Addon Store APIs
  --firefox-channel [firefoxChannel]                   The channel to publish to, "listed" or "unlisted"
  --edge-zip [edgeZip]                                 Path to extension zip to upload
  --edge-product-id [edgeProductId]                    Product ID listed on the developer dashboard
  --edge-client-id [edgeClientId]                      Client ID used for authorizing requests to Microsofts addon API
  --edge-api-key [edgeApiKey]                          API key used for authorizing requests to Microsofts addon API v1.1
  --edge-client-secret [edgeClientSecret]              DEPRECATED: Client secret used for authorizing requests to Microsofts addon API v1.0 (no longer available)
  --edge-access-token-url [edgeAccessTokenUrl]         DEPRECATED: Access token URL used for authorizing requests to Microsofts addon API v1.0 (no longer available)
  --edge-skip-submit-review                            Just upload the extension zip, don't submit it for review or publish it
```
