# Week04 - Day3: Tasks API (v1)

## Overview
This is a **simple Flask API** to manage tasks.  
You can:

- Add new tasks  
- View tasks  
- Update tasks  
- Delete tasks  

**Features:**

- `done` status filter (`true` / `false`)  
- `due_date` filter (`due_before=YYYY-MM-DD`)  
- Search by task title  
- Pagination (`page` and `per_page`)  

**Language:** Python  
**Framework:** Flask  
**Database:** SQLite (`tasks.db`)  

---

## Setup Instructions

1. Open terminal in `Week04/Day3`:

```bash
cd Week04/Day3
```

2. Create virtual environment (optional, recommended):
```
python -m venv .venv
```

3. Activate virtual environment:

```
.venv\Scripts\activate
```




4. nstall dependencies:
```
pip install Flask SQLAlchemy
```

5. Run the API:
```
python app.py
```

# Screenshots:


*Title:*
![alt text](<Screenshot 2025-10-18 234059.png>)

*Page:*
 ![alt text](<Screenshot 2025-10-18 234147.png>)

 *Status:*
 ![alt text](<Screenshot 2025-10-18 232956.png>)
