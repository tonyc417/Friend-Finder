var friendsData = require("../app/data/friends");

module.exports = (app) => {
    app.get("/api/data", (req, res) => {
        res.json(friendsData);
    })
    
    app.post("/api/data", (req, res) => {
        friendsData.push(req.body);
        res.json(true);
    });
}