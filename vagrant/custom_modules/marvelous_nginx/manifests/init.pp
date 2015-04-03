class marvelous_nginx ($host) {
    class { 'nginx': }
    nginx::resource::upstream { 'api.marvelous': 
        members => [ 'localhost:5000']
    }

    nginx::resource::vhost { "${host}": 
        www_root => "/var/www/${host}/Marvelous" 
    }

    nginx::resource::vhost { "api.${host}": 
        proxy => 'http://api.marvelous' 
    }

    nginx::resource::vhost { 'subdomain':
       www_root => '/var/www/templates/\$domain',
       server_name => ["~^(?<domain>.+)\.${host}\\$"],
       access_log => "/var/log/nginx/${host}.access.log",
       error_log  => "/var/log/nginx/${host}.error.log"

    }

    file { '/var/www':
        require => Package['nginx'],
        ensure => "directory",
        owner  => "nginx",
        group  => "nginx",
        mode   => "755"
    }
}

