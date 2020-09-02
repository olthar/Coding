var express = require('express');
var router = express.Router();
const Course = require('../models').Course;
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      // res.render("error", {error})
    //   res.status(404).render("course/page-not-found", {error, title:"ERROR"})
}}}


// GET /api/courses 200 - Returns a list of courses (including the user that owns each course)
router.get('/', asyncHandler(async (req, res) => {
    const courses = await Course.findAll();
    //Counts the number of books in the database to generate page numbers at 5 to a page
    res.json(courses);
  }));
// GET /api/courses/:id 200 - Returns the course (including the user that owns the course) for the provided course ID
// POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content
// PUT /api/courses/:id 204 - Updates a course and returns no content
// DELETE /api/courses/:id 204 - Deletes a course and returns no content

module.exports = router