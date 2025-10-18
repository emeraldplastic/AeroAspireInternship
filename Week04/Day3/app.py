from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# --- Create app ---
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# --- Task model ---
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    done = db.Column(db.Boolean, default=False)
    due_date = db.Column(db.DateTime, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "done": self.done,
            "due_date": self.due_date.strftime("%Y-%m-%d") if self.due_date else None
        }

# --- Create database if not exists ---
with app.app_context():
    db.create_all()

# --- Home ---
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Task API! Use /tasks to manage your tasks."})

# --- GET tasks with filters, search, pagination ---
@app.route("/tasks", methods=['GET'])
def get_tasks():
    query = Task.query

    # Filter by done
    done_param = request.args.get('done')
    if done_param == 'true':
        query = query.filter_by(done=True)
    elif done_param == 'false':
        query = query.filter_by(done=False)

    # Filter by due_date before a certain date
    due_before = request.args.get('due_before')
    if due_before:
        try:
            date_obj = datetime.strptime(due_before, "%Y-%m-%d")
            query = query.filter(Task.due_date <= date_obj)
        except ValueError:
            return jsonify({"error": "due_before must be in YYYY-MM-DD format"}), 400

    # Search by title
    title = request.args.get('title')
    if title:
        query = query.filter(Task.title.ilike(f"%{title}%"))

    # Pagination
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 5, type=int)
    tasks = query.paginate(page=page, per_page=per_page, error_out=False).items

    return jsonify([t.to_dict() for t in tasks])

# --- POST new task ---
@app.route("/tasks", methods=['POST'])
def add_task():
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({"error": "title required"}), 400

    due_date = None
    if 'due_date' in data:
        try:
            due_date = datetime.strptime(data['due_date'], "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "due_date must be in YYYY-MM-DD format"}), 400

    new_task = Task(
        title=data['title'],
        done=bool(data.get('done', False)),
        due_date=due_date
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

# --- PUT update task ---
@app.route("/tasks/<int:id>", methods=['PUT'])
def update_task(id):
    task = Task.query.get_or_404(id)
    data = request.get_json()
    task.title = data.get('title', task.title)
    if 'done' in data:
        task.done = bool(data['done'])
    if 'due_date' in data:
        try:
            task.due_date = datetime.strptime(data['due_date'], "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "due_date must be in YYYY-MM-DD format"}), 400
    db.session.commit()
    return jsonify(task.to_dict())

# --- DELETE single task ---
@app.route("/tasks/<int:id>", methods=['DELETE'])
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": f"Task {id} deleted successfully!"})

# --- DELETE all tasks ---
@app.route("/tasks", methods=['DELETE'])
def delete_all_tasks():
    num_deleted = db.session.query(Task).delete()
    db.session.commit()
    return jsonify({"message": f"Deleted {num_deleted} tasks!"})

# --- Run app ---
if __name__ == "__main__":
    app.run(debug=True)
