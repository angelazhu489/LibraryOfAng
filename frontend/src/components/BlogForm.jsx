import { useState } from "react"

import { useBlogContext } from '../hooks/useBlogContext'

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);
  const { dispatch } = useBlogContext();
  const [emptyFields, setEmptyFields] = useState([]);

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
    console.log(json)
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    } else {
      dispatch({ type: 'CREATE_BLOG', payload: json })
      setTitle('')
      setSnippet('')
      setBody('')
      setEmptyFields([])
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
        className={emptyFields.includes('title') ? 'error' : ''} />

      <label>Snippet: </label>
      <input
        type="text"
        onChange={(e) => setSnippet(e.target.value)}
        value={snippet}
        className={emptyFields.includes('snippet') ? 'error' : ''}
      />

      <label>Body: </label>
      <textarea
        onChange={(e) => setBody(e.target.value)}
        value={body}
        className={emptyFields.includes('body') ? 'error' : ''}>
      </textarea>

      <button>Create</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default BlogForm;