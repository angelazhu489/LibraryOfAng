import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext(); // create context

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });
  console.log('Authcontext state: ', state)

  // get jwt from local storage on initial render
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      // update auth state
      dispatch({ type: 'LOGIN', payload: JSON.parse(user) })
    }
  }, [])

  return (  // provide context
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}