import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 py-2 px-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-sm sm:text-xl ml-5 mr-5 font-semibold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1">
            Moltres's BLOG
          </span>
        </Link>
        
        {/* Search Bar for Desktop */}
        <div className="hidden lg:flex flex-grow mx-4">
          <TextInput 
            type="text"
            placeholder="Search..."
            className="flex-grow"
          />
        </div>

        {/* Search Button for Mobile */}
        <Button className="lg:hidden w-11 h-8 rounded-full" color="gray">
          <AiOutlineSearch className="w-4 h-4" />
        </Button>

        {/* Toggle Button for Mobile Menu */}
        <Navbar.Toggle className="lg:hidden" />

       
      </div>
  
      {/* Navbar Links for Mobile */}
      <Navbar.Collapse className="lg:inline">
        <Navbar.Link active={path === "/home"} as={'div'}>
          <Link to="/" className="block py-2 text-lg mr-10 ml-10">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about" className="block py-2 text-lg mr-10">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to="/projects" className="block py-2 text-lg mr-10">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      

       {/* Navbar Links and Theme Toggle */}
       <div className="hidden lg:flex items-center  justify-end space-x-2">
          <Button className="w-12 h-10 rounded-full pt-1" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button   className='w-20 ml-5 dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' >Sign In</Button>
          </Link>
        </div>
    </Navbar>
  );
}

