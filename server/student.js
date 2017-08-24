'use strict'
const studentRouter = require('express').Router();
const db = require('../db');
const {Student, Campus} = require('../db/models/index');


module.exports = studentRouter;
