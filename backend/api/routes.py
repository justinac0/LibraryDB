from operator import methodcaller
from flask import Blueprint, jsonify
from . import auth
from . import models


libdb = Blueprint("libdb", __name__)


@libdb.route("/")
def index():
    return "hello"


@libdb.route("/users", methods=["GET"])
def get_users():
    return models.User.get_all()


@libdb.route("/users/<int:id>", methods=["GET"])
@auth.token_required
def get_user(id):
    return models.User.get(id)


@libdb.route("/locations")
def get_locations():
    locations = models.Location.query.all()
    location_dicts = [ dict(l) for l in locations ]

    return jsonify(location_dicts)


@libdb.route("/books", methods=["GET"])
def get_books():
    return models.Book.get_all()


@libdb.route("/books", methods=["POST"])
@auth.token_required
def add_book():
    return jsonify(book="added....")
