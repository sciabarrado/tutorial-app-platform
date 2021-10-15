---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

![bg left:40% 80%](./img/DO_Logo_Horizontal_Blue.png)

# **App Platform**
## Step by Step

Building a simple but complete application

https://www.digitalocean.com

---
# Agenda

- Installing the cli
  - https://docs.digitalocean.com/reference/doctl/how-to/install/
- Develop the Front-End
  - Provision a static site
- Implement the Api
  - Provision a node backed
- Setup storage
  - Provision a database

---
# Get your token

- Install the `doctl` cli
- Click on **API** on Menu
- Click on **Generate New Token**
- Click on **Generate Token**
- Click on **Copy** 
- Type `doctl auth init` and paste

![bg right 110%](img/1-get-token.png)

---
![bg fit](img/1-get-token-large.png)

---
# Creating a frontend

- An example using Svelte
`npx degit sveltejs/template frontend`

- Install it
`cd frontend && npm install`
- Run in development mode
`npm run dev`

![bg right 60% ](img/2-hello.png)

---
# Deploy

```yaml
%%conf/app-1.yaml%%
```

---

# Exercise: frontend

```sh
# creating the frontend
npx degit sveltejs/template frontend
cd frontend && npm install 
npm run dev
# deploying the frontend
mkdir .do
cp conf/app-1.yaml .do/app.yaml
doctl app
```


