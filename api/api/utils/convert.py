import os

NGINX_WRITE_DIRECTORY = '/home/sangm/templates/'

def convert(directory, subdomain):
    template = """
server {{
     listen   80; ## listen for ipv4; this line is default and implied

     root {0};
     index index.html index.htm;

     server_name {1}.ares.sangm.net;

     location / {{
        try_files $uri $uri/ /index.html;
     }}

     location /doc/ {{
     alias /usr/share/doc/;
         autoindex on;
         allow 127.0.0.1;
         allow ::1;
         deny all;
     }}
         error_page 404 /404.html;
}}
    """
    return template.format(directory, subdomain)
def write_subdomain(template_directory, nginx_directory, subdomain):
    directory = "%s/%s" % (template_directory, subdomain)
    nginx_directory = "%s/%s" % (nginx_directory, subdomain)
    template = convert(directory, subdomain)
    with open(nginx_directory, 'w+') as f:
        f.write(template)
def write_template(template_directory, subdomain):
    # Make a directory at template_directory
    html = 'Hello World {0}'.format(subdomain)
    path = "%s/%s" % (template_directory, subdomain)
    directory = "%s/index.html" % (path)
    try:
        os.makedirs(path)
    except OSError as e:
        if e.errno != errno.EEXIST:
            raise
        else:
            print '\nDirectory %s already exists.' % path
    with open(directory, 'w') as f:
        f.write(html)
def register_handler():
    import redis
    import time
    r = redis.StrictRedis()
    p = r.pubsub()
    p.subscribe('DomainChannel')
    while True:
        message = p.get_message()
        if message:
            subdomain = r.hgetall(message['data'])
            if subdomain:
                write_template(subdomain['Template'], subdomain['ServerName'])
                write_subdomain(subdomain['Template'], subdomain['Nginx'], subdomain['ServerName'])
                print 'Template: {0} - Nginx: {1} - Server: {2} Written'.format(subdomain['Template'], subdomain['Nginx'],
                                                                    subdomain['ServerName'])
        time.sleep(0.001)
if __name__ == '__main__':
    register_handler()
