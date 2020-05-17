from flask import g, jsonify, Blueprint, request, current_app
from app.util.common import trueReturn, falseReturn
from app.util.auth import verify_jwt
import traceback
import requests

data_blueprint = Blueprint('data', __name__, url_prefix='/data')


@data_blueprint.before_request
def before_request():
    try:
        g.data = request.get_json(silent=True)
        token = request.headers.get('token', '')
        g.user, msg = verify_jwt(token)
    except:
        return jsonify(falseReturn(None, '数据错误'))


@data_blueprint.route('/temperatures', methods=['GET'])
def get_temperatures():
    """
    获取用户所有温度传感器的当前数据
    """
    try:
        return jsonify(trueReturn(mock_temperature))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/temperatures/<string:_id>', methods=['GET'])
def get_temperature(_id):
    """
    获取用户指定温度传感器的当前数据
    """
    try:
        return jsonify(trueReturn(mock_temperature[int(_id)]))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/humidities', methods=['GET'])
def get_humidities():
    """
    获取用户所有湿度传感器的当前数据
    """
    try:
        return jsonify(trueReturn(mock_humidity))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/humidities/<string:_id>', methods=['GET'])
def get_humidity(_id):
    """
    获取用户指定湿度传感器的当前数据
    """
    try:
        return jsonify(trueReturn(mock_humidity[int(_id)]))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/air_conditioning_temperatures', methods=['GET'])
def get_air_conditioning_temperatures():
    """
    获取用户所有空调温度的当前数据
    """
    try:
        return jsonify(trueReturn(mock_air_conditioning))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/air_conditioning_temperatures/<string:_id>', methods=['GET'])
def get_air_conditioning_temperature(_id):
    """
    获取用户指定空调的当前数据
    """
    try:
        return jsonify(trueReturn(mock_air_conditioning[int(_id)]))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/doors', methods=['GET'])
def get_doors():
    """
    获取用户所有门的当前数据
    """
    try:
        return jsonify(trueReturn(mock_door))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/doors/<string:_id>', methods=['GET'])
def get_door(_id):
    """
    获取用户指定门的当前数据
    """
    try:
        return jsonify(trueReturn(mock_door[int(_id)]))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/exceptions', methods=['GET'])
def get_exceptions():
    """
    获取所有异常信息
    """
    try:
        return jsonify(trueReturn(mock_exception))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


@data_blueprint.route('/weathers/<string:location>', methods=['GET'])
def get_weathers(location):
    """
    获取天气信息
    """
    print(current_app.config['WEATHER_API'])
    print(current_app.config['WEATHER_KEY'])
    result = requests.get(current_app.config['WEATHER_API'], params={
        'key': current_app.config['WEATHER_KEY'],
        'location': location,
        'language': 'zh-Hans',
        'unit': 'c'
    }, timeout=1)
    print(result.text)
    try:
        return jsonify(trueReturn(result.text))
    except:
        traceback.print_exc()
        return jsonify(falseReturn(None, 'data error'))


mock_temperature = [{"id": "1", "temperature": "25.6"},
                    {"id": "2", "temperature": "26.6"},
                    {"id": "3", "temperature": "33.7"},
                    {"id": "4", "temperature": "16.9"}]

mock_humidity = [{"id": "1", "humidity": "99"},
                 {"id": "2", "humidity": "10"}]

mock_air_conditioning = [
    {"id": "1", "temperature": "26", "mode": "cool", "start_at": "2020-05-17 22:15:15", "delay": 7200},
    {"id": "1", "temperature": "25", "mode": "cool", "start_at": "2020-05-17 22:14:14", "delay": 7200}]

mock_door = [{"id": "1", "status": 0},
             {"id": "2", "status": 1}]

mock_exception = [{"id": "1", "msg": "门未关闭", "time": "2020-05-14 9:15:15"},
                  {"id": "2", "msg": "有可疑人员进入", "time": "2020-05-15 10:15:15"},
                  {"id": "3", "msg": "有可疑人员进入", "time": "2020-05-16 22:15:15"}]

