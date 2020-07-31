const express = require('express');
const router = express.Router();

const { projects } = require('../data/data.json');

// If no project ID is set, one is chosen at random
router.get( '/', ( req, res ) => {
    const numberOfProjects = projects.length;
    const projectID = Math.floor( Math.random() * numberOfProjects );
    res.redirect( `/project/${projectID}` )
  });

  //Based on the 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];

    const templateData = { id, project_name, description, technologies, live_link, github_link, image_urls };

    res.render('project', templateData);    
});

module.exports = router;