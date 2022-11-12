import './modules/globals.css'
import Sidebar from './components/Sidebar'
import Login from './pages/LoginPage/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Sidebar/>}/>
      </Routes>
    </div>
  )
}

export default App
