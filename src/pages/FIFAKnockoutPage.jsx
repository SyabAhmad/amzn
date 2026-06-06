import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const FIFAKnockoutPage = () => {
  useSEO({
    title: "FIFA 2026 Knockout Stage | Round of 32, 16, QF, SF, Final",
    description: "FIFA 2026 knockout stage: Round of 32, Round of 16, Quarterfinals, Semifinals, and the Final. Single-elimination drama from June 28 – July 19, 2026.",
    path: "/fifa-knockout",
    keywords: "fifa knockout, fifa 2026 knockout, fifa 2026 knockout stage, world cup knockout, fifa round of 16, fifa quarterfinals, fifa semifinals, fifa 2026 final, fifa elimination",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "FIFA 2026 Knockout", url: "https://fifa26.page/fifa-knockout" },
    ]),
    jsonLdId: "knockout-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Knockout Stage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Knockout Stage
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Single-elimination drama — Round of 32, Round of 16, Quarterfinals, Semifinals, and the Final. June 28 – July 19, 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {[
            { stage: "Round of 32", date: "Jun 28 – Jul 3", matches: "16 matches", icon: "🎯" },
            { stage: "Round of 16", date: "Jul 4 – 7", matches: "8 matches", icon: "🔫" },
            { stage: "Quarterfinals", date: "Jul 10 – 11", matches: "4 matches", icon: "🔥" },
            { stage: "Semifinals", date: "Jul 14 – 15", matches: "2 matches", icon: "💥" },
            { stage: "Final", date: "Jul 19", matches: "1 match 🏆", icon: "🏆" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all text-center">
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-1">{item.stage}</h3>
              <p className="text-zinc-400 text-xs">{item.date}</p>
              <p className="text-zinc-500 text-xs">{item.matches}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Knockout Stage Rules
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Single elimination — lose and you're out",
              "Extra time (2 × 15 min) if tied after 90",
              "Penalty shootout if still tied after ET",
              "No away goals rule — purely knockout",
              "Yellow cards reset at semifinal stage",
              "Final is on July 19, 2026 at MetLife Stadium",
              "Third-place match on July 18 in Miami",
              "32 teams qualify from group stage",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-start gap-3">
                <span className="text-brand text-xl">⚔️</span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Be There for the Knockout Drama
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Tickets, gear, and live threads for every knockout match.
          </p>
          <Link to="/fifa-tickets" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Get Knockout Tickets
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Knockout Stage Gear" count={12} />
    </main>
  )
}

export default FIFAKnockoutPage
