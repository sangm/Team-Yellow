from flask import Flask

app = Flask(__name__)

import api.routes
import api.utils
