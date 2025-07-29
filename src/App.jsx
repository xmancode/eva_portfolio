
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonials from './sections/Testmonial'
import Contact from './sections/Contact'


function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Testimonials/>
      <Contact/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      
      {/* hero */}
      {/* about */}
      {/* projects*/}
      {/* experience */}
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App
