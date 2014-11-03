from api import app
from utils import redis_get_domains, redis_insert_domain
from flask import jsonify

@app.route('/domains')
def get_domains():
    return jsonify(domains=redis_get_domains())
@app.route('/domain/<domain>', methods=['PUT'])
def insert_domain(domain):
    if redis_insert_domain(domain):
        return "Inserted domain: %s" % domain
    else:
        return "Could not insert domain: %s" % domain
