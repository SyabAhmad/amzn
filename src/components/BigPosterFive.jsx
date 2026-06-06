const BigPosterFive = () => {
  const posters = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/aebdfa12-ca0d-4cbf-ade9-22251ba88382.__CR0,4,2624,1623_PT0_SX970_V1___.jpg",
      alt: "FIFA 2026 World Cup exclusive collection showcase"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/67c8fd72-6749-4b3f-851f-6c375c98328c.__CR0,4,2624,1623_PT0_SX970_V1___.jpg",
      alt: "FIFA 2026 premium gear banner"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5cec23ef-7d28-4319-bd48-fcae4af1be33.__CR0,4,2624,1623_PT0_SX970_V1___.jpg",
      alt: "FIFA 2026 World Cup featured products"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/db5e7679-4d20-440f-b675-69310534606f.__CR0,4,2624,1623_PT0_SX970_V1___.jpg",
      alt: "FIFA 2026 World Cup must-have merch"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/db086fae-ef34-4639-8b28-45868961ec6f.__CR0,4,2624,1623_PT0_SX970_V1___.jpg",
      alt: "FIFA 2026 World Cup official store"
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4" aria-label="FIFA 2026 collection banner">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://amzn.to/3SnFhdc"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1.5 bg-zinc-900">
            {posters.slice(0, 3).map((p, i) => (
              <div
                key={`top-${i}`}
                className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 bg-zinc-900">
            {posters.slice(3, 5).map((p, i) => (
              <div
                key={`bot-${i}`}
                className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9]"
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
                Shop Collection →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default BigPosterFive
