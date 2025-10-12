from flask import Flask, request, jsonify

app1=Flask(__name__)

tasks = [
    {"id": 1, "title": "Buy milk", "completed": False},
    {"id": 2, "title": "Read book", "completed": True},
]


next_id = 3


@app1.route('/')
def home():
    return "Flask API is running!"

# GET /tasks with optional filtering ?completed=true/false
@app1.route("/tasks", methods=["GET"])
def get_tasks():
    completed_filter = request.args.get("completed")
    result = tasks

    if completed_filter is not None:
        completed = completed_filter.lower() == "true"
        result = [task for task in tasks if task["completed"] == completed]

    return jsonify(result)

# DELETE /tasks/<id>
@app1.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    global tasks
    task = next((t for t in tasks if t["id"] == id), None)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    tasks = [t for t in tasks if t["id"] != id]
    return jsonify({"message": "Task deleted"})

# PUT /tasks/<id>
@app1.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    data = request.get_json()
    task = next((t for t in tasks if t["id"] == id), None)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    task["title"] = data.get("title", task["title"])
    if "completed" in data:
        task["completed"] = data["completed"]

    return jsonify(task)

# POST /tasks to add a new task
@app1.route("/tasks", methods=["POST"])
def create_task():
    global next_id
    data = request.get_json()
    new_task = {
        "id": next_id,
        "title": data.get("title", ""),
        "completed": data.get("completed", False)
    }
    tasks.append(new_task)
    next_id += 1
    return jsonify(new_task), 201

if __name__ == "__main__":
    app1.run(debug=True)
