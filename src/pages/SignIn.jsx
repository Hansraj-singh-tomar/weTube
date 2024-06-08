// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';

const Input = 'border-[#373737] border-2 border-solid bg-transparent rounded p-3 w-full text-white';
const Button = 'py-2 px-8 text-[#aaaaaa] bg-[#373737] cursor-pointer font-medium rounded';

const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col dark:text-white'>
      <div className='sm:w-[40%] py-5 px-12 bg-[#202020] flex items-center flex-col gap-4 border-[#373737] border-2 border-solid'>
        <h1 className='text-2xl'>{isSignInForm ? "Sign in" : "Sign up"}</h1>
        <h2 className='text-sm'>to continue to WeTube</h2>
        {!isSignInForm && <input ref={name} className={Input} placeholder="username" />}
        <input ref={email} className={Input} placeholder="email" />
        <input ref={password} className={Input} placeholder="password" />
        <button className={Button}>{isSignInForm ? "Sign in" : "Sign up"}</button>
        <p className='cursor-pointer hover:underline' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to WeTube? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </div>
      <div className='sm:w-[40%] flex justify-between mt-2 text-xs text-[#aaaaaa]'>
        <p>
          English(USA)
        </p>
        <div className='ml-10'>
          <span className='ml-8'>Help</span>
          <span className='ml-8'>Privacy</span>
          <span className='ml-8'>Terms</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
