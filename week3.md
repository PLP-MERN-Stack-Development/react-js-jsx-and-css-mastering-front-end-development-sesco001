# 🧠 PLP MERN Stack Development — Week 3 Project  
### 🌐 Task Manager (Frontend + Backend Integration)

This document explains how the **Week 3 Full-Stack (MERN)** project is organized and how to **run both the frontend and backend** parts of the application.

---

## 🗂️ Project Folder Structure

react-we-3/
│
├── backend/ # Backend (Node.js + Express + MongoDB)
│ ├── models/
│ │ └── Task.js # MongoDB Schema for tasks
│ ├── routes/
│ │ └── taskRoutes.js # REST API routes (CRUD)
│ ├── server.js # Entry file (connects Express to MongoDB)
│ ├── .env # Environment variables (not pushed to Git)
│ ├── package.json # Backend dependencies
│ └── .gitignore
│
├── src/ # Frontend (React + Vite)
│ ├── App.jsx # Main React component (calls backend API)
│ ├── main.jsx # Root entry point
│ ├── components/ # (Optional) UI components like TaskManager
│ └── assets/ # Optional images/icons
│
├── package.json # Frontend dependencies
├── vite.config.js # Vite setup
├── README.md
└── week3.md # This setup guide


---

## ⚙️ Step-by-Step Setup

### 🧩 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-sesco001.git
cd react-we-3

🖥️ 2. Start the Backend (Server)

Navigate to the backend folder:

cd backend

Install dependencies:
npm install

Create an .env file inside backend/:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:
npm run dev


The backend will run on 👉 http://localhost:5000

💻 3. Start the Frontend (React App)

From the root folder:

cd ..
npm install
npm run dev


The frontend will run on 👉 http://localhost:5173

🔗 4. Connecting Frontend and Backend

In your App.jsx, the frontend connects to the backend API using:

fetch("http://localhost:5000/api/tasks")


➡️ Make sure both servers are running:

Backend: http://localhost:5000

Frontend: http://localhost:5173

🧪 5. API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Toggle completion
DELETE	/api/tasks/:id	Delete a task
⚙️ 6. Development Flow Summary
Step	Action	Folder
1️⃣	Clone repo	root
2️⃣	Run npm install for frontend	root
3️⃣	Run npm install for backend	backend/
4️⃣	Set up .env	backend/
5️⃣	Run backend with npm run dev	backend/
6️⃣	Run frontend with npm run dev	root
✅	Open http://localhost:5173	Browser
🧑‍💻 Author

Name: Meshack Matheka
Program: PLP MERN Stack Development — Week 3
Project: React + Express Task Manager

✨ This week focused on connecting frontend (React) with backend (Express + MongoDB) using REST APIs.
