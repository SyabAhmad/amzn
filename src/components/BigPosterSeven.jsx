const BigPosterSeven = () => {
  const posters = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8bdc761c-48ff-4f49-8582-5250277adb19.__CR1,0,1594,986_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup premium collection banner"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/eb3cda4b-6d7c-4d8b-9529-986b2cc598c5.__CR0,0,3031,1875_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup featured products showcase"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1d79a792-a33a-42a8-be39-91d44b8297e2.__CR0,0,3031,1875_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup official merchandise banner"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b832bdf0-de40-4d7d-8a13-152e88f0791e.__CR0,0,3031,1875_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup tournament gear"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ee944afe-fb1d-4bc8-b462-20a94054d52f.__CR217,0,4365,2700_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup exclusive collection"
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4" aria-label="FIFA 2026 banner collection">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-brand text-xs font-semibold uppercase tracking-widest">
            Official Drop
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            FIFA 2026 Premium Banner Collection
          </h2>
        </div>

        <a
          href="https://amzn.to/4x9HI3f"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 bg-zinc-900">
            {posters.slice(0, 2).map((p, i) => (
              <div
                key={`top-${i}`}
                className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9]"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 bg-zinc-900">
            {posters.slice(2, 5).map((p, i) => (
              <div
                key={`bot-${i}`}
                className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9]"
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
                Shop the Drop →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default BigPosterSeven
