from flask import Blueprint, jsonify

from . import models
from . import db

test = Blueprint("test", __name__)

@test.route("/")
def index():
    return "hello"

@test.route("/testing")
def testing():
    users = models.Users.query.all()

    names = ""

    for u in users:
        names += u.username + " "

    return jsonify(ok=names)
