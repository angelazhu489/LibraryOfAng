import { useState } from 'react';
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState();
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    // reset states
    setError(null)
    setIsLoading(true)
    // get user from server db
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: await JSON.stringify({ email, password })
    })
    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false)
      setError(data.error)
    } else {
      // store jwt in local storage 
      localStorage.setItem('user', JSON.stringify(data))
      // update auth context
      dispatch({ type: 'LOGIN', payload: data })
      setIsLoading(false)
    }
  }
  return { login, isLoading, error }
}