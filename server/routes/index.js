import express from 'express';

const router = express.Router();


// login page
// get
router.get('/', (req, res) => {
  res.render('login');
});

// Dashboard
// get
router.get('/', (req, res) => {
  res.render('dashboard');
});

export default router;