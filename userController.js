const User = require('./userModel');
// const db = require('./'); want to send db information to the page

//How can I implement db.create, db.find, db.delete?
//Did I need to link to Mongo as well?

const userController = {};

// Create a new user in the Database
// Their information will be sent in the request body
// This should send the created user

userController.createUser = (req, res, next) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }, function (err, found) {
    if (!found) {
      User.create({
        username: req.body.username,
        password: req.body.password
      }, (err, doc) => {
        if (err) { res.status(418).send({ error: 'User creation failed!' }) }
        else {
          console.log('User creation success!');
          next();
        }
      })
    }
    else next();
  }
  )
}


// Get a userfrom the database and send it in the response
// Their username will be in the request parameter 'username'
// This should send the found user
userController.getUser = (req, res) => {
  User.find({ username: req.body.username, password: req.body.password }, (err, user) => {
    if (user.length > 0) {
      res.send(user);
    }
    if (err) {
      res.status(418).send({ error: 'Could not find user!' })
    }
  })
}

// Get a user from the database and update the user
// The user's username will be in the request parameter 'username'
// The user's new password will be in the request body
userController.updateUser = (req, res) => {

}

// Delete a user from the database
// The user's username will be sent in the request parameter 'name'
// This should send a success status code
userController.deleteUser = (req, res) => {

}

module.exports = userController;

//Alternative to retrieve data
    // (data) => {
    //   for (let student in data){
    //      let studentUser = data[student];
    //        for (let i = 0; i < studentUser.length; i += 1){
    //          let student = studentUser[i];
    //          let temp = {
    //              'firstName': student.firstName,
    //              'lastName' : student.lastName,
    //               'age': student.age
    //          }
    //          let singleStudent = new students(temp);
    //          singleStudent.save((err) => {
    //            if(err) return console.error(err)
    //          })
    //       }  
    //    }
    // }; 