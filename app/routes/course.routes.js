const controller = require("../controllers/course.controller");
const authJwt = require("../middelware/authJwt");

module.exports = function(app){
    // IT - Course
    //app.get("/courses",[authJwt.verifyToken],  controller.getall); 

    // Manager - Course
    app.post("/course", controller.create);
    app.put("/course/:id", [authJwt.verifyToken,authJwt.isManager], controller.updateById); 
    app.delete("/course/:id",[authJwt.verifyToken,authJwt.isManager],  controller.deleteById);
     
    // Manager - Active Course(Semestere Course)
    app.post("/activeCourse",[authJwt.verifyToken,authJwt.isManager], controller.createAC);
    app.put("/activeCourse/:id",[authJwt.verifyToken,authJwt.isManager],  controller.updateByIdAC); 

    // Admin & Manager & Student & Professor -> if student/Professor request just student'field courses returns
    app.get("/courses",[authJwt.verifyToken], controller.getall); // A,S(filter),P(filter),M
    app.get("/course/:id",[authJwt.verifyToken], controller.getById); //S(filter),P(filter),M
    
}