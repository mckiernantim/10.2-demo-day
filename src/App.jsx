import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import FellowProfile from './pages/FellowProfile'

function App() {


  return (
    <div className="container">
      <Link to="/">
        <img id="pursuit-logo" src="assets/pursuit.png"/>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Team />} />
        <Route path="/:name/:fellow" element={<FellowProfile />} />
      </Routes>
    </div>
  )
}

export default App
