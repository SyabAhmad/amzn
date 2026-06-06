import { useEffect } from "react"

const SITE_NAME = "FIFA 2026 Store"
const SITE_URL = "https://fifa26.page"
const DEFAULT_IMAGE = "https://fifa26.page/og-image.png"

const setMeta = (attr, key, value) => {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", value)
}

const setLink = (rel, href) => {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

const removeJsonLd = (id) => {
  const el = document.getElementById(id)
  if (el) el.remove()
}

const injectJsonLd = (id, data) => {
  removeJsonLd(id)
  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.id = id
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

const useSEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  jsonLdId = "page-jsonld",
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | FIFA 2026 World Cup Gear, Tickets & News`
    const url = `${SITE_URL}${path}`
    const finalDesc = description || "Shop official FIFA 2026 World Cup gear, jerseys, fan accessories, tickets info, match schedule, host cities, and live scores."
    const finalKeywords = keywords || "fifa 2026, fifa world cup 2026, fifa tickets, fifa matches, fifa schedule, fifa jerseys, fifa gear, fifa community, world cup 2026, fifa news"

    document.title = fullTitle

    setMeta("name", "description", finalDesc)
    if (keywords) setMeta("name", "keywords", finalKeywords)
    setLink("canonical", url)

    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", finalDesc)
    setMeta("property", "og:url", url)
    setMeta("property", "og:type", type)
    setMeta("property", "og:image", image)
    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("property", "og:locale", "en_US")

    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", finalDesc)
    setMeta("name", "twitter:image", image)

    if (jsonLd) injectJsonLd(jsonLdId, jsonLd)
    else removeJsonLd(jsonLdId)

    window.scrollTo(0, 0)

    return () => {
      removeJsonLd(jsonLdId)
    }
  }, [title, description, path, image, type, keywords, jsonLd, jsonLdId])
}

export default useSEO
