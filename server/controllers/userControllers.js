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

    console.log("At User")
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const findFriendID = await User.findById(friendID); 

    if (!findFriendID) {
      return res.status(404).json({ error: "Friend not found" });
    }

    const friendMap = user.friendSent.map( (arrayElement) => {
      return arrayElement.userIdOfFriend;
    })

    for(let i = 0; i < friendMap.length; i++){
      if(friendMap[i].userIdOfFriend.equals(findFriendID)){
        return res.status(404).json({ error: "Friend request was already sent" });
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

export { addHours, getHours, addFriend, getFriendsSent};