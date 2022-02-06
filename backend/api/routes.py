from flask import Blueprint, jsonify, request

from . import models
from . import db

test = Blueprint("test", __name__)

@test.route("/")
def index():
    user = models.Users.query.all()[0]
    return user.as_json()

@test.route("/testing")
def testing():
    users = models.Users.query.all()

    names = ""

    for u in users:
        names += u.username + " "

    return jsonify(ok=names)

@test.route("/v1/users", methods=["GET"])
def get_users():
    users = models.Users.query.all()
    user_dicts = [ dict(user) for user in users ]

    return jsonify(users = user_dicts)

@test.route("/v1/users", methods=["POST"])
def add_user():
    user = models.Users(**request.json)
    db.session.add(user)
    db.session.commit()
    db.session.refresh(user)

    return jsonify(user = dict(user))

@test.route("/v1/locations")
def locations():
    locations = models.Locations.query.all()
    location_dicts = [ dict(location) for location in locations ]
    print(location_dicts)
    return jsonify(locations = location_dicts)

@test.route("/v1/resources")
def resources():
    resources = models.Resources.query.all()
    resource_dicts = [ dict(resource) for resource in resources ]
    print(resource_dicts)
    return jsonify(resources = resource_dicts)
