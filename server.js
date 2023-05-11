const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const db = require("./app/models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Golestan application." });
});


// set port, listen for requests
require("./app/routes/tutorial.routes")(app);
require("./app/routes/course.routes")(app);
const PORT = process.env.PORT || 3000;
db.mongoose.connect(db.url)
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(PORT , ()=>{
        console.log(`application is listening on localhost:${PORT}`)
    });
}).catch((error)=>{
    console.log(error)
})