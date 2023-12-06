import { Outlet, Link } from 'react-router-dom'
import ToggleMode from './ToggleMode'

const LayoutHeader = () => {

  return (
    <>
      <header className='flex justify-between items-center py-6 px-4 md:px-[5em]'>
        <div className="logo">
          <Link to={'.'} className='text-2xl text-[#36175e] dark:text-[#fff] font-bold'>WorkSync</Link>
        </div>

        <div className="toggle-mode">
          <ToggleMode/>
        </div>
      </header>

      <div className='px-4 md:px-8'>
        <Outlet/>
      </div>
    </>
  )
}

export default LayoutHeader