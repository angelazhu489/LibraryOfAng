const BlogDetails = ({ blog }) => {
  const handleClick = async () => {
    const response = await fetch('/api/blogs/')

  }
  return (
    <div className="blog-details">
      <h3>{blog.title}</h3>
      <p><strong>{blog.snippet}</strong></p>
      <p>{blog.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default BlogDetails;