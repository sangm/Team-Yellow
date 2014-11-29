from flask import Flask
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['TEMPLATE_DIRECTORY'] = '/tmp/templates'
app.config['VALID_KEYS'] = ['businessName', 'businessEmail', 'template', 'phoneNumber']
app.config['VALID_TEMPLATES'] = ['so-boxy', 'banded', 'contact']

import api.routes
import api.utils
