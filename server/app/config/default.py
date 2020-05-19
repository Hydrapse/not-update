class Config:
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 8089
    MONGODB_SETTINGS = {
        'db': 'not_u',
        # 'host': 'mongodb://database:27017/not_u',
    }

    JWT_SECRET = "NotU@lsqnb.*&"

    WEATHER_KEY = "S0ve3eBlLV3Wp761K"
    WEATHER_API = "https://api.seniverse.com/v3/weather/now.json"

    SMS_ACCESS_KEY_ID = "LTAI4GBqhY4th4bTs1aQ5yXL"
    SMS_ACCESS_SECRET = "MQP5L6toLfvENY4ridnUd2OtQ38cHd"
