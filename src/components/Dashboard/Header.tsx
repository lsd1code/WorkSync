import ToggleMode from "../ToggleMode"
import { FaChevronDown, FaBars } from 'react-icons/fa'
import { useState, useEffect } from "react"
import { useAuthCtx } from "../../hooks/useAuthCtx"

const Header = () => {
  const [showLogout, setShowLogout] = useState(false)
  const [username, setUsername] = useState('')

  const { logout } = useAuthCtx()

  useEffect(() => {
    const value = localStorage.getItem('user') || 'anonymous'
    setUsername(value)
  }, [])

  return (
    <header className="flex w-[100%] items-center justify-between relative">
      <button>
        <FaBars className='text-2xl inline-block lg:hidden cursor-pointer' />
      </button>
      <div className="flex items-center gap-6 ml-auto" onClick={() => setShowLogout(!showLogout)}>
        <ToggleMode />
        <button className="flex items-center gap-2 border shadow-md rounded text-white bg-[#6830b1] px-3 py-[6px] cursor-pointer capitalize">
          {username}
          <FaChevronDown />
        </button>
      </div>

      {showLogout && <button onClick={logout} className="dark:text-white border shadow-md rounded px-3 py-[6px] cursor-pointer capitalize absolute right-0 top-[2.8em]">Logout</button>}
    </header>
  )
}

export default Header