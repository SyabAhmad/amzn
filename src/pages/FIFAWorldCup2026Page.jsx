import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const FIFAWorldCup2026Page = () => {
  useSEO({
    title: "FIFA World Cup 2026 | Official Guide, Dates, Host Cities & Teams",
    description: "The complete official guide to the FIFA World Cup 2026 — historic 48-team tournament across USA, Mexico & Canada, June 11 – July 19, 2026. 104 matches, 16 stadiums, all the dates, teams, host cities, and tickets info.",
    path: "/fifa-world-cup-2026",
    keywords: "fifa world cup 2026, fifa 2026, world cup 2026, fifa 2026 dates, fifa 2026 host cities, fifa 2026 teams, fifa 2026 stadiums, world cup 2026 guide, fifa 2026 usa mexico canada",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "FIFA World Cup 2026", url: "https://fifa26.page/fifa-world-cup-2026" },
    ]),
    jsonLdId: "wc2026-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            World Cup 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA World Cup 2026
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            The complete official guide to the FIFA World Cup 2026 — historic 48-team tournament across USA, Mexico & Canada, June 11 – July 19, 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Tournament Dates", desc: "June 11 – July 19, 2026 (39 days of football)", icon: "📅" },
            { title: "Host Nations", desc: "USA 🇺🇸, Mexico 🇲🇽, Canada 🇨🇦 — first 3-country World Cup", icon: "🌎" },
            { title: "Teams", desc: "48 nations — 16 more than any previous World Cup", icon: "⚽" },
            { title: "Matches", desc: "104 total matches — 23 more than FIFA 2022", icon: "🏆" },
            { title: "Stadiums", desc: "16 venues across 11 host cities in 3 countries", icon: "🏟️" },
            { title: "Final Venue", desc: "MetLife Stadium, New York/New Jersey — July 19, 2026", icon: "🎉" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Why FIFA 2026 Is Historic
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "First ever 48-team FIFA World Cup",
              "First World Cup hosted by 3 countries",
              "Most matches ever — 104 total",
              "16 host cities — most in tournament history",
              "Record broadcast reach — 6+ billion viewers",
              "Expanded format with 32 group stage matches",
              "Sustainability focus — green stadiums & transport",
              "Tech innovation — AI refs, semi-automated offside",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-start gap-3">
                <span className="text-brand text-xl">✓</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            FIFA 2026 Host Cities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "Atlanta", country: "USA 🇺🇸", stadium: "Mercedes-Benz Stadium" },
              { city: "Boston", country: "USA 🇺🇸", stadium: "Gillette Stadium" },
              { city: "Dallas", country: "USA 🇺🇸", stadium: "AT&T Stadium" },
              { city: "Houston", country: "USA 🇺🇸", stadium: "NRG Stadium" },
              { city: "Kansas City", country: "USA 🇺🇸", stadium: "GEHA Field at Arrowhead" },
              { city: "Los Angeles", country: "USA 🇺🇸", stadium: "SoFi Stadium" },
              { city: "Miami", country: "USA 🇺🇸", stadium: "Hard Rock Stadium" },
              { city: "New York/NJ", country: "USA 🇺🇸", stadium: "MetLife Stadium (Final)" },
              { city: "Philadelphia", country: "USA 🇺🇸", stadium: "Lincoln Financial Field" },
              { city: "San Francisco", country: "USA 🇺🇸", stadium: "Levi's Stadium" },
              { city: "Seattle", country: "USA 🇺🇸", stadium: "Lumen Field" },
              { city: "Guadalajara", country: "Mexico 🇲🇽", stadium: "Estadio Akron" },
              { city: "Mexico City", country: "Mexico 🇲🇽", stadium: "Estadio Azteca (Opening)" },
              { city: "Monterrey", country: "Mexico 🇲🇽", stadium: "Estadio BBVA" },
              { city: "Toronto", country: "Canada 🇨🇦", stadium: "BMO Field" },
              { city: "Vancouver", country: "Canada 🇨🇦", stadium: "BC Place" },
            ].map((item, i) => (
              <Link
                key={i}
                to="/fifa-host-cities"
                className="p-4 rounded-xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all"
              >
                <p className="text-white font-bold">{item.city}</p>
                <p className="text-zinc-500 text-xs">{item.country}</p>
                <p className="text-zinc-400 text-sm mt-1">{item.stadium}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Get FIFA 2026 Ready
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Official gear, tickets, and community — everything you need for the biggest World Cup ever.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop FIFA 2026 Gear
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <BigPosterSeven />
      <RandomProducts title="World Cup Essentials" count={12} />
    </main>
  )
}

export default FIFAWorldCup2026Page
