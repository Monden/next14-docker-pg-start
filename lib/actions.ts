'use server';
import prisma from '@/lib/prisma';

import { revalidatePath } from 'next/cache';

export const addUser = async () => {
  await prisma.user.create({ data: { id: 100, email: 'hoge', name: 'test name' } });
  revalidatePath('/users_by_server_components');
};
