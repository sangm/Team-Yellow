import os
from api import app
from utils import redis_get_domains, redis_insert_domain, get_template
from flask import jsonify, request, render_template

VALID_KEYS = app.config['VALID_KEYS']
TEMPLATE_DIRECTORY = app.config['TEMPLATE_DIRECTORY']

@app.route('/')
def index():
    return "Private API for Marvelous\n"
@app.route('/domains')
def get_domains():
    return jsonify(domains=redis_get_domains())
@app.route('/domain/<domain>', methods=['PUT'])
def insert_domain(domain):
    if redis_insert_domain(domain):
        return "Inserted domain: %s" % domain
    else:
        return "Could not insert domain: %s" % domain
@app.route('/register_domain/<domain>', methods=['POST'])
def register_template(domain):
    business_info = request.get_json()
    print business_info
    for key in VALID_KEYS:
        if key not in business_info:
            return "Need to have the right keys"
    if redis_insert_domain(domain):
        template = render_template(business_info['template'] + '.html', info=business_info)
        path = "%s/%s" % (TEMPLATE_DIRECTORY, domain)
        index  = "%s/index.html" % (path)
        print index
        try:
            os.makedirs(path)
        except OSError as e:
            raise OSError("Directory %s already exists." % path)
        else:
            with open(index, 'w') as f:
                f.write(template)
        return "Domain %s created" % domain
    else:
        return "Domain %s already exists" % domain
