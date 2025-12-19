# 1. Dùng Node.js bản nhẹ
FROM node:18-alpine

# 2. Tạo thư mục làm việc
WORKDIR /app

# 3. Copy package.json
COPY package*.json ./

# 4. Cài đặt thư viện
RUN npm install

# 5. Copy code vào
COPY . .

# 6. Mở cổng 5173 (Cổng mặc định của Vite)
EXPOSE 5173

# 7. Lệnh chạy: QUAN TRỌNG LÀ THÊM --host
# Nếu không có --host, bạn không thể truy cập từ trình duyệt bên ngoài
CMD ["npm", "run", "dev", "--", "--host"]