import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect'; 
import User from '../../models/User';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const newUser = new User({ email, password });
      await newUser.save();
      return res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
      return res.status(400).json({ error: 'User already exists or validation failed.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default signup;
