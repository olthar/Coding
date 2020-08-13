const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Passes the projects object to the index page
router.get('/', (req, res) => {
    res.render('index', {projects});
});


module.exports = router;