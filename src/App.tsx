import { Route, Routes } from 'react-router-dom'
import { Carousel } from './components/Carousel/Carousel'
import { ScrollRuler } from './components/ScrollRuler'
import Resume from './pages/Resume'

function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="mx-auto">
        <Carousel />
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollRuler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
