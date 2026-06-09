import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import NavbarSearch from "./NavbarSearch"
import products from "../data/products"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileQuery, setMobileQuery] = useState("")
  const location = useLocation()
  const isHome = location.pathname === "/"
  const mobileInputRef = useRef(null)
  const desktopInputRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileSearchOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileSearchOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => mobileInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
      setMobileQuery("")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileSearchOpen])

  const navLinks = [
    { label: "Community", to: "/fifa-community" },
    { label: "Matches", to: "/fifa-matches" },
    { label: "Tickets", to: "/fifa-tickets" },
    { label: "Watch Live", to: "/fifa-watch-live" },
    { label: "News", to: "/fifa-news" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
  ]

  const mobileMatches = mobileQuery.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(mobileQuery.toLowerCase())).slice(0, 6)
    : []

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface/90 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <span className="text-2xl">⚽</span>
              <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-brand transition-colors">
                FIFA<span className="text-brand">26</span>
              </span>
            </Link>

            <div className="hidden lg:flex flex-1 max-w-md mx-4">
              <NavbarSearch inputRef={desktopInputRef} />
            </div>

            <div className="hidden md:flex items-center gap-5">
              {isHome ? (
                <a href="#products" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
                  Shop
                </a>
              ) : (
                <Link to="/" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
                  Shop
                </Link>
              )}
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setMobileSearchOpen(true)}
                className="p-2 text-white hover:text-brand transition-colors"
                aria-label="Open search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="p-2 text-white"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden items-center pb-3">
            <NavbarSearch inputRef={desktopInputRef} />
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-zinc-800 mt-2 pt-3 space-y-1">
              {isHome ? (
                <a
                  href="#products"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded"
                >
                  Shop
                </a>
              ) : (
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded"
                >
                  Shop
                </Link>
              )}
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {mobileSearchOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileSearchOpen(false)}
          />
          <div className="relative bg-surface min-h-screen flex flex-col">
            <div className="flex items-center gap-3 px-4 h-16 border-b border-zinc-800">
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 text-white"
                aria-label="Close search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex-1">
                <NavbarSearch
                  inputRef={mobileInputRef}
                  value={mobileQuery}
                  onChange={setMobileQuery}
                  onSelect={() => setMobileSearchOpen(false)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6">
              {mobileMatches.length > 0 ? (
                <>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">
                    Products
                  </div>
                  <div className="space-y-2">
                    {mobileMatches.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        onClick={() => setMobileSearchOpen(false)}
                        className="flex items-center gap-3 p-3 bg-surface-2 rounded-xl hover:bg-zinc-800 transition-colors"
                      >
                        <img src={p.image} alt="" className="w-14 h-14 rounded-lg object-cover bg-zinc-900" loading="lazy" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white font-medium truncate">{p.name}</div>
                          <div className="text-xs text-zinc-500">Product #{p.id}</div>
                        </div>
                        <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </>
              ) : mobileQuery.trim() ? (
                <div className="text-center py-12 text-zinc-500 text-sm">
                  No products found for "{mobileQuery}"
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-600 text-sm">
                  Start typing to search products...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
