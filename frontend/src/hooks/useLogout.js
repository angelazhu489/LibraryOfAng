import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = (email, password) => {
    // remove jwt from local storage
    localStorage.removeItem('user');
    // update auth context
    dispatch({ type: 'LOGOUT' })
  }
  return logout
}