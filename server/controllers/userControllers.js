import User from '../model/user.js';

// Dashboard
const addHours = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;
    const { hours } = req.body;

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Pushing")
    user.screenTimeData.push({ date: new Date(), time: hours });
    
    // Save the updated user data
    await user.save();

    res.status(200).json({ message: "Hours added successfully" });
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Could not add new date" });
  }
};

const getHours = async(req, res) => {
  console.log("Start getTotalTime")
  try {

    const { userId } = req.params;

    console.log("At User getTotalTime")
    // Find the user by userId
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Start Aggregate")
    const totalTime = await User.aggregate(
      [
        {
            $match: {
              _id: user._id
            }
        },
        {
          $unwind: "$screenTimeData",
        },
        {
          $project: {
            date: {
              $toDate: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: "$screenTimeData.date",
                },
              },
            },
            hours: "$screenTimeData.time",
          },
        },
        {
          $match: {
            $expr: {
              $eq: [
                {
                  $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$$NOW",
                  },
                },
                {
                  $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$date",
                  },
                },
              ],
            },
          },
        },
        {
          $group: {
            _id: "$date",
            totalHours: {
              $sum: "$hours",
            },
          },
        },
      ]).exec();


    if(totalTime.length === 0){
      return res.json(0);
    } else {
      return res.json(totalTime[0].totalHours);
    }
  
  } catch (error) {
    return res.status(404).json({ error: "Total time could not be updated" });
  }
};

// Friends List

const addFriend = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;
    const { friendID } = req.body;

    console.log("At user")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("At friend")
    const findFriendID = await User.findById(friendID); 

    if (!findFriendID) {
      return res.status(404).json({ error: "Friend not found" });
    }


    // Maps the userIDOfFriends for the user that is sending then checks if they have already sent a request.
    console.log("checks if they have already sent a request")
    const friendMap = user.friendSent.map( (arrayElement) => {
      return arrayElement.userIdOfFriend;
    })

    console.log(friendMap)
    for(let i = 0; i < friendMap.length; i++){
      if(friendMap[i].equals(friendID)){
        return res.status(404).json({ error: "Friend request was already sent" });
      }
    }

    // I also want to check if the user has already gotten a request from the person they want to sent to
    console.log("check if the user has already gotten a request from the person")
    const friendMapReceived = user.friendReceived.map( (arrayElement) => {
      return arrayElement.userIdOfFriend;
    })

    console.log(findFriendID)
    for(let i = 0; i < friendMapReceived.length; i++){
      if(friendMapReceived[i].equals(friendID)){
        return res.status(404).json({ error: "The user has already sent a request to you" });
      }
    }

    // I also want to check if they are already friends
    console.log("check if they are already friends")
    const friendsListMap = user.friendList.map( (arrayElement) => {
      return arrayElement.userIdOfFriend;
    })

    for(let i = 0; i < friendsListMap.length; i++){
      if(friendsListMap[i].equals(friendID)){
        return res.status(404).json({ error: "You are already friends" });
      }
    }

    console.log("Pushing")
    user.friendSent.push({ userIdOfFriend: friendID});
    findFriendID.friendReceived.push({userIdOfFriend: user});
    
    // Save the updated user data
    await user.save();
    await findFriendID.save();

    res.status(200).json({ message: "Friend Request sent successfully" });
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Could not add friend" });
  }
};

const getFriendsSent = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const arrayOfUserModels = [];
    for(let i = 0; i < user.friendSent.length; i++){
      const friend = await User.findById(user.friendSent[i].userIdOfFriend);

      arrayOfUserModels.push(friend);

    }

    console.log("Done")
    res.status(200).json({arrayOfUserModels});
  } catch (error) {
    return res.status(404).json({ error: "Could not get friends sent" });
  }
};

const getFriendsRequested = async(req, res) => {
  try {
    
    const { userId } = req.params;

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const arrayOfUserModels = [];
    for(let i = 0; i < user.friendReceived.length; i++){
      const friend = await User.findById(user.friendReceived[i].userIdOfFriend);

      arrayOfUserModels.push(friend);

    }

    console.log("Done")
    res.status(200).json({arrayOfUserModels});

  } catch (error) {
    
  }
}

