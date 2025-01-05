import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';

import { FloatingDockDemo } from './Lamp';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 p-3'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link to="/" className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl ml-5 mr-5 font-semibold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1">
            Moltres's BLOG
          </span>
        </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-4 mb-2 sm:grid-cols-3 sm:gap-6">
            <div className='mt-4'>
            <Footer.Title title='ABOUT'/>
          <Footer.LinkGroup col>
            <Footer.Link href='https://www.100jsprojects.com' target='_blank'
            rel='noopener noreferrer' className='mt-2 mr-3'
            >
              100 JS PROJECTS
            </Footer.Link>

            <Footer.Link href='https://www.google.com' target='_blank'
            rel='noopener noreferrer' className='mt-2'
            >
              cloud
            </Footer.Link>
          </Footer.LinkGroup>
            </div>

            <div className='mt-4'>
            <Footer.Title title='FOLLOW US'/>
          <Footer.LinkGroup col>
            <Footer.Link href='https://www.github.com' target='_blank'
            rel='noopener noreferrer' className='mt-2 mr-3'
            >
              GitHub
            </Footer.Link>

            <Footer.Link href='#' className='mt-2'
            >
              Discord
            </Footer.Link>
          </Footer.LinkGroup>
            </div>
          
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright href='#' by="2024 Moltres Blog" className='mt-5 mb-2' />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
           <FloatingDockDemo />
          </div>
        </div>
      </div>
    </Footer>
  )
}
