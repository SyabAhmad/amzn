import { Link } from "react-router-dom"
import posts from "../data/posts"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const BlogsPage = () => {
  useSEO({
    title: "FIFA 2026 Blog | Football Gear Guides, Sneaker Trends & World Cup Fashion",
    description: "Expert FIFA 2026 blog covering the best jerseys, football sneakers, streetwear, kids gear, fan accessories, Amazon deals, watch online streaming guides, ticket buying tips, and host city travel guides for World Cup 2026.",
    path: "/blog",
    keywords: "fifa 2026 blog, fifa blog, world cup blog, fifa 2026 guides, football gear blog, world cup fashion, fifa sneakers, fifa jerseys, fifa tickets guide, fifa watch online, fifa travel guide",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "Blog", url: "https://fifa26.page/blog" },
    ]),
    jsonLdId: "blog-jsonld",
  })

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            FIFA 2026 Football Guides &{" "}
            <span className="text-brand">Style Trends</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Expert guides on the best FIFA 2026 jerseys, football sneakers, streetwear fashion,
            kids gear, fan accessories, and Amazon deals for World Cup 2026.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block p-6 sm:p-8 rounded-2xl bg-surface-2 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-semibold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-zinc-600 text-xs ml-auto">{post.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand transition-colors mb-3">
                {post.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Shop the Blog" count={12} />
    </main>
  )
}

export default BlogsPage
