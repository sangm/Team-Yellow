from flask import render_template
from jinja2 import Environment, PackageLoader, FileSystemLoader

def convert(templateEnv, directory, subdomain):
    template = templateEnv.get_template('/home/sangm/ares.sangm.net/api/api/utils/templates/nginx')
    return template.render(nginxDirectory=directory, serverName=subdomain)
# NEED TO TEST THIS< THIS IS WHERE YOU LEFT OFF
def write_subdomain(templateEnv, template_directory, nginx_directory, subdomain):
    directory = "%s/%s" % (template_directory, subdomain)
    nginx_directory = "%s/%s" % (nginx_directory, subdomain)
    template = convert(templateEnv, directory, subdomain)
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
                write_subdomain(templateEnv, subdomain['Template'], subdomain['Nginx'], subdomain['ServerName'])
                # Where you restart nginx
                subprocess.call("./restart_nginx.sh", shell=True)
        time.sleep(0.001)
if __name__ == '__main__':
    register_handler()
