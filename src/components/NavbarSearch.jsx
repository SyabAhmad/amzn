import { useEffect, useRef, useState } from "react"
import products from "../data/products"

const NavbarSearch = ({ onSelect, inputRef, onFocus, onChange, value }) => {
  const [focused, setFocused] = useState(false)
  const [internal, setInternal] = useState("")
  const wrapperRef = useRef(null)

  const isControlled = value !== undefined && onChange !== undefined
  const current = isControlled ? value : internal
  const setCurrent = (v) => {
    if (isControlled) onChange(v)
    else setInternal(v)
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setFocused(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const matches = current && current.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(current.toLowerCase())).slice(0, 5)
    : []

  return (
    <div ref={wrapperRef} className="relative w-full">
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
        }
        @keyframes gradient-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .nav-search-glow {
          animation: pulse-ring 2s ease-in-out infinite, gradient-spin 6s ease infinite;
        }
        .nav-search-shine::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          animation: shine-sweep 3s linear infinite;
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={`relative ${focused ? "nav-search-glow" : ""}`}
        style={{
          background: focused
            ? "linear-gradient(90deg, rgba(34,197,94,0.6), rgba(251,191,36,0.4), rgba(34,197,94,0.6))"
            : "linear-gradient(90deg, rgba(63,63,70,0.5), rgba(63,63,70,0.5))",
          backgroundSize: focused ? "200% 200%" : "100% 100%",
          padding: "1.5px",
          borderRadius: "9999px",
          transition: "all 0.3s ease",
        }}
      >
        <div className="relative flex items-center bg-surface rounded-full overflow-hidden nav-search-shine">
          <div className="absolute left-3.5 text-zinc-400 pointer-events-none">
            <svg
              className={`w-4 h-4 transition-all duration-300 ${focused ? "text-brand scale-110" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            onFocus={(e) => {
              setFocused(true)
              onFocus?.(e)
            }}
            placeholder="Search jerseys, boots, teams..."
            className="w-full pl-10 pr-9 py-1.5 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
          />

          {current && (
            <button
              type="button"
              onClick={() => {
                setCurrent("")
                inputRef.current?.focus()
              }}
              className="absolute right-2.5 text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="Clear"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>

      {focused && current && current.trim() && (
        <div className="absolute z-50 left-0 right-0 top-full mt-2 bg-surface-2/95 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
          {matches.length > 0 ? (
            <div className="p-2">
              <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Products</div>
              {matches.map((p) => (
                <a
                  key={p.id}
                  href={`/product/${p.id}`}
                  onClick={() => {
                    setFocused(false)
                    onSelect?.()
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800 transition-colors group"
                >
                  <img src={p.image} alt="" className="w-9 h-9 rounded-lg object-cover bg-zinc-900" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium truncate group-hover:text-brand">{p.name}</div>
                    <div className="text-xs text-zinc-500">#{p.id}</div>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-brand transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-5 text-center text-zinc-500 text-sm">No products found for "{current}"</div>
          )}
        </div>
      )}
    </div>
  )
}

export default NavbarSearch
