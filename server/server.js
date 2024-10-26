const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/get', (req, res) => {
    res.json("hello");
})

const mongo_uri = "mongodb+srv://admin:jamesuhenyou123@cluster0.0p7jv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongo_uri)
.then(() => {

    console.log("Mongodb Connection Successfull");  

    app.listen(5000, () => {
        console.log('server running at port 5000');
    })
})
.catch((error) => {
    console.log(error);
})