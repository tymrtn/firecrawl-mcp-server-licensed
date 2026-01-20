<div align="center">
  <a name="readme-top"></a>
  <img
    src="https://raw.githubusercontent.com/firecrawl/firecrawl-mcp-server/main/img/fire.png"
    height="140"
  >
</div>

# Firecrawl MCP Server (Licensed Fork)

Fork of `firecrawl/firecrawl-mcp-server` with Copyright.sh licensing:
- automatic `ai-license` discovery
- optional x402-aware fetch (402 + `payment-required: x402`)
- usage logging to the Copyright.sh ledger

When following upstream install instructions, replace `firecrawl-mcp` with `firecrawl-mcp-server-licensed` and add the ledger env vars below.

Original repository: https://github.com/firecrawl/firecrawl-mcp-server

## Why this fork?
This fork adds compliant licensing checks, optional x402 payment handling, and usage logging so developers can fetch content with clear rights and auditability.

## Quickstart
1. Get a Firecrawl API key: https://www.firecrawl.dev/app/api-keys
2. Get a Copyright.sh ledger key: https://portal.copyright.sh
   - Sign up → complete onboarding → open API Keys → create a key (shown once)
3. Run:
```bash
env FIRECRAWL_API_KEY=your_firecrawl_key COPYRIGHTSH_LEDGER_API_KEY=your_ledger_key npx -y firecrawl-mcp-server-licensed
```
4. Configure your MCP client:
```json
{
  "mcpServers": {
    "firecrawl-licensed": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp-server-licensed"],
      "env": {
        "FIRECRAWL_API_KEY": "your_firecrawl_key",
        "COPYRIGHTSH_LEDGER_API_KEY": "your_ledger_key"
      }
    }
  }
}
```

## Configuration
Required:
- `FIRECRAWL_API_KEY`
- `COPYRIGHTSH_LEDGER_API_KEY` (needed for license acquisition + usage logging)

Optional:
- `FIRECRAWL_API_URL` (self-hosted endpoint)
- `COPYRIGHTSH_LEDGER_API` (default: `https://ledger.copyright.sh`)
- `ENABLE_LICENSE_TRACKING` (default: `true`)
- `ENABLE_LICENSE_CACHE` (default: `false`)

License-aware options (scrape/search/extract/check_crawl_status):
- `fetch`, `include_licenses`, `stage`, `distribution`, `estimated_tokens`, `max_chars`, `payment_method`

Unavailable policy:
- License denied or HTTP 401/403/402 results are returned with an `unavailable` reason and redacted content
- Unknown license remains best-effort

## Upstream docs
- https://github.com/firecrawl/firecrawl-mcp-server
