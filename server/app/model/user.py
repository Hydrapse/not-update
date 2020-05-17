from app import db
import datetime
from app.model.base import UserBase


class User(UserBase):
    name = db.StringField()
    permission = db.IntField(default=0)
    user_id = db.StringField()
    bio = db.StringField()
    avatar = db.StringField()
    last_modify = db.DateTimeField()
    create_datetime = db.DateTimeField(default=datetime.datetime.now())
    password = db.StringField()
    status = db.StringField(default='p')  # p: 一切正常; f: 被ban了;
    phone = db.StringField()
    email = db.StringField()

    def get_user_by_user_id(user_id):
        if not user_id:
            return None
        return User.objects(user_id=user_id).first()

    def verify_password(self, password):
        return self.password == str2md5(password)

    def set_password(self, password):
        self.update(password=str2md5(password))
