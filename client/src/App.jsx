import { useState, useEffect } from 'react';

// 👇 THAY LINK CỦA BẠN VÀO ĐÂY (Link my-be trên Render) 👇
const API_URL = "https://my-be-xxxx.onrender.com"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log("Lỗi:", err));
  }, []);

  const handleAdd = () => {
    if (!input) return;
    fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: input })
    })
    .then(res => res.json())
    .then(newItem => {
      setTasks([...tasks, newItem]);
      setInput("");
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 DEMO FULLSTACK CI/CD</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nhập nội dung..." />
      <button onClick={handleAdd}>GỬI SERVER</button>
      <ul>
        {tasks.map(item => <li key={item.id}>{item.content}</li>)}
      </ul>
    </div>
  );
}

export default App;