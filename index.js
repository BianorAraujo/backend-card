const express = require("express")
const app = express()

const mongoose = require("mongoose");
const userService = require("./services/userService");
//const config = require("./config/index");

mongoose.connect("mongodb+srv://cardAdmin:testeMongoDb@cluster0.nyqam.mongodb.net/card?retryWrites=true&w=majority&appName=Cluster0");

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



app.listen(3002, () => {
    console.log(`Linten on port 3002...`);
});