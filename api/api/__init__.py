from flask import Flask
from flask.ext import restful

app = Flask(__name__)
rest = restful.Api(app)

import api.resources

