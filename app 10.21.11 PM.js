const express=require('express');
const mongoose = require('mongoose');
const app=express();
const User=require('./model/user');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/lib', { useUnifiedTopology: true, useNewUrlParser: true });



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/1_login.html');
  });
  app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/public/2_signup.html');
  });
  app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const nser = await User.findOne({ email, password }).exec();
  
      if (nser) {
        return res.status(404).send('User not found. Please check your email and password.');
      }
  
      // User found, perform login actions
      // ...
      
    //  res.send('Login Successful');
    res.sendFile(__dirname+'/public/3_mainpage.html');
    
    
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during login.');
    }
  });
  // app.get('/student/details', async (req, res) => {
  //   // Retrieve the currently logged-in user's email from the session or request headers
  //   const email = req.session.email; // Assuming you are using sessions for authentication
  
  //   try {
  //     const student = await User.findOne({ email }, 'name email phoneNumber branch').exec();
  
  //     if (!student) {
  //       return res.status(404).send('Student not found');
  //     }
  
  //     res.send(student);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('An error occurred while fetching student details');
  //   }
  // });
  
  
  app.post('/signup', (req, res) => {
    const user = new User(req.body);
    user.name = req.body.name;
   
    user.email = req.body.email;
    user.password = req.body.password;
    user.phoneNumber = req.body.phoneNumber;
    user.branch = req.body.branch;
    user.save()
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error creating user');
    });
});
  // Start the server
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });