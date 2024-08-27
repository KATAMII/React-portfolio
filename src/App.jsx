
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
function App() {
  

  return (
    <>
     <Header/>
     <Home/>
     <About/>
     <Footer/>
    </>
  )
}

export default App
