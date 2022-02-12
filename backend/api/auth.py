from functools import wraps
import datetime
import jwt

from flask import Blueprint, jsonify, request

from . import models


auth = Blueprint("auth", __name__)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get("token")

        if not token:
            return "Token is Missing", 401

        try:
            jwt.decode(token, "testing", algorithms="HS256")
        except:
            return "Authorization required to view this page...", 403

        return f(*args, **kwargs)
    
    return decorated


@auth.route("/register", methods=["POST"])
def register():
    user = models.User(**request.json)
    models.User.add(user)

    return jsonify(user=dict(user))


@auth.route("/login", methods=["GET", "POST"])
def login():
    data = models.User(**request.json)
    user = models.User.query.filter_by(username=data.username, password=data.password).first()

    if user:
        token = jwt.encode({"user": data.username, "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30), "username": data.username}, "testing")
        return jsonify(token)

    return "Could not verify Login", 401
