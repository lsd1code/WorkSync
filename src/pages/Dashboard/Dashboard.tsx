import { Outlet } from "react-router-dom"
import Header from "../../components/Dashboard/Header"
import Sidebar from "../../components/Dashboard/Sidebar"

const Dashboard = () => {
  return (
    <div className="dark:text-white min-h-screen">
      <Header/>
      
      <div className="flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard