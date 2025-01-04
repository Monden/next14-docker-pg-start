'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //
      },
      body: JSON.stringify({ name, email }),
    });
    setName('');
    setEmail('');
    router.push('/users_by_csr_and_api?' + new Date().getMilliseconds().toString()); // キャッシュ対策
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="flex items-center mt-4" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        className="border mx-2 p-1"
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="border mx-2 p-1"
      />
      <br />
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
