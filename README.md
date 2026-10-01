# DeepSeek Harness Tiếng Việt

![DeepSeek Harness](https://img.shields.io/badge/DeepSeek_Harness-%3E%3D0.2.0--rc.2-2f6feb)
![Vietnamese coverage](https://img.shields.io/badge/Vietnamese_coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub stars](https://img.shields.io/github/stars/dienlanhvietnam-lang/deepseek-harness-vietnamese?style=social)

**Gói ngôn ngữ Tiếng Việt cho DeepSeek Harness (DSH)** — plugin cộng đồng giúp giao diện DSH hiển thị tiếng Việt bằng API language-pack chính thức của DeepSeek Harness.

## Cài đặt nhanh

```bash
dsh plugin --profile tauri add github:dienlanhvietnam-lang/deepseek-harness-vietnamese
```

Khởi động lại DeepSeek Harness Desktop, sau đó vào **Cài đặt → Chung → Ngôn ngữ** và chọn **Tiếng Việt**.

Gỡ plugin:

```bash
dsh plugin --profile tauri remove dsh-vietnamese-language-pack
```

## Tương thích

| DSH | Trạng thái |
|---|---|
| `>= 0.2.0-rc.2` | Mục tiêu chính; đã audit theo runtime Desktop 0.20 |
| `0.1.x` | Dùng release 0.1.x của language pack; bản 0.2.0 này khóa theo API/runtime DSH 0.2 |

## Coverage

Bản `0.2.0` được audit theo `@deepseek-ai/dsh-client-locale 0.2.0-rc.2`, commit upstream `639ed015397290b3745d163aafe02ffee4aa3f84`:

- **58 namespace** giao diện.
- **2.607 entry** runtime.
- **0 entry thiếu** trong snapshot đã audit.
- **100% coverage** cho snapshot này.

Plugin chỉ đăng ký locale `vi` và dictionary giao diện; không sửa core DSH, model, MCP, terminal, file, credential hay dữ liệu hội thoại. Khi upstream có key mới ngoài snapshot, DSH fallback sang English.

## Đóng góp

Xem [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT.
