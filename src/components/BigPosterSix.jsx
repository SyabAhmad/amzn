const BigPosterSix = () => {
  const posters = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/60c93204-afd7-44da-b04d-0948c18d572b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      alt: "BIVENANT Women's Linen Tops Boho Floral Tees"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/530ce378-5606-44d8-9ea9-5d24ea152441.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      alt: "BIVENANT Women's Casual Button Blouses"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c6307500-aeef-45a6-b373-d0df58b54f50.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      alt: "BIVENANT Japanese Tunic T Shirts"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/31d4e40a-3520-485d-8752-3a99da8620d7.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      alt: "BIVENANT Summer Graphic Tees"
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4 bg-surface-1" aria-label="BIVENANT linen tops collection">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-brand text-xs font-semibold uppercase tracking-widest">
            Featured Brand
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            BIVENANT Linen Collection
          </h2>
        </div>

        <a
          href="https://amzn.to/3S2sU6s"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 bg-zinc-900">
            {posters.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden aspect-[970/600]"
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
                Shop BIVENANT →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default BigPosterSix