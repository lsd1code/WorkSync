import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Register } from './pages'
import LayoutHeader from './components/LayoutHeader'
// import { useAuthCtx } from './context/authWrapper'

function App() {  
  return (
    <div className='min-h-screen bg-[#d7e1d8] dark:bg-[#100f15] transition-all duration-100 ease-linear'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutHeader/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Register/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App