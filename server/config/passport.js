import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import passport from 'passport';
import mongoose from 'mongoose';
import User from '../model/user.js';
import dotenv from 'dotenv';

dotenv.config();

// Using both passport and another 

    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: '/auth/google/callback',
          scope: ['profile'],
        },
        async(accessToken, refreshToken, profile, cb) => {
          const newUser = {
            googleId: profile.id,
            username: profile.displayName,
          };
          
          try {

            let user = await User.findOne({ googleId: profile.id });

            if (user) {
              return cb(null, user);
            } else {
              user = await User.create(newUser);
              return cb(null, user);
            }

          } catch (err){
            console.log(err);
            return cb(err, null);
          }
        }
      )
    )
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });


export default passport;
