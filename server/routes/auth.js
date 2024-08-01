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
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
)

router.get('/profile', isAuthenticated, (req, res) => {
  return res.json(req.user);
});

router.post('/logout', function(req, res, next){
  req.logOut((err) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ message: 'Logged out successfully' });
    }
  });
});

export default router;