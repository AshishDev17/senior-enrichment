'use strict'
const campusRouter = require('express').Router();
const db = require('../db');
const {Campus, Student} = require('../db/models/index');
const Promise = require('bluebird');

module.exports = campusRouter;

// GET '/' =>  get all campuses
campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(allCampuses => res.json(allCampuses))
  .catch(next);
});

// GET '/:campusId' => get campus by id
campusRouter.get('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  })
  .then(campus => res.json(campus))
  .catch(next);
});

// POST '/' => create a new campus
campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next);
});

// PUT '/:studentId' => edit the campus by id
campusRouter.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: {
      id: req.params.campusId
    },
    returning: true
  })
  .spread((updateRowCount, updatedCampuses) => {
    res.json(updatedCampuses[0]);
  })
  .catch(next);
});

// DELETE '/:campusId' => deletes the campus by id
campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then((data) => {
    res.json({data});
  })
  .catch(next);
});

