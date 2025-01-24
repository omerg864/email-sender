import express from 'express';
import { sendEmail } from '../controllers/emailController.js';
import { authRequest } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(authRequest, sendEmail);

export default router;
