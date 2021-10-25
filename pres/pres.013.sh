# deploying the frontend
mkdir .do
cp src/1-app.yaml .do/app.yaml
git add frontend 
git commit -m "frontend" -a
git push origin main
doctl app create --spec .do/app.yaml
# monitoring
ID=$(doctl app list | awk '/tutorial-app-platform/ { print $1}')
echo $ID
doctl app logs $ID --type build -f
doctl app list
