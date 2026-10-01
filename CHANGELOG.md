## 0.2.0 - 2026-10-01

- Sync Vietnamese coverage to DeepSeek Harness dsh-v0.2.0-rc.2 (upstream 639ed015397290b3745d163aafe02ffee4aa3f84).
- Cover 58 runtime namespaces and 2,607 entries, including session-log preferences, user-question states, model search, plugin-manager copy, and DSH 0.2 UI wording.
- Update Desktop installation examples to the tauri profile and require dsh-client-locale >=0.2.0-rc.2.

## 0.1.1 - 2026-09-30

- Fix DSH 0.2 browser boot by emitting lib/client.js through window.__ModuleLoader__.load(...) instead of raw ESM exports.
- Add runtime-wrapper regression coverage so CI rejects top-level export in the browser plugin entry.

# Changelog

## 0.1.0 - 2026-09-26

- Initial Vietnamese language-pack plugin for DeepSeek Harness.
- Uses the official external language-pack API.
- Registers Vietnamese as `vi` with English fallback.
- Ships prebuilt runtime files for install-from-GitHub without a build step.
