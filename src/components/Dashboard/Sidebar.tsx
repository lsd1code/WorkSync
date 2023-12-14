import { NavLink } from "react-router-dom"
import { FaChartLine, FaRegUser, FaPlusCircle, FaFileMedical } from 'react-icons/fa'

const links = [
  { title: 'Stats', path: '.', icon: FaChartLine},
  { title: 'All Jobs', path: 'jobs', icon: FaFileMedical},
  { title: 'Add Job', path: 'add-job', icon: FaPlusCircle},
  { title: 'Profile', path: 'profile', icon: FaRegUser},
]

const Sidebar = () => {
  return (
    <div className="max-h-full mr-4 hidden lg:block">
      <div>
        <h1 className='text-2xl lg:text-3xl text-[#36175e] dark:text-[#fff] font-bold'>WorkSync</h1>
      </div>
  
      <div className="mt-12 ml-2">
        {links.map((link, idx) => (
          <div key={idx}>
            <NavLink
              className={`text-base hover:bg-purple-500 dark:text-gray-300 dark:hover:bg-purple-500 rounded py-3 px-5 my-4 gap-2 duration-100 ease-in-out transition-all flex items-center w-full`} 
              end
              to={link.path}
              style={({isActive}) => isActive ? {background: 'rgb(216 180 254)', color: 'black'} : {}}
            >
              <link.icon className='text-2xl text-gray-700 dark:text-gray-500'/>
              <span className="">{link.title}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar