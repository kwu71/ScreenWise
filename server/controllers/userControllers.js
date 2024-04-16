import User from '../model/user.js';

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
      res.json(0);
    } else {
      res.json(totalTime[0].totalHours);
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Save the updated user data
    await user.save();
    console.log("Done")
  } catch (error) {
    return res.status(404).json({ error: "Total time could not be updated" });
  }
};

export { addHours, getHours };