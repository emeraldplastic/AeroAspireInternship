from flask import Flask, request, jsonify
import mysql.connector
import os

app = Flask(__name__)

# Connect to MySQL using env vars
db = mysql.connector.connect(
    host="db",
    user=os.environ.get("MYSQL_USER"),
    password=os.environ.get("MYSQL_PASSWORD"),
    database=os.environ.get("MYSQL_DATABASE")
)

@app.route("/api/health", methods=["GET"])
def health():
    cursor = db.cursor()
    cursor.execute("SELECT 1")
    cursor.close()
    return jsonify({"message": "Backend is running and DB is reachable!"})

@app.route("/api/echo", methods=["POST"])
def echo():
    data = request.get_json()
    return jsonify({"you_sent": data})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
