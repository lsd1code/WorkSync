import { NavLink } from "react-router-dom"

const links = [
  { title: 'Stats', path: '.'},
  { title: 'All Jobs', path: 'jobs'},
  { title: 'Add Job', path: 'add-job'},
  { title: 'Profile', path: 'profile'},
]

const Sidebar = () => {
  return (
    <div className="max-h-full pr-8 mr-4 hidden lg:block">
      <div>
        <h1 className='text-2xl lg:text-3xl text-[#36175e] dark:text-[#fff] font-bold'>WorkSync</h1>
      </div>
  
      <div className="mt-12 ml-2">
        {links.map((link, idx) => (
          <div key={idx}>
            <NavLink
              className={`text-lg hover:bg-purple-500 dark:text-gray-300 dark:hover:bg-purple-500 rounded py-2 px-4 my-2 block duration-100 ease-in-out transition-all`} 
              end
              to={link.path}
              style={({isActive}) => isActive ? {background: 'rgb(216 180 254)', color: 'black'} : {}}
            >
              {link.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar