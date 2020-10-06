import express from 'express';
const mongoose = require('mongoose');
const mongoConnect = require('./mongoConnect')

const app = express()
const port = 3000
const clientdir = __dirname.substr(0, __dirname.length - 4) + "/client"
mongoConnect.connect("test")

const personSchema = new mongoose.Schema({
    name: String,
    email: String
})

app.use(express.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 50000
}))

const person = mongoose.model('person', personSchema)

function createEntry(name: any, email: any){
    let entry = new person({
        name: name, 
        email: email
       })
       return entry
}

app.get('/', (req, res) => res.sendFile(clientdir + "/index.html"))
app.get('/style', (req, res) => res.sendFile(clientdir + "/style.css"))
app.get('/image', (req, res) => res.sendFile(clientdir + "/G9bDaPH.jpg"))
app.get('/postThing', (req, res) => res.sendFile(clientdir + "/post.html"))
app.post('/', function (req, res) {
    console.log(req.body.name + "\n" + req.body.email)
    res.send("<meta http-equiv=\"Refresh\" content=\"0; url='/'\" />")

    const user: any = new person({ })

    mongoConnect.saveDoc(createEntry(req.body.name, req.body.email))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))





/*const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);*/



/*for (let i = 0; i < 10000; i++) {
    const fluffy = new Kitten({ name: 'fluffy' + i });

    fluffy.save(function (err: Error, fluffy: any) {
        if (err) return console.error(err);
        fluffy.speak();
    });
}*/
