import { updateUser } from '@/lib/actions521';

import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
  // ここはServer Componentsとして動作する
  const prisma = new PrismaClient();
  const id = Number(params.id);
  const updateUserWithId = updateUser.bind(null, id);
  const user = await prisma.user.findUnique({
    where: { id },
  });
  console.log('/users/[id]/edit/page.tsx user', user);

  return (
    <>
      <div className="m-8">
        <Link href="/users">戻る</Link>
        <h1 className="text-xl font-bold">User編集</h1>
        <form className="flex items-center mt-4" action={updateUserWithId}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="border mx-2 p-1"
            defaultValue={user?.name ?? ''} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" className="border mx-2 p-1"
            defaultValue={user?.email} />
          <br />
          <button
            type="submit"
            className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
          >
            Update User
          </button>
        </form>
      </div>
    </>
  );
}
