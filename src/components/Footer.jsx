import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()

  const cols = [
    {
      title: "Shop",
      links: [
        { label: "All Products", to: "/" },
        { label: "Hot Deals", to: "/#hot" },
        { label: "Featured", to: "/#products" },
      ],
    },
    {
      title: "FIFA 2026",
      links: [
        { label: "World Cup 2026", to: "/fifa-world-cup-2026" },
        { label: "Matches", to: "/fifa-matches" },
        { label: "Schedule", to: "/fifa-schedule" },
        { label: "Host Cities", to: "/fifa-host-cities" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Fan Community", to: "/fifa-community" },
        { label: "Fan Groups", to: "/fifa-fan-groups" },
        { label: "Predictions", to: "/fifa-predictions" },
        { label: "Live Scores", to: "/fifa-live-scores" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "News", to: "/fifa-news" },
        { label: "Tickets", to: "/fifa-tickets" },
        { label: "Fan Zone", to: "/fifa-fan-zone" },
        { label: "Blog", to: "/blog" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ]

  return (
    <footer className="border-t border-zinc-800 py-10 px-4 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="text-zinc-500 hover:text-brand text-xs transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-white">
              FIFA<span className="text-brand">26</span>
            </span>
            <span className="text-zinc-600 text-sm hidden sm:inline">|</span>
            <span className="text-zinc-500 text-xs">
              Affiliate Site — As an Amazon Associate we earn from qualifying purchases.
            </span>
          </div>

          <p className="text-zinc-600 text-xs">© {year} FIFA26 Store</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
