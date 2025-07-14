# Hướng Dẫn Setup course work 3

### Các bước setup
1. **Cài XAMPP**:
   - Tải file `.exe` từ link trên, chạy và cài vào thư mục `C:\xampp\htdocs`.
   - Mở `C:\xampp\xampp-control.exe`, nhấn **Start** cho Apache và MySQL (sẽ chuyển sang màu xanh).

2. **Tạo thư mục dự án**:
   - Vào `C:\xampp\htdocs`, tạo thư mục `student_qa`.

3. **Thêm code vào**:
   - Tải file ZIP chứa code vào folder htdocs của xampp:
     - `header.php`, `footer.php`, `index.php`, `add_post.php`, `edit_post.php`, `delete_post.php`, `manage_users.php`, `manage_modules.php`, `contact.php`.
   - Dán code anh/chị đã gửi vào từng file.

4. **Tạo database**:
   - Mở trình duyệt, vào `http://localhost/phpmyadmin`.
   - Nhấn **New**, đặt tên `student_qa`, nhấn **Create**.
   - Vào tab **SQL**, dán và chạy đoạn code SQL ở file [ERD.sql](/ERD.sql)

5. Một sô lưu ý:
   - Bật dịch vụ mail để chức năng contact( gửi mail cho admin hoạt động)
     - Yêu cầu mail đã có xác thực 2 bước 
     - Tìm file php.ini:
        
        Hoặc tìm file tại `C:\xampp\php\php.ini`
        Chỉnh sửa php.ini:
        Mở file bằng Notepad, tìm các dòng sau (dùng Ctrl + F):

        [mail function]
        - SMTP = localhost → Thay bằng SMTP = smtp.gmail.com
        - smtp_port = 25 → Thay bằng smtp_port = 587 (cổng TLS của Gmail)

        Thêm các dòng sau nếu không có:
        - sendmail_from = your-email@gmail.com
        - sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"


Mở `C:\xampp\sendmail\sendmail.ini`, chỉnh sửa:
- smtp_server=smtp.gmail.com
- smtp_port=587
- smtp_ssl=tls
- auth_username=your-email@gmail.com
- auth_password=your-app-password

Cách lấy `your-app-password`: Tạo mật khẩu ứng dụng (App Password) trong tài khoản Gmail (vào Google Account > Security > App Passwords, chọn "Mail" và "Other", ghi lại 16 ký tự).

Khởi động lại Apache:
Trong XAMPP Control Panel, nhấn Stop rồi Start lại Apache.
