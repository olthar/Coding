const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    const numberOfProjects = projects.length;
    console.log("index working")
    res.render('index', {projects});
});


module.exports = router;