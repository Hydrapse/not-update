from flask import g, jsonify, Blueprint, request
from app.util.common import trueReturn, falseReturn, str2md5
from app.util.auth import generate_jwt
from app.util.datarender import render_user_base_info
from app.model.user import User
import traceback

oauth_blueprint = Blueprint('oauth', __name__, url_prefix='/oauth')


@oauth_blueprint.before_request
def before_request():
    try:
        g.data = request.get_json(silent=True)
        g.user = None
    except:
        return jsonify(falseReturn(None, '数据错误'))


@oauth_blueprint.route('/access_token', methods=['POST'])
def access_token():
    try:
        user_id = g.data.get('user_id', None)
        password = g.data.get('password', None)
        if not (user_id and password):
            return jsonify(falseReturn(None, ""))
        user = User.objects(user_id=user_id).first()
        if not user:
            return jsonify(falseReturn(None, '用户名或密码错误!'))
        if user.status == 'f':
            return jsonify(falseReturn(None, '用户被ban！'))
        if not user.password == str2md5(password):
            return jsonify(falseReturn(None, '用户名或密码错误!'))
        return jsonify(trueReturn({'token': generate_jwt(user), 'user': render_user_base_info(user)}, ''))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))
