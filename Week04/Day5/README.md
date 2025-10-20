# Week04 Day5 — Task Manager App

## Overview

This project is a simple **Task Manager** application built with **Node.js (Express) backend** and **React frontend**.  
It demonstrates:

- Connecting a React frontend to a database-backed API
- Handling empty data, no tasks, and backend errors
- Basic CRUD operations (fetching tasks)
- Interactive frontend UI

---

## Folder Structure
```
Week04/
└── Day5/
├── backend/
│ ├── index.js
│ └── package.json
└── frontend/
├── src/
│ ├── components/
│ │ └── TaskList.jsx
│ ├── api.js
│ ├── App.jsx
│ └── styles.css
└── package.json
```


---

## Backend Setup

1. Navigate to backend folder:

```bash
cd Week04/Day5/backend
```

2. Install dependencies:
```
npm install express cors
```

3. Start the backend server:
```
node index.js
```

*Server runs on: http://localhost:4000*

*Test API endpoint: http://localhost:4000/tasks*


## Frontend Setup

1. Navigate to frontend folder:
```
cd Week04/Day5/frontend
```

2. Install dependencies:
```
npm install
npm install axios
```

3. Start the React app:
```
npm run dev
```

*Open the URL shown by Vite (usually http://localhost:5173)*

# Features / Behavior

### Fetch tasks from backend API:

*Loading state displayed while fetching*

*No tasks: shows “No tasks found”*

*Error handling: shows error message if backend is down*

### Interactive frontend:

*Click task to toggle done*

*Add new task locally*

*Refresh / Retry buttons*

---

## Screenshots
**BACKEND:**
![alt text](<Screenshot 2025-10-21 010339.png>)

**FRONTEND:**
 ![alt text](<Screenshot 2025-10-21 011335.png>)