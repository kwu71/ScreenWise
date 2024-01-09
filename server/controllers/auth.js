import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user'

// Registering the User

export const register = async (req, res) => {
  
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

    const newUser = new User({

    })

  } catch (err) {

  }
}