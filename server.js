const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.get("/suvery", (req,res) => {
    res.sendFile(__dirname, '')
});

app.listen(PORT, console.log("Server started on " + PORT));