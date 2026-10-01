# DeepSeek Harness Vietnamese Language Pack

![DeepSeek Harness](https://img.shields.io/badge/DeepSeek_Harness-%3E%3D0.2.0--rc.2-2f6feb)
![Vietnamese coverage](https://img.shields.io/badge/Vietnamese_coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

Community-maintained **Vietnamese (Tiếng Việt) localization plugin for DeepSeek Harness (DSH)** using the official external language-pack API.

## Install

```bash
dsh plugin --profile tauri add github:dienlanhvietnam-lang/deepseek-harness-vietnamese
```

Restart DeepSeek Harness Desktop, then choose **Tiếng Việt** in Settings → General → Language.

## Compatibility

Targets DeepSeek Harness `>= 0.2.0-rc.2`. For DSH 0.1.x, use the 0.1.x language-pack release.

The `0.2.0` translation snapshot covers **58 namespaces / 2,607 runtime entries / 100% of the audited snapshot** at upstream commit `639ed015397290b3745d163aafe02ffee4aa3f84`.

## Security model

The plugin only contributes locale metadata and UI dictionaries. It does not need model, MCP, shell, filesystem, credential, or conversation-data permissions.

## Upstream

https://github.com/deepseek-ai/deepseek-harness
