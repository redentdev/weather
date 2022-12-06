const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views", __dirname + "/src")

app.get("/", async (req, res) => {
    const sehirjson = fs.readFileSync(__dirname + "/sehir.json", "utf-8")
    data = JSON.parse(sehirjson)
    res.render("home", {
        sehirler: data["hepsi"],
        selectedSehir: req.body.sehirSecim
    })
    console.log(req.body)
})

app.listen(3000, function() {
    console.log("Site 3000 Portunda Başlatıldı")
})