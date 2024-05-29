import express from 'express';
import dotenv from 'dotenv';
import {addHours, getHours, addFriend, getFriendsSent, getFriendsRequested, getFriendsList, deleteFriendSent, deleteFriendReceived, addFriendReceived} from '../controllers/userControllers.js';

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

export default router;