'use server';
// 全モデルを自動生成できそう
import { PrismaClient, User } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const addUser = async (data: FormData) => {
  console.log('actions521', data);
  const _prisma = new PrismaClient();
  await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });
  revalidatePath('/users_post_by_server_actions');
};

export const addUser522 = async (data: FormData) => {
  console.log('actions522', data);
  const _prisma = new PrismaClient();
  await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });
  revalidatePath('/users_from_cl_to_server_actions');
};

export const addUser522_2 = async (data: Omit<User, 'id'>) => {
  console.log('actions522_2', data);
  const _prisma = new PrismaClient();
  await _prisma.user.create({ data });
  revalidatePath('/users_from_cl_to_server_actions');
};

export const deleteUserById = async (id: number) => {
  console.log('deleteUserById', id);
  const _prisma = new PrismaClient();
  await _prisma.user.delete({ where: { id } });
  revalidatePath('/users_from_cl_to_server_actions');
}

export const deleteUser = async (data: FormData) => {
  const id = data.get('id') as string;
  console.log('deleteUser', id);
  const _prisma = new PrismaClient();
  await _prisma.user.delete({ where: { id: Number(id) } });
  revalidatePath('/users_from_cl_to_server_actions');
}
