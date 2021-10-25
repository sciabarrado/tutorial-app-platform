# deploy
cp src/4-App.svelte frontend/src/App.svelte
git add frontend
git commit -m "client" -a
git push origin main
# retrieve url
URL=$(doctl app list | awk '/tutorial-app-platform/ { print $3}')
echo $URL
