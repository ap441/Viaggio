import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful!', userId: user._id }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/signin:', error);
    return NextResponse.json({ error: 'Failed to sign in.' }, { status: 500 });
  }
}
