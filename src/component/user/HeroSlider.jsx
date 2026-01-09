import React, { useEffect, useState } from "react"
import heroSlides from "../../data/data"

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full min-h-[500px] h-[80vh] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
      ))}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

export default HeroSlider
