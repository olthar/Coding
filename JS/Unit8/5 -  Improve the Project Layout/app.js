const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
      runtime: 81,
      releaseDate: '1995-11-22',
      isAvailableOnVHS: true,
    });

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnVHS: true,
    });

    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    await movie3.save(); // save the record

    // New Person record
    const person = await Person.create({
      firstName: 'Tom',
      lastName: 'Hanks',
    });

    const movieById = await Movie.findByPk(1);
    console.log(movieById.toJSON());

    const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    console.log(movieByRuntime.toJSON());

    const moviesARST = await Movie.findAll({
      attributes: ['id', 'title'], // return only id and title
      where: {
        isAvailableOnVHS: true,
      },
    });
    console.log( moviesARST.map(movie => movie.toJSON()) );

    const moviesFAA = await Movie.findAll({
      attributes: ['id', 'title'],
      where: {
        releaseDate: {
          [Op.gte]: '2004-01-01', // greater than or equal to the date
        }
        // runtime: {
        //   [Op.gt]: 95, // greater than 95
        // },
        // title: {
        //   [Op.endsWith]: 'story'
        // }
        // runtime: {
        //   [Op.between]: [75, 115]
        // }
      },
    });
    console.log( moviesFAA.map(movie => movie.toJSON()) );
    const moviesFA = await Movie.findAll({
      attributes: ['id', 'title'],
      where: {
        title: {
          [Op.endsWith]: 'story'
        },        
      },
      order: [['id', 'DESC']] // IDs in descending order
    });
    console.log( moviesFA.map(movie => movie.toJSON()) );

    const articles = await Article.findAll({
      attributes: ['title', 'author'],
      order: ["createdAt", "DESC"], // articles in descending order
    });

    const moviesA = await Movie.findAll({
      attributes: ['id', 'title', 'releaseDate'],
      where: {
        releaseDate: {
          [Op.gte]: '1995-01-01'
        }
      },
      order: [['releaseDate', 'ASC']], // dates in ascending order
    });
    console.log( moviesA.map(movie => movie.toJSON()) );

    console.log(person.toJSON());
    console.log(movie2.toJSON());


    //UDATING 
    //save
    const toyStory3pp = await Movie.findByPk(3);
    toyStory3pp.isAvailableOnVHS = true;
    await toyStory3pp.save();
    //update
    const toyStory3ff = await Movie.findByPk(3);
    await toyStory3ff.update({
      runtime: 121,
    });
    const toyStory3wfa = await Movie.findByPk(3);
    await toyStory3wfa.update({
      title: 'Trinket Tale 3', // this will be ignored
      isAvailableOnVHS: true,
      //only updates the following field
    }, { fields: ['isAvailableOnVHS'] }); 

    console.log( toyStory3wfa.get({ plain: true }) );


    const toyStory = await Movie.findByPk(1);
    // Delete a record
    await toyStory.destroy();

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();
