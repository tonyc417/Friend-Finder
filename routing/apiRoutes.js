var friendsData = require("../app/data/friends");

app.get("/api/data", (req, res) => {
    res.json(friendsData);
})