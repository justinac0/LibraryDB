from warnings import catch_warnings
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
        # Validate Input

        db.session.add(user)
        db.session.commit()
        db.session.refresh(user)

        return user

    def get(id):
        try:
            user = db.session.query(User).filter(
                User.id == id
            ).first()

            return user
        except:
            return None

    def get_all():
        try:
            query = User.query.all()
            users = [ dict(q) for q in query ]
            return users
        except:
            return None

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
    description = db.Column(db.String(2047), unique=False, nullable=False)
    isbn        = db.Column(db.Integer, unique=True, nullable=False)

    def add(book):
        # Validate Input

        db.session.add(book)
        db.session.commit()
        db.session.refresh(book)

        return book

    def get_all():
        try:
            query = Book.query.all()
            books = [ dict(q) for q in query ]
            return books
        except:
            return None

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "title", "publisher", "author", "description", "isbn"]:
                yield key, getattr(self, key)

    def __repr__(self):
        return '<Book %r>' % self.title
