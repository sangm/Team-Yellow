node default {
  package { "python-virtualenv": ensure => present }
  package { "git": ensure => present }
  package { "vim-enhanced": ensure => present }
  class { 'nginx': }
  include redis

  nginx::resource::upstream { 'api.sangm': 
    members => [ 'localhost:5000']
  }
  nginx::resource::vhost { 'sangm.io': www_root => "/var/www/ares.sangm.net/Marvelous" }
  nginx::resource::vhost { 'api.sangm.io': proxy => 'http://api.sangm' }

  file { '/var/www':
    ensure => "directory",
    owner  => "root",
    group  => "root",
    mode   => "755"
  }

  file { '/etc/nginx/sites-enabled/subdomain.sangm.io.conf':
    ensure  => present,
    owner   => "root",
    group   => "root",
    mode    => "644",
    content => "server {
  listen                *:80;
  server_name           ~^(?<domain>.+)\.sangm.io$;

  index  index.html index.htm index.php;

  access_log            /var/log/nginx/sangm.io.access.log;
  error_log             /var/log/nginx/sangm.io.error.log;

  location / {
    root      /var/www/templates/\$domain;
  }
}"
  }

  vcsrepo { "/var/www/ares.sangm.net": 
    ensure   => present,
    provider => git,
    source   => "https://github.com/sangm/Team-Yellow.git",
    revision => "recovery",
    owner    => "root",
    group    => "root",
  }  
}
