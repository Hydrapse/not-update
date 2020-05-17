from app import db


class UserBase(db.Document):
    create_datetime = db.DateTimeField()
    meta = {'allow_inheritance': True}
