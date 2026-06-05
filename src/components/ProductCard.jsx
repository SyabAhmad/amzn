import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-surface-2 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/5">
      <Link
        to={`/product/${product.id}`}
        className="block aspect-[4/3] overflow-hidden bg-surface-3"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>

      <div className="p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-semibold text-xs sm:text-sm leading-snug line-clamp-2 min-h-[2.5em] hover:text-brand transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex gap-1.5">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center px-2 py-2 text-[10px] sm:text-xs font-bold rounded-lg bg-surface-3 text-zinc-300 hover:bg-surface-100 hover:text-white border border-zinc-700 transition-all duration-300"
          >
            See Details
          </Link>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 text-center px-2 py-2 text-[10px] sm:text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/15"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
