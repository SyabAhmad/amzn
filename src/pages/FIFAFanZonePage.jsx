import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const FIFAFanZonePage = () => {
  useSEO({
    title: "FIFA 2026 Fan Zone | Watch Parties, Meetups & Big Screen Events",
    description: "Official FIFA Fan Zones in 16 host cities with free big-screen viewing of every match. Live entertainment, food, drinks, family activities, and supporter meetups for FIFA 2026.",
    path: "/fifa-fan-zone",
    keywords: "fifa fan zone, fifa 2026 fan zone, fifa watch party, fifa big screen, fifa fanzone, world cup fan zone, fifa meetup, fifa supporter meetup, fifa 2026 watch party",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "FIFA 2026 Fan Zone", url: "https://fifa26.page/fifa-fan-zone" },
    ]),
    jsonLdId: "fanzone-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Fan Zone
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Fan Zones & Watch Parties
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Free big-screen viewing, live entertainment, food, drinks, and meetups at official FIFA Fan Zones across all 16 host cities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Big Screen Viewing", desc: "Free entry, 4K LED walls, all 104 matches live", icon: "📺" },
            { title: "Live Entertainment", desc: "DJs, bands, dancers, halftime shows, fan competitions", icon: "🎤" },
            { title: "Food & Drink", desc: "Local cuisine, beer gardens, family-friendly options", icon: "🍔" },
            { title: "Fan Meetups", desc: "Country-specific areas, supporter meet & greets", icon: "🤝" },
            { title: "Merchandise Stalls", desc: "Official FIFA 2026 gear, jerseys, scarves, hats", icon: "🛍️" },
            { title: "Family Activities", desc: "Kids zones, football clinics, face painting, mascots", icon: "👨‍👩‍👧" },
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
            Fan Zone Locations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Atlanta — Centennial Olympic Park",
              "Boston — City Hall Plaza",
              "Dallas — Klyde Warren Park",
              "Houston — Discovery Green",
              "Los Angeles — Grand Park",
              "Miami — Bayfront Park",
              "New York — Rockefeller Center",
              "Philadelphia — Dilworth Park",
              "San Francisco — Civic Center Plaza",
              "Mexico City — Zócalo",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-center gap-3">
                <span className="text-brand">📍</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Gear Up for the Fan Zone
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Country jerseys, scarves, face paint, foam fingers — everything you need to cheer in style.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop Fan Zone Essentials
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Fan Zone Must-Haves" count={12} />
    </main>
  )
}

export default FIFAFanZonePage
