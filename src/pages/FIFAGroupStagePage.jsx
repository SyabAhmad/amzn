import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"

const FIFAGroupStagePage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 Group Stage | 12 Groups, 48 Teams, 72 Matches"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Group Stage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Group Stage
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            All 12 groups, 48 teams, 72 group stage matches. June 11 – 27, 2026. Top 2 from each group + 8 best 3rd-place teams advance to the Round of 32.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {Array.from({ length: 12 }, (_, i) => {
            const letter = String.fromCharCode(65 + i)
            return (
              <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
                <p className="text-brand text-xs font-extrabold uppercase tracking-wider">Group {letter}</p>
                <ul className="mt-2 space-y-1.5">
                  {["TBD 1", "TBD 2", "TBD 3", "TBD 4"].map((t, j) => (
                    <li key={j} className="text-white text-sm flex items-center gap-2">
                      <span className="text-zinc-600 w-4">{j + 1}.</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Group Stage Format Explained
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "12 groups labeled A through L",
              "4 teams per group — total 48 nations",
              "6 matches per group, 3 per team",
              "Top 2 from each group qualify automatically",
              "8 best 3rd-place teams also advance",
              "Round of 32 starts June 28, 2026",
              "72 group stage matches over 17 days",
              "Matches spread across 16 host stadiums",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-start gap-3">
                <span className="text-brand text-xl">📋</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Show Your Country Pride
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            48 nations. 48 chances to cheer. Shop your country jersey for the group stage.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop Country Jerseys
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Group Stage Gear" count={12} />
    </main>
  )
}

export default FIFAGroupStagePage
