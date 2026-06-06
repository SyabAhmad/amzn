import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"

const FIFAHostCitiesPage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 Host Cities | 16 Stadiums, USA, Mexico & Canada"
    window.scrollTo(0, 0)
  }, [])

  const cities = [
    { city: "Atlanta", country: "USA 🇺🇸", stadium: "Mercedes-Benz Stadium", capacity: "71,000", matches: "Group + Knockout" },
    { city: "Boston", country: "USA 🇺🇸", stadium: "Gillette Stadium", capacity: "65,878", matches: "Group + Knockout" },
    { city: "Dallas", country: "USA 🇺🇸", stadium: "AT&T Stadium", capacity: "80,000", matches: "Group + Semifinal" },
    { city: "Houston", country: "USA 🇺🇸", stadium: "NRG Stadium", capacity: "72,220", matches: "Group + Knockout" },
    { city: "Kansas City", country: "USA 🇺🇸", stadium: "GEHA Field at Arrowhead", capacity: "76,416", matches: "Group + Knockout" },
    { city: "Los Angeles", country: "USA 🇺🇸", stadium: "SoFi Stadium", capacity: "70,240", matches: "Group + Knockout" },
    { city: "Miami", country: "USA 🇺🇸", stadium: "Hard Rock Stadium", capacity: "65,326", matches: "Group + 3rd Place" },
    { city: "New York/NJ", country: "USA 🇺🇸", stadium: "MetLife Stadium", capacity: "82,500", matches: "Group + FINAL 🏆" },
    { city: "Philadelphia", country: "USA 🇺🇸", stadium: "Lincoln Financial Field", capacity: "67,594", matches: "Group + Knockout" },
    { city: "San Francisco", country: "USA 🇺🇸", stadium: "Levi's Stadium", capacity: "68,500", matches: "Group + Knockout" },
    { city: "Seattle", country: "USA 🇺🇸", stadium: "Lumen Field", capacity: "69,000", matches: "Group + Knockout" },
    { city: "Guadalajara", country: "Mexico 🇲🇽", stadium: "Estadio Akron", capacity: "46,232", matches: "Group Stage" },
    { city: "Mexico City", country: "Mexico 🇲🇽", stadium: "Estadio Azteca", capacity: "87,000", matches: "OPENING + Group" },
    { city: "Monterrey", country: "Mexico 🇲🇽", stadium: "Estadio BBVA", capacity: "53,500", matches: "Group + Knockout" },
    { city: "Toronto", country: "Canada 🇨🇦", stadium: "BMO Field", capacity: "45,000", matches: "Group + Knockout" },
    { city: "Vancouver", country: "Canada 🇨🇦", stadium: "BC Place", capacity: "54,500", matches: "Group + Knockout" },
  ]

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Host Cities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Host Cities & Stadiums
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            16 stadiums across 11 host cities in 3 countries. The largest World Cup in history. Plan your trip to see FIFA 2026 live.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cities.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
              <p className="text-xs text-brand font-bold uppercase tracking-wider">{item.country}</p>
              <h3 className="text-white font-bold text-2xl mt-1 mb-2">{item.city}</h3>
              <div className="space-y-1.5 text-sm">
                <p className="text-zinc-300"><span className="text-zinc-500">Stadium:</span> {item.stadium}</p>
                <p className="text-zinc-300"><span className="text-zinc-500">Capacity:</span> {item.capacity}</p>
                <p className="text-zinc-300"><span className="text-zinc-500">Matches:</span> {item.matches}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Travel & Accommodation Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book hotels 6-12 months in advance — prices surge",
              "Use FIFA's official accommodation portal first",
              "Consider nearby cities for cheaper stays",
              "Public transit passes available for host cities",
              "Fan zones offer free viewing & meetups",
              "Multi-city passes available for fans attending 4+ matches",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-start gap-3">
                <span className="text-brand text-xl">✈️</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Show Your City Pride
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Shop FIFA 2026 gear, country jerseys, and host city merchandise.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop Host City Merch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <RandomProducts title="City Pride Gear" count={12} />
    </main>
  )
}

export default FIFAHostCitiesPage
