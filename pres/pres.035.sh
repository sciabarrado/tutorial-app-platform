# deploy
cp src/4-index.js backend/index.js
git add backend
git commit -m "api" -a 
git push origin main
# check deploy first
# retrieve url
URL=$(doctl app list | awk '/tutorial-app-platform/ { print $3}')
echo $URL
# test the api using httpie
http $URL/api/
http POST $URL/api "msg=hello world"
http $URL/api/
