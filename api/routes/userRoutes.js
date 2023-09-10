import express from 'express';
import { getMe } from '../controllers/userController.js';
const router = express.Router();

router.get('/user', getMe );

export default router;
