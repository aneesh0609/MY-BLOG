import { Sidebar } from 'flowbite-react'
import { HiAnnotation, HiArrowSmRight, HiChartPie, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi'
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
   <Sidebar className=' w-full md:w-56 bg-gray-100'>
    <Sidebar.Items>
      <Sidebar.ItemGroup className='bg-gray-200 rounded-md  dark:text-white dark:bg-gray-900 flex flex-col '>
      {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                className=' bg-gray-200 dark:text-white dark:bg-gray-900'
                as='div'

              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
        <Link to='/dashboard?tab=profile'>
        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor ='dark' className=' bg-gray-200 dark:text-white dark:bg-gray-900'
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
                className=' bg-gray-200 dark:text-white dark:bg-gray-900'
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
                  className=' bg-gray-200 dark:text-white dark:bg-gray-900'
                  as='div'
                 
                >
                  Users
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  className=' bg-gray-200 dark:text-white dark:bg-gray-900'
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>


              </>
          )}
        <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className='cursor-pointer ' >
          Sign Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}
