import { useState } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import WatchLivePlayer from "../components/WatchLivePlayer"
import ApiSportsWidget from "../components/ApiSportsWidget"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"
import products from "../data/products"

const FIFAWAtchLivePage = () => {
  const [adProducts] = useState(() => {
    const pool = products.filter(p => p.id !== 84)
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  })
  const [leftCol, rightCol] = [adProducts.slice(0, 3), adProducts.slice(3, 6)]

  useSEO({
    title: "Watch FIFA 2026 Live Online Free — World Cup 2026 Live Stream, TV Channels & Full Match Replays",
    description: "Watch FIFA World Cup 2026 live online free in HD. Free live stream, official broadcasters by country: Fox, BBC, ITV, Peacock, Telemundo, ARD, ZDF, Globo, SBS. Watch every match live — USA Mexico Canada 2026. No cable needed. VPN guide included.",
    path: "/fifa-watch-live",
    keywords: "watch fifa 2026 live, watch fifa 2026 live free, fifa world cup 2026 live stream free, fifa 2026 live streaming, world cup 2026 live online free, watch world cup 2026 free online, fifa 2026 live stream reddit, fifa 2026 free stream, fifa 2026 tv channels, fifa 2026 broadcasters, stream fifa 2026 live, watch fifa world cup 2026 online free, fifa 2026 live stream peacock, fifa 2026 how to watch, fifa 2026 free online stream, world cup 2026 live stream reddit, fifa 2026 streaming free, watch fifa 2026 online free no sign up, fifa 2026 watch live free online, fifa 2026 live feed, fifa 2026 watch anywhere, world cup 2026 live streaming free, fifa 2026 free live online, fifa 2026 full match replay, fifa 2026 highlights online, fifa world cup 2026 live, fifa 2026 live match today, world cup 2026 live stream free online, fifa 2026 live streaming free online, watch fifa world cup 2026 live streaming, fifa 2026 live stream fox, fifa 2026 live stream bbc, fifa 2026 live stream itv, fifa world cup 2026 free live stream, fifa 2026 live scores, fifa 2026 matches live, world cup 2026 live tv, fifa 2026 streaming platforms, fifa world cup 2026 watch online free, fifa 2026 match schedule live, fifa 2026 opening ceremony live, fifa 2026 final live stream, world cup 2026 free streaming no sign up, fifa 2026 online free hd, watch fifa 2026 live from anywhere, fifa 2026 live stream vpn, fifa world cup 2026 live in usa, fifa world cup 2026 live in uk, fifa world cup 2026 live in india, world cup 2026 live stream mobile, fifa 2026 highlights today, fifa 2026 match replay free, fifa 2026 live updates, fifa world cup 2026 streaming reddit, fifa 2026 live football, usa vs mexico fifa 2026 live, fifa 2026 group stage live, fifa 2026 knockout stage live, fifa 2026 semi final live, fifa 2026 world cup final live, watch fifa 2026 on phone, fifa 2026 smart tv stream, fifa 2026 chromecast live, fifa 2026 live stream youtube, fifa 2026 live stream twitch, worldcup 2026 live, fifa world cup 2026 live stream free online watch, how to watch fifa world cup 2026 live for free, fifa 2026 live stream free no subscription, fifa 2026 watch live free streaming, fifa world cup 2026 live telecast, fifa 2026 live match streaming sites, world cup 2026 live online hd, fifa 2026 live stream reddit soccer, fifa 2026 live stream mobile free, fifa 2026 live stream usa, fifa 2026 live stream canada, fifa 2026 live stream australia, fifa 2026 live stream uk, fifa 2026 live stream germany, fifa 2026 live stream france, fifa 2026 live stream brazil, fifa 2026 live stream argentina, fifa 2026 live stream spain, fifa 2026 live stream mexico, fifa 2026 live stream japan, fifa world cup 2026 live stream free hd no sign up, fifa 2026 world cup live scores, fifa world cup 2026 fixtures live, fifa 2026 live match alerts, fifa 2026 live notifications, watch fifa world cup 2026 live on roku, watch fifa world cup 2026 live on firestick, fifa 2026 live stream android, fifa 2026 live stream ios, fifa 2026 live stream laptop, fifa 2026 live stream pc, fifa 2026 hd live stream, fifa 2026 4k live stream, fifa world cup 2026 live online peacock, fifa world cup 2026 live fox sports, fifa world cup 2026 live bbc iplayer, fifa world cup 2026 live itvx, fifa 2026 live stream free trial, fifa 2026 watch live free no credit card, fifa 2026 live stream vpn free, best way to watch fifa 2026 live for free, fifa 2026 live stream website, fifa 2026 live streaming app, fifa 2026 match live today, fifa 2026 world cup schedule live, fifa 2026 live match time, fifa world cup 2026 live channel, fifa 2026 free live stream legal, fifa 2026 watch live on tv, fifa world cup 2026 live stream reddit 2026, fifa 2026 live stream crackstreams, fifa 2026 live stream sportsurge, fifa 2026 live stream streameast, fifa 2026 live stream buffstreams, fifa 2026 live stream footybite, fifa 2026 live stream totalsportek, fifa 2026 live stream rojadirecta, fifa 2026 live stream live soccer tv, fifa 2026 online stream free working, fifa world cup 2026 live stream link, fifa 2026 world cup live telecast free, where to watch fifa 2026 live, fifa 2026 match today live stream, fifa 2026 world cup live hd, fifa world cup 2026 live stream free reddit, fifa 2026 live stream no ads, watch fifa 2026 live without cable, fifa 2026 free live stream antenna, fifa 2026 live stream ota, fifa 2026 digital antenna live, fifa 2026 live stream free online watch now, fifa world cup 2026 live stream working, fifa 2026 match live link, fifa 2026 live stream youtube free, fifa 2026 live stream facebook, fifa 2026 live stream twitter, fifa 2026 live stream discord, fifa 2026 live stream telegram, fifa 2026 live stream whatsapp, fifa 2026 live stream group, fifa 2026 live streaming sites reddit, fifa 2026 world cup streaming online, fifa world cup 2026 live stream 4k, fifa 2026 live match today usa, fifa 2026 world cup 2026 streaming live, watch fifa world cup 2026 live stream free online today, fifa 2026 live match streaming online free, fifa world cup 2026 broadcast schedule live, fifa 2026 free live stream no sign in, fifa 2026 watch live stream free online hd, fifa 2026 live stream azteca, fifa 2026 live stream telemundo, fifa 2026 live stream uni mas, fifa 2026 live stream sbs, fifa 2026 live stream optus sport, fifa 2026 live stream tsn, fifa 2026 live stream ctv, fifa 2026 live stream rds, fifa 2026 live stream bein sports, fifa 2026 live stream tod tv, fifa 2026 live stream ssc, fifa 2026 live stream abema, fifa 2026 live stream dazn, fifa 2026 live stream spor tv, fifa 2026 live stream cazetv, fifa 2026 live stream globoplay, fifa world cup 2026 free live tv, fifa 2026 live stream channel list, fifa 2026 where to watch free, fifa 2026 watch live free reddit, fifa 2026 stream live free online, world cup 2026 free live stream hd, fifa world cup 2026 live stream ronaldo, fifa world cup 2026 live stream messi, fifa world cup 2026 live stream neymar, fifa world cup 2026 live stream mbappe, fifa 2026 live match highlights today, fifa 2026 full game replay free, fifa 2026 condensed match replay, fifa 2026 extended highlights, fifa 2026 goals today, fifa 2026 match summary live, fifa 2026 post match analysis live, fifa 2026 pre match show live, fifa 2026 half time analysis, fifa 2026 live commentary, fifa 2026 live radio stream, fifa 2026 live audio stream, world cup 2026 fan live stream, fifa 2026 stadium atmosphere live, fifa 2026 fan cam live, fifa 2026 live stream 24/7, fifa world cup 2026 live now, fifa 2026 match day live, fifa 2026 live streaming multi language, fifa 2026 live stream arabic, fifa 2026 live stream english, fifa 2026 live stream spanish, fifa 2026 live stream portuguese, fifa 2026 live stream french, fifa 2026 live stream german, fifa 2026 live stream turkish, fifa 2026 live stream italian, fifa 2026 live stream dutch, fifa 2026 live stream japanese, fifa 2026 live stream korean, fifa 2026 live stream hindi, fifa 2026 live stream urdu, fifa 2026 live stream bangla, fifa 2026 live stream tagalog, fifa 2026 live stream thai, fifa 2026 live stream vietnamese, fifa 2026 live stream indonesian, fifa 2026 live stream malay, fifa 2026 live stream chinese, fifa 2026 live stream russian, fifa 2026 live stream polish, fifa 2026 live stream swedish, fifa 2026 live stream norwegian, fifa 2026 live stream danish, fifa 2026 live stream finnish, fifa 2026 live stream czech, fifa 2026 live stream hungarian, fifa 2026 live stream romanian, fifa 2026 live stream greek, fifa 2026 live stream croatian, fifa 2026 live stream serbian, fifa 2026 live stream bulgarian, fifa 2026 live stream ukrainian, fifa 2026 live broadcast worldwide, fifa 2026 free streaming no account, fifa 2026 live match pass, fifa 2026 single match purchase, fifa 2026 pay per view live, fifa 2026 subscription free, watch fifa 2026 final live free, fifa 2026 semi final live free, fifa 2026 quarter final live free, fifa 2026 round of 16 live free, fifa 2026 group match live free, fifa 2026 opening match live free",
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
    <>
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
            <ApiSportsWidget />
          </div>
          <p className="text-zinc-500 text-xs text-center mt-3">Powered by API-Sports. Live standings, stats & fixtures.</p>
        </div>

        <div className="grid lg:grid-cols-[180px_1fr_180px] gap-4 mb-8 items-start">
          <div className="hidden lg:flex flex-col gap-4">
            {leftCol.map(p => (
              <a
                key={p.id}
                href={p.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group block bg-surface-2 rounded-xl border border-zinc-800 hover:border-brand/50 transition-all overflow-hidden"
              >
                <div className="aspect-square bg-surface-3">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="text-white font-semibold text-xs leading-snug line-clamp-2 mb-2">{p.name}</h3>
                  <span className="flex items-center justify-center gap-1 w-full px-3 py-1.5 bg-brand text-black text-[10px] font-extrabold rounded-lg hover:bg-amber-400 transition-colors">
                    Buy Now →
                  </span>
                </div>
              </a>
            ))}
            <div className="text-[10px] text-zinc-600 text-center uppercase tracking-widest font-semibold">Ad</div>
          </div>

          <div className="min-w-0">
            <WatchLivePlayer />
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            {rightCol.map(p => (
              <a
                key={p.id}
                href={p.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group block bg-surface-2 rounded-xl border border-zinc-800 hover:border-brand/50 transition-all overflow-hidden"
              >
                <div className="aspect-square bg-surface-3">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="text-white font-semibold text-xs leading-snug line-clamp-2 mb-2">{p.name}</h3>
                  <span className="flex items-center justify-center gap-1 w-full px-3 py-1.5 bg-brand text-black text-[10px] font-extrabold rounded-lg hover:bg-amber-400 transition-colors">
                    Buy Now →
                  </span>
                </div>
              </a>
            ))}
            <div className="text-[10px] text-zinc-600 text-center uppercase tracking-widest font-semibold">Ad</div>
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {adProducts.map(p => (
            <a
              key={p.id}
              href={p.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group block bg-surface-2 rounded-xl border border-zinc-800 hover:border-brand/50 transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] bg-surface-3">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-2.5">
                <h3 className="text-white font-semibold text-[10px] leading-snug line-clamp-2 mb-1.5">{p.name}</h3>
                <span className="flex items-center justify-center gap-1 w-full px-2 py-1.5 bg-brand text-black text-[10px] font-extrabold rounded-lg hover:bg-amber-400 transition-colors">
                  Buy Now →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-12 mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-12 text-xs text-zinc-600 select-none">
            {[
              "#FIFA2026", "#WorldCup2026", "#FIFAWorldCup", "#LiveStream", "#FreeStreaming",
              "#FIFALive", "#WatchFIFA", "#WorldCupLive", "#FIFA2026Live", "#SoccerLive",
              "#FootyLive", "#MatchDay", "#FIFAStream", "#WorldCupStream", "#LiveSoccer",
              "#FIFAonFox", "#BBCFIFA", "#ITVFIFA", "#PeacockFIFA", "#TelemundoFIFA",
              "#FIFA2026USA", "#FIFA2026Mexico", "#FIFA2026Canada", "#FIFAEverywhere",
              "#FreeFIFA", "#FIFAStreaming", "#WorldCupFree", "#WatchFree", "#StreamFree",
              "#FIFAHighlights", "#FIFAReplay", "#MatchReplay", "#FullMatch", "#FIFAGoals",
              "#FIFASchedule", "#FIFAToday", "#FIFAMatch", "#FIFASoccer", "#FIFAFootball",
              "#QatarVsSwitzerland", "#USAvsGhana", "#MexicoVsCanada", "#ArgentinaVsMorocco",
              "#EnglandVsSenegal", "#BrazilVsSaudi", "#GermanyVsJapan", "#FIFAOpeningMatch",
            ].map(tag => (
              <span key={tag} className="hover:text-zinc-400 transition-colors cursor-default">{tag}</span>
            ))}
          </div>
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
    </>
  )
}

export default FIFAWAtchLivePage
