import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createJwt } from '@/lib/auth';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = loginSchema.parse(body);

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate JWT Token
    const token = await createJwt({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return NextResponse.json({
      message: 'Authentication successful',
      token,
      user: { id: user.id, email: user.email, role: user.role, name: user.name },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid input or server error' }, { status: 400 });
  }
}
