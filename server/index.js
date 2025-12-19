const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000; // Render dùng port 10000

app.use(cors());
app.use(express.json());

let tasks = [
    { id: 1, content: "Báo cáo thầy Tín thành công!" },
    { id: 2, content: "Demo CI/CD Fullstack chạy ngon lành" }
];

app.get('/', (req, res) => {
    res.send('Backend Node.js đang chạy OK!');
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = { id: Date.now(), content: req.body.content };
    tasks.push(newTask);
    res.json(newTask);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});