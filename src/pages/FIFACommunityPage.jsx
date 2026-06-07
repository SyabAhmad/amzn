import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema, buildFAQSchema } from "../utils/schemas"

const FIFACommunityPage = () => {
  const faqs = [
    { q: "How do I join the FIFA 2026 community?", a: "Join our Discord server, Reddit community (r/FIFA2026Community), or Telegram groups linked on this page to connect with fans worldwide." },
    { q: "Are there official FIFA 2026 fan events?", a: "Yes, FIFA organizes official fan festivals in host cities. Check the FIFA website for announcements about Fan Fest locations and dates." },
    { q: "Can I create my own FIFA 2026 fan group?", a: "Absolutely! Many fans create local supporter groups. Use social media to find others in your area and organize meetups." },
    { q: "Where can I discuss matches live during FIFA 2026?", a: "Our Discord has real-time match threads, voice channels, and dedicated channels for each match." },
    { q: "How do I find fans from my country?", a: "Visit the Fan Groups page to find country-specific communities and connect with fellow supporters." },
  ]

  useSEO({
    title: "FIFA 2026 Community | Fan Forum, Discussions & World Cup Groups",
    description: "Join the global FIFA 2026 fan community. Match discussions, fan groups, predictions, supporter meetups, Discord servers, Reddit communities, and Telegram groups for World Cup 2026 fans.",
    path: "/fifa-community",
    keywords: "fifa community, fifa 2026 community, world cup community, fifa fan forum, fifa discord, fifa reddit, fifa telegram, fifa fan groups, fifa match discussions, fifa supporters",
    jsonLd: {
      ...buildBreadcrumbSchema([
        { name: "Home", url: "https://fifa26.page/" },
        { name: "FIFA 2026 Community", url: "https://fifa26.page/fifa-community" },
      ]),
      ...buildFAQSchema(faqs),
    },
    jsonLdId: "community-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Community
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Community Hub
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Join the global football conversation. Connect with fans, discuss FIFA 2026 World Cup matches, share predictions, and find your tribe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            {
              title: "Match Discussions",
              desc: "Live threads for every FIFA 2026 match",
              icon: "⚽",
              href: "/fifa-matches"
            },
            {
              title: "Fan Groups",
              desc: "Find your country's supporter community",
              icon: "🌍",
              href: "/fifa-fan-groups"
            },
            {
              title: "Predictions",
              desc: "Share scores, brackets & winner picks",
              icon: "🔮",
              href: "/fifa-predictions"
            },
            {
              title: "Tickets & Travel",
              desc: "Official info, resale & travel tips",
              icon: "✈️",
              href: "/fifa-tickets"
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

        <div className="border-t border-zinc-800 pt-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Connect with FIFA 2026 Fans Worldwide
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Discord Server",
                desc: "Real-time chat during matches, voice channels, fan art, memes",
                link: "#"
              },
              {
                title: "Reddit Community",
                desc: "r/FIFA2026Community - 50K+ members, daily threads, AMAs",
                link: "#"
              },
              {
                title: "Telegram Groups",
                desc: "Instant notifications, match alerts, ticket drops, travel buddies",
                link: "#"
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all"
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{item.desc}</p>
                <span className="text-brand text-sm font-semibold">Join →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready for FIFA 2026 World Cup?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Shop official gear, find tickets, join the community — all in one place.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Shop FIFA 2026 Gear
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
      <RandomProducts title="Fan Favorites" count={12} />
    </main>
  )
}

export default FIFACommunityPage
