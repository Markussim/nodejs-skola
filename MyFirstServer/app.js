const express = require('express')
const app = express()
const port = 3000
const clientdir = __dirname + "/client"

app.use(express.urlencoded({
    limit: "5000mb", 
    extended: true,
    parameterLimit: 50000 
  }))


app.get('/', (req, res) => res.sendFile(clientdir + "/index.html"))
app.get('/style', (req, res) => res.sendFile(clientdir + "/style.css"))
app.get('/image', (req, res) => res.sendFile(clientdir + "/G9bDaPH.jpg"))
app.get('/postThing', (req, res) => res.sendFile(clientdir + "/post.html"))
app.post('/', function (req, res) {
    console.log(req.body.name + "\n" + req.body.email)
    res.send("<meta http-equiv=\"Refresh\" content=\"0; url='/'\" />")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))