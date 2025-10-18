from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory task storage
TASKS = {}
NEXT_ID = 1
API_PREFIX = "/api/v1"

# Home page
@app.route("/", methods=["GET"])
def home():
    return """
    <h1>Welcome to the Tasks API (v1)</h1>

    <ul>
        <li><a href="/api/v1/health">Health Check</a></li>
        <li><a href="/api/v1/tasks">List Tasks</a></li>
    </ul>
    """, 200


# Health check
@app.route(f"{API_PREFIX}/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "version": "v1"}), 200

# List all tasks
@app.route(f"{API_PREFIX}/tasks", methods=["GET"])
def list_tasks():
    return jsonify(list(TASKS.values())), 200

# Create a new task
@app.route(f"{API_PREFIX}/tasks", methods=["POST"])
def create_task():
    global NEXT_ID
    data = request.get_json() or {}
    if "title" not in data:
        return jsonify({"error": "title is required"}), 400
    task = {"id": NEXT_ID, "title": data["title"], "done": bool(data.get("done", False))}
    TASKS[NEXT_ID] = task
    NEXT_ID += 1
    return jsonify(task), 201

# Get one task
@app.route(f"{API_PREFIX}/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    t = TASKS.get(task_id)
    if not t:
        return jsonify({"error": "not found"}), 404
    return jsonify(t), 200

# Update a task
@app.route(f"{API_PREFIX}/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    t = TASKS.get(task_id)
    if not t:
        return jsonify({"error": "not found"}), 404
    data = request.get_json() or {}
    t["title"] = data.get("title", t["title"])
    t["done"] = bool(data.get("done", t["done"]))
    TASKS[task_id] = t
    return jsonify(t), 200

# Delete a task
@app.route(f"{API_PREFIX}/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    if task_id not in TASKS:
        return jsonify({"error": "not found"}), 404
    del TASKS[task_id]
    return jsonify({}), 204

# Run the API
if __name__ == "__main__":
    app.run(debug=True)
