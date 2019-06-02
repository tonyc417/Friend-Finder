const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

require("./routing/htmlRoutes")(app);


app.listen(PORT, console.log("Server started on " + PORT));