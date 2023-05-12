const student_c = require("../controllers/student.controller");
const user_c = require("../controllers/admin.controller");
const professor_c = require("../controllers/professor.controller");
const manager_c = require("../controllers/manager.controller");

module.exports = function(app){

    // Create admin(IT)
    app.post("/IT", user_c.create)
    // Get All Users
    app.get("/Users", user_c.getAll)
    // Login
    app.post("/login", user_c.login)

    // Manager - student
    //app.get("/students",['authJwt.verifyToken'] ,student_c.getAll); 
    app.get("/student/:id", student_c.getById);
    // Manager - Professor
    app.get("/Professors", professor_c.getAll); 
    app.get("/Professor/:id", professor_c.getById);

    // IT - Professor
    app.post("/admin/Professor", professor_c.create); 
    app.put("/admin/Professor/:id", professor_c.updateById); 
    app.delete("/admin/Professor/:id", professor_c.deleteById); 
    app.get("/admin/Professors", professor_c.getAll); 
    app.get("/admin/Professor/:id", professor_c.getById); 
    // IT - student
    app.post("/admin/student", student_c.create); 
    app.put("/admin/student/:id", student_c.updateById); 
    app.delete("/admin/student/:id", student_c.deleteById); 
    app.get("/admin/students", student_c.getAll); 
    app.get("/admin/student/:id", student_c.getById);
    // IT - manager
    app.post("/admin/manager", manager_c.create); 
    app.put("/admin/manager/:id", manager_c.updateById); 
    app.delete("/admin/manager/:id", manager_c.deleteById); 
    app.get("/admin/managers", manager_c.getAll); 
    app.get("/admin/manager/:id", manager_c.getById); 
    
    //Student
    app.put("/student/:id", student_c.updateById); //jwt: StudentID should be same
    
    //Professor
    app.put("/Professor/:id", professor_c.updateById); //jwt: ProfessorID should be same

}