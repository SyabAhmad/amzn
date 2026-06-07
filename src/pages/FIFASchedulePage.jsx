import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import BigPosterSeven from "../components/BigPosterSeven"
import FAQSection from "../components/FAQSection"
import useSEO from "../hooks/useSEO"
import { buildFAQSchema, buildBreadcrumbSchema } from "../utils/schemas"

const scheduleFAQs = [
  {
    q: "What is the FIFA 2026 match schedule?",
    a: "FIFA 2026 runs June 11 – July 19, 2026. Group stage: June 11-27. Round of 32: June 28 – July 3. Round of 16: July 4-7. Quarterfinals: July 10-11. Semifinals: July 14-15. Third-place: July 18. Final: July 19 at MetLife Stadium.",
  },
  {
    q: "When is the FIFA 2026 opening match?",
    a: "The FIFA 2026 opening match is June 11, 2026 at Estadio Azteca in Mexico City, Mexico. It will be the third time Mexico hosts an opening match (after 1970 and 1986).",
  },
  {
    q: "When is the FIFA 2026 Final?",
    a: "The FIFA 2026 Final is July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey, USA. Kickoff is at 3pm ET (12pm PT). This will be the first men's World Cup Final held in the New York metro area.",
  },
  {
    q: "What time zone are FIFA 2026 matches played in?",
    a: "Matches are played across 3 time zones: Pacific (Los Angeles, San Francisco, Seattle), Central (Dallas, Houston, Kansas City, Atlanta, Mexico City), and Eastern (Miami, Philadelphia, New York, Toronto). FIFA uses local stadium time in all broadcasts.",
  },
  {
    q: "How can I add FIFA 2026 matches to my calendar?",
    a: "Once FIFA releases the full schedule with kickoff times, you can subscribe via Google Calendar, Apple Calendar, Outlook, or Yahoo. We'll publish direct calendar links as soon as they're available — bookmark this page for updates.",
  },
  {
    q: "How many rest days are between FIFA 2026 matches?",
    a: "Teams playing in the group stage have at least 3 rest days between matches. In the knockout stage, teams have 3-4 days between rounds. The final is 4 days after the semifinals to allow travel and recovery.",
  },
]

const FIFASchedulePage = () => {
  useSEO({
    title: "FIFA 2026 Schedule — Full Match Calendar, Dates, Kickoff Times & TV",
    description: "Complete FIFA 2026 World Cup match schedule. June 11 – July 19, 2026. 104 matches across 16 stadiums. Download the FIFA 2026 calendar with all dates, kickoff times, and TV broadcast info. Add to Google, Apple, or Outlook calendar.",
    path: "/fifa-schedule",
    keywords: "fifa schedule, fifa 2026 schedule, world cup 2026 schedule, fifa 2026 calendar, fifa 2026 dates, fifa match dates, fifa 2026 tv schedule, world cup calendar, fifa 2026 kickoff times, fifa 2026 opening match, fifa 2026 final date, fifa 2026 group stage dates",
    jsonLd: {
      ...buildFAQSchema(scheduleFAQs),
      ...buildBreadcrumbSchema([
        { name: "Home", url: "https://fifa26.page/" },
        { name: "FIFA 2026 Schedule", url: "https://fifa26.page/fifa-schedule" },
      ]),
    },
    jsonLdId: "schedule-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Full Match Schedule
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Complete FIFA 2026 World Cup schedule — all 104 matches, dates, kickoff times, stadiums, and TV broadcast info.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { title: "June 11, 2026", desc: "Opening Match — Mexico City", icon: "🎬" },
            { title: "June 11–27", desc: "Group Stage — 72 matches", icon: "⚽" },
            { title: "June 28 – July 3", desc: "Round of 32 — 16 matches", icon: "🎯" },
            { title: "July 4–7", desc: "Round of 16 — 8 matches", icon: "🔫" },
            { title: "July 10–11", desc: "Quarterfinals — 4 matches", icon: "🔥" },
            { title: "July 14–15", desc: "Semifinals — 2 matches", icon: "💥" },
            { title: "July 18, 2026", desc: "Third Place — Miami", icon: "🥉" },
            { title: "July 19, 2026", desc: "FINAL — New York", icon: "🏆" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all text-center">
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            How to Watch FIFA 2026
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { region: "USA 🇺🇸", broadcasters: "FOX, FS1, Telemundo, Peacock" },
              { region: "UK 🇬🇧", broadcasters: "BBC, ITV, STV" },
              { region: "Canada 🇨🇦", broadcasters: "TSN, CTV, RDS" },
              { region: "Mexico 🇲🇽", broadcasters: "TelevisaUnivision, TUDN" },
              { region: "Europe 🇪🇺", broadcasters: "EBU (varies by country)" },
              { region: "Asia 🌏", broadcasters: "Sony, BeIN, CCTV" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-2 border border-zinc-800">
                <p className="text-brand text-xs font-extrabold uppercase tracking-wider">{item.region}</p>
                <p className="text-white font-semibold mt-1 text-sm">{item.broadcasters}</p>
              </div>
            ))}
          </div>
        </div>

        <FAQSection
          title="FIFA 2026 Schedule — FAQ"
          faqs={scheduleFAQs}
        />

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Plan Your FIFA 2026 Calendar
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Bookmark this page. Join our community for schedule reminders and live match threads.
          </p>
          <Link to="/fifa-matches" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            View Match Details
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <BigPosterSeven />
      <RandomProducts title="Schedule Your Style" count={12} />
    </main>
  )
}

export default FIFASchedulePage
