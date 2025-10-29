#  Full Stack Docker Setup (Flask + React)


## Locally Tested

![alt text](<Screenshot 2025-10-29 231812.png>)

![alt text](<Screenshot 2025-10-29 232128.png>)

##  1. Run Full Stack Locally

### Backend (Flask)
```bash
cd backend
python app.py
```
### Frontend (React)
```
cd frontend
npm run dev
```

## 2. Run Both Using Docker Compose

### Build and Start
```
docker compose up --build
```
### Run in Background
```
docker compose up --build -d
```

## 3. View Logs

### Single Container Logs
```
docker ps              
docker logs <container_name>
```

### All Services (Compose Logs)
```
docker compose logs
docker compose logs -f
```

## 4. Clean Unused Containers and Images

### Stop and Remove Running Containers
```
docker compose down
```

### Remove Stopped Containers
```
docker container prune
```
### Remove Unused Images
```
docker image prune -a
```
### Remove Unused Volumes
```
docker volume prune
```
### Deep Clean Everything
```
docker system prune -a --volumes
```
