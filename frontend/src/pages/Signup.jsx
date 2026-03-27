import { useState, useEffect } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4 justify-center border-amber-600 border-2 rounded-2xl p-3 m-70">
        <h3 className="text-amber-600 ">Signup</h3>
        <div>
          <label>Email:</label>
          <input
            className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} >
          </input>
        </div>
        <div>
          <label>Password:</label>
          <input
            className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            type="new-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}>
          </input>
        </div>
        <button disabled={isLoading} className="text-amber-600 rounded-md border-2 p-1 m-2 hover:cursor-pointer w-auto">Signup</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form >
  )
}

export default Signup