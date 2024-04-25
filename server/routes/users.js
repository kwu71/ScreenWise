import express from 'express';
import dotenv from 'dotenv';
import {addHours, getHours, addFriend, getFriendsSent} from '../controllers/userControllers.js';

const router = express.Router();

router.post("/addHours/:userId", addHours);
router.get("/getTotalTime/:userId", getHours);
router.post("/addFriend/:userId", addFriend);
router.get("/getFriendsSent/:userId", getFriendsSent);

export default router;