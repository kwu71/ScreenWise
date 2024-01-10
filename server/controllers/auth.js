import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js'

// BASIC SET UP OF AUTHENTICATION DON'T USE IN ACTUAL PRODUCTION APPS!!!
// GOOD WAY TO LEARN THE BASICS

// Registering the User
export const register = async (req, res) => {
  
  //Gets the data from the front-end 
  try {
    const {
      username,
      password,
      friends,
      timeSpent,
      socialMedia,
      bio
    } = req.body;

    //Hashing the password that we get from the user when registering
    //Then after will salt again to unhash the password and make sure both are the same and give the user a JWT
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //Creates the new User with the hashed password that is now stored
    const newUser = new User({
      username,
      password: passwordHash,
      friends,
      timeSpent: 0,
      socialMedia,
      bio
    })
    
    //Sends the user a status of 201 when the newUser is successfully created and added into mongoDB
    //Then converts it to a json file so that the frontend can received and display the information that is needed
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json( { error: err.message } );
  }
};

// Login 
export const login = async (req, res) => {
  
  // requesting the username and password from the front end
  // then using mongoose to go through the mongoDB database to find the user with that username
  // unhashes the password then compares it to the current password that was sent through the front end
  // if it matches then they are given a jwt that is assigned to the user
  try{
    const { username, password } = req.body;
    const user = await  User.findOne( { username: username} );

    if(!user) return res.status(400).json({ msg: "User does not exist. "});

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if(!isMatch) return res.status(400).json( {msg: "Invalid credentials"} );

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
    delete user.password;

    res.status(200).json({ token, user});
  } catch (err) {
    res.status(500).json( { error: err.message } );
  }
}