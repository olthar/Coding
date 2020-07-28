const express = require('express');
// const { projects } = require('../data/data.json');

const app = express();


app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);


app.listen(3000)