'use server';
// MEMO:全モデルを自動生成できそう
import prisma from '@/lib/prisma';

import { User } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addUser = async (data: FormData) => {
  console.log('actions521', data);
  const _prisma = prisma;
  await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });
  revalidatePath('/users_post_by_server_actions');
};

export const addUser522 = async (data: FormData) => {
  console.log('actions522', data);
  const _prisma = prisma;
  await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });
  revalidatePath('/users_from_cl_to_server_actions');
};

export const addUser522_2 = async (data: Omit<User, 'id'>) => {
  console.log('actions522_2', data);
  const _prisma = prisma;
  await _prisma.user.create({ data });
  revalidatePath('/users_from_cl_to_server_actions');
};

export const addUserFormR = async (prevState: unknown, data: FormData) => {
  console.log('addUserFormR', data);
  // ERROR test https://reffect.co.jp/nextjs/next-js-server-action-14#CRUD
  try {
    const _prisma = prisma;
    await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });
  } catch (e: unknown) {
    // このときはリダイレクトされない
    if (e instanceof Error) {
      return {
        message: `User追加エラー(${e.message})`,
      }
    }
    return {
      message: 'User追加エラー(不明なエラー)',
    }
  }
  revalidatePath('/users');
  redirect('/users');
};


export const deleteUserById = async (id: number) => {
  console.log('deleteUserById', id);
  const _prisma = prisma;
  await _prisma.user.delete({ where: { id } });
  revalidatePath('/users_from_cl_to_server_actions');
}

export const deleteUser = async (data: FormData) => {
  const id = data.get('id') as string;
  console.log('deleteUser', id);
  const _prisma = prisma;
  await _prisma.user.delete({ where: { id: Number(id) } });
  revalidatePath('/users_from_cl_to_server_actions');
}

export const updateUser = async (id: number, data: FormData) => {
  console.log('updateUser', id, data);
  const _prisma = prisma;
  await _prisma.user.update({ where: { id }, data: { name: data.get('name') as string, email: data.get('email') as string } });
  revalidatePath('/users');
  redirect('/users');
}
