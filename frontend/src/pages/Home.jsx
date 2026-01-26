import { useEffect } from "react";
import { Link } from 'react-router-dom'

// context hooks
import { useBlogContext } from '../hooks/useBlogContext'

// components
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'

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
  }, []);

  return (
    <div className="home" >
      <div className="blogs">
        {blogs && blogs.map((blog) => (
          <BlogDetails key={blog._id} blog={blog}></BlogDetails>
        ))}
      </div>
      <BlogForm />
      <Link to="/blogs/create">
        <h3>+ Create Blog</h3>
      </Link>
    </div >
  );
};

export default Home;