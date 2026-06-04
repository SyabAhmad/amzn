import { useMemo } from "react"
import ProductCard from "./ProductCard"
import products from "../data/products"

const HotProducts = () => {
  const hot = useMemo(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 12)
  }, [])

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            🔥 Hot Right Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Random Picks for You
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm">
            Refresh the page to discover a new set of trending football gear.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {hot.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotProducts
