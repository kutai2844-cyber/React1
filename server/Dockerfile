# 1. Dùng Node.js bản nhẹ (alpine)
FROM node:18-alpine

# 2. Tạo thư mục làm việc bên trong container
WORKDIR /app

# 3. Copy file package.json trước để tận dụng bộ nhớ đệm (Cache)
# (Giúp lần build sau nhanh hơn nếu không cài thêm thư viện mới)
COPY package*.json ./

# 4. Cài đặt các thư viện (node_modules)
RUN npm install

# 5. Copy toàn bộ code còn lại vào trong container
COPY . .

# 6. Mở cổng 5000 (Phải khớp với cổng trong index.js của bạn)
EXPOSE 5000

# 7. Lệnh chạy server
CMD ["npm", "start"]