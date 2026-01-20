import { useState } from "react"

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submit action (refresh)
    const blog = { title, snippet, body };
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json'
      },
      body: await JSON.stringify(blog)
    })
    const json = await response.json();
    if (!response.ok) {
      setError(json.error)
    } else {
      setTitle('')
      setSnippet('')
      setBody('')
      setError(null)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>New Blog</h3>
      <label>Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required />

      <label>Snippet: </label>
      <input
        type="text"
        onChange={(e) => setSnippet(e.target.value)}
        value={snippet}
        required />

      <label>Body: </label>
      <textarea
        onChange={(e) => setBody(e.target.value)}
        value={body}
        required></textarea>

      <button>Create</button>
    </form>
  )
}

export default BlogForm;