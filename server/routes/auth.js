import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.send(req.user);
  }
)

export default router;