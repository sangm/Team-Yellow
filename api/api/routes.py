from api import app

@app.route('/domains')
def get_domains():
    return ""
@app.route('/domain/<domain>', methods=['PUT'])
def insert_domain(domain):
    return "Got domain name: %s" % domain
