import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"

const FIFATicketsPage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 World Cup Tickets | Official Sales, Resale & Prices"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Tickets
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 World Cup Tickets
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Everything you need to know about FIFA 2026 World Cup tickets — official sales phases, resale marketplace, hospitality packages, and travel bundles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Official FIFA Sales",
              desc: "FIFA.com ticket portal, sales phases, lottery system, pricing tiers",
              icon: "🎟️",
            },
            {
              title: "Hospitality Packages",
              desc: "VIP access, premium seats, dining, meet & greets, exclusive lounges",
              icon: "🥂",
            },
            {
              title: "Resale Marketplace",
              desc: "Official resale platform, fan-to-fan transfers, price caps, verification",
              icon: "🔄",
            },
            {
              title: "Travel Packages",
              desc: "Flight + hotel + ticket bundles, group deals, fan zone access",
              icon: "🏨",
            },
            {
              title: "Ticket Alerts",
              desc: "Sign up for notifications, drop reminders, last-minute releases",
              icon: "🔔",
            },
            {
              title: "Accessibility Tickets",
              desc: "Wheelchair spaces, easy access, companion seats, special assistance",
              icon: "♿",
            },
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
            Key FIFA 2026 Ticket Dates
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Phase 1: Official Lottery (Early 2025)",
              "Phase 2: First-Come First-Served (Mid 2025)",
              "Phase 3: Last-Minute Sales (Late 2025)",
              "Resale Opens: After Each Phase",
              "Hospitality Sales: Year-Round",
              "Last-Minute: Match Week",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-center gap-3">
                <span className="text-brand font-bold w-8 text-center">{i + 1}</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Don't Miss Your FIFA 2026 Match
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Bookmark this page for ticket alerts. Shop gear now so you're ready when tickets drop.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Community for Ticket Alerts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Game Day Essentials" count={12} />
    </main>
  )
}

export default FIFATicketsPage
