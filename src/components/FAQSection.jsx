import { useState } from "react"

const FAQSection = ({ title = "Frequently Asked Questions", faqs }) => {
  const [open, setOpen] = useState(0)

  if (!faqs || !faqs.length) return null

  return (
    <section className="mt-12 pt-10 border-t border-zinc-800">
      <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-8">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="rounded-xl bg-surface-2 border border-zinc-800 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
              aria-expanded={open === i}
            >
              <h3 className="text-white font-semibold text-sm sm:text-base pr-2">
                {f.q}
              </h3>
              <span
                className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {open === i && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1">
                <p className="text-zinc-400 text-sm leading-relaxed">{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
