"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Aperture, Target, Maximize, Circle } from "lucide-react"

export const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(0, springConfig)
  const mouseYSpring = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseXSpring.set(e.clientX)
      mouseYSpring.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseXSpring, mouseYSpring])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden [perspective:1200px]">
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-amber-500/[0.07] rounded-full blur-[120px]"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
          translateZ: "100px"
        }}
      />

      {/* Floating Photography Elements in 3D Space */}
      <div className="absolute inset-0 opacity-[0.15] [transform-style:preserve-3d]">
        {[...Array(8)].map((_, i) => (
          <FloatingElement key={i} index={i} />
        ))}
      </div>

      {/* 3D Light Streaks */}
      <motion.div
        className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent rotate-45 blur-md"
        animate={{
          x: [-200, 200, -200],
          y: [0, -100, 0],
          opacity: [0.1, 0.3, 0.1],
          translateZ: ["50px", "150px", "50px"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "30%",
          left: "20%",
        }}
      />
    </div>
  )
}

const FloatingElement = ({ index }: { index: number }) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const x = Math.random() * 100
  const y = Math.random() * 100
  const z = -200 + Math.random() * 400
  const size = 30 + Math.random() * 70
  const Icons = [Aperture, Target, Maximize, Circle]
  const Icon = Icons[index % Icons.length]

  return (
    <motion.div
      className="absolute text-zinc-600"
      initial={{ x: `${x}%`, y: `${y}%`, z: 0, opacity: 0 }}
      animate={{
        y: [`${y}%`, `${y - 10}%`, `${y}%`],
        z: [z, z + 50, z],
        opacity: [0.2, 0.5, 0.2],
        rotateX: [0, 180, 360],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration: 20 + Math.random() * 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ 
        width: size, 
        height: size,
        transformStyle: "preserve-3d"
      }}
    >
      <Icon strokeWidth={0.5} className="w-full h-full" />
    </motion.div>
  )
}
