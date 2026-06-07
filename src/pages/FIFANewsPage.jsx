import { Link } from "react-router-dom"
import posts from "../data/posts"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const FIFANewsPage = () => {
  useSEO({
    title: "FIFA 2026 News | Latest Updates, Rumors, Transfers & World Cup Updates",
    description: "Breaking FIFA 2026 World Cup news: squad announcements, ticket updates, stadium preparations, sponsor deals, transfer rumors, and exclusive insights. Updated daily.",
    path: "/fifa-news",
    keywords: "fifa news, fifa 2026 news, world cup 2026 news, fifa latest news, fifa transfer news, fifa squad news, fifa breaking news, world cup news today",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "FIFA 2026 News", url: "https://fifa26.page/fifa-news" },
    ]),
    jsonLdId: "news-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            News
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Latest News
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Breaking FIFA 2026 World Cup news: squad announcements, ticket updates, stadium preparations, sponsor deals, and exclusive insights.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-semibold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-zinc-600 text-xs ml-auto">{post.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand transition-colors mb-3">
                {post.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Breaking News Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Squad Announcements",
              "Injury Updates",
              "Transfer Rumors",
              "Stadium News",
              "Ticket Updates",
              "Schedule Changes",
              "Sponsor Deals",
              "VAR & Rule Changes",
            ].map((item, i) => (
              <Link
                key={i}
                to="/blog"
                className="p-4 rounded-xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all text-center"
              >
                <span className="text-white font-semibold text-sm">{item}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Stay Updated on FIFA 2026
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Bookmark this page and join our community for instant FIFA 2026 news alerts.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Community for News Alerts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <BigPosterSeven />
      <RandomProducts title="Trending Gear" count={12} />
    </main>
  )
}

export default FIFANewsPage
