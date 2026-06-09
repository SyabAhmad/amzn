import fs from "fs"
import https from "https"
import { URL } from "url"

const src = fs.readFileSync("F:\\code\\amzn\\src\\data\\products.js", "utf8")
const regex = /id:\s*(\d+)[\s\S]*?amazonUrl:\s*"(https:\/\/amzn\.to\/[^"]+)"/g

const products_list = []
let m
while ((m = regex.exec(src)) !== null) {
  products_list.push({ id: parseInt(m[1]), url: m[2] })
}

console.log(`Total: ${products_list.length}`)

const bad_ids = []
let idx = 0

function next() {
  if (idx >= products_list.length) {
    console.log(`\n=== DONE ===`)
    console.log(`BAD product IDs: [${bad_ids.join(", ")}]`)
    console.log(`Total bad: ${bad_ids.length}`)
    return
  }

  const entry = products_list[idx]
  idx++

  const req = https.get(entry.url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    timeout: 8000
  }, (res) => {
    const target = res.headers.location || ""
    const isProduct = /\/dp\//i.test(target) || /\/gp\//i.test(target) || /\/product\//i.test(target)
    if (!isProduct) {
      bad_ids.push(entry.id)
      console.log(`BAD  id=${entry.id}: ${entry.url} -> ${target.substring(0, 100)}`)
    }
    req.destroy()
    setTimeout(next, 200)
  })
  req.on("error", () => {
    bad_ids.push(entry.id)
    console.log(`ERR  id=${entry.id}: ${entry.url}`)
    setTimeout(next, 200)
  })
  req.on("timeout", () => {
    bad_ids.push(entry.id)
    console.log(`TIME id=${entry.id}: ${entry.url}`)
    req.destroy()
    setTimeout(next, 200)
  })
}

next()
