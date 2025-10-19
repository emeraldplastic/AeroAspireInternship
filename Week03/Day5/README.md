# Week03 Day5 - Flask Auth App

## What this app does
- Simple Flask app with **token-based authentication**
- Homepage at `/`
- Users can **login** at `/login` and get a **JWT token**
- Protected route `/profile` can be accessed **only with token**
- Logs user activity to `logs/app.log`
- Unit tests for login and protected route

---

## Folder Structure
```
week03/day5/
├─ app/
│ ├─ init.py # creates Flask app, homepage, logging, JWT setup
│ ├─ config.py # app configuration
│ └─ routes.py # login and profile routes
├─ tests/
│ ├─ test_auth.py # tests login 
│ └─ test_routes.py # tests profile require token
├─ run.py # runs the app
├─ requirements.txt # packages needed
└─ .venv/ # virtual environment
```

1. **Activate virtual environment:**
```bash
source .venv/Scripts/activate   
```

2. **Install requirements:**

```bash

pip install -r requirements.txt
```

3.**Run the app:**

```
python run.py
```


4. **Open browser at:**
```
http://127.0.0.1:5000/
Homepage should display
```

 5. **How to test**


*Login:*
```
URL: /login
Method: POST

Body (JSON):

{
  "username": "alice",
  "password": "password123"
}
Response: { "access_token": "<your_token>" }
```

*Profile:*
```
URL: /profile
Method: GET

Header: Authorization: Bearer <your_token>

Response: { "username": "alice", "message": "Protected route" }
```

6.**LOG app:**

*Logging means the app keeps a record of what’s happening while it runs.*

*For example:*

*When someone logs in, it writes a message in `logs/app.log`*

*If there’s an error, it also writes it there*

*It helps you see what happened later without watching the app run live*

## Screenshots:


**Login:**

![alt text](<Screenshot 2025-10-20 033609.png>)

**Profile:***(with authorization key enabled)*

  ![alt text](<Screenshot 2025-10-20 025213.png>) 

**Profile:***(without authorization key enabled)*

  ![alt text](<Screenshot 2025-10-20 025224.png>)

 **Log:**
 
  ![alt text](<Screenshot 2025-10-20 025332.png>)

