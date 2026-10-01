## 0.1.1 - 2026-09-30

- Fix DSH 0.2 browser boot by emitting lib/client.js through window.__ModuleLoader__.load(...) instead of raw ESM exports.
- Add runtime-wrapper regression coverage so CI rejects top-level export in the browser plugin entry.

# Changelog

## 0.1.0 - 2026-09-26

- Initial Vietnamese language-pack plugin for DeepSeek Harness.
- Uses the official external language-pack API.
- Registers Vietnamese as `vi` with English fallback.
- Ships prebuilt runtime files for install-from-GitHub without a build step.
