import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const FIFAFanGroupsPage = () => {
  useSEO({
    title: "FIFA 2026 Fan Groups | Country Supporter Communities & Meetups",
    description: "Find your country's FIFA 2026 supporter club, local fan meetups, and global community. USA, Mexico, Brazil, Argentina, France, Germany, England, Spain, Portugal, Netherlands, Italy supporter groups.",
    path: "/fifa-fan-groups",
    keywords: "fifa fan groups, fifa supporter clubs, fifa 2026 fan communities, country fan groups, usa supporters, brazil supporters, argentina fans, fifa meetups, world cup fan groups",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "FIFA 2026 Fan Groups", url: "https://fifa26.page/fifa-fan-groups" },
    ]),
    jsonLdId: "fangroups-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Fan Groups
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Fan Groups & Supporter Communities
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Find your country's official supporter club, local fan meetups, and global community for FIFA 2026 World Cup.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { name: "USA 🇺🇸", members: "125K", city: "All 11 US host cities" },
            { name: "Mexico 🇲🇽", members: "210K", city: "All 3 Mexico host cities" },
            { name: "Canada 🇨🇦", members: "85K", city: "Toronto, Vancouver" },
            { name: "Brazil 🇧🇷", members: "180K", city: "Worldwide" },
            { name: "Argentina 🇦🇷", members: "165K", city: "Worldwide" },
            { name: "France 🇫🇷", members: "140K", city: "Worldwide" },
            { name: "Germany 🇩🇪", members: "120K", city: "Worldwide" },
            { name: "Spain 🇪🇸", members: "110K", city: "Worldwide" },
            { name: "England 🏴", members: "130K", city: "Worldwide" },
            { name: "Netherlands 🇳🇱", members: "75K", city: "Worldwide" },
            { name: "Portugal 🇵🇹", members: "70K", city: "Worldwide" },
            { name: "Italy 🇮🇹", members: "90K", city: "Worldwide" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
              <p className="text-white font-bold text-2xl">{item.name}</p>
              <p className="text-zinc-400 text-sm mt-1">{item.members} members</p>
              <p className="text-zinc-500 text-xs mt-1">{item.city}</p>
              <button className="mt-3 text-brand text-sm font-semibold hover:underline">
                Join Group →
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Start Your Own Fan Group
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Find co-organizers in your city",
              "Set up a Discord or Telegram channel",
              "Coordinate match viewing at local bars",
              "Plan away trips to host cities",
              "Host watch parties for big matches",
              "Create merchandise for your group",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-start gap-3">
                <span className="text-brand text-xl">🤝</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Represent Your Country
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Country jerseys, scarves, and flags. Show your colors for FIFA 2026.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop Country Gear
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Country Gear" count={12} />
    </main>
  )
}

export default FIFAFanGroupsPage
