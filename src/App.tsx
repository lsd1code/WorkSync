import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Register } from './pages'
import { AddJob, Jobs, Stats, Profile} from './pages/Dashboard'
import LayoutHeader from './components/LayoutHeader'

function App() {
  return (
    <div className='min-h-screen bg-[#d7e1d8] dark:bg-[#100f15] transition-all duration-100 ease-linear'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutHeader />}>
            <Route index element={<Home />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Stats />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='add-job' element={<AddJob />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App