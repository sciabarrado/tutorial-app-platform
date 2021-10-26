ID=$(doctl app list | awk '/tutorial-app-platform/ { print $1 }')
echo $ID
doctl app delete $ID --force
#doctl auth remove --context default
rm -Rvf backend
rm -Rvf frontend
rm -Rvf .do
git commit -m "reset" -a 
git push origin main
psql -c 'drop database localdb'
psql -c 'drop user demo'

