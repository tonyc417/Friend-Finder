const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/home.html'));
});

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, './public/survey.html'));
});


app.listen(PORT, console.log("Server started on " + PORT));