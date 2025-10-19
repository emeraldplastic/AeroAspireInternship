from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

bp = Blueprint("routes", __name__)

# Hardcoded users for now
USERS = {
    "alice": "password123",
    "john": "mypassword"
}

@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if USERS.get(username) != password:
        return jsonify({"msg": "Invalid credentials"}), 401

    token = create_access_token(identity=username)
    return jsonify(access_token=token), 200

@bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user = get_jwt_identity()
    return jsonify(username=user, message="Protected route"), 200
