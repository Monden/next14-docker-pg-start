'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const addUser = async () => {
  // export const addTodo = async (data: FormData) => {
  const prisma = new PrismaClient();
  // const name = data.get('name') as string;
  await prisma.user.create({ data: { id: 100, email: 'hoge', name: 'test name' } });
  revalidatePath('/users_by_server_components');
};
