from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"message": "Backend is running "}), 200


@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()
    return jsonify({"you_sent": data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
