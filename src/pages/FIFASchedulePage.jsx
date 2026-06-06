import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"

const FIFASchedulePage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 Schedule | Full Match Calendar, Dates, Times & TV"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Full Match Schedule
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Complete FIFA 2026 World Cup schedule — all 104 matches, dates, kickoff times, stadiums, and TV broadcast info.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { title: "June 11, 2026", desc: "Opening Match — Mexico City", icon: "🎬" },
            { title: "June 11–27", desc: "Group Stage — 72 matches", icon: "⚽" },
            { title: "June 28 – July 3", desc: "Round of 32 — 16 matches", icon: "🎯" },
            { title: "July 4–7", desc: "Round of 16 — 8 matches", icon: "🔫" },
            { title: "July 10–11", desc: "Quarterfinals — 4 matches", icon: "🔥" },
            { title: "July 14–15", desc: "Semifinals — 2 matches", icon: "💥" },
            { title: "July 18, 2026", desc: "Third Place — Miami", icon: "🥉" },
            { title: "July 19, 2026", desc: "FINAL — New York", icon: "🏆" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all text-center">
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            How to Watch FIFA 2026
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { region: "USA 🇺🇸", broadcasters: "FOX, FS1, Telemundo, Peacock" },
              { region: "UK 🇬🇧", broadcasters: "BBC, ITV, STV" },
              { region: "Canada 🇨🇦", broadcasters: "TSN, CTV, RDS" },
              { region: "Mexico 🇲🇽", broadcasters: "TelevisaUnivision, TUDN" },
              { region: "Europe 🇪🇺", broadcasters: "EBU (varies by country)" },
              { region: "Asia 🌏", broadcasters: "Sony, BeIN, CCTV" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-2 border border-zinc-800">
                <p className="text-brand text-xs font-extrabold uppercase tracking-wider">{item.region}</p>
                <p className="text-white font-semibold mt-1 text-sm">{item.broadcasters}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Plan Your FIFA 2026 Calendar
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Bookmark this page. Join our community for schedule reminders and live match threads.
          </p>
          <Link to="/fifa-matches" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            View Match Details
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <RandomProducts title="Schedule Your Style" count={12} />
    </main>
  )
}

export default FIFASchedulePage
