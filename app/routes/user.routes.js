/**
 * @swagger
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         role:
 *           type: string
 *         id:
 *           type: string
 *         token:
 *           type: string
 *         name:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     manager:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         role:
 *           type: string
 *         f_name:
 *           type: string
 *         l_name:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         faculty:
 *           type: string
 *  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         role:
 *           type: string
 *         f_name:
 *           type: string
 *         l_name:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         degree:
 *           type: string
 *         entry_year:
 *           type: number
 *         score:
 *           type: number
 *         faculty:
 *           type: string
 *         field:
 *           type: string
 *  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Professor:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         role:
 *           type: string
 *         f_name:
 *           type: string
 *         l_name:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         position:
 *           type: string
 *         faculty:
 *           type: string
 *         field:
 *           type: string
 *  */

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: The Login API
 * /login:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: login user
 *     tags: [Login]
 *     responses:
 *       200:
 *         description: login succesfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserLogin'
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server error
 * */

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: The Student managing API
 * /students:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the Student
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: The list of the Student
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /student/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the Course by id
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Student id
 *     responses:
 *       200:
 *         description: The Student response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The Student was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the Student by the id
 *    tags: [Student]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The Student was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The Student was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 *
 * */

/**
 * @swagger
 * tags:
 *   name: Professor
 *   description: The Professor managing API
 * /professors:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the Professor
 *     tags: [Professor]
 *     responses:
 *       200:
 *         description: The list of the Professor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Professor'
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /professor/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the Course by id
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Professor id
 *     responses:
 *       200:
 *         description: The Professor response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professor'
 *       404:
 *         description: The Professor was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the Professor by the id
 *    tags: [Professor]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Professor id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Professor'
 *    responses:
 *      200:
 *        description: The Professor was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Professor'
 *      404:
 *        description: The Professor was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 *
 * */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The Admin managing API
 * /admin/Professors:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the Professors
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the Admin
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Professor'
 *       401:
 *         description: Access token is missing or invalid
 * /admin/Professor:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new Professor
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Professor'
 *     responses:
 *       200:
 *         description: The created Professor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professor'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /admin/Professor/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the Professor by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Professor id
 *     responses:
 *       200:
 *         description: The Professor response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professor'
 *       404:
 *         description: The Professor was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the Professor by the id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Professor id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Professor'
 *    responses:
 *      200:
 *        description: The Professor was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Professor'
 *      404:
 *        description: The Professor was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Remove the Professor by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Professor id
 *
 *     responses:
 *       200:
 *         description: The Professor was deleted
 *       404:
 *         description: The Professor was not found
 *       401:
 *         description: Access token is missing or invalid
 * */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The Admin managing API
 * /admin/managers:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the manager
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the manager
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/manager'
 *       401:
 *         description: Access token is missing or invalid
 * /admin/manager:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new Professor
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/manager'
 *     responses:
 *       200:
 *         description: The created manager.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/manager'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /admin/manager/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the manager by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The manager id
 *     responses:
 *       200:
 *         description: The manager response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/manager'
 *       404:
 *         description: The manager was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the manager by the id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The manager id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/manager'
 *    responses:
 *      200:
 *        description: The manager was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/manager'
 *      404:
 *        description: The manager was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Remove the manager by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The manager id
 *
 *     responses:
 *       200:
 *         description: The manager was deleted
 *       404:
 *         description: The manager was not found
 *       401:
 *         description: Access token is missing or invalid
 * */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The Admin managing API
 * /admin/students:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the Student
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the Student
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       401:
 *         description: Access token is missing or invalid
 * /admin/student:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new Student
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The created Student.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /admin/student/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the Student by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Student id
 *     responses:
 *       200:
 *         description: The Student response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The Student was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the Student by the id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The Student was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The Professor was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Remove the Student by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Student id
 *
 *     responses:
 *       200:
 *         description: The Student was deleted
 *       404:
 *         description: The Student was not found
 *       401:
 *         description: Access token is missing or invalid
 * */

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

