import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch tasks on load
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("API fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Add a new task
  const handleAddTask = async () => {
    if (!newTask.trim()) return alert("Enter a task first!");
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newTask }),
      });
      const data = await res.json();
      setTasks([data, ...tasks]);
      setNewTask("");
    } catch (err) {
      console.error("Add task error:", err);
    }
  };

  // ✅ Delete task
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Delete task error:", err);
    }
  };

  // ✅ Toggle task completion
  const handleToggle = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "PUT",
      });
      const updated = await res.json();
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      console.error("Toggle error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📝 PLP Task Manager</h1>

      {/* ✅ Task Input */}
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-3 border rounded-lg text-gray-900"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* ✅ Tasks List */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        {loading ? (
          <p>Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span
                  onClick={() => handleToggle(task._id)}
                  className={`cursor-pointer ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
