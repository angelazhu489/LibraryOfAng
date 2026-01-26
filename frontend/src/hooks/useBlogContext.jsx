import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (!context) { throw Error('useBlogContext must be used inside a BlogContextProvider') }
  return context
}