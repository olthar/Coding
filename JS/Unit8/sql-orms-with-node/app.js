const Sequelize = require('sequelize');



const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
  });

  class Movie extends Sequelize.Model {}
  Movie.init({
    title: Sequelize.STRING,
  }, { sequelize });
  
  (async () => {
    // Sync 'Movies' table
    await sequelize.sync();
  
    try {
  
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();