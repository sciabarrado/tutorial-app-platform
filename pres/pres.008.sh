# update
ID=$(doctl app list | awk '/tutorial-app-platform/ { print $1}')
doctl app update $ID --spec .do/app.yaml
