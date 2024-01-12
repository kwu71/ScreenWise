// Import necessary npm libraries
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Routes

// Mongoose SetUp
// Checking to see if there is any error connecting to the mongoDB using the PORT
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((error) => console.log(`${PORT} did not connect`));


