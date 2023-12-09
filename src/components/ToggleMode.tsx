import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ToggleMode = () => {
  const [theme, setTheme] = useState<null | string>(null)

  useEffect(() => {
    if(window.matchMedia('prefers-color-scheme: dark')) {
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')      
    } else {
      document.documentElement.classList.remove('dark')      
    }
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button className='text-2xl' onClick={toggleTheme}>
      {theme === 'dark' ? <FaSun color='yellow' /> : <FaMoon color='#36175e' />}
    </button>
  )
}

export default ToggleMode