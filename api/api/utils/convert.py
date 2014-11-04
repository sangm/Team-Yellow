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
def write_subdomain(directory, subdomain):
    template = convert(directory, subdomain)
    with open(directory, 'w') as f:
        f.write(template)
def publish_handler(domain):
    write_subdomain(domain)
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
                write_subdomain(subdomain['Directory'], subdomain['ServerName'])
                print 'Directory: {0} - Server: {1} Written'.format(subdomain['Directory'],
                                                                    subdomain['ServerName'])
        time.sleep(0.001)
if __name__ == '__main__':
    register_handler()
