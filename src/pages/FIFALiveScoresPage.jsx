import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"

const FIFALiveScoresPage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 Live Scores | Real-Time Match Updates & Results"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Live Scores
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Live Scores
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Real-time FIFA 2026 match scores, goals, cards, substitutions, stats, and VAR decisions. Updated every minute.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { title: "Live Now", desc: "Matches in play right now", icon: "🔴" },
            { title: "Today's Matches", desc: "Full daily schedule & kickoff times", icon: "📅" },
            { title: "Results", desc: "Final scores from completed matches", icon: "✅" },
            { title: "Stats", desc: "Possession, shots, xG, pass accuracy", icon: "📊" },
            { title: "Goal Alerts", desc: "Push notifications for every goal", icon: "🔔" },
            { title: "Lineups", desc: "Confirmed starting XIs & formations", icon: "📋" },
            { title: "VAR Watch", desc: "All VAR reviews & decisions explained", icon: "📺" },
            { title: "Group Tables", desc: "Live standings for all 12 groups", icon: "🏆" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Latest Match Results
          </h2>
          <div className="grid gap-3">
            {[
              { home: "Brazil 🇧🇷", away: "Argentina 🇦🇷", score: "2-1", status: "FT" },
              { home: "France 🇫🇷", away: "Germany 🇩🇪", score: "3-0", status: "FT" },
              { home: "Spain 🇪🇸", away: "England 🏴", score: "1-1", status: "FT (4-3 pen)" },
              { home: "USA 🇺🇸", away: "Mexico 🇲🇽", score: "LIVE", status: "67'" },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-center justify-between">
                <div className="flex-1 text-right pr-3">
                  <span className="text-white font-semibold text-sm">{m.home}</span>
                </div>
                <div className="text-center px-4">
                  <p className="text-brand font-black text-lg">{m.score}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{m.status}</p>
                </div>
                <div className="flex-1 pl-3">
                  <span className="text-white font-semibold text-sm">{m.away}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Never Miss a Goal
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Join our community for instant live score notifications and match commentary.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Enable Live Alerts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <RandomProducts title="Live Action Gear" count={12} />
    </main>
  )
}

export default FIFALiveScoresPage
