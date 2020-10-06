import { Schema } from "mongoose";

const mongoose = require('mongoose');


exports.connect = (collectionName: String) => {
    mongoose.connect(`mongodb://localhost/${collectionName}`, { useNewUrlParser: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected")
    });
}

exports.saveDoc = (input: any) => {
    input.save(() => {
        console.log(`Saved ${input}`)
    })
}