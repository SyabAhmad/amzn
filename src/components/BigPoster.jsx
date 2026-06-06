const BigPoster = () => {
  const posters = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0a4fb859-05b4-444d-9a66-014ef722d7f7.__CR0,0,1940,1200_PT0_SX970_V1___.png",
      alt: "FIFA 2026 World Cup official poster gear"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c913b0b9-c23c-4fad-87fe-bf94818c73c1.__CR19,0,1950,799_PT0_SX1464_V1___.png",
      alt: "FIFA 2026 World Cup exclusive merch collection"
    },
    {
      url: "https://m.media-amazon.com/images/I/71cio4axbhL._AC_SX679_.jpg",
      alt: "FIFA 2026 World Cup premium product showcase"
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f3fd8ac4-1a0f-46b2-82e6-58f6cf916794.__AC_SR166,182___.png",
      alt: "FIFA 2026 World Cup featured product"
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4 bg-surface-1" aria-label="FIFA 2026 featured products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-brand text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Featured
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-2">
            FIFA 2026 World Cup Banner
          </h2>
        </div>

        <a
          href="https://amzn.to/4vxIjtS"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 bg-zinc-900">
            {posters.map((p, i) => (
              <div
                key={i}
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
                Shop on Amazon →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default BigPoster
