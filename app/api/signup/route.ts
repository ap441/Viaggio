import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { firstname, lastname, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 400 });
    }

    const newUser = new User({ firstname, lastname, email, password });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error in /api/signup:', error); // Log the error
    return NextResponse.json({ error: 'Failed to create user.' }, { status: 500 });
  }
}
