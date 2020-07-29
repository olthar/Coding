const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("about working")
    res.render('about');
});


module.exports = router;
