import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// signup hook
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    // reset states
    setIsLoading(true)
    setError(null)
    // add user to server db
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: await JSON.stringify({ email, password })
    })
    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false)
      setError(data.error)  // set error
    } else {
      // store jwt in local storage 
      localStorage.setItem('user', JSON.stringify(data))
      // update auth context
      dispatch({ type: 'LOGIN', payload: data })
      setIsLoading(false)
    }
  }
  return { signup, isLoading, error }
}