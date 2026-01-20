const BlogDetails = ({ blog }) => {
  return (
    <div className="blog-details">
      <h3>{blog.title}</h3>
      <p><strong>{blog.snippet}</strong></p>
      <p>{blog.createdAt}</p>
    </div>
  )
}

export default BlogDetails;