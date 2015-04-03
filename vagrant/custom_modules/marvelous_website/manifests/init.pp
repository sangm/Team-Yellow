class marvelous_website ($host, $git) {
    vcsrepo { "/var/www/${host}": 
        ensure   => present,
        provider => git,
        source   => $git,
        revision => "master",
        owner    => "nginx",
        group    => "nginx",
    }  

    python::virtualenv { "/var/www/${host}/api/env" :
        ensure       => present,
        version      => 'system',
        requirements => "/var/www/${host}/api/requirements.py",
        systempkgs   => true,
        distribute   => false,
        owner        => 'nginx',
        group        => 'nginx',
        timeout      => 0,
    }

    python::gunicorn { 'vhost' :
        ensure      => present,
        virtualenv  => "/var/www/www/${host}/api/env",
        mode        => 'wsgi',
        dir         => "/var/www/${host}/api/app",
        bind        => 'localhost:5000',
        appmodule   => 'app:app',
        timeout     => 30,
        template    => 'python/gunicorn.erb',
    }
}
