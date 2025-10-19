from flask import Flask
from flask_jwt_extended import JWTManager
from .config import Config

jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    jwt.init_app(app)

    from .routes import bp
    app.register_blueprint(bp)


    @app.route("/")
    def home():
        return "<h1>Welcome to Flask Auth App</h1>"

    return app
