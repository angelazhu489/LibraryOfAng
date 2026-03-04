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
      <h3 className="bg-amber-600 p-2">New Blog</h3>
      <div className="py-1">
        <label>Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        // className={emptyFields.includes('title') ? 'error' : ''}
        />
      </div>

      <div className="py-1">
        <label>Snippet: </label>
        <input
          type="text"
          onChange={(e) => setSnippet(e.target.value)}
          value={snippet}
          className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        // className={emptyFields.includes('snippet') ? 'error' : ''}
        />
      </div>

      <div className="py-1">
        <label>Body: </label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
          className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        // className={emptyFields.includes('body') ? 'error' : ''}
        >
        </textarea>
      </div>

      <button className="text-amber-600 rounded-md border-2 p-1 m-2 hover:cursor-pointer">Create</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default BlogForm;