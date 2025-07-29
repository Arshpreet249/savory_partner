
import React, { useState } from 'react';
import Burger from '../assets/images/burger.png';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid credentials');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Login Success:', data);


        localStorage.setItem('accessToken', data.data.token.access);
        localStorage.setItem('refreshToken', data.data.token.refresh);

        localStorage.setItem('user', JSON.stringify(data.data.user));
         localStorage.setItem('permissions', JSON.stringify(data.data.permissions)); 


        navigate('/home');

      
      })
      .catch((err) => {
        console.error('Login Failed:', err.message);

      });
  };


  return (
    <div className=" bg-[#003049] h-[100vh] flex flex-col text-white">


      <header className="flex items-center px-6 py-4">
        <h1 className="text-3xl font-bold">SavoryNow</h1>
        <p className="text-md mt-2">Partner</p>
      </header>

      <main className="flex flex-col-reverse lg:flex-row flex-1 overflow-hidden">


        <div className=" flex-1 hidden lg:flex items-center justify-center">
          <img
            src={Burger}
            alt="Burger"
            className="max-w-full h-auto object-cover p-6"
            
          />
          
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form

              className="flex flex-col gap-5">

              <input
                id='email'
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border border-slate-500 rounded-md py-2 px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                id='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border border-slate-500 rounded-md py-2 px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button
                onClick={handleLogin}
                type="submit"
                className="bg-pink-600 text-white py-2 rounded-md transition duration-200"
              >
                Login
              </button>

              <p className="text-right text-sm text-gray-400 hover:underline cursor-pointer">
                Forgot Password?
              </p>

            </form>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Login;
