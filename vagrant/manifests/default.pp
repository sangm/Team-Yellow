$packages = [
    "epel-release",
    "git",
    "vim-enhanced"
]

package { $packages: ensure => installed }

notify { 'hello ': } 
