import { useContext } from 'react'
import { AuthContext } from "../context/authWrapper";

export const useAuthCtx = () => {
  return useContext(AuthContext)
}