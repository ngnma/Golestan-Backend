const controller = require("../controllers/course.controller");

module.exports = function(app){
    // IT - Course
    app.get("/courses", controller.getall); 

    // Manager - Course
    app.post("/course", controller.create);
    app.put("/course/:id", ); 
    app.delete("/course/:id", );  

    // Manager & Student & Professor -> if student/Professor request just student'field courses returns
    app.get("/courses", controller.getall); 
    app.get("/course/:id", ); 
    
}