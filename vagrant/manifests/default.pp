node default {
    include redis

    stage { 'repos': }
    stage { 'marv_nginx': }

    class { 'marvelous_packages': 
        stage => 'repos'
    }

    class { 'marvelous_nginx':
        host => "${host}",
    }

    vcsrepo { "/var/www/${host}": 
        ensure   => present,
        provider => git,
        source   => $git,
        revision => "master",
        owner    => "nginx",
        group    => "nginx",
    }  

    Stage['repos'] -> Stage['main']
}

