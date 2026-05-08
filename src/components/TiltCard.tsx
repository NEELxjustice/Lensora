"use client"

import React, { useRef, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useSpring(0, { stiffness: 150, damping: 20 })
  const y = useSpring(0, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full">
        {children}
      </div>
      
      {/* 3D Border Glow */}
      <motion.div
        style={{
          transform: "translateZ(10px)",
          opacity: useTransform(x, [-0.5, 0.5], [0, 0.5])
        }}
        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none rounded-xl"
      />
    </motion.div>
  )
}
