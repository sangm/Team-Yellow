class marvelous_packages {
    $packages = [
        "epel-release",
        "git",
        "vim-enhanced",
    ]
    package { $packages: 
        ensure => installed,
    }
}

