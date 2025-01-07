
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice';
import { useEffect, useState } from 'react';
import { signoutSuccess } from '../redux/user/userSlice';


export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };


  return (
   
    <Navbar className= 'border-b-2 md:inline-block w-full'>
       <div className=' mx-auto flex  items-center flex-wrap justify-between container '>
      <Link
        to='/'
        className='self-center whitespace-nowrap  sm:text-xl font-semibold dark:text-white mt-4 text-xl'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-bold text-2xl'>
          Moltres's
        </span>
        Blog
      </Link>

      <form className='w-96 mt-3 '
      onSubmit={handleSubmit} >
  <TextInput
          type='text'
          color='gray'
          placeholder='Search...'
          className='hidden lg:inline mt-4 '
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ color: 'black' }}
        />
      </form>
   
     
      <Button className='w-12 h-11 lg:hidden pt-1 hover:bg-blue-200 ' color='gray' pill
      onClick={() => navigate('/search')} >
        <AiOutlineSearch />
      </Button>
      <div className='flex items-stretch mb-3'>
        <Button
          className='w-12 h-10 mt-4  rounded-full  hover:bg-gray-300 dark:hover:bg-yellow-100 '
          color='gray'
          pill
          onClick={()=>dispatch
            (toggleTheme())
          }
        >
          {theme === 'light' ? <FaMoon className='mt-1 ' /> : <FaSun className='mt-1' />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded className='ml-8 mr-4 mt-4' />
            }
          >
            <Dropdown.Header >
              <span className='block text-sm dark:text-gray-300 hover:dark:text-gray-800 font-semibold'>@{currentUser.username}</span>
              <span className='block text-sm truncate  dark:text-gray-300 hover:dark:text-gray-800 font-semibold'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}> 
              <Dropdown.Item className=' hover:bg-gray-200 dark:text-gray-300 hover:dark:text-gray-800 font-semibold' >Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout} className=' hover:bg-gray-200 dark:text-gray-300 hover:dark:text-gray-800 font-semibold'>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className='bg-black text-white  hover:bg-red-400  dark:bg-white
          dark:text-gray-800   dark:hover:bg-yellow-100  ml-5 mr-4 mt-4' >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
    
      <Navbar.Collapse className='lg:inline sm:flex-wrap lg:ml-96 lg:text-lg lg:text-bold mt-2'>
        <Navbar.Link active={path === '/'} as={'div'} className='lg:mr-24 text-gray-500 font-semibold'>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'} className='lg:mr-24  text-gray-500 font-semibold'>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'} className='lg:mr-24  text-gray-500 font-semibold'>
          <Link to='/content'>Content</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      </div>
    
    </Navbar>
  );
}