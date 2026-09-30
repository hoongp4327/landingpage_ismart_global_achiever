# Template chương trình iGLOBAL

Template dựa trên trang iLEAD 1 được cung cấp, giữ cấu trúc hero, 6 chủ đề, 4 lợi ích, đối tượng và CTA. Nội dung iGLOBAL 1–4 lấy từ 4 flyer.

- Sửa nội dung và tên banner trong `programs.json`.
- Sửa cấu trúc dùng chung trong `template.html` và phép chuyển đổi trong `build.mjs`.
- CSS dùng chung: `../assets/programs/program.css`.
- Chạy `node program-template/build.mjs` từ thư mục gốc để tạo lại 4 trang.
- Trang xuất ra: `chuong-trinh/iglobal-1/` đến `chuong-trinh/iglobal-4/`.
- Banner: `assets/programs/iglobal-N-banner.webp` (1664px), và `iglobal-N-banner-960.webp` (960px). Thay cả hai biến thể khi cập nhật hình ảnh.
- Banner được tạo bằng công cụ image_gen tích hợp; prompt đầy đủ lưu trong `banner-prompts.json`. WebP quality 82.
- Các thẻ lộ trình trên trang chủ liên kết đến trang chi tiết; CTA quay về form hiện có và giữ ref/UTM.
- Chưa đặt canonical/og:url vì chưa xác nhận tên miền triển khai.

Chỉ xem trước cục bộ. Không push hoặc deploy trước khi người dùng yêu cầu.
