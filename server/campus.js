'use strict'
const campusRouter = require('express').Router();
const db = require('../db');
const {Campus, Student} = require('../db/models/index');
const Promise = require('bluebird');

module.exports = campusRouter;

// GET '/' =>  get all campuses
campusRouter.get('/', (req, res, next) => {
  Campus.scope('getCampusesWithStudents').findAll({})
  .then(allCampuses => res.status(200).json(allCampuses))
  .catch(next);
});


// GET '/:campusId' => get campus by id
campusRouter.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then((campus) => {
    if(!campus) throw new Error('Campus does not exist with this id');
    return campus.reload(Campus.options.scopes.getCampusesWithStudents());
    /*
      Not entirely sure what campus.reload does here - do we need it? Also, if we want the students as part of the campus information every time we query for campuses, maybe students can be in the default scope for campuses
    */
  })
  .then(campus => {
    res.status(200).json(campus);
  })
  .catch(next);
});

// POST '/' => create a new campus
campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => campus.reload(Campus.options.scopes.getCampusesWithStudents()))
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

// PUT '/:studentId' => edit the campus by id
campusRouter.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => {
    if(!campus) throw new Error('Campus does not exist with this id');
    return campus.update(req.body)
  })
  .then(campus => campus.reload(Campus.options.scopes.getCampusesWithStudents()))
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

// DELETE '/:campusId' => deletes the campus by id
campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then(() => {
    res.status(200).end();
  })
  .catch(next);
});

