import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"

const FIFAMatchesPage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 World Cup Matches | Schedule, Fixtures, Results & Live Scores"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Matches
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 World Cup Matches
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Complete FIFA 2026 World Cup match schedule, fixtures, live scores, results, group stage, knockout brackets, and match predictions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            {
              title: "Group Stage",
              desc: "48 teams, 12 groups, 72 matches, June 2026",
              icon: "🏆",
              href: "/fifa-group-stage"
            },
            {
              title: "Knockout Stage",
              desc: "Round of 16 to Final, July 2026",
              icon: "⚔️",
              href: "/fifa-knockout"
            },
            {
              title: "Live Scores",
              desc: "Real-time updates, stats, lineups, VAR decisions",
              icon: "📊",
              href: "/fifa-live-scores"
            },
            {
              title: "Predictions",
              desc: "Expert picks, fan votes, bracket challenges",
              icon: "🔮",
              href: "/fifa-predictions"
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group p-6 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            FIFA 2026 Match Schedule Overview
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phase: "Opening Match", date: "June 11, 2026", stadium: "Estadio Azteca, Mexico City" },
              { phase: "Group Stage", date: "June 11 – 27, 2026", stadium: "16 Stadiums Across 3 Nations" },
              { phase: "Round of 32", date: "June 28 – July 3, 2026", stadium: "8 Stadiums" },
              { phase: "Round of 16", date: "July 4 – 7, 2026", stadium: "4 Stadiums" },
              { phase: "Quarterfinals", date: "July 10 – 11, 2026", stadium: "2 Stadiums" },
              { phase: "Semifinals", date: "July 14 – 15, 2026", stadium: "2 Stadiums" },
              { phase: "Third Place", date: "July 18, 2026", stadium: "Hard Rock Stadium, Miami" },
              { phase: "Final", date: "July 19, 2026", stadium: "MetLife Stadium, New York" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800">
                <span className="text-brand text-xs font-extrabold uppercase tracking-wider">{item.phase}</span>
                <p className="text-white font-semibold mt-1">{item.date}</p>
                <p className="text-zinc-500 text-sm">{item.stadium}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Never Miss a FIFA 2026 Match
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Join our community for live match threads, predictions, and instant score alerts.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Match Discussions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <RandomProducts title="Match Day Gear" count={12} />
    </main>
  )
}

export default FIFAMatchesPage
