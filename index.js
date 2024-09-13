const express = require("express")
const app = express()
const config = require("./config");

const mongoose = require("mongoose");
const userService = require("./services/userService");

mongoose.connect(config.mongoDB);

app.get("/", (req, res) => {
    res.send("Hello Word!")
})

app.post("/add", async (req, res) => {
    var status = await userService.Create("bianor.araujo@gmail.com", "123456")

        if(status){
            res.send("Added!");
            res.redirect("/");
        }
        else{
            res.send("Ocorreu uma falha!");
        }
})

app.get("/getusers", async (req, res) => {
    var user = await userService.GetAll(false);

    res.json(user);
})



app.listen(config.port, () => {
    console.log(`Linten on port ${config.port}...`);
});