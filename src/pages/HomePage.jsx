import HeroSection from "../components/HeroSection"
import ProductMarquee from "../components/ProductMarquee"
import BigPoster from "../components/BigPoster"
import BigPosterFive from "../components/BigPosterFive"
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
      <BigPoster />
      <ProductsGrid />
      <SocialProof />
      <BigPosterFive />
      <HotProducts />
      <WhyThisSite />
      <FinalCTA />
    </>
  )
}

export default HomePage
