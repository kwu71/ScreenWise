import express from 'express';
import { sendFriendRequest, acceptFriend, getFriendsList } from '../controllers/auth.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(verifyToken);

router.post('/sendFriendRequest', sendFriendRequest);

router.post('/acceptFriend', addFriend);

router.get('/getFriendsList', getFriendsList);

export default router;