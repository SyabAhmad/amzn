const BigPosterSix = () => {
  const posters = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d27a4c2-bb9a-4cc6-b6f7-7aecd4dacd7a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      alt: "FIFA 2026 World Cup exclusive banner collection"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f57827a3-31a7-49f4-9eed-2d1fddadf915.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      alt: "FIFA 2026 World Cup featured collection"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/81a01397-6a66-48a8-8f03-553c944fa514.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      alt: "FIFA 2026 World Cup official merchandise"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/81a01397-6a66-48a8-8f03-553c944fa514.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      alt: "FIFA 2026 World Cup premium gear showcase"
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4 bg-surface-1" aria-label="FIFA 2026 banner collection">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-brand text-xs font-semibold uppercase tracking-widest">
            Premium Picks
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            FIFA 2026 Banner Collection
          </h2>
        </div>

        <a
          href="https://amzn.to/4uXqB38"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 bg-zinc-900">
            {posters.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden aspect-[1464/600]"
              >
                <img
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/70 backdrop-blur-md px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-brand group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-sm sm:text-base lg:text-lg uppercase tracking-wider">
                Shop Premium →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default BigPosterSix
