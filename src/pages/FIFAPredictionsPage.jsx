import { useEffect } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"

const FIFAPredictionsPage = () => {
  useEffect(() => {
    document.title = "FIFA 2026 Predictions | Bracket, Winner, Top Scorer & Betting Odds"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Predictions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Predictions & Bracket
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Expert picks, fan brackets, betting odds, golden boot race, dark horse teams, and bold predictions for FIFA 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { title: "Winner Pick", desc: "Brazil, France, Argentina — who lifts the trophy?", icon: "🏆" },
            { title: "Top Scorer", desc: "Golden Boot race — Mbappé, Haaland, Vinícius Jr.", icon: "⚽" },
            { title: "Dark Horse", desc: "Underdog nations that could shock the world", icon: "🐴" },
            { title: "Bracket", desc: "Fill out your knockout stage bracket now", icon: "📊" },
            { title: "Group Winners", desc: "Predicted 12 group winners + runners-up", icon: "🌍" },
            { title: "Upsets", desc: "Big teams that could fall in group stage", icon: "💥" },
            { title: "Best Goalkeeper", desc: "Golden Glove favorites — top shot-stoppers", icon: "🧤" },
            { title: "Best Young Player", desc: "Rising stars who could light up FIFA 2026", icon: "⭐" },
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
            Fan Predictions Leaderboard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { rank: 1, name: "BrazilFan_22", score: 142, country: "🇧🇷" },
              { rank: 2, name: "LesBleus_Predict", score: 138, country: "🇫🇷" },
              { rank: 3, name: "AlbicelesteGOAT", score: 135, country: "🇦🇷" },
              { rank: 4, name: "ThreeLionsTom", score: 131, country: "🏴" },
              { rank: 5, name: "DE_Fanclub", score: 128, country: "🇩🇪" },
              { rank: 6, name: "USMNT_Believer", score: 124, country: "🇺🇸" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800 flex items-center gap-3">
                <span className="text-brand font-black text-xl w-8 text-center">#{item.rank}</span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{item.name} {item.country}</p>
                  <p className="text-zinc-500 text-xs">{item.score} points</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Submit Your Predictions
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Join our bracket challenge. Top predictors win FIFA 2026 merch and bragging rights.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Bracket Challenge
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <RandomProducts title="Top Predictions Picks" count={12} />
    </main>
  )
}

export default FIFAPredictionsPage
