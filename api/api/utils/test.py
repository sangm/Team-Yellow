import subprocess

print "Calling"
subprocess.call("./restart_nginx.sh", shell=True)
print "Done"
