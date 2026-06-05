import HeroSection from "../components/HeroSection"
import ProductMarquee from "../components/ProductMarquee"
import ProductsGrid from "../components/ProductsGrid"
import SocialProof from "../components/SocialProof"
import HotProducts from "../components/HotProducts"
import WhyThisSite from "../components/WhyThisSite"
import FinalCTA from "../components/FinalCTA"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductMarquee />
      <ProductsGrid />
      <SocialProof />
      <HotProducts />
      <WhyThisSite />
      <FinalCTA />
    </>
  )
}

export default HomePage
