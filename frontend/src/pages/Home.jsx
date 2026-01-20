import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

// components
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // fire function when component is rendered
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const json = await response.json();
      if (response.ok) { setBlogs(json) };
      console.log(response)
    }

    fetchBlogs();
  }, []);

  return (
    <div className="home">
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