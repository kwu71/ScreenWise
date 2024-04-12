import express from 'express';
import dotenv from 'dotenv';
import {addHours, getHours} from '../controllers/userControllers.js';

const router = express.Router();

router.post("/addHours/:userId", addHours);

router.get("/getTotalTime/:userId", getHours);

export default router;