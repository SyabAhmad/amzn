import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: "Community", to: "/fifa-community" },
    { label: "Matches", to: "/fifa-matches" },
    { label: "Tickets", to: "/fifa-tickets" },
    { label: "News", to: "/fifa-news" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">⚽</span>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-brand transition-colors">
              FIFA<span className="text-brand">26</span>
            </span>
          </Link>

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

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-white"
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
  )
}

export default Navbar
