import { Route, Routes, useLocation } from 'react-router-dom'
import { Carousel } from './components/Carousel/Carousel'
import { ScrollRuler } from './components/ScrollRuler'
import { VantaBackground } from './components/VantaBackground'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <VantaBackground />
      <div className="relative z-10 mx-auto">
        <Carousel />
      </div>
    </main>
  )
}

function App() {
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== '/' && <ScrollRuler />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
