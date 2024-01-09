import { Express } from 'express-serve-static-core';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { register } from './controllers/auth';

dotenv.config();

const app = Express();
app.use(cors());

//Routing Files


// Mongoose SetUp
// Checking to see if there is any error connecting to the mongoDB using the PORT
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((error) => console.log(`${PORT} did not connect`));


