const express = require('express');
// const { projects } = require('../data/data.json');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});