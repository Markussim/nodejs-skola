const express = require('express')
const app = express()
const port = 3000
const clientdir = __dirname + "/client"

app.get('/', (req, res) => res.sendFile(clientdir + "/index.html"))
app.get('/style', (req, res) => res.sendFile(clientdir + "/style.css"))
app.get('/image', (req, res) => res.sendFile(clientdir + "/G9bDaPH.jpg"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))