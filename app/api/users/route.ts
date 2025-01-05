import prisma from '@/lib/prisma';

import { User } from '@prisma/client';

export async function POST(request: Request) {
  // console.log('api/users POST', request.json());
  const { name, email } = await request.json() as User;
  await prisma.user.create({ data: { name, email } });
  return Response.json({ message: 'success' });
}
