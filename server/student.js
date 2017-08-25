'use strict'
const studentRouter = require('express').Router();
const db = require('../db');
const {Student, Campus} = require('../db/models/index');
const Promise = require('bluebird');


module.exports = studentRouter;

// GET '/' =>  get all students
studentRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(allStudents => res.json(allStudents))
  .catch(next);
});

// GET '/:studentId' => get student by id
studentRouter.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    }
  })
  .then(student => res.json(student))
  .catch(next);
});

// POST '/' => create a new student
studentRouter.post('/', (req, res, next) => {
  Campus.findById(req.body.campusId)
  .then((campus) => {
    return Student.create(req.body)
    .then((student) => {
      return student.setCampus(campus);
    });
  })
  .then(student => res.json(student))
  .catch(next);
});

// PUT '/:studentId' => edit the student by id
studentRouter.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where: {
      id: req.params.studentId
    },
    returning: true
  })
  .spread((updateRowCount, updatedStudents) => {
    res.json(updatedStudents[0]);
  })
  .catch(next);
});

// DELETE '/:studentId' => deletes the student by id
studentRouter.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then(() => {
    res.json({message: 'DELETED'});
  })
  .catch(next);
});