const getFriendsList = async(req, res) => {
  try {
    
    const { userId } = req.params;

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const arrayOfUserModels = [];
    for(let i = 0; i < user.friendList.length; i++){
      const friend = await User.findById(user.friendList[i].userIdOfFriend);

      arrayOfUserModels.push(friend);

    }

    console.log("Done")
    res.status(200).json({arrayOfUserModels});

  } catch (error) {
    
  }
}

const deleteFriendSent = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;
    const { friendID } = req.body;

    console.log("At user")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("At friend")
    const findFriendID = await User.findById(friendID); 

    if (!findFriendID) {
      return res.status(404).json({ error: "Friend not found" });
    }

    console.log("At for")
    for(let i = 0; i < user.friendSent.length; i++){
      if(user.friendSent[i].userIdOfFriend.equals(friendID)){
        user.friendSent.pull({ userIdOfFriend: friendID});
        findFriendID.friendReceived.pull({ userIdOfFriend: userId});
      }
    }
    
    // Save the updated user data
    await user.save();
    await findFriendID.save();

    res.status(200).json({ message: "Friend Request delete successfully" });
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Could not delete friend" });
  }
}

const deleteFriendReceived = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;
    const { friendID } = req.body;

    console.log("At user")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("At friend")
    const findFriendID = await User.findById(friendID); 

    if (!findFriendID) {
      return res.status(404).json({ error: "Friend not found" });
    }

    console.log("At for")
    for(let i = 0; i < user.friendReceived.length; i++){
      if(user.friendReceived[i].userIdOfFriend.equals(friendID)){
        user.friendReceived.pull({ userIdOfFriend: friendID});
        findFriendID.friendSent.pull({ userIdOfFriend: userId});
      }
    }
    
    // Save the updated user data
    await user.save();
    await findFriendID.save();

    res.status(200).json({ message: "Friend Request delete successfully" });
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Could not delete friend" });
  }
}

const addFriendReceived = async(req, res) => {
  console.log("Got Response")
  try {
    
    const { userId } = req.params;
    const { friendID } = req.body;

    console.log("At user")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("At friend")
    const findFriendID = await User.findById(friendID); 

    if (!findFriendID) {
      return res.status(404).json({ error: "Friend not found" });
    }

    console.log("Pushing")
    user.friendList.push({ userIdOfFriend: friendID});
    findFriendID.friendList.push({userIdOfFriend: user});
    
    // Save the updated user data
    await user.save();
    await findFriendID.save();

    res.status(200).json({ message: "Friend Request delete successfully" });
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Could not delete friend" });
  }
}

// Leaderboard

const getLeaderboard = async (req, res) => {
  try {
    const { userId } = req.params;

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
      
      const totalTime = await User.aggregate(
        [
          {
              $match: {
                _id: {$in: [user._id, ...user.friendList.map(friend => friend.userIdOfFriend)]}
              }
          },
          {
            $unwind: "$screenTimeData",
          },
          {
            $project: {
              username: 1,
              date: {
                $toDate: {
                  $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$screenTimeData.date",
                  },
                },
              },
              hours: "$screenTimeData.time",
            },
          },
          {
            $match: {
              $expr: {
                $eq: [
                  {
                    $dateToString: {
                      format: "%Y-%m-%d",
                      date: "$$NOW",
                    },
                  },
                  {
                    $dateToString: {
                      format: "%Y-%m-%d",
                      date: "$date",
                    },
                  },
                ],
              },
            },
          },
          {
            $group: {
              _id: "$_id",
              username: { $first: "$username" },
              totalHours: {
                $sum: "$hours",
              },
            },
          },
          {
            $sort: { totalHours: -1 }
          },
        ]).exec();

        return res.json(totalTime);

  } catch (error) {
    
  }
}

export { addHours, getHours, addFriend, getFriendsSent, getFriendsRequested, getFriendsList, deleteFriendSent, deleteFriendReceived, addFriendReceived, getLeaderboard};