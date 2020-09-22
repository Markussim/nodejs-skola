const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected")
});

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);



for (let i = 0; i < 100; i++) {
    const fluffy = new Kitten({ name: 'fluffy' + i });

    fluffy.save(function (err: Error, fluffy: any) {
        if (err) return console.error(err);
        fluffy.speak();
    });
}
