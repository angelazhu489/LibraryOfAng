import { useState } from "react"
import formatDistance from 'date-fns/formatDistanceToNow'

import { useBlogContext } from '../hooks/useBlogContext'

const BlogDetails = ({ blog }) => {
  const [error, setError] = useState(null);
  const { dispatch } = useBlogContext();

  const handleClick = async () => {
    const response = await fetch(`/api/blogs/${blog._id}`, {
      method: 'DELETE',
    })
    const json = await response.json();
    if (!response.ok) {
      setError(json.error)
    } else {
      dispatch({ type: 'DELETE_BLOG', payload: json })
      setError(null)
    }

  }
  return (
    <div className="blog-details">
      <h3>{blog.title}</h3>
      <p><strong>{blog.snippet}</strong></p>
      <p>{formatDistance(new Date(blog.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default BlogDetails;