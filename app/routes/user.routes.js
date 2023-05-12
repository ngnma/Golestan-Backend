const student_c = require("../controllers/student.controller");
const user_c = require("../controllers/admin.controller");

module.exports = function(app){

    // Create admin(IT)
    app.post("/IT", user_c.create)
    // Get All Users
    app.get("/Users", user_c.getAll)

    // Manager - student
    app.get("/students", student_c.getAll); 
    app.get("/student/:id", student_c.getById);
    // Manager - Professor
    app.get("/Professors", ); 
    app.get("/Professor/:id", );

    // IT - Professor
    app.post("/admin/Professor", ); 
    app.put("/admin/Professor/:id", ); 
    app.delete("/admin/Professor/:id", ); 
    app.get("/admin/Professors", ); 
    app.get("/admin/Professor/:id", ); 
    // IT - student
    app.post("/admin/student", student_c.create); 
    app.put("/admin/student/:id", ); 
    app.delete("/admin/student/:id", ); 
    app.get("/admin/students", student_c.getAll); 
    app.get("/admin/student/:id", student_c.getById);
    // IT - manager
    app.post("/admin/manager", ); 
    app.put("/admin/manager/:id", ); 
    app.delete("/admin/manager/:id", ); 
    app.get("/admin/managers", ); 
    app.get("/admin/manager/:id", ); 
    
    //Student
    app.put("/student/:id", ); //jwt: StudentID should be same
    
    //Professor
    app.put("/Professor/:id", ); //jwt: ProfessorID should be same

}