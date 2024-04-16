// Import necessary npm libraries
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from './config/passport.js';
import mongoose from 'mongoose';

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Loading the config
dotenv.config();

// Importing Routes
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import userRouter from './routes/users.js';

const app = express();

app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/api/users', userRouter);

// Mongoose SetUp
// Checking to see if there is any error connecting to the mongoDB using the PORT
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((error) => console.log(`${PORT} did not connect`));