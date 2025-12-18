const express = require('express');
const cors = require('cors');
const app = express();

// QUAN TRỌNG: Cho phép Frontend gọi API
app.use(cors()); 
app.use(express.json());

// Dữ liệu mẫu (Thay thế Database tạm thời)
const tasks = [
    { id: 1, name: "Học React", status: "Done" },
    { id: 2, name: "Deploy lên Render", status: "Pending" },
    { id: 3, name: "Ăn tối", status: "Pending" }
];

// API trả về danh sách
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});