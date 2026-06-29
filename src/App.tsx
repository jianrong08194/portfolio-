import { Carousel } from './components/Carousel/Carousel'
import './App.css'

function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ margin: '0 auto' }}>
      <Carousel />
      </div>
    </main>
  )
}

export default App
