import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import FAQSection from "../components/FAQSection"
import useSEO from "../hooks/useSEO"
import { buildFAQSchema, buildBreadcrumbSchema } from "../utils/schemas"

const matchesFAQs = [
  {
    q: "When does FIFA 2026 start and end?",
    a: "FIFA 2026 World Cup runs from June 11 to July 19, 2026 — 39 days of football. The opening match is at Estadio Azteca in Mexico City on June 11, and the final is at MetLife Stadium in New York/New Jersey on July 19.",
  },
  {
    q: "How many matches are in FIFA 2026?",
    a: "FIFA 2026 has 104 total matches — 23 more than the 2022 World Cup. There are 72 group stage matches (48 teams in 12 groups), 16 Round of 32, 8 Round of 16, 4 quarterfinals, 2 semifinals, the third-place playoff, and the Final.",
  },
  {
    q: "How can I watch FIFA 2026 matches online?",
    a: "FIFA 2026 broadcast rights: USA on FOX, FS1, Telemundo, and Peacock (streaming). UK on BBC, ITV, STV. Canada on TUDN, TSN, CTV, RDS. Mexico on TelevisaUnivision. YouTube TV, Hulu + Live TV, and FuboTV also carry FOX matches. FIFA+ offers free highlights and selected matches.",
  },
  {
    q: "What are the FIFA 2026 group stage dates?",
    a: "Group stage runs June 11 – 27, 2026. 72 matches across 17 days. Top 2 from each group plus the 8 best 3rd-place teams (out of 12) advance to the Round of 32, which begins June 28.",
  },
  {
    q: "Where is the FIFA 2026 Final?",
    a: "The FIFA 2026 Final is on July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey, USA (capacity 82,500). The third-place match is on July 18 at Hard Rock Stadium in Miami.",
  },
  {
    q: "What is the FIFA 2026 match format?",
    a: "48 teams in 12 groups (A-L), 4 teams each. Top 2 + 8 best 3rd-place teams advance. Round of 32 (June 28 – July 3), Round of 16 (July 4-7), Quarterfinals (July 10-11), Semifinals (July 14-15), Third-Place (July 18), Final (July 19).",
  },
  {
    q: "Can I attend multiple FIFA 2026 matches?",
    a: "Yes — FIFA offers multi-match ticket packages. You can buy tickets to all matches in a specific team, all matches at a specific stadium, or follow-the-team packages. Travel packages include hotel + match tickets for 4+ matches.",
  },
  {
    q: "What time are FIFA 2026 matches played?",
    a: "FIFA 2026 matches are scheduled in multiple kickoff slots to accommodate global TV: typically 12pm, 3pm, 6pm, and 9pm local time in each host country. With 3 time zones (Pacific, Central, Eastern), matches span from morning to late night across North America.",
  },
]

const FIFAMatchesPage = () => {
  useSEO({
    title: "FIFA 2026 World Cup Matches — Schedule, Fixtures, Live Scores & Watch Online",
    description: "Complete FIFA 2026 World Cup match schedule: 104 matches, June 11 – July 19, 2026 across 16 stadiums in USA, Mexico, Canada. Group stage fixtures, knockout brackets, live scores, results, and how to watch FIFA 2026 online via FOX, BBC, ITV, TUDN, Peacock, FIFA+ streaming.",
    path: "/fifa-matches",
    keywords: "fifa matches, fifa 2026 matches, fifa match schedule, world cup matches, fifa fixtures, fifa watch online, fifa live, fifa live scores, fifa stream, fifa 2026 fixtures, world cup 2026 matches, fifa group stage, fifa knockout stage, fifa quarterfinals, fifa semifinals, fifa final 2026, fifa streaming, watch fifa 2026, fifa 2026 watch online, fifa schedule pdf, fifa results",
    jsonLd: {
      ...buildFAQSchema(matchesFAQs),
      ...buildBreadcrumbSchema([
        { name: "Home", url: "https://fifa26.page/" },
        { name: "FIFA 2026 Matches", url: "https://fifa26.page/fifa-matches" },
      ]),
    },
    jsonLdId: "matches-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Matches
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 World Cup Matches
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Complete FIFA 2026 World Cup match schedule, fixtures, live scores, results, group stage, knockout brackets, and match predictions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { title: "Group Stage", desc: "48 teams, 12 groups, 72 matches, June 2026", icon: "🏆", href: "/fifa-group-stage" },
            { title: "Knockout Stage", desc: "Round of 16 to Final, July 2026", icon: "⚔️", href: "/fifa-knockout" },
            { title: "Live Scores", desc: "Real-time updates, stats, lineups, VAR decisions", icon: "📊", href: "/fifa-live-scores" },
            { title: "Predictions", desc: "Expert picks, fan votes, bracket challenges", icon: "🔮", href: "/fifa-predictions" },
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

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            FIFA 2026 Match Schedule Overview
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phase: "Opening Match", date: "June 11, 2026", stadium: "Estadio Azteca, Mexico City" },
              { phase: "Group Stage", date: "June 11 – 27, 2026", stadium: "16 Stadiums Across 3 Nations" },
              { phase: "Round of 32", date: "June 28 – July 3, 2026", stadium: "8 Stadiums" },
              { phase: "Round of 16", date: "July 4 – 7, 2026", stadium: "4 Stadiums" },
              { phase: "Quarterfinals", date: "July 10 – 11, 2026", stadium: "2 Stadiums" },
              { phase: "Semifinals", date: "July 14 – 15, 2026", stadium: "2 Stadiums" },
              { phase: "Third Place", date: "July 18, 2026", stadium: "Hard Rock Stadium, Miami" },
              { phase: "Final", date: "July 19, 2026", stadium: "MetLife Stadium, New York" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-2 border border-zinc-800">
                <span className="text-brand text-xs font-extrabold uppercase tracking-wider">{item.phase}</span>
                <p className="text-white font-semibold mt-1">{item.date}</p>
                <p className="text-zinc-500 text-sm">{item.stadium}</p>
              </div>
            ))}
          </div>
        </div>

        <FAQSection
          title="FIFA 2026 Matches — FAQ"
          faqs={matchesFAQs}
        />

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Never Miss a FIFA 2026 Match
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Join our community for live match threads, predictions, and instant score alerts.
          </p>
          <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
            Join Match Discussions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Match Day Gear" count={12} />
    </main>
  )
}

export default FIFAMatchesPage
