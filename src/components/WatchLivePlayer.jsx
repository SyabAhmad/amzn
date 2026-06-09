import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import products from "../data/products"

const servers = [
  { id: 1, name: "Server 1 — HD", flag: "🇺🇸", load: "72%" },
  { id: 2, name: "Server 2 — HD", flag: "🇬🇧", load: "89%" },
  { id: 3, name: "Server 3 — 4K", flag: "🇨🇦", load: "94%" },
  { id: 4, name: "Server 4 — HD", flag: "🇩🇪", load: "65%" },
  { id: 5, name: "Server 5 — 4K", flag: "🇫🇷", load: "81%" },
  { id: 6, name: "Server 6 — HD", flag: "🇦🇺", load: "77%" },
]

const WatchLivePlayer = () => {
  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState("idle")
  const [streamTime, setStreamTime] = useState(0)
  const timerRef = useRef(null)
  const streamTimerRef = useRef(null)

  const jersey = products.find(p => /jersey.*2026/i.test(p.name))

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (streamTimerRef.current) clearInterval(streamTimerRef.current)
    }
  }, [])

  const handleSelect = (server) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (streamTimerRef.current) clearInterval(streamTimerRef.current)
    setSelected(server)
    setStatus("loading")
    setStreamTime(0)
    timerRef.current = setTimeout(() => {
      setStatus("buffering")
      setStreamTime(0)
      streamTimerRef.current = setInterval(() => {
        setStreamTime((t) => {
          if (t >= 20) {
            clearInterval(streamTimerRef.current)
            setStatus("busy")
            return 20
          }
          return t + 1
        })
      }, 1000)
    }, 8000)
  }

  const handleRetry = () => {
    handleSelect(selected)
  }

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, "0")
    const sec = String(s % 60).padStart(2, "0")
    return `${m}:${sec}`
  }

  return (
    <div className="border-t border-zinc-800 pt-12 mb-12">
      <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-2">
        Watch Live Match Now
      </h2>
      <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto text-sm">
        Select a server below to start streaming. Free HD & 4K streams available.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {servers.map((s) => {
          const isActive = selected?.id === s.id && status !== "idle"
          return (
            <button
              key={s.id}
              onClick={() => handleSelect(s)}
              disabled={status === "loading"}
              className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                isActive
                  ? "bg-brand/15 border-brand shadow-[0_0_12px_rgba(0,255,102,0.15)]"
                  : "bg-surface-2 border-zinc-800 hover:border-brand/60 hover:bg-surface-2/80"
              } ${status === "loading" && selected?.id === s.id ? "animate-pulse pointer-events-none" : ""} ${status === "loading" && selected?.id !== s.id ? "opacity-40 pointer-events-none" : ""}`}
            >
              <span className="text-2xl block mb-1">{s.flag}</span>
              <span className={`text-sm font-semibold block ${isActive ? "text-brand" : "text-white"}`}>
                {s.name}
              </span>
              <span className="text-zinc-500 text-[10px] block mt-0.5">Load: {s.load}</span>
              {isActive && (
                <span className="text-[9px] text-brand font-semibold block mt-1 uppercase tracking-wider">
                  {status === "loading" ? "Connecting..." : status === "buffering" ? "Buffering..." : "Active"}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {status === "idle" && (
        <div className="rounded-2xl bg-surface-2 border border-zinc-800 border-dashed p-10 text-center">
          <p className="text-zinc-500 text-sm">Select a server above to start watching</p>
        </div>
      )}

      {status === "loading" && (
        <div className="rounded-2xl bg-surface-2 border border-zinc-800 overflow-hidden">
          <div className="aspect-video flex flex-col items-center justify-center bg-black/80 gap-5 p-8">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-zinc-700 border-t-brand rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">{selected.flag}</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-lg">{selected.name}</p>
              <p className="text-zinc-400 text-sm mt-1 animate-pulse">
                Connecting to stream...
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <span className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {status === "buffering" && (
        <div className="rounded-2xl bg-surface-2 border border-zinc-800 overflow-hidden">
          <div className="aspect-video relative bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />

            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-zinc-700/90 text-zinc-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                Loading
              </span>
              <span className="bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono">
                {selected.flag} {selected.name}
              </span>
            </div>

            <div className="absolute top-3 right-4 z-20 text-white/80 text-[11px] font-mono bg-black/50 px-2 py-1 rounded">
              {formatTime(streamTime)}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-3 border-zinc-600 border-t-amber-400 rounded-full animate-spin" />
              <div className="text-center">
                <p className="text-white font-semibold text-base">Loading live stream...</p>
                <p className="text-zinc-500 text-xs mt-1">Please wait while stream loads. This may take a moment.</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-3">
                <span className="text-zinc-600 text-lg">▶</span>
                <span className="text-zinc-700 text-sm">━</span>
                <span className="text-zinc-700 text-xs">🔊</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 text-xs">
                <span>⚙</span>
                <span>⊞</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <p className="text-zinc-500 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                  Buffering on {selected.flag} {selected.name}...
                </p>
                <p className="text-zinc-600 text-[10px] mt-0.5">
                  High traffic detected. Stream is loading. {20 - streamTime}s timeout.
                </p>
              </div>
              {jersey && (
                <Link
                  to={`/product/${jersey.id}`}
                  className="px-4 py-2 bg-brand/10 border border-brand/30 text-brand text-xs font-semibold rounded-full hover:bg-brand hover:text-black transition-all whitespace-nowrap"
                >
                  🏆 Get Match Ready
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {status === "busy" && (
        <div className="rounded-2xl bg-surface-2 border border-red-800/60 overflow-hidden">
          <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-b from-black/80 via-red-950/20 to-black/80 gap-4 p-8 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)]" />

            <span className="text-5xl relative z-10">🔥</span>
            <h3 className="text-white font-bold text-xl text-center relative z-10">
              <span className="text-red-500">Stream Interrupted</span> — Server Overloaded
            </h3>
            <p className="text-zinc-400 text-sm text-center max-w-md relative z-10">
              <span className="text-red-400 font-semibold">{selected.name}</span> has reached maximum capacity.
              Users are very huge these days — all streams fully occupied.
            </p>
            <p className="text-zinc-500 text-xs text-center max-w-sm relative z-10">
              Please refresh the page or select another server above to try again.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 relative z-10">
              <button
                onClick={handleRetry}
                className="px-6 py-2.5 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-500 transition-all cursor-pointer shadow-lg shadow-red-600/20"
              >
                Try Another Server
              </button>
              {jersey && (
                <Link
                  to={`/product/${jersey.id}`}
                  className="px-6 py-2.5 border border-zinc-700 text-white font-semibold text-sm rounded-full hover:bg-white/5 transition-all"
                >
                  Shop Game Day Gear
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WatchLivePlayer
