import express from 'express';
import dotenv from 'dotenv';
import {addHours, getHours, addFriend, getFriendsSent, getFriendsRequested, getFriendsList, deleteFriendSent, deleteFriendReceived, addFriendReceived, getLeaderboard, getBio, getUsername, changeBio, changeUsername} from '../controllers/userControllers.js';

const router = express.Router();

router.post("/addHours/:userId", addHours);
router.get("/getTotalTime/:userId", getHours);

router.post("/addFriend/:userId", addFriend);
router.get("/getFriendsSent/:userId", getFriendsSent);
router.get("/getFriendsRequested/:userId", getFriendsRequested);
router.get("/getFriendsList/:userId", getFriendsList);
router.delete("/deleteFriendSent/:userId", deleteFriendSent);
router.delete("/deleteFriendReceived/:userId", deleteFriendReceived);
router.post("/addFriendReceived/:userId", addFriendReceived);
router.get("/getLeaderboard/:userId", getLeaderboard);
router.get("/getBio/:userId", getBio);
router.get("/getUsername/:userId", getUsername);
router.put("/changeBio/:userId", changeBio);
router.put("/changeUsername/:userId", changeUsername);

export default router;