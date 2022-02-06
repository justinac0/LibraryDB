from flask import jsonify;
from flask_sqlalchemy import SQLAlchemy
from . import db

"""
"""
class Users(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    username    = db.Column(db.String(255), unique=False, nullable=False)
    email       = db.Column(db.String(255), unique=False, nullable=False)
    password    = db.Column(db.String(255), unique=False, nullable=False)

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "username", "email"]:
                yield key, getattr(self, key)


    def __repr__(self):
        return '<User %r>' % self.username

"""
"""
class Locations(db.Model):
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
class Resources(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    title       = db.Column(db.String(255), unique=False, nullable=False)
    publisher   = db.Column(db.String(255), unique=False, nullable=False)
    author      = db.Column(db.String(255), unique=False, nullable=False)
    description = db.Column(db.String(1023), unique=False, nullable=False)
    isbn        = db.Column(db.Integer, unique=True, nullable=False)

    def __iter__(self):
        for key in self.__dict__:
            if key in ["id", "title", "publisher", "author", "description", "isbn"]:
                yield key, getattr(self, key)

    def __repr__(self):
        return '<Resource %r>' % self.title
