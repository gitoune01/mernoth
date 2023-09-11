import User from '../models/userModel.js';
import bcryptjs  from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password,10)
  try {
    const newUser = new User({username, email, password: hashedPassword});
    await newUser.save();
    res.status(201).json({
      message: 'success',
      newUser
    });
  } catch (error) {
   next(error);     //next => send to global error handler
  }

};
export const signIn = (req, res, next) => {
  res.json({
    message: 'get login',
  });
};
