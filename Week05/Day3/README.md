# Day3: Flask + React + MySQL Docker Setup

## Overview
This project demonstrates a full-stack setup with:
- **Flask backend** (Python)  
- **React frontend** (Node + Nginx)  
- **MySQL database**  
- **Docker Compose** for orchestration  
- `.env` file for secrets and configuration

Everything runs in containers — no need to install Python, Node, or MySQL locally.

---

## Folder Structure
```
Day3/
├─ backend/
│ ├─ app.py
│ ├─ requirements.txt
│ └─ Dockerfile
├─ frontend/
│ ├─ package.json
│ ├─ Dockerfile
│ └─ src/
├─ .env
└─ docker-compose.yml
```


---

## .env File

```
# MySQL
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=mydb
MYSQL_USER=user
MYSQL_PASSWORD=userpass
```

## Docker Compose

- Builds and runs 3 containers:

- db → MySQL

- backend → Flask API

- frontend → React app served by Nginx

## How to Run

- Open terminal in Day3/

- Build and start containers:

- docker compose up --build


## Access services:

Backend: http://localhost:5000/api/health

Frontend: http://localhost:3000

## Screenshots

![alt text](<Screenshot 2025-10-25 022423.png>)
 ![alt text](<Screenshot 2025-10-25 022445.png>)