'use strict';
const db = require('./db/index');
const {Campus, Student} = require('./db/models/index');
const Promise = require('bluebird');
const chalk = require('chalk');

const campuses = [
  {name: "Campus One",
   "description": "This is campus one"
  },
  {name: 'Campus Two',
   description: 'This is campus two'
  },
  {name: 'Campus Three',
   description: 'This is campus three'
  },
  {name: 'Campus Four',
   description: 'This is campus four'
  }
];

const students = [
  {
    firstName: 'Brad',
    lastName: 'Pitt',
    age: 20,
    gender: 'Male',
    email: 'bpitt@aol.com',
    campusId: 1
  },
  {
    firstName: 'Tom',
    lastName: 'Cruise',
    age: 22,
    gender: 'Male',
    email: 'tcruise@yahoo.com',
    campusId: 2
  },
  {
    firstName: 'Emma',
    lastName: 'Stone',
    age: 18,
    gender: 'Female',
    email: 'estone@gmail.com',
    campusId: 3
  },
  {
    firstName: 'Natalie',
    lastName: 'Portman',
    age: 20,
    gender: 'Female',
    email: 'nportman@aol.com',
    campusId: 4
  },
  {
    firstName: 'Jennifer',
    lastName: 'Lawrence',
    age: 21,
    gender: 'Female',
    email: 'jlawr@yahoo.com',
    campusId: 2
  },
  {
    firstName: 'Johnny',
    lastName: 'Depp',
    age: 21,
    gender: 'Male',
    email: 'jdepp@gmail.com',
    campusId: 4
  },
  {
    firstName: 'Julia',
    lastName: 'Roberts',
    age: 20,
    gender: 'Female',
    email: 'jroberts@yahoo.com',
    campusId: 1
  },
  {
    firstName: 'Angelina',
    lastName: 'Jolie',
    age: 20,
    gender: 'Female',
    email: 'ajol@yahoo.com',
    campusId: 3
  },
  {
    firstName: 'Will',
    lastName: 'Smith',
    age: 22,
    gender: 'Male',
    email: 'wsmith@gmail.com',
    campusId: 1
  },
  {
    firstName: 'Daniel',
    lastName: 'Crag',
    age: 22,
    gender: 'Male',
    email: 'dgrag@aol.com',
    campusId: 2
  },
  {
    firstName: 'Taylor',
    lastName: 'Swift',
    age: 20,
    gender: 'Female',
    email: 'tswift@yahoo.com',
    campusId: 4
  },
  {
    firstName: 'Liam',
    lastName: 'Neeson',
    age: 20,
    gender: 'Male',
    email: 'lneeson@gmail.com',
    campusId: 3
  },
  {
    firstName: 'Denzel',
    lastName: 'Washington',
    age: 21,
    gender: 'Male',
    email: 'dwashington@gmail.com',
    campusId: 1
  },
  {
    firstName: 'Dwayne',
    lastName: 'Johnson',
    age: 22,
    gender: 'Male',
    email: 'djohnson@aol.com',
    campusId: 4
  },
  {
    firstName: 'Emma',
    lastName: 'Watson',
    age: 20,
    gender: 'Female',
    email: 'ewatson@aol.com',
    campusId: 2
  },
  {
    firstName: 'Rachel',
    lastName: 'Adams',
    age: 21,
    gender: 'Female',
    email: 'radams@yahoo.com',
    campusId: 3
  }
];

const seedDB = () => {
  return Promise.all(campuses.map((campus) => {
    return Campus.create(campus);
  }))
  .then(() => {
      return Promise.all(students.map((student) => {
          return Student.create(student);
        }));
    }
  );
};

const syncDB = () => {

  db.didSync
  .then(() => {
    console.log( chalk.blue('syncing db....'));
    return db.sync({force: true});
  })
  .then(() => {
    console.log(chalk.green('seeding db....'));
    return seedDB();
  })
  .catch((err) => {
    console.log(chalk.red('error while seeding'));
    console.log(err.stack);
  })
  .then(() => {
    console.log(chalk.green("before closing db"));
    db.close();
    return null;
  });
};

syncDB();
