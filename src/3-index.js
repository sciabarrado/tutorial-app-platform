const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { Client } = require('pg')
const client = new Client()
let create = `
CREATE TABLE IF NOT EXISTS guestbook( 
   id SERIAL PRIMARY KEY,
   message TEXT)`

client.connect()
.then(() => client.query(create))
.then(() => app.listen(port))
.then(() => console.log(`App listening at http://localhost:${port}`))
.catch(console.log)
