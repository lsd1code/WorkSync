import { useState, useEffect } from 'react'

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
    <button className='py-1 px-6 bg-cyan-600 rounded' onClick={toggleTheme}>
      toggle
    </button>
  )
}

export default ToggleMode