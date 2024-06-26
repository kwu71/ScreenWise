import express from 'express';
import isAuthenticated from '../middleware/auth.js';

const router = express.Router();


// login page
// get
router.get('login', (req, res) => {
  res.render('http://localhost:5173/login');
});

// Dashboard
// get
router.get('dashboard', isAuthenticated, (req, res) => {
  res.render('http://localhost:5173/dashboard');
});

export default router;