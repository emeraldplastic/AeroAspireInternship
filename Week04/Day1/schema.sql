
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  status TEXT NOT NULL CHECK (status IN ('pending','in_progress','done')),
  due_date TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

INSERT INTO tasks (title, description, status, due_date)
VALUES ('Finish README', 'Write project documentation', 'pending', '2025-10-20');


INSERT INTO tasks (title, description, status, due_date)
VALUES ('Learn SQL basics', 'Practice SELECT and INSERT', 'in_progress', '2025-10-25');

SELECT * FROM tasks;
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  status TEXT NOT NULL CHECK (status IN ('pending','in_progress','done')),
  due_date TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

INSERT INTO tasks (title, description, status, due_date)
VALUES ('Fresh start', 'Recreated table', 'pending', '2025-10-20');

INSERT INTO tasks (title, description, status, due_date)
VALUES ('Learn SQL basics', 'Practice SELECT and INSERT', 'in_progress', '2025-10-25');

SELECT * FROM tasks;



