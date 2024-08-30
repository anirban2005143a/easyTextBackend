
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../middleware/authMiddleware.js';
import sendMail from '../utility/sendmail.js';


export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    user = new User({ username, email, password: hashedPassword });
    await user.save();
    console.log(`user saved`);
    res.status(201).json({
      userId: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: `Server error ${error}` });
  }
};



// Login user
export const loginUser = async (req, res) => {
  const { email, password, socketId } = req.body;
  //   console.log('Logging in user with socketId:', socketId);
  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }


    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,

    });
  } catch (error) {
    res.status(500).json({ message: 'founded Server error' });
  }
};

export const contact = async (req, res) => {
  const result = await sendMail(req.body.email, req.body.content)
  if (result) {
    return res.json({ error: false, message: 'Mail send successfully !!!' })
  } else {
    return res.json({ error: true, status: 500, message: "Some internal error occured , Please try again" });
  }
}
