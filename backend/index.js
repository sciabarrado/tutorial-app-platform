const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { Client } = require('pg')

let create = `
CREATE TABLE IF NOT EXISTS guestbook( 
   id SERIAL PRIMARY KEY,
   message TEXT
)`

function init(client) {
  client.query(create)
    .then(() => app.listen(port))
    .then(() => console.log(`App listening at http://localhost:${port}`))
    .catch(console.log)
}

function start() {
  console.log(process.env)
  console.log("connecting to database")
  let client = new Client()
  client.connect()
    .then(() => init(client))
    .catch((err) => {
      console.log(err)
      setTimeout(start, 2000)
    })
}

start()