/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Course
 *         title:
 *           type: string
 *           description: The courseName of your Course
 *         prerequisites:
 *           type: [string]
 *           description: The prerequisites of your Course
 *         nedded:
 *           type: [string]
 *           description: The corequirements of your Course
 *         unit:
 *           type: number
 *           description: The unit of your Course
 *         
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ActiveCourse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Course
 *         title:
 *           type: string
 *           description: The courseName of your Course
 *         prerequisites:
 *           type: [string]
 *           description: The prerequisites of your Course
 *         nedded:
 *           type: [string]
 *           description: The corequirements of your Course
 *         unit:
 *           type: number
 *           description: The unit of your Course
 *         activeCourse_id:
 *           type: string
 *           description: The classDateTime of your Course
 *         class_dates:
 *           type: [string]
 *           description: The examDateTime of your Course
 *         class_time:
 *           type: string
 *           description: The examLocation of your Course
 *         exam_date:
 *           type: string
 *           description: The lecturer of your Course
 *         exam_time:
 *           type: string
 *           description: The capacity of your Course
 *         exam_class_no:
 *           type: number
 *           description: The academicSemester of your Course
*/

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The Course managing API
 * /courses:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lists of all the Courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: The list of the Courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       401:
 *         description: Access token is missing or invalid
 * /course:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new Course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The created Course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Access token is missing or invalid
 * 
 * /course/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the Course by id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Course id
 *     responses:
 *       200:
 *         description: The Course response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: The Course was not found
 *       401:
 *         description: Access token is missing or invalid
 * 
 *   put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the Course by the id
 *    tags: [Courses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Course id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Course'
 *    responses:
 *      200:
 *        description: The Course was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Course'
 *      404:
 *        description: The Course was not found
 *      500:
 *        description: Some error happened
 *      401:
 *        description: Access token is missing or invalid
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Remove the Course by id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Course id
 *
 *     responses:
 *       200:
 *         description: The Course was deleted
 *       404:
 *         description: The Course was not found
 *       401:
 *         description: Access token is missing or invalid
 * /activeCourse/{id}:
 *    put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update the Course by the id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Course id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActiveCourse'
 *     responses:
 *       200:
 *         description: The Course was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActiveCourse'
 *       404:
 *         description: The Course was not found
 *       500:
 *         description: Some error happened
 *       401:
 *         description: Access token is missing or invalid
 * /activeCourse:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new Course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The created Course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Access token is missing or invalid
 * */


const controller = require("../controllers/course.controller");
const authJwt = require("../middelware/authJwt");

module.exports = function(app){
    // IT - Course
    //app.get("/courses",[authJwt.verifyToken],  controller.getall); 

    // Manager - Course
    app.post("/course", [authJwt.verifyToken,authJwt.isManager], controller.create);
    app.put("/course/:id", [authJwt.verifyToken,authJwt.isManager], controller.updateById); 
    app.delete("/course/:id",[authJwt.verifyToken,authJwt.isManager],  controller.deleteById);
     
    // Manager - Active Course(Semestere Course)
    app.post("/activeCourse",[authJwt.verifyToken,authJwt.isManager], controller.createAC);
    app.put("/activeCourse/:id",[authJwt.verifyToken,authJwt.isManager],  controller.updateByIdAC); 

    // Admin & Manager & Student & Professor -> if student/Professor request just student'field courses returns
    app.get("/courses",[authJwt.verifyToken], controller.getall); // A,S(filter),P(filter),M
    app.get("/course/:id",[authJwt.verifyToken], controller.getById); //S(filter),P(filter),M
    
}