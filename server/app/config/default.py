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
