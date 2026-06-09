import { useEffect, useRef } from "react"

const ApiSportsWidget = () => {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true

    const script = document.createElement("script")
    script.src = "https://widgets.api-sports.io/2.0/widgets.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <api-sports-widget data-type="leagues"></api-sports-widget>
      <api-sports-widget
        data-type="config"
        data-key="7ae542f5f582aa0e01d8076075486419"
        data-sport="football"
        data-lang="en"
        data-theme="white"
        data-show-errors="true"
      ></api-sports-widget>
    </div>
  )
}

export default ApiSportsWidget
