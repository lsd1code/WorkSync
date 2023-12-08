import { Outlet } from "react-router-dom"
import Header from "../../components/Dashboard/Header"
import Sidebar from "../../components/Dashboard/Sidebar"

const Dashboard = () => {
  return (
    <div className="dark:text-white">
      <Header/>
      <Sidebar/>

      Dashboard Page

      <Outlet/>
    </div>
  )
}

export default Dashboard