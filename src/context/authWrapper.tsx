import { createContext, useState, useEffect } from "react";
import { addLocalStorage } from "../utils/addLocalStorage";
import auth from "../axios/auth";

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
  login: (user: UserRegister) => Promise<void>,
  signup: (user: UserRegister) => Promise<void>,
  logout: () => void,
}

export const AuthContext = createContext<Ctx>({} as Ctx)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userObj, setUserObj] = useState<null | User>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user')

    return !user ? undefined : setUserObj({name: user})
  }, [])

  const login = async (user: UserRegister) => {
    try {
      setIsLoading(true)

      const { data } = await auth.post(`/login`, {...user})
      
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

      const { data } = await auth.post(`/register`, {...user})
      
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
    loading: isLoading,
    login,
    logout,
    signup,
    error,
  }

  return (
    <AuthContext.Provider value={ctxObj}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider