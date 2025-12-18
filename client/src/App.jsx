import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  
  // URL của Backend. 
  // LƯU Ý: Lúc đầu chạy local thì để localhost. 
  // Khi deploy xong Backend, ta sẽ quay lại đây thay link mới.
const API_URL = 'https://my-api.onrender.com/api/tasks';
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Lỗi:", err));
  }, [])

  return (
    <div style={{ padding: "50px" }}>
      <h1>Danh sách công việc (Fullstack)</h1>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <b>{t.name}</b> - {t.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App