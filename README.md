# Senior Enrichment Project

## Getting started

1. Clone this repo
2. Install all the dependencies with: `npm install`
3. Start the build process with: `npm run build-watch`
4. Seed the database with: `node seed.js`
5. In another terminal, start app with: `npm start`

----------------- Explaining The Functinality -----------

1. As a user, I will land on **Home** by default : When user requests the first time for address 'localhost://1337',  he/she
   gets the Home view by default.

2. As a User, I can navigate to **Campuses** from **Home** : When user clicks on the 'Campuses' link in the navbar, he/she can get      to the 'Campuses' view.

3. As a user, I can navigate to **Students** from **Home** : When user clicks on the 'Students' link in the navbar, he/she can get      to the 'Students' view.

4. As a user, I can navigate to view a **Single Campus** from **Campuses** : On 'Campuses' view, user can see a 'Create New Campus'     button, an 'Add New Student' button and the list of campuses. Each campus in the list, has a campus name (which is a Navlink),       campus description and a 'Delete Campus' button. When the user clicks on the campus name navlink, he/she can get to the single       campus view.

5. As a user, I can can navigate to view a **Single Student** from **Students** : On 'Students' view, user can see a 'Create New        Student' button and the table of students. Each student in the table, has a student's name (which is a Navlink), student's age,      student's gender, student's email id, the campus name he/she belongs to (which is a Navlink), and a 'Delete Student' button. When    the user clicks  on the student name navlink, he/she can get to the single student view.

6. As a user, I can navigate to view a **Single Student** from **Single Campus** (for any student at that campus) : On 'Single          Campus' view, user can see an 'Edit Campus' button, an 'Add New Student' button and the table of students enrolled in that           campus. Each student in the table, has a student's name (which is a Navlink), student's age, student's gender, student's email id    and a 'Delete Student' button. When the user clicks  on the student name navlink, he/she can get to the single student view.

7. As a user, I can can navigate to view that student's **Single Campus** from **Single Student** : On 'Single Student' view, user      can see an 'Edit Student' button, student's first name. student's last name, student's age, student's gender, student's email id     and the campus name he/she belongs to (which is a Navlink). When the user clicks  on the campus name navlink, he/she can get to      the single campus view.

8. As a user, I can see a list of all campuses on the **Campuses** view : On 'Campuses' view, user can see the list of campuses.        Each campus in the list, has a campus name (which is a Navlink), campus description and a 'Delete Campus' button.

9. As a user, I can see a list of all students on the **Students** view : On 'Students' view, user can see the table of students.       Each student in the table, has a student's name (which is a Navlink), student's age, student's gender, student's email id, the       campus name he/she belongs to (which is a Navlink), and a 'Delete Student' button.

10. As a user, I can see details about a campus on the **Single Campus** view, including that campus's students : On 'Single Campus'     view, user can see the table of students enrolled in that campus. Each student in the table, has a student's name (which is a        Navlink), student's age, student's gender, student's email id and a 'Delete Student' button.

11. As a user, I can see details about a student on the **Single Student** view, including that student's campus : On 'Single            Student' view, user can see student's first name. student's last name, student's age, student's gender, student's email id  and      the campus name he/she belongs to (which is a Navlink).

12. As a user, I can can create a campus : On 'Campuses' view, user can see a 'Create New Campus' button. When user clicks on this       button, he/she can get to the 'Create New Campus' view. 'Create New Campus' view has 'Campus Name' input text box, 'Campus           Description' input text box and 'Submit Campus' button. When user enters the campus name and campus description, and clicks on       the 'Submit Campus' button, user can create a new campus.

13. As a user, I can edit a campus's info, including adding/removing a student to/from that campus : On 'Single Campus' view, user       can see an 'Edit Campus' button. When user clicks on this button, he/she can get to the 'Edit Campus' view. 'Edit Campus' view       has 'Campus Name' input text box, 'Campus Description' input text box and 'Submit Campus' button. Both the input textboxes are       populated with the initial value of the campus. When user edits the campus name or campus description, and clicks on       the       'Submit Campus' button, user can edit a new campus.
    A user can create a campus from 'Campuses' view as well as from 'Single Campus' view. Both the views have 'Create New Student' button and when the user clicks on this button, he/she can get to the 'Create Student' view. On 'Create Student' view, a user can see the input textboxes that take the inforation of new student. After entering the information of new student, a user can click on the 'Submit  Student' button and create a new student.
    A user can delete a student from the 'Single Campus View'. On 'Single Campus' view, user can see the table of students enrolled in that campus. Each student in the table, has a 'Delete Student' button. When the user clicks  on this button, he/she can delete a student from that campus.


- Actions: as a user I...
  *
  *
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student



------------------- REQUIREMENTS ---------------------------
## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses.

### The tools

Use at least sequelize, express, react, and redux when creating this app. You can incorporate any additional libraries or tools you wish.

### DB Design

- Students
  * have profile info (e.g. name and email)
  * must be assigned to a campus

- Campuses
  * have info such as a name and image
  * can have many students assigned (may have none)

### Views and Functionality
#### See Wireframes folder for visual

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Campuses** from **Home**
  * can navigate to **Students** from **Home**
  * can navigate to view a **Single Campus** from **Campuses**
  * can navigate to view a **Single Student** from **Students**
  * can navigate to view a **Single Student** from **Single Campus** (for any student at that campus)
  * can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
  * see a list of all students on the **Students** view
  * see details about a campus on the **Single Campus** view, including that campus's students
  * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student

### Routes

```
GET
- all campuses
- a campus by id
- all students
- a student by id
```

```
POST
- new campus
- new student
```

```
PUT
- updated student info for one student
- updated campus info for one campus
```

```
DELETE
- a campus
- a student
```

### How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect

### Video Walkthrough
Please submit a 3-minute screencast of a walk-through of the functionality *and code* for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*, and send us the link. This will aid us in evaluating your submission.

## Evaluation

- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

