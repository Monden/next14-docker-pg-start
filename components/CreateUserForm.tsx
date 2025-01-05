'use client';

import { addUserFormR } from '@/lib/actions521';

import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

export default function CreateUserForm() {
  console.log('/components/CreateUserForm.tsx');

  // 登録エラーメッセージ取得用
  const [state, formAction] = useFormState(addUserFormR, initialState);

  return (
    <>
      <div className="text-red-600 font-bold my-2">{state.message}</div>
      <form className="flex items-center mt-4" action={formAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border mx-2 p-1" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" className="border mx-2 p-1" />
        <br />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add User
        </button>
      </form>
    </>
  );
}
