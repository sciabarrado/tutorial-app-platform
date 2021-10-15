# creating the frontend
npx degit sveltejs/template frontend
cd frontend && npm install 
npm run dev
# deploying the frontend
mkdir .do
cp conf/app-1.yaml .do/app.yaml
doctl app create --spec .do/app.yaml
# monitoring
ID=$(doctl app list | awk '/tutorial-app-platform/ { print $1}')
echo $ID
doctl app logs $ID
