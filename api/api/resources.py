from flask.ext import restful
from api import rest

class HelloWorld(restful.Resource):
    def get(self):
        return {"hello": "world"}
rest.add_resource(HelloWorld, '/')
