const express=require('express');
const mongoose = require('mongoose');
const app=express();
const User=require('./model/user');
const ejs=require('ejs');
const bodyParser = require('body-parser');
const path=require('path');


mongoose.connect('mongodb://localhost:27017/lib', { useUnifiedTopology: true, useNewUrlParser: true });



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



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
      const user = await User.findOne({ email, password }).exec();
      if (!user) {
        return res.status(404).send('User not found. Please check your email and password.');
      }
  
      // User found, perform login actions
      // ...
      
    //  res.send('Login Successful');
    // res.sendFile(__dirname+'/public/3_mainpage.html');
    res.render('profile', { user });
    
    
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during login.');
    }
  });
  app.get('/profile', async (req, res) => {
    // Retrieve the user ID from the session or any other authentication mechanism
    const userId = req.userId;
  
    // Fetch the user data from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.send('User not found');
    }
  
    // Render the profile page with user data
    res.render('profile', { user });
  });


  
  
  
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
