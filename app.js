const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")

//DB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
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

app.get("/testlisting", async (req,res)=>{
   let sampleListing = new Listing({
    title:"My new Villa",
    description:"By the beach",
    price:1200,
    location:"Goa",
    country:"India"
   }); 
    await sampleListing.save();
    console.log("sample was saved");
    res.send("Successfully Tested");
});


// Starting Server
app.listen(8080, () => {
    console.log("Server listening on port 8080");
})