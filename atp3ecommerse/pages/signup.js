import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Signup() {
  const [name, setName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name: name,email: email, password: password };

    try {
      const response = await axios.post('http://localhost:3001/users/signup', body); 
      console.log(response);
      if (response.data) {
        router.push('/login'); 
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Name:
          </label>
          <input
            type="name"
            id="name"
            name="name"
            required
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p className="mt-2">
          Already have an account? <a href="/login" className="text-blue-500">Login here</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
