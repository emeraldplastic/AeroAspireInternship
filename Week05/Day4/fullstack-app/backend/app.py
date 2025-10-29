from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask backend!"})

@app.route('/api/tasks')
def get_tasks():
    tasks = [
        {"id": 1, "title": "Learn Docker"},
        {"id": 2, "title": "Build a fullstack app"}
    ]
    return jsonify(tasks)

if __name__ == "__main__":
    app.run(debug=True)
