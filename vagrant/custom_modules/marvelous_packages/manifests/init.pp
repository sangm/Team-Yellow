class marvelous_packages {
    $packages = [
        "epel-release",
        "git",
        "vim-enhanced",
        "python-virtualenv"
    ]
    package { $packages: 
        ensure => installed,
        allow_virtual => false
    }
}

