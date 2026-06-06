import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import posts from "../data/posts"
import products from "../data/products"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | FIFA 2026 Blog`
    }
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <main className="pt-28 pb-20 px-4 text-center">
        <p className="text-zinc-400 text-lg">Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-brand hover:underline">Back to blog</Link>
      </main>
    )
  }

  const related = [...products].sort(() => Math.random() - 0.5).slice(0, 6)

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to all articles
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-semibold rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
          <span className="text-zinc-600 text-xs ml-auto">{post.date}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
          {post.title}
        </h1>

        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {post.content}
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Shop Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {related.map((p) => (
                <a
                  key={p.id}
                  href={p.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group block bg-surface-2 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-2.5">
                    <h3 className="text-white font-semibold text-[10px] sm:text-xs leading-snug line-clamp-2">
                      {p.name}
                    </h3>
                    <span className="mt-1.5 inline-flex items-center justify-center gap-1 w-full px-2 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[9px] font-extrabold rounded-lg">
                      <span>Buy on Amazon</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <BigPosterFive />
      <RandomProducts title="More to Explore" count={12} />
    </main>
  )
}

export default BlogPostPage
