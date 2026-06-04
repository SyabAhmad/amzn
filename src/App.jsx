import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ProductMarquee from "./components/ProductMarquee"
import ProductsGrid from "./components/ProductsGrid"
import SocialProof from "./components/SocialProof"
import HotProducts from "./components/HotProducts"
import WhyThisSite from "./components/WhyThisSite"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-surface text-white font-sans">
      <Navbar />
      <HeroSection />
      <ProductMarquee />
      <ProductsGrid />
      <SocialProof />
      <HotProducts />
      <WhyThisSite />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
