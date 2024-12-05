const express = require("express");
const app = express();
const mongoose = require("mongoose");

//DB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/test";
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));



app.get("/", (req, res) => {
    res.send("Hi , i'm Root");
})

// Starting Server
app.listen(8080, () => {
    console.log("Server listening on port 8080");
})