'use strict'
const studentRouter = require('express').Router();
const db = require('../db');
const {Student, Campus} = require('../db/models/index');
const Promise = require('bluebird');


module.exports = studentRouter;

// GET '/' =>  get all students
// studentRouter.get('/', (req, res, next) => {
//   Student.findAll({
//     include:[
//       {
//         model: Campus
//       }
//     ]
//   })
//   .then(allStudents => res.json(allStudents))
//   .catch(next);
// });

studentRouter.get('/', (req, res, next) => {
  Student.scope('getStudsentsWithCampuses').findAll()
  .then(allStudents => res.status(200).json(allStudents))
  .catch(next);
});

// GET '/:studentId' => get student by id
// studentRouter.get('/:studentId', (req, res, next) => {
//   Student.findOne({
//     where: {
//       id: req.params.studentId
//     },
//     include:[
//       {
//         model: Campus
//       }
//     ]
//   })
//   .then(student => res.json(student))
//   .catch(next);
// });

studentRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => {
    if(!student) throw new Error('Student does not exist with this id');
    return student.reload(Student.options.scopes.getStudsentsWithCampuses());
  })
  .then(student => res.status(200).json(student))
  .catch(next);
});

// GET '/campus/:campusId' => get students for campus by campus id
// studentRouter.get('/campus/:campusId', (req, res, next) => {
//   Student.findAll({
//     where: {
//       campusId: req.params.campusId
//     },
//     include:[
//       {
//         model: Campus
//       }
//     ]
//   })
//   .then(student => res.json(student))
//   .catch(next);
// });

// POST '/' => create a new student
// studentRouter.post('/', (req, res, next) => {
//   Campus.findById(req.body.campusId)
//   .then((campus) => {
//     const createStudent = Student.create(req.body)
//     .then((student) => {
//       return student.setCampus(campus);
//     });

//     return Promise.all([createStudent, campus]);
//   })
//   .spread((student, campus) => {
//     const createdStudent = Object.assign({}, student.dataValues);
//     createdStudent.campus = campus;
//     res.json(createdStudent);
//   })
//   .catch(next);
// });

studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => student.reload(Student.options.scopes.getStudsentsWithCampuses()))
  .then(student => res.status(200).json(student))
  .catch(next);
});

// PUT '/:studentId' => edit the student by id
// studentRouter.put('/:studentId', (req, res, next) => {
//   Student.update(req.body, {
//     where: {
//       id: req.params.studentId
//     },
//     returning: true
//   })
//   .spread((updateRowCount, updatedStudents) => {
//     res.json(updatedStudents[0]);
//   })
//   .catch(next);
// });

studentRouter.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => {
    if(!student) throw new Error('Student does not exist with this id');
    return student.reload(Student.options.scopes.getStudsentsWithCampuses());
  })
  .then(student => res.send(200).json(student))
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
    res.status(200).end();
  })
  .catch(next);
});

