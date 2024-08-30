import express from 'express'
import { registerUser,loginUser, contact } from '../controllers/userController.js'
const router = express.Router()


router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/contact',contact);

export default router;