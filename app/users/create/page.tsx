import CreateUserForm from '@/components/CreateUserForm';

import Link from 'next/link';

export default function Page() {
  // ここはServer Componentsとして動作する
  console.log('/users/create/page.tsx');

  return (
    <>
      <div className="m-8">
        <Link href="/users">戻る</Link>
        <h1 className="text-xl font-bold">User追加</h1>
        <CreateUserForm />
      </div>
    </>
  );
}
