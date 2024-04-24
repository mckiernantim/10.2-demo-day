import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Team from './pages/Team'
import FellowProfile from './pages/FellowProfile'

import Home from './pages/Home'
function App() {


  return (
    <div className="container">
      <Link to="/">
        <img id="pursuit-logo" src="assets/pursuit.png"/>
      </Link>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:className" element ={<Home /> } />
        <Route path="/:className/:name" element={<Team />} />
        <Route path="/:className/:name/:fellow" element={<FellowProfile />} />
      </Routes>
    </div>
  )
}

export default App
