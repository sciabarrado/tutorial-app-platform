const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

//enable this for local development
//app.use(require("cors")())

const { Client } = require('pg')
let client = undefined

app.get('/', (req, res) => {
  client.query("SELECT id, message FROM guestbook ORDER BY id")
  .then(r =>  res.send(r.rows))
})

app.post('/', (req, res) => {
  console.log(req.body)
  const msg = req.body.msg
  client.query("INSERT INTO guestbook(message) VALUES($1)", [msg])
  .then(r => res.send({ "changed": r.rowCount }))
})

const createTable = `
CREATE TABLE IF NOT EXISTS guestbook( 
   id SERIAL PRIMARY KEY,
   message TEXT
)`

function connectAndInitialize() {
  console.log("connecting to database")
  client = new Client()
  client.connect()
    .then(() => {
      client.query(createTable)
      console.log("connected and initialized")
    })
    .catch((err) => {
      console.log(err)
      console.log("cannot connect, retrying")
      setTimeout(connectAndInitialize, 2000)
    })
}

app.listen(port, () => connectAndInitialize() )