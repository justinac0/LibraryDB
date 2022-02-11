from flask import Blueprint, jsonify, request
from . import auth
from . import models


libdb = Blueprint("libdb", __name__)


@libdb.route("/")
def index():
    return "hello"


@libdb.route("/users", methods=["GET"])
def get_users():
    users = models.User.get_all()

    if users:
        return jsonify(users)


@libdb.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    user = models.User.get(id)
    return jsonify(id=user.id, email=user.email, username=user.username)


@libdb.route("/locations")
def get_locations():
    locations = models.Location.query.all()
    location_dicts = [ dict(l) for l in locations ]

    return jsonify(location_dicts)


@libdb.route("/books", methods=["GET"])
def get_books():
    books = models.Book.get_all()
    return jsonify(books)


@libdb.route("/books", methods=["POST"])
@auth.token_required
def add_book():
    book = models.Book(**request.json)
    models.Book.add(book)

    return jsonify(**request.json)
