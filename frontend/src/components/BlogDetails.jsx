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
      <div className="border-amber-600 border-2 rounded-2xl p-3 m-3">
        <h3 className="text-amber-600">{blog.title}</h3>
        <p>{blog.snippet}</p>
        <p>{blog.body}</p>
        <p className="text-xs p-1">{formatDistance(new Date(blog.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined hover:cursor-pointer hover:text-amber-600" onClick={handleClick}>delete</span>
      </div>
    </div>
  )
}

export default BlogDetails;