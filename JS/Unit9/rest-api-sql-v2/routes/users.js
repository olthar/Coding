var express = require('express');
var router = express.Router();
const {Course, User} = require('../models');
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      console.log(error)
        res.status(404).json({
        message: 'ooooooooooh sorry',
      });
      // res.render("error", {error})
    //   res.status(404).render("course/page-not-found", {error, title:"ERROR"})
}}}


// GET /api/users 200 - Returns the currently authenticated user
router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll({
      include: [
        {
        model: Course,
        as: 'user',
        attributes: ['title', 'description'],
        }
      ],
    });
    console.log(users)
    res.json(users);
  }));

// POST /api/users 201 - Creates a user



module.exports = router