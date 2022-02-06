import os

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config=None):
    app = Flask(__name__)
    app.config.from_mapping(config)
    app.config["SQLALCHEMY_DATABASE_URI"] = "mariadb+mariadbconnector://root:example@db/librarydb"

    CORS(app)

    db.init_app(app)

    with app.app_context():
        from . import routes
        db.create_all()

        app.register_blueprint(routes.test)


    return app