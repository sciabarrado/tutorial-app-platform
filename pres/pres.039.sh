## Enable trusted sources before this

# deploy
cp src/4-index.js backend/index.js
cp src/4-App.svelte frontend/src/App.svelte
git add frontend backend
git commit -m "guestbook" -a
git push origin main
# wait for the final build
