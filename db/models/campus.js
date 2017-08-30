'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
}, {
  scopes: {
    getCampusesWithStudents: () => ({
      include:[
        {
          model: db.model('student')
        }
      ]
    })
  }
});

