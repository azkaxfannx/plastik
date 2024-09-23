import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute'
import NavComponent from './components/NavComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div data-theme="retro" className='bg-white min-h-screen font-poppins'>
          <NavComponent/>
          <AppRoute/> 
          <FooterComponent/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
