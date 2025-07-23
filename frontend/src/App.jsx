import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
      {/* <Login /> */}
      {/* <Dashboard /> */}
    </>
  )
}

export default App
