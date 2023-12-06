import useInput from "../hooks/useInput"
import { useAuthCtx } from "../hooks/useAuthCtx"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import Error from "../components/Error"

const Register = () => {
  const nameProps = useInput()
  const emailProps = useInput()
  const pwdProps = useInput()

  const { signup, loading, error } = useAuthCtx()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = {
      name: nameProps.value,
      email: emailProps.value,
      password: pwdProps.value
    }

    try {
      await signup(user)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <section className="relative flex justify-center items-center text-[#383545] h-[80dvh]">
      {error && <Error>{error}</Error>}
      
      <form onSubmit={handleSubmit} className="border-[2px] border-gray-400 dark:border-white dark:border-none shadow-md rounded px-7 py-5 w-[84%] md:w-[350px] mt-10">
        <h1 className="text-3xl dark:text-gray-50 font-semibold">Signup</h1>

        <div className="my-4">
          <label className="dark:text-white font-light" htmlFor="name">Name</label>
          <input
            {...nameProps} 
            type="text" 
            name="name"
            id="name"
            required
            className="block w-full py-[8px] px-2 mt-1 rounded outline-purple-600 bg-gray-100 border-[1.4px] border-gray-400"
            />
        </div>

        <div className="my-4">
          <label className="dark:text-white font-light" htmlFor="email">Email</label>
          <input 
            {...emailProps}
            type="text" 
            name="email"
            id="email"
            required
            className="block w-full py-[8px] px-2 mt-1 rounded outline-purple-600 bg-gray-100 border-[1.4px] border-gray-400"
            />
        </div>

        <div className="my-4">
          <label className="dark:text-white font-light" htmlFor="password">Password</label>
          <input 
            {...pwdProps}
            type="password" 
            name="password"
            id="password"
            required
            className="block w-full py-[8px] px-2 mt-1 rounded outline-purple-600 bg-gray-100 border-[1.4px] border-gray-400"
            />
        </div>

        <button className="bg-[#36175e] transition-all duration-300 ease-in-out hover:opacity-75 dark:bg-[#613dc1] text-white dark:text-gray-300 rounded shadow w-[84px] h-[36px] mt-7 flex justify-center items-center">
          {loading ? <Spinner/> : 'Submit'}
        </button>

        <p className="dark:text-gray-600 mt-5">
          Already a member? <Link to='/login' className="text-blue-500">Login</Link>
        </p>
      </form>
    </section>  
  )
}

export default Register