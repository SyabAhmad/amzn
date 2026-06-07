import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema, buildFAQSchema } from "../utils/schemas"

const FIFAWorldCupSchedulePage = () => {
  const faqs = [
    { q: "When does FIFA World Cup 2026 start?", a: "The tournament opens on June 11, 2026, with the opening match at Estadio Azteca in Mexico City." },
    { q: "When is the FIFA 2026 final?", a: "The final will be played on July 19, 2026, at MetLife Stadium in New York/New Jersey." },
    { q: "How many matches are in FIFA 2026?", a: "There are 104 matches total — the largest World Cup ever with 48 teams." },
    { q: "Where can I find the full FIFA 2026 schedule?", a: "This page has the complete calendar. You can also download it to Google Calendar, Apple Calendar, or Outlook." },
    { q: "What are the match dates for the knockout stages?", a: "Round of 32: June 28–July 3, Round of 16: July 4–7, Quarterfinals: July 10–11, Semifinals: July 14–15, Final: July 19." },
  ]

  useSEO({
    title: "FIFA World Cup 2026 Schedule | Calendar, Dates, Times & Bracket",
    description: "FIFA World Cup 2026 full schedule calendar. June-July 2026 matches. Add to Google Calendar, Apple Calendar, or Outlook. All dates, kickoff times, and venues.",
    path: "/fifa-world-cup-schedule",
    keywords: "fifa world cup 2026 schedule, world cup 2026 calendar, fifa 2026 dates, fifa 2026 calendar download, fifa 2026 add to calendar, world cup schedule 2026",
    jsonLd: {
      ...buildBreadcrumbSchema([
        { name: "Home", url: "https://fifa26.page/" },
        { name: "FIFA World Cup 2026 Schedule", url: "https://fifa26.page/fifa-world-cup-schedule" },
      ]),
      ...buildFAQSchema(faqs),
    },
    jsonLdId: "wc-schedule-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            World Cup Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA World Cup 2026 Schedule
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Your complete FIFA World Cup 2026 calendar — every match, every date, every stadium, every kickoff time. Don't miss a moment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              month: "June 2026",
              events: [
                "June 11 — Opening Match (Mexico City)",
                "June 11–17 — Matchday 1 (36 matches)",
                "June 18–24 — Matchday 2 (36 matches)",
                "June 25–27 — Matchday 3 (36 matches)",
              ],
            },
            {
              month: "July 2026",
              events: [
                "June 28 – July 3 — Round of 32 (16 matches)",
                "July 4–7 — Round of 16 (8 matches)",
                "July 10–11 — Quarterfinals (4 matches)",
                "July 14–15 — Semifinals (2 matches)",
                "July 18 — Third Place Match (Miami)",
                "July 19 — FINAL 🏆 (MetLife Stadium, NY)",
              ],
            },
          ].map((section, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-2 border border-zinc-800">
              <h2 className="text-2xl font-black text-white mb-4">{section.month}</h2>
              <ul className="space-y-2">
                {section.events.map((event, j) => (
                  <li key={j} className="text-zinc-300 text-sm flex items-start gap-2">
                    <span className="text-brand">⚽</span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Add to Your Calendar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { platform: "Google Calendar", icon: "📅" },
              { platform: "Apple Calendar", icon: "🍎" },
              { platform: "Outlook", icon: "📧" },
              { platform: "Yahoo Calendar", icon: "📆" },
            ].map((item, i) => (
              <button
                key={i}
                className="p-5 rounded-xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all text-center"
              >
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="text-white font-semibold text-sm">{item.platform}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Countdown to FIFA 2026
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Join the community for countdown timers, reminders, and match alerts.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Community
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
      <RandomProducts title="Schedule Ready" count={12} />
    </main>
  )
}

export default FIFAWorldCupSchedulePage
