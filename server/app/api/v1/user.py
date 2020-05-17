import datetime
import re

from flask import g, jsonify, Blueprint, request
from app.util.common import trueReturn, falseReturn, str2md5
from app.util.auth import generate_jwt
from app.util.datarender import render_user_base_info
from app.model.user import User

user_blueprint = Blueprint('users', __name__, url_prefix='/users')


@user_blueprint.before_request
def before_request():
    try:
        g.data = request.get_json(silent=True)
        g.user = None
    except:
        return jsonify(falseReturn(None, '数据错误'))


@user_blueprint.route('', methods=['POST'])
def register():
    try:
        user_id = g.data.get("user_id", "").strip()
        name = g.data.get("name", "").strip()
        bio = g.data.get("bio", "").strip()
        email = g.data.get("email", "").strip()
        phone = g.data.get("phone", "").strip()
        password = g.data.get("password", "").strip()
        avatar = g.data.get("avatar", "").strip()
        if not name:
            return jsonify(falseReturn(None, "用户名是必需的！"))
        if not user_id:
            return jsonify(falseReturn(None, "用户id是必需的！"))
        if not password:
            return jsonify(falseReturn(None, "密码是必需的！"))
        if len(bio) > 150:
            return jsonify(falseReturn(None, "自我介绍最长150字！"))
        if not verify_user_id(user_id):
            return jsonify(falseReturn(None, "用户id不合法！"))
        if User.objects(user_id=user_id):
            return jsonify(falseReturn(None, "用户id已存在"))
        if User.objects(name=name):
            return jsonify(falseReturn(None, "用户名已存在"))
        if len(password) < 6:
            return jsonify(falseReturn(None, '密码太短啦'))
        new_user = User(name=name, user_id=user_id, bio=bio, avatar=avatar, password=str2md5(password),
                        last_modify=datetime.datetime.now(), phone=phone, email=email).save()
        return jsonify(trueReturn({'jwt': generate_jwt(new_user), 'user': render_user_base_info(new_user)}, ""))
    except:
        return jsonify(falseReturn(None, "数据错误"))


def verify_user_id(name):
    if re.match(r'([A-Za-z0-9_\-])+$', name):
        return True
    return False
