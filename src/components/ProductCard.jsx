const ProductCard = ({ product }) => {
  return (
    <a
      href={product.amazonUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group block bg-surface-2 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/5"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-3">
        <h3 className="text-white font-semibold text-xs sm:text-sm leading-snug line-clamp-2 min-h-[2.5em]">
          {product.name}
        </h3>

        <span className="mt-2 inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] sm:text-xs font-extrabold rounded-lg group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/15 group-hover:shadow-orange-500/30">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.3 21.4c-.9-.3-1.9-.6-2.9-.6-1.1 0-2.1.3-3.1.6-.5.2-1 .3-1.5.3-.3 0-.5-.1-.7-.2-.6-.3-1.2-.7-1.8-1-.7-.4-1.5-.7-2.3-.7-.8 0-1.6.3-2.3.7-.6.4-1.2.7-1.8 1-.2.1-.4.2-.7.2-.5 0-1-.1-1.5-.3-1-.3-2-.6-3.1-.6-1 0-2 .3-2.9.6-.2.1-.5.1-.7 0-.3-.1-.4-.4-.3-.7.8-2.2 2.5-3.5 4.8-3.9.8-.1 1.6-.2 2.4-.2 1.8 0 3.5.5 5 1.3.2.1.4.1.6 0 1.5-.8 3.2-1.3 5-1.3.8 0 1.6.1 2.4.2 2.3.4 4 1.7 4.8 3.9.1.3 0 .6-.3.7-.2.1-.4.1-.6 0zM6.5 12c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2V6.5c0-.8.3-1.5.9-2 .6-.5 1.3-.8 2.1-.8s1.5.3 2.1.8c.6.5.9 1.2.9 2V9c0 .8-.3 1.5-.9 2-.6.5-1.3.8-2.1.8zm11 0c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2V6.5c0-.8.3-1.5.9-2 .6-.5 1.3-.8 2.1-.8s1.5.3 2.1.8c.6.5.9 1.2.9 2V9c0 .8-.3 1.5-.9 2-.6.5-1.3.8-2.1.8z"/>
          </svg>
          <span>Buy on Amazon</span>
        </span>
      </div>
    </a>
  )
}

export default ProductCard
