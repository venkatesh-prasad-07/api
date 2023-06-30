const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY || 'your-secret-key';


app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
  };

connectDB();

// Create a user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Signup route
// Signup route
app.post('/signup', async(req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  User.findOne({ username })
    .then(existingUser => {
      if (existingUser) {
        console.log("User Already Exists");
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Hash the password
      bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // Create a new user
          const user = new User({ username, password: hashedPassword });

         user.save()
            .then(() => res.status(201).json({ message: 'User created successfully' }))
            
            .catch(err => res.status(500).json({ error: err }));
        })
        .catch(err => res.status(500).json({ error: err }));
    })
    .catch(err => res.status(500).json({ error: err }));
});

// Signup route
app.post('/signup', async(req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  User.findOne({ username })
    .then(existingUser => {
      if (existingUser) {
        console.log("User Already Exists");
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Hash the password
      bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // Create a new user
          const user = new User({ username, password: hashedPassword });

         user.save()
            .then(() => res.status(201).json({ message: 'User created successfully' }))
            
            .catch(err => res.status(500).json({ error: err }));
        })
        .catch(err => res.status(500).json({ error: err }));
    })
    .catch(err => res.status(500).json({ error: err }));
});

// Login route
app.post('/login', async(req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  await User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Compare the password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
          }
          
          // Create and sign a JWT token
          const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

          res.json({ token }); // Send the token as the response
          console.log("Received token: ",token);
        })
        
        .catch(err => res.status(500).json({ error: err }));
    })
    .catch(err => res.status(500).json({ error: err }));

          
     
  });

// Root endpoint


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

