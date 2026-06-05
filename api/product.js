import crypto from "crypto"

const PA_API_HOST = "webservices.amazon.com"
const PA_API_PATH = "/paapi5/getitems"
const REGION = "us-east-1"
const SERVICE = "ProductAdvertisingAPI"

function extractASIN(url) {
  const match = url.match(/(?:dp|product|gp\/product)\/([A-Z0-9]{10})/i)
  return match ? match[1] : null
}

function sign(key, msg) {
  return crypto.createHmac("sha256", key).update(msg).digest()
}

function getSignatureKey(key, dateStamp, region, service) {
  const kDate = sign(`AWS4${key}`, dateStamp)
  const kRegion = sign(kDate, region)
  const kService = sign(kRegion, service)
  const kSigning = sign(kService, "aws4_request")
  return kSigning
}

export default async function handler(req, res) {
  let { asin, url } = req.query

  if (!asin && url) {
    try {
      const resolved = await fetch(url, { method: "HEAD", redirect: "follow" })
      asin = extractASIN(resolved.url)
    } catch {
      return res.status(400).json({ error: "Could not resolve URL" })
    }
  }

  if (!asin) {
    return res.status(400).json({ error: "Missing asin or url parameter" })
  }

  const accessKey = process.env.PA_API_ACCESS_KEY
  const secretKey = process.env.PA_API_SECRET_KEY
  const associateTag = process.env.PA_API_ASSOCIATE_TAG

  if (!accessKey || !secretKey || !associateTag) {
    return res.status(503).json({
      error: "PA-API not configured",
      note: "Set PA_API_ACCESS_KEY, PA_API_SECRET_KEY, and PA_API_ASSOCIATE_TAG env vars",
    })
  }

  try {
    const now = new Date()
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "")
    const dateStamp = amzDate.slice(0, 8)

    const payload = JSON.stringify({
      ItemIds: [asin],
      Resources: [
        "Images.Primary.Medium",
        "ItemInfo.Title",
        "ItemInfo.Features",
        "ItemInfo.ByLineInfo",
        "Offers.Listings.Price",
        "Offers.Listings.Availability.MaxOrderQuantity",
        "Offers.Listings.Availability.Message",
        "Offers.Listings.Availability.Type",
        "Offers.Summaries.HighestPrice",
        "Offers.Summaries.LowestPrice",
        "CustomerReviews.Count",
        "CustomerReviews.StarRating",
      ],
      PartnerType: "Associates",
      PartnerTag: associateTag,
    })

    const payloadHash = crypto.createHash("sha256").update(payload).digest("hex")

    const canonicalRequest = [
      "POST",
      PA_API_PATH,
      "",
      `content-encoding:amz-1.0
host:${PA_API_HOST}
x-amz-date:${amzDate}`,
      "",
      "content-encoding;host;x-amz-date",
      payloadHash,
    ].join("\n")

    const credentialScope = `${dateStamp}/${REGION}/${SERVICE}/aws4_request`
    const canonicalRequestHash = crypto.createHash("sha256").update(canonicalRequest).digest("hex")

    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      canonicalRequestHash,
    ].join("\n")

    const signingKey = getSignatureKey(secretKey, dateStamp, REGION, SERVICE)
    const signature = crypto.createHmac("sha256", signingKey).update(stringToSign).digest("hex")

    const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=content-encoding;host;x-amz-date, Signature=${signature}`

    const apiRes = await fetch(`https://${PA_API_HOST}${PA_API_PATH}`, {
      method: "POST",
      headers: {
        "Content-Encoding": "amz-1.0",
        "Content-Type": "application/json; charset=utf-8",
        "X-Amz-Date": amzDate,
        Authorization: authorization,
      },
      body: payload,
    })

    const data = await apiRes.json()

    if (data.Errors) {
      return res.status(400).json({ error: data.Errors })
    }

    const item = data.ItemsResult?.Items?.[0]
    if (!item) {
      return res.status(404).json({ error: "Product not found" })
    }

    const offer = item.Offers?.Listings?.[0]
    const summary = item.Offers?.Summaries?.[0]

    return res.status(200).json({
      asin: item.ASIN,
      title: item.ItemInfo?.Title?.DisplayValue,
      features: item.ItemInfo?.Features?.DisplayValues || [],
      brand: item.ItemInfo?.ByLineInfo?.Brand?.DisplayValue,
      manufacturer: item.ItemInfo?.ByLineInfo?.Manufacturer?.DisplayValue,
      price: offer?.Price?.DisplayAmount,
      currency: offer?.Price?.Currency,
      lowestPrice: summary?.LowestPrice?.DisplayAmount,
      highestPrice: summary?.HighestPrice?.DisplayAmount,
      image: item.Images?.Primary?.Medium?.URL,
      rating: item.CustomerReviews?.StarRating?.DisplayValue
        ? parseFloat(item.CustomerReviews.StarRating.DisplayValue)
        : null,
      reviewsCount: item.CustomerReviews?.Count?.DisplayValue
        ? parseInt(item.CustomerReviews.Count.DisplayValue)
        : null,
      availability: offer?.Availability?.Message,
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
