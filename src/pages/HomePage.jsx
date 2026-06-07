import HeroSection from "../components/HeroSection"
import ProductMarquee from "../components/ProductMarquee"
import TrendingTopics from "../components/TrendingTopics"
import BigPoster from "../components/BigPoster"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import ProductsGrid from "../components/ProductsGrid"
import SocialProof from "../components/SocialProof"
import HotProducts from "../components/HotProducts"
import WhyThisSite from "../components/WhyThisSite"
import FinalCTA from "../components/FinalCTA"
import useSEO from "../hooks/useSEO"

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "FIFA World Cup 2026",
  "alternateName": "2026 FIFA World Cup",
  "description": "The 23rd FIFA World Cup, hosted by USA, Mexico, and Canada. 48 teams, 104 matches, June 11 – July 19, 2026.",
  "startDate": "2026-06-11",
  "endDate": "2026-07-19",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": [
    { "@type": "Place", "name": "MetLife Stadium", "address": "East Rutherford, NJ, USA" },
    { "@type": "Place", "name": "Estadio Azteca", "address": "Mexico City, Mexico" },
    { "@type": "Place", "name": "BMO Field", "address": "Toronto, Canada" }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "FIFA",
    "url": "https://www.fifa.com"
  }
}

const HomePage = () => {
  useSEO({
    title: "FIFA 2026 World Cup Gear, Jerseys, Tickets & Match Schedule",
    description: "Shop the largest collection of FIFA 2026 World Cup gear: official country jerseys (USA, Mexico, Brazil, Argentina, France, Germany, England, Spain, Portugal, Netherlands, Italy, Saudi Arabia), adidas Sambas, Copa Pure sneakers, kids kits, fan accessories, sunglasses, hats, scarves. Find FIFA 2026 tickets, match schedule, host cities, live scores, and join the global fan community.",
    path: "/",
    keywords: "fifa 2026, fifa world cup 2026, fifa tickets, fifa matches, fifa schedule, fifa jerseys, fifa gear, fifa community, fifa live scores, fifa host cities, fifa news, fifa watch online, world cup 2026, world cup tickets, world cup schedule, world cup matches, fifa 2026 host cities, fifa 2026 tickets, fifa 2026 schedule, fifa knockout, fifa group stage",
    jsonLd: homeJsonLd,
    jsonLdId: "home-jsonld",
  })

  return (
    <>
      <HeroSection />
      <ProductMarquee />
      <TrendingTopics />
      <BigPoster />
      <BigPosterSeven />
      <ProductsGrid />
      <SocialProof />
      <BigPosterFive />
      <HotProducts />
      <WhyThisSite />
      <BigPosterSix />
      <FinalCTA />
    </>
  )
}

export default HomePage
