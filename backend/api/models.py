from flask import jsonify
from . import db


"""
"""
class User(db.Model):
    __tablename__ = "users"

    id          = db.Column(db.Integer, primary_key=True)
    username    = db.Column(db.String(255), unique=False, nullable=False)
    email       = db.Column(db.String(255), unique=False, nullable=False)
    password    = db.Column(db.String(255), unique=False, nullable=False)

    def add(user):
        # Validate Input: True = Success, False = Failure
        # username
        # email
        # password

        db.session.add(user)
        db.session.commit()
        db.session.refresh(user)

        return True

    def get(id):
        try:
            user = User.query.filter_by(username="justin").first()
            
            if user:
                return jsonify(user)
            else:
                raise RuntimeError
        except:
            return jsonify(a=1)

    def get_all():
        query = User.query.all()

        if len(query) == 0:
            return jsonify({})

        users = [ dict(q) for q in query ]

        return jsonify(users)

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "username", "email"]:
                yield key, getattr(self, key)

    def __repr__(self):
        return '<User %r>' % self.username


"""
"""
class Location(db.Model):
    __tablename__ = "locations"

    id      = db.Column(db.Integer, primary_key=True)
    name    = db.Column(db.String(255), unique=False, nullable=False)

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "nane"]:
                yield key, getattr(self, key)

    def __repr__(self):
        return '<Location %r>' % self.name


"""
"""
class Book(db.Model):
    __tablename__ = "books"

    id          = db.Column(db.Integer, primary_key=True)
    title       = db.Column(db.String(255), unique=False, nullable=False)
    publisher   = db.Column(db.String(255), unique=False, nullable=False)
    author      = db.Column(db.String(255), unique=False, nullable=False)
    description = db.Column(db.String(1023), unique=False, nullable=False)
    isbn        = db.Column(db.Integer, unique=True, nullable=False)

    def get_all():
        query = Book.query.all()

        if len(query) == 0:
            return jsonify({})

        books = [ dict(q) for q in query ]

        return jsonify(books)

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "title", "publisher", "author", "description", "isbn"]:
                yield key, getattr(self, key)

    def __repr__(self):
        return '<Book %r>' % self.title
