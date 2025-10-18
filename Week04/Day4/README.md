# Flask Task Manager API – Week04 Day4

## Overview
This project is a simple **Flask API** to manage tasks with full CRUD functionality. It uses **SQLite** as the database and **SQLAlchemy** as the ORM. You can interact with it using Postman to add, update, view, and delete tasks.

---

## Folder Structure
```

week04/
│
├── day1/
│ └── ... 
├── day2/
│ └── ... 
├── day3/
│ └── ... 
├── day4/
│ ├── app_orm.py # Main Flask app with CRUD routes
│ ├── init_db.py # Script to seed initial tasks
│ ├── tasks.db # SQLite database (created after running init_db.py)
│ └── pycache/ # Python cache files (auto-generated)
└── README.md 
```


---

## Setup Instructions

1. **Activate the virtual environment**

```bash
cd week04/day4
source ../venv/bin/activate     
Install dependencies (if not already installed)
```

2. **Install dependencies**
```
pip install flask flask_sqlalchemy flask_migrate
```

3. **Initialize the database with sample data**
```
python init_db.py
```

*Expected output:*
```
Database seeded successfully!
```

4. **Run the Flask server**
```
export FLASK_APP=app_orm.py
flask run
```

## Screenshots:

*Terminal consistency:*
![alt text](<Screenshot 2025-10-19 021730.png>) 

*Postman consistency:*
![alt text](<Screenshot 2025-10-19 021803.png>) 

*Seeding:*
![alt text](<Screenshot 2025-10-19 021837.png>)
