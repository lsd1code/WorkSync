import { Outlet } from "react-router-dom"
import Header from "../../components/Dashboard/Header"
import Sidebar from "../../components/Dashboard/Sidebar"

const Dashboard = () => {
  return (
    <main className="dark:text-white min-h-screen pt-4">
      <div className="flex gap-2 px-[1em]">
        <Sidebar/>
        <div className="w-[100%]">
          <Header/>
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default Dashboard