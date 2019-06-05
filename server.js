const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

require("./routing/htmlRoutes")(app);

app.get("/survey", (req, res) => {

})

app.post("/", (req, res) => {
    
})

app.listen(PORT, console.log("Server started on " + PORT));