import { createContext, useState } from "react";
import { addLocalStorage } from "../utils/addLocalStorage";
import axios from 'axios';

type User = {
  name: string
}

type UserRegister = {
  name?: string,
  email: string,
  password: string
}

type Ctx = {
  user: User | null,
  loading: boolean,
  error: string,
  logout: () => void,
  login: (user: UserRegister) => Promise<void>,
  signup: (user: UserRegister) => Promise<void>,
}

export const AuthContext = createContext<Ctx>({} as Ctx)

const baseUrl = 'http://localhost:3500/api/v1/auth'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userObj, setUserObj] = useState<null | User>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const login = async (user: UserRegister) => {
    try {
      setIsLoading(true)

      const { data } = await axios.post(`${baseUrl}/login`, {...user})
      
      setUserObj({ name: data.name })

      addLocalStorage('user', data.name)
      addLocalStorage('token', data.token)
      
      setError('')
    } catch (error) {
      setError(error.response.data.msg || 'something went wrong, please try again later')
      console.log('Error', error.response.data.msg)
    } finally {
      setIsLoading(false)
    } 
  };

  const signup = async (user: UserRegister) => {
    try {
      setIsLoading(true)

      const { data } = await axios.post(`${baseUrl}/register`, {...user})
      
      setUserObj({ name: data.name })

      addLocalStorage('user', data.name)
      addLocalStorage('token', data.token)

      setError('')
    } catch (error) {
      setError(error.response.data.msg)
      console.log('Error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => console.log('logout user');

  const ctxObj = {
    user: userObj,
    login,
    logout,
    signup,
    loading: isLoading,
    error
  }

  return (
    <AuthContext.Provider value={ctxObj}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider