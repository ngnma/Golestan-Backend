const controller = require("../controllers/course.controller");

module.exports = function(app){
    app.get("/courses", controller.getall);
    app.post("/course", controller.create);
}