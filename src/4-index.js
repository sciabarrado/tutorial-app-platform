const express = require('express')
const app = express()
const port = 8080

const { Client } = require('pg')
let client = undefined

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  client.query("SELECT id, message FROM guestbook ORDER BY id")
  .then(r =>  res.send(r.rows))
})

app.post('/', (req, res) => {
  let msg = req.params.msg
  client.query("INSERT INTO guestbook(message) VALUES($1)", [msg])
  .then(r => res.send({ "changed": r.rowCount }))
})

const createTable = `
CREATE TABLE IF NOT EXISTS guestbook( 
   id SERIAL PRIMARY KEY,
   message TEXT
)`

function connect() {
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
      setTimeout(connect, 2000)
    })
}

app.use(express.urlencoded)
app.listen(port, () => connect())