import { PrismaClient, User } from '@prisma/client';

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  // console.log('api/users POST', request.json());
  const { name, email } = await request.json() as User;
  await prisma.user.create({ data: { name, email } });
  return Response.json({ message: 'success' });
}
