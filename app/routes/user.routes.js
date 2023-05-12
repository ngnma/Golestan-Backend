const student_c = require("../controllers/student.controller");
const user_c = require("../controllers/admin.controller");
const professor_c = require("../controllers/professor.controller");
const manager_c = require("../controllers/manager.controller");
const authJwt = require("../middelware/authJwt");

module.exports = function(app){

    // Create admin(IT)
    app.post("/IT", user_c.create)
    // Get All Users
    app.get("/Users", user_c.getAll)
    // Login
    app.post("/login", user_c.login)

    // Manager - student
    app.get("/students", [authJwt.verifyToken,authJwt.isManager] ,student_c.getAll); 
    app.get("/student/:id", [authJwt.verifyToken,authJwt.isManager], student_c.getById);
    // Manager - Professor
    app.get("/Professors", [authJwt.verifyToken,authJwt.isManager], professor_c.getAll); 
    app.get("/Professor/:id", [authJwt.verifyToken,authJwt.isManager], professor_c.getById);

    // Admin(IT) - Professor
    app.post("/admin/Professor", [authJwt.verifyToken,authJwt.isAdmin], professor_c.create); 
    app.put("/admin/Professor/:id", [authJwt.verifyToken,authJwt.isAdmin], professor_c.updateById); 
    app.delete("/admin/Professor/:id", [authJwt.verifyToken,authJwt.isAdmin], professor_c.deleteById); 
    app.get("/admin/Professors", [authJwt.verifyToken,authJwt.isAdmin], professor_c.getAll); 
    app.get("/admin/Professor/:id", [authJwt.verifyToken,authJwt.isAdmin], professor_c.getById); 
    // Admin(IT) - student
    app.post("/admin/student", [authJwt.verifyToken,authJwt.isAdmin], student_c.create); 
    app.put("/admin/student/:id", [authJwt.verifyToken,authJwt.isAdmin], student_c.updateById); 
    app.delete("/admin/student/:id", [authJwt.verifyToken,authJwt.isAdmin], student_c.deleteById); 
    app.get("/admin/students", [authJwt.verifyToken,authJwt.isAdmin], student_c.getAll); 
    app.get("/admin/student/:id", [authJwt.verifyToken,authJwt.isAdmin], student_c.getById);
    // Admin(IT) - manager
    app.post("/admin/manager", [authJwt.verifyToken,authJwt.isAdmin], manager_c.create); 
    app.put("/admin/manager/:id", [authJwt.verifyToken,authJwt.isAdmin], manager_c.updateById); 
    app.delete("/admin/manager/:id", [authJwt.verifyToken,authJwt.isAdmin], manager_c.deleteById); 
    app.get("/admin/managers", [authJwt.verifyToken,authJwt.isAdmin], manager_c.getAll); 
    app.get("/admin/manager/:id", [authJwt.verifyToken,authJwt.isAdmin], manager_c.getById); 
    
    //Student
    app.put("/student/:id", [authJwt.verifyToken,authJwt.IDVerify], student_c.updateById); 
    
    //Professor
    app.put("/Professor/:id", [authJwt.verifyToken,authJwt.IDVerify], professor_c.updateById);

}