import products from "../data/products"

const TrendingTopics = () => {
  const trends = [
    { term: "brazil vs egypt", volume: "50K+", change: "1,000%", status: "active", lang: "en" },
    { term: "البرازيل ضد مصر", volume: "50K+", change: "1,000%", status: "active", lang: "ar" },
    { term: "argentina vs honduras", volume: "20K+", change: "1,000%", status: "active", lang: "en" },
    { term: "مصر والبرازيل", volume: "20K+", change: "1,000%", status: "active", lang: "ar" },
    { term: "نور", volume: "20K+", change: "700%", status: "active", lang: "ar" },
    { term: "portugal vs chile", volume: "10K+", change: "1,000%", status: "lasted-13h", lang: "en" },
    { term: "oman vs nepal", volume: "10K+", change: "1,000%", status: "active", lang: "en" },
    { term: "كأس العالم", volume: "10K+", change: "500%", status: "active", lang: "ar" },
    { term: "pakistan vs sri lanka", volume: "10K+", change: "1,000%", status: "lasted-15h", lang: "en" },
    { term: "البرتغال ضد تشيلي", volume: "20K+", change: "1,000%", status: "active", lang: "ar" },
    { term: "usa vs germany", volume: "5K+", change: "1,000%", status: "lasted-11h", lang: "en" },
    { term: "brazil national football team", volume: "2K+", change: "800%", status: "lasted-10h", lang: "en" },
    { term: "الأرجنتين ضد هندوراس", volume: "5K+", change: "1,000%", status: "active", lang: "ar" },
    { term: "argentina", volume: "1K+", change: "600%", status: "lasted-7h", lang: "en" },
  ]

  const topMatch = trends.find((t) => t.term === "brazil vs egypt")
  const egyptTerm = products.find((p) => /egypt/i.test(p.name))

  return (
    <section className="py-12 sm:py-16 px-4 bg-surface-2/40 border-y border-zinc-800" aria-label="Trending search topics">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-brand text-sm font-semibold uppercase tracking-widest">
                Trending Now
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                LIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What people are searching right now
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Live search trends from Google — click any topic to search.
            </p>
          </div>
          <div className="text-xs text-zinc-500">
            Updated {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </div>
        </div>

        {topMatch && egyptTerm && (
          <a
            href={egyptTerm.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 p-4 sm:p-5 bg-gradient-to-r from-brand/10 via-amber-500/5 to-brand/10 border border-brand/30 rounded-2xl hover:border-brand/60 transition-colors group"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-0.5">
                    Top trend
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg">
                    {topMatch.term} <span className="text-zinc-400 font-normal text-sm">is trending</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand font-black text-sm">
                  {topMatch.volume} searches
                </span>
                <span className="text-xs text-zinc-500 group-hover:text-brand transition-colors">
                  Shop the jersey →
                </span>
              </div>
            </div>
          </a>
        )}

        <div className="flex flex-wrap gap-2.5">
          {trends.map((t, i) => {
            const q = encodeURIComponent(t.term)
            const searchUrl = `https://www.google.com/search?q=${q}`
            const isActive = t.status === "active"
            return (
              <a
                key={i}
                href={searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 bg-surface border border-zinc-800 hover:border-brand rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-sm text-zinc-200 group-hover:text-white font-medium" dir={t.lang === "ar" ? "rtl" : "ltr"}>
                  {t.term}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-500">{t.change}</span>
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                )}
              </a>
            )
          })}
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Active trend
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
              Lasted X hours
            </span>
          </div>
          <a
            href="https://trends.google.com/trends/trendingsearches/daily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-brand transition-colors"
          >
            View Google Trends →
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrendingTopics
