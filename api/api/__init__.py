from flask import Flask
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['TEMPLATE_DIRECTORY'] = '/home/sangm/templates'
app.config['VALID_KEYS'] = ['businessName', 'businessEmail', 'template', 'phoneNumber']

import api.routes
import api.utils
