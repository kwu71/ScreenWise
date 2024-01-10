import User from '../model/user.js';

// Read
// Sends a request to the database to find the user by their ID
export const getUser = async (req, res) => {
  try{
    const { id } = req.params;
    const user = await User.findById(id);
  } catch(err) {
    res.status(404).json( { message: err.message});
  }
}

// 
export const getUserFriends = async (req, res) => {
  try{
    const { id } = req.params;
    const user = await User.findById(id);
  
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
  
    const formattedFriends = friends.map(
      ({ _id, username, timeSpent, bio}) => {
        return {_id, username, timeSpent, bio};
      }
    );
    res.status(200).json(formattedFriends)
  } catch(err){
    res.status(404).json( { message: err.message});
  }
}

// Update
export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId} = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)){
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = user.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId)
      friend.friends.push(id)
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
  
    const formattedFriends = friends.map(
      ({ _id, username, timeSpent, bio}) => {
        return {_id, username, timeSpent, bio};
      }
    );

    res.status(200).json(formattedFriends);
  } catch(err){
    res.status(404).json( { message: err.message});
  }
}