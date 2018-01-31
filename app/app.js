var express = require("express"),
    app = express()
    
//VIEW
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views/public"))

//ROUTES
//index
app.get("/", (req, res) => res.render("index"))
app.get("/itsystem/view", (req, res) => res.render("view"))

//SERVER
//PORT is defined by environment variable or 80
const PORT = process.env.PORT || 80
const HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
    console.log("quashy started on " + HOST + ":" + PORT)
})