const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const db = require("./app/models");
const app = express();
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Golestan application." });
});


// set port, listen for requests
require("./app/routes/course.routes")(app);
require("./app/routes/user.routes")(app);

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "GolestanAPI",
        version: "0.1.0",
        description:
          "This is Golestan application made with Express and documented with Swagger",
        license: {
          name: "MIT",
        },
        contact: {
          name: "negin mashayekhi",
          email: "n.mashayekhi456@gmail.com@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./app/routes/*.js"],
  };
const spacs = swaggerjsdoc(options)
app.use("/docs",swaggerui.serve,swaggerui.setup(spacs))

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