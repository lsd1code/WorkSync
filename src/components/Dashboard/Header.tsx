import ToggleMode from "../ToggleMode"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className='text-2xl text-[#36175e] dark:text-[#fff] font-bold'>WorkSync</h1>
      <ToggleMode/>
    </div>
  )
}

export default Header