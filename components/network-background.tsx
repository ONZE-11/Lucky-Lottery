"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/contexts/theme-context"

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      pulseSpeed: number
      pulseAmount: number
      pulseOffset: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 2 + 1
        this.color =
          theme === "dark"
            ? `rgba(${30 + Math.random() * 50}, ${100 + Math.random() * 100}, ${200 + Math.random() * 55}, ${0.4 + Math.random() * 0.3})`
            : `rgba(${0 + Math.random() * 50}, ${100 + Math.random() * 100}, ${200 + Math.random() * 55}, ${0.2 + Math.random() * 0.2})`
        this.pulseSpeed = 0.01 + Math.random() * 0.02
        this.pulseAmount = 0.1 + Math.random() * 0.4
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update(time: number) {
        this.x += this.vx
        this.y += this.vy

        // Pulse effect
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * this.pulseAmount
        const currentRadius = this.radius * (1 + pulse)

        // Bounce off edges with some padding
        const padding = currentRadius * 2
        const width = canvas.width / window.devicePixelRatio
        const height = canvas.height / window.devicePixelRatio

        if (this.x < padding || this.x > width - padding) this.vx *= -1
        if (this.y < padding || this.y > height - padding) this.vy *= -1

        // Keep within bounds
        this.x = Math.max(padding, Math.min(width - padding, this.x))
        this.y = Math.max(padding, Math.min(height - padding, this.y))

        return currentRadius
      }

      draw(ctx: CanvasRenderingContext2D, radius: number) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create nodes
    const width = canvas.width / window.devicePixelRatio
    const height = canvas.height / window.devicePixelRatio
    const nodeCount = Math.min(100, Math.floor((width * height) / 15000))
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(Math.random() * width, Math.random() * height))
    }

    // Animation loop
    let animationId: number
    const lastTime = 0

    const animate = (time: number) => {
      if (!ctx) return

      const normalizedTime = time * 0.001 // Convert to seconds
      ctx.clearRect(0, 0, width, height)

      // Update and draw nodes
      const currentRadii = nodes.map((node) => node.update(normalizedTime))

      // Draw connections
      ctx.lineWidth = 0.5
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB, j) => {
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)

            const opacity = (1 - distance / maxDistance) * 0.5
            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y)

            if (theme === "dark") {
              gradient.addColorStop(0, `rgba(30, 144, 255, ${opacity})`)
              gradient.addColorStop(1, `rgba(138, 43, 226, ${opacity})`)
            } else {
              gradient.addColorStop(0, `rgba(0, 120, 212, ${opacity * 0.7})`)
              gradient.addColorStop(1, `rgba(104, 58, 183, ${opacity * 0.7})`)
            }

            ctx.strokeStyle = gradient
            ctx.stroke()
          }
        })
      })

      // Draw nodes on top of connections
      nodes.forEach((node, i) => {
        node.draw(ctx, currentRadii[i])
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
