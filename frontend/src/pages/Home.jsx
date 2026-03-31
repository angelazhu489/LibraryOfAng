import { useEffect } from "react";

// context hooks
import { useBlogContext } from '../hooks/useBlogContext'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'
import News from '../components/News'
import Spotify from "../components/Spotify";

const Home = () => {
  const { blogs, dispatch } = useBlogContext();
  const { user } = useAuthContext();

  // fire function when component is rendered
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs', {
        headers: { authorization: `Bearer ${user.token}` }
      });
      const json = await response.json();
      if (response.ok) {
        await dispatch({ type: 'SET_BLOGS', payload: json })
      };
    }
    if (user) {
      fetchBlogs();
    }
  }, [dispatch, user]);

  return (
    <div className="home flex p-5 space-x-5" >
      <div className="blogs basis-1/3">
        {blogs && blogs.map((blog) => (
          <BlogDetails key={blog._id} blog={blog}></BlogDetails>
        ))}
        <div className="p-4">
          <BlogForm />
        </div>
      </div>
      <div className="left basis-1/3">
        <News />
      </div>
      <div className="left basis-1/3">
        <Spotify />
      </div>
    </div >
  );
};

export default Home;