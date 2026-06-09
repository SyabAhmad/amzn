import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"
import products from "../data/products"

const FIFAWAtchLivePage = () => {
  useSEO({
    title: "Watch FIFA 2026 Live Online Free | World Cup Streaming, TV Channels & Match Replays",
    description: "Watch FIFA World Cup 2026 live online free. Full match streaming guide: official broadcasters, free trials, VPN access, Peacock, Fox Sports, BBC iPlayer, Telemundo, and global TV channels. Never miss a match.",
    path: "/fifa-watch-live",
    keywords: "watch fifa 2026 live, watch fifa 2026 live free, fifa world cup 2026 live stream free, fifa 2026 streaming, world cup 2026 live online free, watch world cup 2026 free online, fifa 2026 live streaming reddit, fifa 2026 free stream, fifa 2026 tv channels, fifa 2026 broadcasters, stream fifa 2026 live, fifa 2026 live stream reddit, watch fifa world cup 2026 online free, fifa 2026 live stream peacock, fifa 2026 how to watch, fifa 2026 free online stream, world cup 2026 live stream reddit, fifa 2026 streaming free, watch fifa 2026 online free no sign up, fifa 2026 watch live free online, fifa 2026 live feed, fifa 2026 watch anywhere, world cup 2026 live streaming free, fifa 2026 free live online, fifa 2026 full match replay, fifa 2026 highlights online",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "Watch FIFA 2026 Live", url: "https://fifa26.page/fifa-watch-live" },
    ]),
    jsonLdId: "watchlive-jsonld",
  })

  const jerseyProduct = products.find(p => /jersey/i.test(p.name))

  const broadcasters = [
    { country: "USA 🇺🇸", channels: "Fox, FS1, FS2, Telemundo, Peacock", type: "Cable + Streaming", free: "Peacock (7-day trial), Fox (OTA)" },
    { country: "UK 🇬🇧", channels: "BBC, ITV", type: "Free-to-air", free: "BBC iPlayer, ITVX — completely free" },
    { country: "Canada 🇨🇦", channels: "TSN, RDS, CTV", type: "Cable + Streaming", free: "CTV (free OTA)" },
    { country: "Mexico 🇲🇽", channels: "Azteca, Televisa, ViX", type: "Cable + Streaming", free: "Azteca (free OTA)" },
    { country: "Germany 🇩🇪", channels: "ARD, ZDF, MagentaTV", type: "Free + Paid", free: "ARD, ZDF — free public broadcast" },
    { country: "France 🇫🇷", channels: "TF1, M6, beIN Sports", type: "Free + Paid", free: "TF1, M6 (free OTA)" },
    { country: "Spain 🇪🇸", channels: "RTVE, Movistar+", type: "Free + Paid", free: "RTVE (free OTA)" },
    { country: "Australia 🇦🇺", channels: "Optus Sport, SBS", type: "Streaming + Free", free: "SBS (free)" },
    { country: "Brazil 🇧🇷", channels: "Globo, SporTV, CazéTV", type: "Free + Cable + YouTube", free: "Globo, CazéTV (free)" },
    { country: "Argentina 🇦🇷", channels: "TyC Sports, Telefe", type: "Cable + Free", free: "Telefe (free OTA)" },
    { country: "Japan 🇯🇵", channels: "NHK, Abema, DAZN", type: "Free + Streaming", free: "NHK, Abema (free)" },
    { country: "Middle East 🌍", channels: "beIN Sports, SSC, TOD", type: "Paid + Streaming", free: "TOD (free tier)" },
  ]

  const freeMethods = [
    { icon: "🆓", title: "Free Trials", desc: "Peacock (7 days), FuboTV (7 days), YouTube TV (14 days), Sling TV (3 days). Cancel before charged." },
    { icon: "📡", title: "Free OTA Channels", desc: "Fox, Telemundo, BBC, ITV, ARD, ZDF, TF1, M6, Globo, Telefe, SBS — all free with antenna in supported countries." },
    { icon: "🌐", title: "VPN for Free Access", desc: "Use a VPN to access free broadcasts from other countries. BBC iPlayer (UK), SBS (AU), Globo (BR) — all free with VPN." },
    { icon: "📱", title: "Free Mobile Apps", desc: "Peacock, BBC iPlayer, ITVX, Fox Sports, Telemundo Deportes — free mobile apps with live streaming." },
    { icon: "🎥", title: "FIFA+", desc: "FIFA's official free platform. Select matches, highlights, replays, and original content. No subscription needed." },
    { icon: "⚽", title: "YouTube & Social", desc: "CazéTV (Brazil, free on YouTube), FIFA YouTube (highlights), Twitter/X clips, Instagram reels." },
  ]

  const faqs = [
    { q: "Can I watch FIFA 2026 live for free?", a: "Yes. Many countries have free-to-air broadcasters: Fox (USA OTA), BBC (UK), ARD/ZDF (Germany), TF1/M6 (France), Globo (Brazil), SBS (Australia). You can also use free trials on Peacock, FuboTV, and YouTube TV." },
    { q: "What is the best free stream for FIFA 2026?", a: "The best free options are BBC iPlayer (UK), ARD/ZDF (Germany), SBS (Australia), and Peacock free trial (USA). All are legal, HD quality, and reliable." },
    { q: "Can I watch FIFA 2026 with a VPN?", a: "Absolutely. Connect to a VPN server in a country with free coverage (UK for BBC iPlayer, Australia for SBS, Brazil for Globo) and stream legally for free." },
    { q: "Where can I watch FIFA 2026 matches on my phone?", a: "Download Peacock, BBC iPlayer, Fox Sports, Telemundo Deportes, or FIFA+ apps. All support mobile streaming." },
    { q: "Will FIFA 2026 be on Peacock?", a: "Yes. Peacock will stream every match live in the USA for $5.99/mo. New users get a 7-day free trial." },
    { q: "How can I watch FIFA 2026 without cable?", a: "Use streaming services: Peacock, FuboTV, YouTube TV, Sling TV. Most offer free trials. Or use a VPN + free OTA channels." },
    { q: "Where can I watch FIFA 2026 replays?", a: "FIFA+ has full match replays. Peacock and BBC iPlayer also offer on-demand replays." },
    { q: "Is there a FIFA 2026 live stream on Reddit?", a: "Reddit streams are unauthorized and often taken down. Use the free legal options above for reliable HD streams." },
  ]

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">Watch Live Free</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            Watch FIFA 2026 Live Online Free — Full Streaming Guide
          </h1>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto text-lg">
            Watch FIFA World Cup 2026 live online free from anywhere in the world. Complete guide to free streams, TV channels, VPN access, mobile apps, and match replays. Best free ways to watch every match.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {freeMethods.map((tip, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-brand/50 transition-all">
              <span className="text-2xl mb-2 block">{tip.icon}</span>
              <h3 className="text-white font-bold text-base mb-1">{tip.title}</h3>
              <p className="text-zinc-400 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>

        {jerseyProduct && (
          <Link
            to={`/product/${jerseyProduct.id}`}
            className="block mb-12 p-5 sm:p-6 bg-gradient-to-r from-brand/10 via-amber-500/5 to-brand/10 border border-brand/30 rounded-2xl hover:border-brand/60 transition-all group"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-1">Get Match Ready</div>
                <div className="text-white font-bold text-lg group-hover:text-brand transition-colors">
                  Shop Official FIFA 2026 Jerseys & Gear
                </div>
                <div className="text-zinc-400 text-sm mt-1">Wear your colors while you watch. Free shipping available.</div>
              </div>
              <span className="px-5 py-2.5 bg-brand text-black font-bold text-sm rounded-full group-hover:bg-brand-light transition-colors">
                Shop Now →
              </span>
            </div>
          </Link>
        )}

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-4">
            Official Broadcasters — Free & Paid by Country
          </h2>
          <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto text-sm">
            Every country's official rights holder. Many offer free coverage. Click links to start watching legally.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-2 border-b border-zinc-800">
                  <th className="text-left p-4 text-zinc-300 font-semibold">Country</th>
                  <th className="text-left p-4 text-zinc-300 font-semibold">Channels</th>
                  <th className="text-left p-4 text-zinc-300 font-semibold">Type</th>
                  <th className="text-left p-4 text-zinc-300 font-semibold hidden sm:table-cell">Free Options</th>
                </tr>
              </thead>
              <tbody>
                {broadcasters.map((b, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-surface-2/50">
                    <td className="p-4 text-white font-medium">{b.country}</td>
                    <td className="p-4 text-zinc-300">{b.channels}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-semibold rounded-full uppercase tracking-wider">{b.type}</span>
                    </td>
                    <td className="p-4 text-zinc-400 text-xs hidden sm:table-cell">{b.free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            FIFA 2026 League Standings & Stats
          </h2>
          <div className="bg-surface-2 rounded-2xl border border-zinc-800 p-4 sm:p-6 flex justify-center overflow-hidden">
            <div
              dangerouslySetInnerHTML={{
                __html: `
<api-sports-widget data-type="leagues"></api-sports-widget>
<api-sports-widget data-type="config"
  data-key="7ae542f5f582aa0e01d8076075486419"
  data-sport="football"
  data-lang="en"
  data-theme="white"
  data-show-errors="true"
></api-sports-widget>
<script src="https://widgets.api-sports.io/2.0/widgets.js" async></script>
`.trim()
              }}
            />
          </div>
          <p className="text-zinc-500 text-xs text-center mt-3">Powered by API-Sports. Live standings, stats & fixtures.</p>
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
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

        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-600/10 to-brand/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Watch Legally — It's Free in Your Country
          </h2>
          <p className="text-zinc-400 mb-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Before searching for pirate streams — check if FIFA 2026 is free in your country. Over 50 countries have free-to-air coverage. Use the broadcaster table above. Free trials are available in the USA (Peacock, FuboTV, YouTube TV). Support the sport you love.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/fifa-schedule" className="px-6 py-3 bg-brand text-black font-bold text-sm rounded-full hover:bg-brand-light transition-all">
              View Match Schedule
            </Link>
            <Link to="/" className="px-6 py-3 border border-zinc-700 text-white font-semibold text-sm rounded-full hover:bg-white/5 transition-all">
              Shop Game Day Gear
            </Link>
          </div>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Watch Party Essentials" count={12} />
    </main>
  )
}

export default FIFAWAtchLivePage
