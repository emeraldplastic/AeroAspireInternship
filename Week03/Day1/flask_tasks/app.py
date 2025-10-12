from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data (in-memory storage)
tasks = [
    {"id": 1, "title": "Buy milk"},
    {"id": 2, "title": "Do homework"}
]

# Home route
@app.route('/')
def home():
    return "Hello, world! Flask is running."

# GET route - get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# POST route - add a new task
@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()

    if not data or "title" not in data:
        return jsonify({"error": "Title is required"}), 400

    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"]
    }

    tasks.append(new_task)
    return jsonify(new_task), 201


if __name__ == "_main_":
    app.run(debug=True)