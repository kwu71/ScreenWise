import express from 'express';
import passport from 'passport';
import isAuthenticated from '../middleware/auth.js';

const router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/' }),
  (req, res) => {
    res.redirect('http://localhost:5173/dashboard');
  }
)

router.get('/profile', isAuthenticated, (req, res) => {
  return res.json(req.user);
});

router.get('/logout', function(req, res, next){
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ message: 'Logged out successfully' });
    }
  });
});

export default router;