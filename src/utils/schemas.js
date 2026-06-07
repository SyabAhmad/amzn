export const buildFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
})

export const buildArticleSchema = ({ title, description, url, image, datePublished, author = "FIFA 2026 Store" }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image || "https://fifa26.page/og-image.png",
  "datePublished": datePublished || "2026-06-01",
  "dateModified": datePublished || "2026-06-01",
  "author": { "@type": "Organization", "name": author },
  "publisher": {
    "@type": "Organization",
    "name": "FIFA 2026 Store",
    "logo": { "@type": "ImageObject", "url": "https://fifa26.page/favicon.svg" },
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": url },
})

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url,
  })),
})

export const buildProductSchema = ({ name, description, image, url, brand = "Various", sku, price }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "image": image,
  "brand": { "@type": "Brand", "name": brand },
  "sku": sku,
  "offers": {
    "@type": "Offer",
    "url": url,
    "priceCurrency": "USD",
    "price": price ? String(price) : "0",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
  },
})

export const buildItemListSchema = (items, listName) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": listName,
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": it.url,
    "name": it.name,
  })),
})
