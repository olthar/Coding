'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    firstName:{ 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
        },
    },
    lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Please provide a name for "description"',
              },
              notEmpty: {
                msg: 'Please provide a name for "description"',
              },
            },
    },
    emailAddress: Sequelize.STRING,
    password: Sequelize.STRING
  }, { sequelize });

  User.associate = (models) => {
    User.hasMany(models.Course, {
      as: 'user',
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      },
    });
    };

  return User;
};