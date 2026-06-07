import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema, buildFAQSchema } from "../utils/schemas"

const FIFAPredictionsPage = () => {
  const faqs = [
    { q: "Who are the favorites to win FIFA 2026?", a: "Brazil, France, and Argentina are the top favorites based on current squad depth and recent tournament performances." },
    { q: "Who could win the Golden Boot at FIFA 2026?", a: "Kylian Mbappé, Erling Haaland, and Vinícius Jr. are the leading contenders for top scorer." },
    { q: "What is a dark horse team for FIFA 2026?", a: "Teams like Portugal, Netherlands, and Colombia have the talent to make deep runs as underdogs." },
    { q: "How can I join the FIFA 2026 bracket challenge?", a: "Join our community on the FIFA Community page to participate in the official bracket challenge with prizes." },
    { q: "When are predictions usually released?", a: "Expert predictions typically finalize after the group draw and friendlies in early 2026, but our fan bracket is open now." },
  ]

  useSEO({
    title: "FIFA 2026 Predictions | Bracket, Winner, Top Scorer & Betting Odds",
    description: "FIFA 2026 predictions: expert picks for the winner, golden boot race, dark horses, group stage predictions, knockout bracket, betting odds, and fan bracket challenge.",
    path: "/fifa-predictions",
    keywords: "fifa 2026 predictions, fifa predictions, world cup predictions, fifa bracket, fifa 2026 winner, fifa golden boot, fifa 2026 picks, world cup bracket challenge, fifa dark horse, fifa betting odds",
    jsonLd: {
      ...buildBreadcrumbSchema([
        { name: "Home", url: "https://fifa26.page/" },
        { name: "FIFA 2026 Predictions", url: "https://fifa26.page/fifa-predictions" },
      ]),
      ...buildFAQSchema(faqs),
    },
    jsonLdId: "predictions-jsonld",
  })

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

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-surface-2 border border-zinc-800 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-brand shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-zinc-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <BigPosterSeven />
      <RandomProducts title="Top Predictions Picks" count={12} />
    </main>
  )
}

export default FIFAPredictionsPage
