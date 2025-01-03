import { Sidebar } from 'flowbite-react'
import { HiAnnotation, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi'
import  { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation()
  const [tab,setTab] = useState('');
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
    
  },[location.search])

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
  return (
   <Sidebar className=' w-full md:w-56'>
    <Sidebar.Items>
      <Sidebar.ItemGroup className='bg-gray-100 rounded-md  dark:text-white dark:bg-black flex flex-col'>
        <Link to='/dashboard?tab=profile'>
        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor ='dark' className='border-2  dark:text-white dark:bg-black'
        as='div'
        >
          Profile
        </Sidebar.Item>
        </Link>
        {currentUser.isAdmin && (
        <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                className='border-2  dark:text-white dark:bg-black'
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
 )}

{currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>


              </>
          )}
        <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className='cursor-pointer border-2' >
          Sign Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}
