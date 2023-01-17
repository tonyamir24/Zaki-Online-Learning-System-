// External variables
const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI = 'mongodb+srv://tonton:tonton@cluster0.u0ywstm.mongodb.net/test' ;


//App variables
const app = express();
const port = process.env.PORT || "8000";
//const user = require('./Models/User');


// #Importing the userController
const courseRoutes = require('./Routes/courseRoutes')
const UserConRoutes = require('./Routes/UserRoute')
const userRoutes=require('./Routes/users')
const reportRoutes=require('./Routes/reportRoutes')
const traineeRoutes=require('./Routes/traineeRoutes')
const requestRoutes=require('./Routes/requestRoutes')
const progressRoutes=require('./Routes/progressRoutes')
const instructorRoutes=require('./Routes/instructorRoutes')

//const Route = require('./Routes/userController')

// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });


// #Routing to userController here


app.use(courseRoutes)
app.use(UserConRoutes)
app.use(userRoutes)
app.use(reportRoutes)
app.use(traineeRoutes)
app.use(requestRoutes)
app.use(progressRoutes)
app.use(instructorRoutes)

/*
                                                    End of your code
*/

