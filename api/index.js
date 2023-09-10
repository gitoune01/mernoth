import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());

//!db connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connection established to DB'))
  .catch((err) => console.log('connection error: ' + err));

//root routes
app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//   res .json({success:'success'})
// })

app.listen(3000, () => {
  console.log('Port listening on port 8000!');
});
