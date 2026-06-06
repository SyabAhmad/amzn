import { useMemo } from "react"
import ProductCard from "./ProductCard"
import products from "../data/products"

const RandomProducts = ({ count = 12, title = "You May Also Like", excludeIds = [] }) => {
  const shuffled = useMemo(() => {
    const filtered = products.filter((p) => !excludeIds.includes(p.id))
    const arr = [...filtered]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, count)
  }, [count, excludeIds.join(",")])

  return (
    <section className="py-10 sm:py-14 px-4 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-brand text-xs font-semibold uppercase tracking-widest">
              Recommended
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {shuffled.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RandomProducts
