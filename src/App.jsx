
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import History from './pages/History'
import ResumeGeneratorPage from './pages/ResumeGeneratorPage'
import PageNotFound from './pages/PageNotFound'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/resumegeneratorpage' element={<ResumeGeneratorPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App
