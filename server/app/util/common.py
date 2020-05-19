import hashlib


def trueReturn(data, msg=""):
    return {
        'data': data,
        'msg': msg,
        'status': True
    }


def falseReturn(data=None, msg=""):
    return {
        'data': data,
        'msg': msg,
        'status': False
    }


def str2md5(str):
    return hashlib.md5(hashlib.md5(str.encode('utf-8')).hexdigest().encode('utf-8')).hexdigest()