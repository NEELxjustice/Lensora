"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export const ThreeDLens = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / 20
      const y = (clientY - innerHeight / 2) / 20
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(mouseY, (val) => -val)
  const rotateY = useTransform(mouseX, (val) => val)

  return (
    <div className="relative w-96 h-96 flex items-center justify-center [perspective:1000px]">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        {/* Lens Barrel Rings */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-zinc-800 rounded-full"
            style={{
              width: `${100 - i * 8}%`,
              height: `${100 - i * 8}%`,
              transform: `translateZ(${i * 20}px)`,
              backgroundColor: i === 0 ? "rgba(255,255,255,0.01)" : "transparent",
              boxShadow: i === 0 ? "0 0 50px rgba(245,158,11,0.05)" : "none",
            }}
          >
            {i === 2 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full border border-amber-500/20" />
              </div>
            )}
          </div>
        ))}

        {/* Central "Glass" */}
        <div
          className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-[2px]"
          style={{ transform: "translateZ(180px)" }}
        />
        
        {/* Reflection */}
        <motion.div
          className="absolute w-full h-full rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent"
          style={{
            transform: "translateZ(200px)",
            opacity: 0.5,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  )
}
