# deploying the frontend
mkdir .do
cp src/1-app.yaml .do/app.yaml
git add frontend 
git commit -m "frontend" -a
git push origin main
doctl app create --spec .do/app.yaml
# check build logs
