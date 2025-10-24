# Week05 Day2 - Flask Backend + React Frontend in Docker

## Project Structure
```
Day2/
├─ backend/
│ ├─ app.py
│ ├─ requirements.txt
│ └─ Dockerfile
├─ frontend/
│ ├─ package.json
│ ├─ Dockerfile
│ └─ src/
└─ docker-compose.yml
```

## Backend

- **Technology:** Python, Flask
- **Port:** 5000

### API Endpoints

- **GET /api/health** → Check if backend is running
- **POST /api/echo** → Echoes JSON payload

![alt text](<Screenshot 2025-10-24 230746.png>) ![alt text](<Screenshot 2025-10-24 230933.png>)

## Frontend

- **Technology:** React

- **Port:** 3000



## Docker
- Build and Run
```
docker compose up --build
```


Backend → http://localhost:5000

Frontend → http://localhost:3000


![alt text](<Screenshot 2025-10-25 001208.png>)

![alt text](<Screenshot 2025-10-25 000151.png>)


