const express = require('express');
const router = express.Router();


const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    console.log("projects working")
    console.log(projects[1])
    
});


module.exports = router;