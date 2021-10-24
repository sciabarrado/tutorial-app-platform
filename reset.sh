ID=$(doctl app list | awk '/tutorial-app-platform/ { print $1 }')
echo $ID
doctl app delete $ID --force
doctl auth remove --context default
rm -Rvf backend
rm -Rvf frontend
git commit -m "cleanup"
git push origin main
psql -c 'drop database localdb'
psql -c 'drop user demo'

