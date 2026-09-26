# DeepSeek Harness Vietnamese Language Pack

![DeepSeek Harness](https://img.shields.io/badge/DeepSeek_Harness-%3E%3D0.1.7--rc.2-2f6feb)
![Vietnamese coverage](https://img.shields.io/badge/Vietnamese_coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

Community-maintained **Vietnamese (Tiếng Việt) localization plugin for DeepSeek Harness (DSH)** using the official external language-pack API.

## Install

Once this repository is published:

```bash
dsh plugin --profile web add github:dienlanhvietnam-lang/deepseek-harness-vietnamese
```

Restart the web profile, then choose **Tiếng Việt** in Settings → General → Language.

Remove it with:

```bash
dsh plugin --profile web remove dsh-vietnamese-language-pack
```

## Highlights

- Official `addLanguage()` / `locale.register()` integration.
- No DSH core or binary patching.
- English fallback for newly introduced untranslated strings.
- Placeholder validation and namespace-aware dictionaries.
- Prebuilt `lib/` is committed, so GitHub installs do not require a build step.
- MIT licensed and community-friendly.

## Compatibility

Targets DeepSeek Harness `>= 0.1.7-rc.2`, where the external language-pack API is available.

The `0.1.0` translation snapshot covers **57 namespaces / 2,580 runtime entries / 100% of the audited snapshot** at upstream commit `477b4f420553e8a52c2fbccc464d7561b239c443`. Newer upstream strings safely fall back to English until the next translation update.

## Security model

The plugin only contributes locale metadata and UI dictionaries. It does not need model, MCP, shell, filesystem, credential, or conversation-data permissions.

## Upstream

https://github.com/deepseek-ai/deepseek-harness
