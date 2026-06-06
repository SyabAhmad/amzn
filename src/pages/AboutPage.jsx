import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const AboutPage = () => {
  useSEO({
    title: "About FIFA 2026 Store — Our Mission, Team & Story",
    description: "Learn about FIFA 2026 Store — the largest affiliate destination for FIFA World Cup 2026 gear, tickets info, match schedules, host city guides, and fan community. Our mission: help every fan gear up for the world's biggest football event.",
    path: "/about",
    keywords: "about fifa 2026 store, fifa 2026 affiliate, fifa 2026 mission, fifa 2026 team, fifa 2026 about us, world cup 2026 store",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "About", url: "https://fifa26.page/about" },
    ]),
    jsonLdId: "about-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            About FIFA 2026 Store
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            We're football fans building the most helpful destination for FIFA 2026 World Cup gear, info, and community.
          </p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300 leading-relaxed">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800">
            <h2 className="text-2xl font-black text-white mb-4">Our Mission</h2>
            <p>
              FIFA 2026 is the largest World Cup in history — 48 teams, 104 matches, 16 stadiums across USA, Mexico, and Canada. Our mission is to be the one-stop destination that helps every fan:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-zinc-400">
              <li>Discover the best official gear, jerseys, and fan accessories at the best Amazon prices</li>
              <li>Get accurate, up-to-date information on tickets, schedules, host cities, and live scores</li>
              <li>Connect with a global community of football fans for match discussions, predictions, and fan meetups</li>
              <li>Stay informed with breaking FIFA 2026 news, transfer rumors, and squad announcements</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800">
            <h2 className="text-2xl font-black text-white mb-4">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "50+ Curated Products", desc: "Hand-picked FIFA 2026 gear from jerseys to sneakers to fan accessories", icon: "🛍️" },
                { title: "Complete Tournament Info", desc: "Tickets, schedule, host cities, knockout brackets, and live scores", icon: "📊" },
                { title: "Fan Community", desc: "Discord, Reddit, Telegram groups and discussion forums", icon: "🌍" },
                { title: "News & Updates", desc: "Daily FIFA 2026 news, transfer rumors, and squad announcements", icon: "📰" },
                { title: "Match Predictions", desc: "Expert picks, fan brackets, and golden boot race updates", icon: "🔮" },
                { title: "Host City Guides", desc: "Travel tips, accommodation, fan zones, and stadium info", icon: "🏟️" },
              ].map((it, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-3 border border-zinc-800">
                  <span className="text-2xl mb-2 block">{it.icon}</span>
                  <h3 className="text-white font-bold mb-1">{it.title}</h3>
                  <p className="text-zinc-400 text-sm">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800">
            <h2 className="text-2xl font-black text-white mb-4">Affiliate Disclosure</h2>
            <p>
              FIFA 2026 Store is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn fees by linking to Amazon.com and affiliated sites. As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <p className="mt-3">
              Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800">
            <h2 className="text-2xl font-black text-white mb-4">Our Team</h2>
            <p>
              We're a small, passionate team of football fans, content creators, and engineers based across the US, UK, and Brazil. We've been covering football tournaments since 2018 and have built communities of 100,000+ fans across our social channels.
            </p>
            <p className="mt-3">
              We don't claim to be FIFA, UEFA, or any official organization. We're independent fans who want to make the World Cup experience easier for everyone.
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Join the FIFA 2026 Community
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Have questions or feedback? Want to partner with us? We'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Contact Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Fan Favorites" count={12} />
    </main>
  )
}

export default AboutPage
