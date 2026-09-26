# DeepSeek Harness Tiếng Việt

![DeepSeek Harness](https://img.shields.io/badge/DeepSeek_Harness-%3E%3D0.1.7--rc.2-2f6feb)
![Vietnamese coverage](https://img.shields.io/badge/Vietnamese_coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub stars](https://img.shields.io/github/stars/dienlanhvietnam-lang/deepseek-harness-vietnamese?style=social)

**Gói ngôn ngữ Tiếng Việt cho DeepSeek Harness (DSH)** — plugin cộng đồng giúp giao diện DSH hiển thị tiếng Việt bằng API language-pack chính thức của DeepSeek Harness.

> Tên package: `dsh-vietnamese-language-pack`
>
> Repo: `deepseek-harness-vietnamese`

## Cài đặt nhanh

Sau khi repo được phát hành trên GitHub:

```bash
dsh plugin --profile web add github:dienlanhvietnam-lang/deepseek-harness-vietnamese
```

Khởi động lại profile `web`, sau đó vào **Cài đặt → Chung → Ngôn ngữ** và chọn **Tiếng Việt**.

Gỡ plugin:

```bash
dsh plugin --profile web remove dsh-vietnamese-language-pack
```

## Vì sao dùng plugin này?

- Dùng API language-pack chính thức: `addLanguage()` và `locale.register()`.
- Không sửa core DSH, không patch binary.
- Có fallback sang English khi upstream thêm chuỗi mới chưa kịp dịch.
- Giữ nguyên placeholder và token kỹ thuật.
- Có kiểm tra coverage theo từng namespace.
- `lib/` được commit sẵn: cài từ GitHub không cần chạy build script của repo.
- MIT, phù hợp để cộng đồng Việt Nam cùng đóng góp.

## Tương thích

| DSH | Trạng thái |
|---|---|
| `>= 0.1.7-rc.2` | Mục tiêu chính; dùng API language-pack chính thức |
| `0.1.5.x` và cũ hơn | Không hỗ trợ bằng plugin này; các bản cũ chưa có API language-pack cần thiết |

Plugin đăng ký locale `vi` với nhãn `Tiếng Việt`, fallback `en`.

## Coverage

Bản `0.1.0` được audit theo `@deepseek-ai/dsh-client-locale 0.1.7-rc.2`, commit upstream `477b4f420553e8a52c2fbccc464d7561b239c443`:

- **57 namespace** giao diện.
- **2.580 entry** runtime.
- **0 entry thiếu** trong snapshot đã audit.
- **100% coverage** cho snapshot này.

Số liệu được lưu trong `translations/meta.json`. CI kiểm key, placeholder và dictionary trước mỗi thay đổi. Khi upstream thêm chuỗi mới sau snapshot trên, DSH tự fallback sang English thay vì làm lỗi giao diện; workflow `Upstream watch` sẽ báo cần audit lại.

## Cách hoạt động

Plugin chỉ làm ba việc:

1. Đăng ký ngôn ngữ `vi`.
2. Đăng ký dictionary tiếng Việt cho từng namespace DSH.
3. Để runtime DSH tự xử lý preference, fallback và cập nhật UI.

Plugin **không** truy cập model, MCP, terminal, file, credential hay dữ liệu hội thoại.

## Đóng góp bản dịch

Xem [CONTRIBUTING.md](CONTRIBUTING.md). Khi sửa một câu, hãy ghi namespace + key + câu cũ + câu đề xuất để review dễ hơn.

## Liên kết

- Upstream: https://github.com/deepseek-ai/deepseek-harness
- English README: [README.en.md](README.en.md)

## License

MIT.
