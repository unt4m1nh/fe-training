import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Create from './page/Create/Create'
import Update from './page/Update/Update'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/modify' element={<Create />} />
        <Route path='/update/:user' element={<Update />} />
      </Routes>
    </Router>
  )
}

export default App
