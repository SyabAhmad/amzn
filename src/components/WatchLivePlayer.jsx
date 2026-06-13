import { useState, useEffect, useRef } from "react"

const servers = [
  { id: 1, name: "جوال 1", lang: "Mobile", type: "hls", url: "https://rimo.ccxsaaa.xyz/live/x1m/index.m3u8" },
  { id: 2, name: "1 HD", lang: "HD", type: "hls", url: "https://rimo.ccxsaaa.xyz/live/x1m/index.m3u8" },
  { id: 3, name: "جوال 2", lang: "Mobile", type: "hls", url: "https://edge22.776740.ir.cdn.ir/hls2/sport.m3u8" },
  { id: 4, name: "2 HD", lang: "HD", type: "hls", url: "https://rimo.ccxsaaa.xyz/live/lal1/index.m3u8" },
  { id: 5, name: "3 HD", lang: "HD", type: "hls", url: "https://edge22.776740.ir.cdn.ir/hls2/sport.m3u8" },
  { id: 6, name: "بث 1", lang: "Broadcast", type: "iframe", url: "https://s15.yalla-sport.top/ch/ch1.php" },
  { id: 7, name: "ENG", lang: "English", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd1.php" },
  { id: 8, name: "ENG", lang: "English", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd2.php" },
  { id: 9, name: "GER", lang: "German", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd3.php" },
  { id: 10, name: "FR", lang: "French", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd4.php" },
  { id: 11, name: "ENG", lang: "English", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd5.php" },
  { id: 12, name: "SP", lang: "Spanish", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd6.php" },
  { id: 13, name: "TUR", lang: "Turkish", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd8.php" },
  { id: 14, name: "DU", lang: "Dutch", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd9.php" },
  { id: 15, name: "GR", lang: "Greek", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd10.php" },
  { id: 16, name: "AR", lang: "Arabic", type: "iframe", url: "https://ww2.sporttsonline.click/channels/hd/hd11.php" },
  { id: 17, name: "pt", lang: "Portuguese", type: "iframe", url: "https://ww2.sporttsonline.click/channels/pt/sporttv5.php" },
  { id: 18, name: "BR", lang: "Brazilian Portuguese", type: "iframe", url: "https://ww2.sporttsonline.click/channels/bra/br2.php" },
  { id: 19, name: "BR", lang: "Brazilian Portuguese", type: "iframe", url: "https://ww2.sporttsonline.click/channels/bra/br3.php" },
]

const languages = [
  "English", "German", "French", "Spanish", "Turkish",
  "Dutch", "Greek", "Arabic", "Portuguese", "Brazilian Portuguese",
]

const HlsPlayer = ({ src }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    let hls = null
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src
    } else {
      import("hls.js").then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          hls = new Hls()
          hls.loadSource(src)
          hls.attachMedia(video)
        }
      })
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full"
      controls
      autoPlay
      playsInline
    />
  )
}

const WatchLivePlayer = () => {
  const [serv, setServ] = useState(2)

  const current = servers.find(s => s.id === serv) || servers[1]
  const isHls = current.type === "hls"

  return (
    <div className="border-t border-zinc-800 pt-12 mb-12">
      <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-2">
        Watch Live Match Now
      </h2>
      <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto text-sm">
        Select your language & stream quality. Free streams available.
      </p>

      <div className="flex flex-wrap justify-center gap-1.5 mb-8">
        {servers.map((s) => (
          <button
            key={s.id}
            onClick={() => setServ(s.id)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
              serv === s.id
                ? "bg-brand/15 border-brand text-brand shadow-[0_0_8px_rgba(0,255,102,0.12)]"
                : "bg-surface-2 border-zinc-800 text-zinc-400 hover:border-brand/60 hover:text-white"
            }`}
            title={s.lang}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-surface-2 border border-zinc-800 overflow-hidden">
        <div className="aspect-video relative bg-black">
          {isHls ? (
            <HlsPlayer src={current.url} />
          ) : (
            <iframe
              src={current.url}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title="Live Stream"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          )}
        </div>
        <div className="p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-zinc-500 text-xs">
            {current.name} — {current.lang} {isHls ? "(HLS)" : ""}
          </p>
          <span className="text-[10px] text-zinc-600 font-mono">
            Languages: {languages.join(" · ")}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WatchLivePlayer
