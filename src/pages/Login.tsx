import Spinner from "../components/Spinner"
import { useAuthCtx } from "../hooks/useAuthCtx"
import useInput from "../hooks/useInput"
import { Link, Navigate } from "react-router-dom"
import Error from "../components/Error"
import { useState, useEffect } from 'react'

const Login = () => {
  const emailProps = useInput()
  const pwdProps = useInput()

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() =>{
    console.log('logged in useEffect');
  }, [loggedIn])

  const { login, loading, error } = useAuthCtx()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = {
      email: emailProps.value,
      password: pwdProps.value
    }

    await login(user)  
    setLoggedIn(true)    
  }

  if(loggedIn) {
    return <Navigate to={'/dashboard'} replace />
  }

  return (
    <section className="flex justify-center items-center relative text-[#383545] h-[70dvh]">
      {error && <Error>{error}</Error>}

      <form onSubmit={handleSubmit} className="border-[2px] border-gray-400 dark:border-none shadow-md rounded px-7 py-10 w-[84%] md:w-[350px] mt-[4em]">
        <h1 className="text-3xl dark:text-gray-50 font-semibold">Login</h1>

        <div className="my-4">
          <label className="dark:text-white" htmlFor="email">Email</label>
          <input 
            {...emailProps}
            required
            type="text" 
            name="email"
            id="email"
            className="block w-full py-[8px] px-2 mt-1 rounded outline-purple-600 bg-gray-100 border-[1.4px] border-gray-400"
            />
        </div>

        <div className="my-4">
          <label className="dark:text-white" htmlFor="password">Password</label>
          <input 
            {...pwdProps}
            required
            type="password" 
            name="password"
            id="password"
            className="block w-full py-[8px] px-2 mt-1 rounded outline-purple-600 bg-gray-100 border-[1.4px] border-gray-400"
            />
        </div>

        <button className="bg-[#36175e] transition-all duration-300 ease-in-out hover:opacity-75 dark:bg-[#613dc1] text-white dark:text-gray-300 rounded shadow w-[84px] h-[36px] mt-8 flex justify-center items-center">
          {loading ? <Spinner/> : 'Submit'}
        </button>

        <p className="dark:text-gray-600 mt-5">
          Not a member yet? <Link to='/signup' className="text-blue-500">Register</Link>
        </p>
      </form>
    </section>  
  )
}

export default Login