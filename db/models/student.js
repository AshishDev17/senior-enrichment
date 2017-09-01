'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age:{
    type: Sequelize.INTEGER,
    allowNUll: false
  },
  gender:{
    type: Sequelize.STRING,
    allowNUll: false,
    validate: {
      notEmpty: true
    }
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  scopes: {
    getStudsentsWithCampuses: () => ({
      include:[
        {
          model: db.model('campus')
        }
      ]
    })
  }
});


