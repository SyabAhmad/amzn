import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import products from "../data/products"

const HERO_PRODUCT_IDS = [80, 81, 78]
const FEATURED = HERO_PRODUCT_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean)

const useCountdown = () => {
  const target = new Date("2026-06-11T00:00:00Z").getTime()
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const diff = Math.max(0, target - now)
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

const HeroSection = () => {
  const { d, h, m, s } = useCountdown()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-brand/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] bg-amber-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              FIFA 2026 Collection Live
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Gear up for the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand via-amber-300 to-brand bg-clip-text text-transparent">
                  World Cup
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-brand/40 rounded-full blur-sm" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Authentic jerseys, sneakers, and streetwear from every nation playing in 2026. Hand-picked. Tested. Shipped by Amazon.
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 mb-8">
              {[
                { v: d, l: "Days" },
                { v: h, l: "Hours" },
                { v: m, l: "Min" },
                { v: s, l: "Sec" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-surface-2/80 border border-zinc-800 rounded-xl py-2.5 sm:py-3 px-1 backdrop-blur"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                    {String(c.v).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 bg-brand hover:bg-brand-light text-black font-bold text-base rounded-full transition-all duration-200 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 text-center"
              >
                Shop the Collection
              </a>
              <a
                href="#trending"
                className="w-full sm:w-auto px-7 py-3.5 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-base rounded-full hover:bg-white/5 transition-all duration-200 text-center"
              >
                See What's Trending
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-sm">
              <div>
                <div className="text-white font-black text-xl sm:text-2xl">48</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider">Nations</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-white font-black text-xl sm:text-2xl">{products.length}+</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider">Products</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-white font-black text-xl sm:text-2xl">104</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider">Matches</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-amber-500/10 to-transparent rounded-3xl blur-2xl" />

              {FEATURED[2] && (
                <Link
                  to={`/product/${FEATURED[2].id}`}
                  className="absolute w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-surface-2 shadow-2xl shadow-black/60 transition-all duration-500 ease-out hover:z-30 hover:rotate-0 hover:scale-105"
                  style={{
                    transform: "translate(-65%, 8%) rotate(-14deg)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={FEATURED[2].image}
                    alt={FEATURED[2].name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </Link>
              )}

              {FEATURED[1] && (
                <Link
                  to={`/product/${FEATURED[1].id}`}
                  className="absolute w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-surface-2 shadow-2xl shadow-black/60 transition-all duration-500 ease-out hover:z-30 hover:rotate-0 hover:scale-105"
                  style={{
                    transform: "translate(65%, 8%) rotate(14deg)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={FEATURED[1].image}
                    alt={FEATURED[1].name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </Link>
              )}

              {FEATURED[0] && (
                <Link
                  to={`/product/${FEATURED[0].id}`}
                  className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-brand/50 bg-surface-2 shadow-2xl shadow-brand/30 transition-all duration-500 ease-out hover:scale-105 hover:shadow-brand/50"
                  style={{ zIndex: 2 }}
                >
                  <img
                    src={FEATURED[0].image}
                    alt={FEATURED[0].name}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                    <div className="text-[10px] uppercase tracking-widest text-brand font-bold mb-0.5">
                      Featured Drop
                    </div>
                    <div className="text-white text-sm sm:text-base font-bold truncate">
                      {FEATURED[0].name}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg">
                    New
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection
