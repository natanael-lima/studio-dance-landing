import Header from '../components/Header'
import Hero from '../components/Hero'
import Teacher from '../components/Teacher'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Principiante from '../components/Principiante'
import Avanzado from '../components/Avanzado'
import Intermedio from '../components/Intermedio'

export default function Home() {
  return (
    <div>
      <Header />
      <main className='top-30'>
        {/* Sección Hero */}
        <Hero/>
        {/*<Class/>*/}
        <Principiante/>
        <Intermedio/>
        <Avanzado/>
        <Teacher/>
        <About/>
        <Contact/>
        {/* Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
