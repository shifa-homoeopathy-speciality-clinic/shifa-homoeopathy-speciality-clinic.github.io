import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import About from './components/about'
import Diseases from './components/diseases'
import Faq from './components/faq'
import Contact from './components/contact'
import Footer from './components/footer'
import HeroFeatureCards from './components/heroFeatureCards'
import HeroFeatureCardsSparkles from './components/heroFeatureCardSparkles'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroFeatureCards></HeroFeatureCards>
      <HeroFeatureCardsSparkles></HeroFeatureCardsSparkles>
      <Features></Features>
      <About></About>
      <Diseases></Diseases>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
