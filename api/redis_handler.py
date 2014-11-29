from api import app
from flask import render_template
from jinja2 import Environment, PackageLoader, FileSystemLoader

def convert(templateEnv, directory, subdomain):
    template = templateEnv.get_template(app.config['NGINX_TEMPLATE'])
    return template.render(nginxDirectory=directory, serverName=subdomain)
def write_subdomain(templateEnv, template_directory, nginx_directory, subdomain):
    server_name = "%s/%s" % (template_directory, subdomain)
    template = convert(templateEnv, server_name, subdomain)
    nginx_directory = "%s/%s.conf" % (nginx_directory, subdomain)
    with open(nginx_directory, 'w+') as f:
        f.write(template)
def register_handler():
    import subprocess
    import redis
    import time
    print '\nListening to Redis Channel'

    templateLoader = FileSystemLoader(searchpath='/')
    templateEnv = Environment(loader=templateLoader)
    
    r = redis.StrictRedis()
    p = r.pubsub()
    p.subscribe('DomainChannel')
    while True:
        message = p.get_message()
        if message:
            subdomain = r.hgetall(message['data'])
            if subdomain:
		print "%s : %s : %s" % (app.config['TEMPLATE_DIRECTORY'], app.config['NGINX_DIRECTORY'], subdomain['ServerName'])
		write_subdomain(templateEnv, app.config['TEMPLATE_DIRECTORY'], app.config['NGINX_DIRECTORY'], subdomain['ServerName'])
                subprocess.call("./restart_nginx.sh", shell=True)
        time.sleep(0.001)
if __name__ == '__main__':
    register_handler()
