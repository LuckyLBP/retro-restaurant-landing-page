"use client"

import { useEffect } from "react"

export default function PizzaCursor() {
  useEffect(() => {
    const img = new Image()
    img.src = "/Pizza_Pointer.png"
    img.onload = () => {
      // Scale so the longest side is 48 px (browser cursor limit is 128 px)
      const MAX = 48
      const scale = MAX / Math.max(img.width, img.height)
      const srcW = img.width
      const srcH = img.height

      // After 90° clockwise rotation the axes swap
      const cw = Math.round(srcH * scale) // canvas width  = scaled original height
      const ch = Math.round(srcW * scale) // canvas height = scaled original width

      const canvas = document.createElement("canvas")
      canvas.width = cw
      canvas.height = ch

      const ctx = canvas.getContext("2d")!
      // 90° clockwise: translate to right edge, rotate, then draw scaled image
      // Result: original bottom-left tip → canvas (0, 0) top-left ✓
      ctx.translate(cw, 0)
      ctx.rotate(Math.PI / 2)
      ctx.drawImage(img, 0, 0, srcW * scale, srcH * scale)

      const dataURL = canvas.toDataURL("image/png")

      const style = document.createElement("style")
      style.id = "pizza-cursor"
      // hotspot 0 0 = top-left corner where the tip now sits
      style.textContent = `* { cursor: url("${dataURL}") 0 0, auto !important; }`
      document.head.appendChild(style)
    }
  }, [])

  return null
}
