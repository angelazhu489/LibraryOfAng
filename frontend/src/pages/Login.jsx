import { useState, useEffect } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4 justify-center border-amber-600 border-2 rounded-2xl p-3 m-70">
        <h3 className="text-amber-600 ">Login</h3>
        <div>
          <label>Email:</label>
          <input
            className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            type="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
        </div>
        <button disabled={isLoading} className="text-amber-600 rounded-md border-2 p-1 m-2 hover:cursor-pointer w-auto">Login</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form >
  )
}

export default Login