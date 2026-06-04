import { useState } from "react"
import ProductCard from "./ProductCard"
import products from "../data/products"

const PER_PAGE = 4

const ProductsGrid = () => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(products.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const paged = products.slice(start, start + PER_PAGE)

  return (
    <section id="products" className="py-20 sm:py-28 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Shop Trending
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Trending Products
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
            Viral football gear and streetwear picks curated from Amazon's best sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {paged.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-xl bg-surface-2 border border-zinc-700 text-sm font-semibold text-zinc-400 hover:text-white hover:border-zinc-500 transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                  n === page
                    ? "bg-brand text-black shadow-lg shadow-brand/25"
                    : "bg-surface-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-xl bg-surface-2 border border-zinc-700 text-sm font-semibold text-zinc-400 hover:text-white hover:border-zinc-500 transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductsGrid
