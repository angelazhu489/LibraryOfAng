import React, { createContext, useReducer } from 'react';

export const BlogContext = createContext();

export const BlogsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return { blogs: action.payload }
    case 'CREATE_BLOG':
      return { blogs: [action.payload, ...state.blogs] }
    default:
      return state
  }
}

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogsReducer, { blogs: null });

  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}