'use client';

import { addUser522_2 } from '@/lib/actions521';

import React, { useState } from 'react';

const UserForm522 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit', e.target);
    e.preventDefault();
    await addUser522_2({
      name, email,
    });
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="flex items-center mt-4" onSubmit={handleSubmit} >
      <label htmlFor="name" > Name: </label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        className="border mx-2 p-1"
      />
      <br />
      <label htmlFor="email" > Email: </label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
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

export default UserForm522;
