import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className='flex-1'>
        <Link to="/" className="flex items-center space-x-2 ">
          <span className="  ml-5 mr-5 font-bold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1 text-4xl">
            Moltres's BLOG
          </span>
        </Link>
        
        <p className='text-sm mt-5'>
        "Be Part of Something Great! Register today and get started."
        </p>
        </div>
         {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='your username' />
              <TextInput
              type='text'
              placeholder='username'
              id = 'username' />
            </div>

            <div>
              <Label value='your email' />
              <TextInput
              type='text'
              placeholder='email'
              id = 'email' />
            </div>

            <div>
              <Label value='your password' />
              <TextInput
              type='text'
              placeholder='password'
              id = 'password' />
            </div>

            <Button className=' flex justify-center font-semibold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg' type='submit' >
              Sign Up
            </Button>
          </form>

          <div className="flex gap-3 text-sm mt-5">
  <span>Have an account?</span>
  <Link to='/sign-in' className='text-blue-500'>
     Sign In
  </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
