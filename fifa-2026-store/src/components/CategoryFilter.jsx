import { categories } from "../data/products"

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat
        return (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-brand text-black shadow-lg shadow-brand/25 scale-105"
                : "bg-surface-2 text-zinc-400 border border-zinc-700 hover:border-zinc-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
