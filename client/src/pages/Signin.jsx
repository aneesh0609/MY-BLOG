import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
   setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
console.log(formData);

const handleSubmit = async (e) => {
  e.preventDefault();
  if( !formData.email || !formData.password )
  {
    return setErrorMessage('Please fill out all fields.');
  }
  try {
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch('api/auth/signIn',{
    method : 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false)
    {
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if(res.ok)
      {
        navigate('/');
      }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
}
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
        "Be Part of Something Great! sign-in and get started."
        </p>
        </div>
         {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            

            <div>
              <Label value='your email' />
              <TextInput
              type='text'
              placeholder='email'
              id = 'email' onChange={handleChange} /
              >
            </div>

            <div>
              <Label value='your password' />
              <TextInput
              type='text'
              placeholder='**************'
              id = 'password' onChange={handleChange} />

            </div>

            <Button className=' flex justify-center font-semibold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg' type='submit' disabled={loading} >
            {
              loading ? (
                <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
                </>
              ) : ('Sign In'
            )}
            </Button>
          </form>

          <div className="flex gap-3 text-sm mt-5">
  <span>Dont Have an account?</span>
  <Link to='sign-up' className='text-blue-500'>
     Sign Up
  </Link>
          </div>

          {
            errorMessage && (
              <Alert className='mt-5 p-2 bg-red-300' >
                {errorMessage}
              </Alert>
            )
          }
        </div>

      </div>
    </div>
  )
}
