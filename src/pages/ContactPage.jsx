import { useState } from "react"
import { Link } from "react-router-dom"
import RandomProducts from "../components/RandomProducts"
import BigPosterFive from "../components/BigPosterFive"
import BigPosterSix from "../components/BigPosterSix"
import useSEO from "../hooks/useSEO"
import { buildBreadcrumbSchema } from "../utils/schemas"

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useSEO({
    title: "Contact FIFA 2026 Store — Get in Touch",
    description: "Contact FIFA 2026 Store for partnerships, press inquiries, fan questions, product suggestions, or general feedback. We respond within 24-48 hours.",
    path: "/contact",
    keywords: "contact fifa 2026 store, fifa 2026 contact, fifa 2026 email, fifa 2026 partnership, fifa 2026 press",
    jsonLd: buildBreadcrumbSchema([
      { name: "Home", url: "https://fifa26.page/" },
      { name: "Contact", url: "https://fifa26.page/contact" },
    ]),
    jsonLdId: "contact-jsonld",
  })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || "FIFA 2026 Store Inquiry")
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:hello@fifa26.page?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            Get in Touch
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Have a question, partnership idea, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { title: "General Inquiries", desc: "hello@fifa26.page", icon: "✉️" },
            { title: "Partnerships", desc: "partners@fifa26.page", icon: "🤝" },
            { title: "Press & Media", desc: "press@fifa26.page", icon: "📰" },
          ].map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-2 border border-zinc-800 text-center">
              <span className="text-3xl mb-2 block">{c.icon}</span>
              <h3 className="text-white font-bold text-lg mb-1">{c.title}</h3>
              <a href={`mailto:${c.desc}`} className="text-brand text-sm hover:underline">{c.desc}</a>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-4">Follow Us</h2>
          <p className="text-zinc-400 text-sm mb-6">Stay updated with FIFA 2026 news, deals, and match alerts on social.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://www.instagram.com/fifa26.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-2 border border-zinc-700 text-white text-sm font-semibold hover:border-brand transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>@fifa26.page</span>
            </a>
            <a
              href="https://www.tiktok.com/@fifa26.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-2 border border-zinc-700 text-white text-sm font-semibold hover:border-brand transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.45a8.16 8.16 0 0 0 4.77 1.52V6.55a4.85 4.85 0 0 1-1.84-.41z"/></svg>
              <span>@fifa26.page</span>
            </a>
            <a
              href="https://twitter.com/fifa26page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-2 border border-zinc-700 text-white text-sm font-semibold hover:border-brand transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>@fifa26page</span>
            </a>
            <a
              href="https://www.facebook.com/fifa26page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-2 border border-zinc-700 text-white text-sm font-semibold hover:border-brand transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              <span>/fifa26page</span>
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-surface-2 border border-zinc-800">
          {submitted ? (
            <div className="text-center py-10">
              <span className="text-5xl block mb-4">✅</span>
              <h2 className="text-2xl font-black text-white mb-3">Message Sent!</h2>
              <p className="text-zinc-400 max-w-md mx-auto">
                Thanks for reaching out. Your email client should have opened with the message pre-filled. We respond within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-black text-white mb-2">Send us a message</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-zinc-700 text-white focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">Email *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-zinc-700 text-white focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-zinc-300 mb-2">Subject *</label>
                <input
                  type="text" id="subject" name="subject" required
                  value={form.subject} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-zinc-700 text-white focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">Message *</label>
                <textarea
                  id="message" name="message" required rows={6}
                  value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-zinc-700 text-white focus:border-brand focus:outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand text-black font-bold rounded-full hover:bg-brand-light transition-all"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-amber-500/10 border border-brand/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            In the Meantime
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Browse our top categories or join the community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-bold text-base rounded-full hover:bg-brand-light transition-all">
              Shop Gear
            </Link>
            <Link to="/fifa-community" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-2 border border-zinc-700 text-white font-bold text-base rounded-full hover:border-brand transition-all">
              Join Community
            </Link>
          </div>
        </div>
      </div>
      <BigPosterFive />
      <BigPosterSix />
      <RandomProducts title="Contact Favorites" count={12} />
    </main>
  )
}

export default ContactPage
