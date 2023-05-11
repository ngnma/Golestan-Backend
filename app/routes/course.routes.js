const controller = require("../controllers/course.controller");

module.exports = function(app){
    app.get("/course", controller.getall);
    app.post("/course", controller.create);
}