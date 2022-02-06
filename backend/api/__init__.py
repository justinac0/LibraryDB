from flask import Flask


def create_app(config=None):
    app = Flask(__name__)
    app.config.from_mapping(config)

    from . import routes

    app.register_blueprint(routes.test)

    return app