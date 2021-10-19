const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { Client } = require('pg')
let client = undefined

let create = `
CREATE TABLE IF NOT EXISTS guestbook( 
   id SERIAL PRIMARY KEY,
   message TEXT
)`

function connect() {
  console.log("connecting to database")
  client = new Client()
  client.connect()
    .then(() => {
      client.query(create)
      console.log("connected and initialized")
    })
    .catch((err) => {
      console.log(err)
      console.log("cannot connect, retrying")
      setTimeout(connect, 2000)
    })
}

app.listen(port, () => connect())
