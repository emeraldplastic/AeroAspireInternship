from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # enable CORS for all routes


tasks = []


# ERROR HANDLERS

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": "Bad request"}), 400


# ROUTES

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    if not data or "task" not in data or not data["task"].strip():
        return jsonify({"error": "Task must be a non-empty string"}), 400
    task = {"id": len(tasks)+1, "task": data["task"].strip()}
    tasks.append(task)
    return jsonify(task), 201

@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    data = request.get_json()
    if not data or "task" not in data or not data["task"].strip():
        return jsonify({"error": "Task must be a non-empty string"}), 400

    for task in tasks:
        if task["id"] == id:
            task["task"] = data["task"].strip()
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    for i, task in enumerate(tasks):
        if task["id"] == id:
            deleted = tasks.pop(i)
            return jsonify(deleted)
    return jsonify({"error": "Task not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
