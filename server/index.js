import { useState, useEffect } from 'react';

// 👇👇👇 THAY LINK BACKEND CỦA BẠN VÀO DƯỚI ĐÂY 👇👇👇
const API_URL = "https://dashboard.render.com/web/srv-d51qs1m3jp1c73f3299g"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // 1. Lấy dữ liệu từ Backend khi web vừa mở
  useEffect(() => {
    fetch(`${API_URL}/api/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log("Lỗi kết nối:", err));
  }, []);

  // 2. Hàm gửi dữ liệu lên Backend
  const handleAdd = () => {
    if (!input) return;
    fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: input })
    })
    .then(res => res.json())
    .then(newItem => {
      setTasks([...tasks, newItem]); // Cập nhật danh sách ngay lập tức
      setInput(""); // Xóa ô nhập
    });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "50px", textAlign: "center", backgroundColor: "#282c34", minHeight: "100vh", color: "white" }}>
      <h1>🚀 DEMO FULLSTACK CI/CD</h1>
      <h3>Sinh viên thực hiện: [Tên Bạn]</h3>

      <div style={{ margin: "20px 0" }}>
        <input 
          style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "none" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập nội dung báo cáo..." 
        />
        <button 
          onClick={handleAdd}
          style={{ padding: "10px 20px", marginLeft: "10px", borderRadius: "5px", border: "none", background: "#61dafb", cursor: "pointer", fontWeight: "bold" }}
        >
          GỬI SERVER
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(item => (
          <li key={item.id} style={{ background: "#3a3f4b", margin: "10px auto", padding: "15px", width: "400px", borderRadius: "8px", textAlign: "left" }}>
            ✅ {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;