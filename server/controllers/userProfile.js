import User from '../models/user.js';

export const updateUsername = async (req, res) => {
  try {
    // fetch the username that was input

    // check if the username is in the database already by comparison to everyone
  } catch (err){
    res.status(500).json( { error: err.message } );
  }
}

export const updateBio = async (req, res) => {
  try {

  } catch (err){
    res.status(500).json( { error: err.message } );
  }
}