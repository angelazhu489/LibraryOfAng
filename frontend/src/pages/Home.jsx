import { useEffect } from "react";
import { Link } from 'react-router-dom'

// context hooks
import { useBlogContext } from '../hooks/useBlogContext'

// components
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'
import News from '../components/News'

const Home = () => {
  const { blogs, dispatch } = useBlogContext();

  // fire function when component is rendered
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_BLOGS', payload: json })
      };
    }
    fetchBlogs();
  }, [dispatch]);

  return (
    <div className="home flex" >
      <div className="blogs basis-1/2 p-4">
        {blogs && blogs.map((blog) => (
          <BlogDetails key={blog._id} blog={blog}></BlogDetails>
        ))}
        <div className="p-4">
          <BlogForm />
        </div>
      </div>
      <div className="left basis-1/2 p-8">
        <News />
      </div>
    </div >
  );
};

export default Home;