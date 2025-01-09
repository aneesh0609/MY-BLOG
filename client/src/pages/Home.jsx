import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { ThreeDCardDemo } from '../components/Lamp';
import SplitText from "../components/Stack";
import BarPoll from '../components/Barpoll';
import { RevealBento1 } from '../components/Mail';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <SplitText text="WELCOME !" className="custom-class text-2xl font-bold lg:text-6xl" delay={50} />
        <p className='text-gray-500 text-xs sm:text-sm'>
        " Explore a wide range of articles and tutorials covering web development, software engineering, and various programming languages.."
        </p>
       
      </div>
      <div className='p-3 bg-amber-100 dark:bg-gray-900'>
        <CallToAction />
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <ThreeDCardDemo />
      </div>

      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <BarPoll/>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <RevealBento1 />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}