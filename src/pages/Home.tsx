import Header from '../components/Header'
import Hero from '../components/Hero'
import Class from '../components/Class'
import Teacher from '../components/Teacher'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main className='top-30'>
        {/* Sección Hero */}
        <Hero/>
        <Class/>
        <Teacher/>
        <About/>
        <Contact/>
        {/* Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
