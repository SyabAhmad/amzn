import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import products from "../data/products"
import posts from "../data/posts"

const relatedPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3)

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const [apiData, setApiData] = useState(null)
  const [apiLoading, setApiLoading] = useState(false)

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | FIFA 2026 Football Gear & Streetwear`
    }
    window.scrollTo(0, 0)
  }, [product])

  useEffect(() => {
    if (product?.asin) {
      setApiLoading(true)
      fetch(`/api/product?asin=${product.asin}`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) setApiData(data)
        })
        .catch(() => {})
        .finally(() => setApiLoading(false))
    }
  }, [product])

  if (!product) {
    return (
      <main className="pt-28 pb-20 px-4 text-center">
        <p className="text-zinc-400 text-lg">Product not found.</p>
        <Link to="/" className="mt-4 inline-block text-brand hover:underline">Back to home</Link>
      </main>
    )
  }

  const suggested = products
    .filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 12)

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 sm:mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to all products
        </Link>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-16">
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface-2 border border-zinc-800">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-3">
              FIFA 2026 Collection
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-zinc-500 text-sm flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                Amazon
              </span>
              {apiData?.rating && (
                <span className="text-amber-400 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {apiData.rating}
                  {apiData.reviewsCount && <span className="text-zinc-500 font-normal">({apiData.reviewsCount})</span>}
                </span>
              )}
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Shop the trending {product.name} — part of our exclusive FIFA 2026 collection.
              Handpicked for football fans, streetwear enthusiasts, and World Cup 2026 supporters.
              This premium football gear and fashion item is trending worldwide on TikTok, Pinterest, and social media.
              Whether you're looking for match day essentials, casual streetwear, or the perfect gift
              for the football lover in your life, this product delivers style, comfort, and performance.
              Available with fast global shipping through Amazon's trusted marketplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full sm:flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-base rounded-2xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.3 21.4c-.9-.3-1.9-.6-2.9-.6-1.1 0-2.1.3-3.1.6-.5.2-1 .3-1.5.3-.3 0-.5-.1-.7-.2-.6-.3-1.2-.7-1.8-1-.7-.4-1.5-.7-2.3-.7-.8 0-1.6.3-2.3.7-.6.4-1.2.7-1.8 1-.2.1-.4.2-.7.2-.5 0-1-.1-1.5-.3-1-.3-2-.6-3.1-.6-1 0-2 .3-2.9.6-.2.1-.5.1-.7 0-.3-.1-.4-.4-.3-.7.8-2.2 2.5-3.5 4.8-3.9.8-.1 1.6-.2 2.4-.2 1.8 0 3.5.5 5 1.3.2.1.4.1.6 0 1.5-.8 3.2-1.3 5-1.3.8 0 1.6.1 2.4.2 2.3.4 4 1.7 4.8 3.9.1.3 0 .6-.3.7-.2.1-.4.1-.6 0zM6.5 12c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2V6.5c0-.8.3-1.5.9-2 .6-.5 1.3-.8 2.1-.8s1.5.3 2.1.8c.6.5.9 1.2.9 2V9c0 .8-.3 1.5-.9 2-.6.5-1.3.8-2.1.8zm11 0c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2V6.5c0-.8.3-1.5.9-2 .6-.5 1.3-.8 2.1-.8s1.5.3 2.1.8c.6.5.9 1.2.9 2V9c0 .8-.3 1.5-.9 2-.6.5-1.3.8-2.1.8z"/>
                </svg>
                <span>Buy Now — Check Price on Amazon</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Global Shipping", desc: "Amazon delivers worldwide" },
                { label: "Secure Checkout", desc: "Protected by Amazon A-to-Z" },
                { label: "Easy Returns", desc: "30-day return policy" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-brand/5 border border-brand/10 text-center">
                  <span className="text-brand text-xs font-extrabold block">{item.label}</span>
                  <span className="text-zinc-500 text-[10px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-14">
          <div className="text-center mb-10">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">
              More Trending Picks
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Suggested Products
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              Discover more FIFA 2026 football gear, trending sneakers, jerseys, streetwear, and fan accessories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {suggested.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group block bg-surface-2 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface-3">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-2.5">
                  <h3 className="text-white font-semibold text-[10px] sm:text-xs leading-snug line-clamp-2">{p.name}</h3>
                  <span className="mt-1.5 inline-flex items-center justify-center gap-1 w-full px-2 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[9px] font-extrabold rounded-lg">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-14 mt-14">
          <div className="text-center mb-10">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">
              Related Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Read Our FIFA 2026 Blog
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group p-5 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
              >
                <h3 className="text-white font-bold text-sm group-hover:text-brand transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
