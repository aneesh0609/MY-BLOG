
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  return (
   
    <Navbar className= 'border-b-2 md:inline-block w-full'>
       <div className=' mx-auto flex  items-center flex-wrap justify-between container '>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Moltres's
        </span>
        Blog
      </Link>
      <form className='w-96 mt-2'>
        <TextInput
          type='text'
          placeholder='Search...'
          className='hidden lg:inline'
        />
      </form>
   
     
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex items-stretch '>
        <Button
          className='w-12 h-10 mt-2 hidden sm:inline'
          color='gray'
          pill
        >
         <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded className='ml-8 mr-4' />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item >Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
    
      <Navbar.Collapse className='lg:inline sm:flex-wrap lg:ml-96 lg:text-lg lg:text-bold'>
        <Navbar.Link active={path === '/'} as={'div'} className='lg:mr-24'>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'} className='lg:mr-24'>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      </div>
    
    </Navbar>
  );
}