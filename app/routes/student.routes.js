const controller = require("../controllers/student.controller");

module.exports = function(app){
    app.get("/students", controller.getall);
    app.post("/student", controller.create);
}