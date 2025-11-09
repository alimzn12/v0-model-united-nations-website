"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Particle system for floating elements
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      type: "gear" | "circuit" | "node" | "flag"
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 10
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.type = ["gear", "circuit", "node", "flag"][Math.floor(Math.random() * 4)] as
          | "gear"
          | "circuit"
          | "node"
          | "flag"
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = 0.15

        switch (this.type) {
          case "gear":
            this.drawGear(ctx)
            break
          case "circuit":
            this.drawCircuit(ctx)
            break
          case "node":
            this.drawNode(ctx)
            break
          case "flag":
            this.drawFlag(ctx)
            break
        }

        ctx.restore()
      }

      drawGear(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "oklch(0.35 0.15 240)"
        ctx.lineWidth = 2
        ctx.beginPath()
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4
          const x1 = Math.cos(angle) * this.size * 0.6
          const y1 = Math.sin(angle) * this.size * 0.6
          const x2 = Math.cos(angle) * this.size
          const y2 = Math.sin(angle) * this.size
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
        }
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2)
        ctx.stroke()
      }

      drawCircuit(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "oklch(0.65 0.18 50)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(-this.size / 2, 0)
        ctx.lineTo(this.size / 2, 0)
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(0, this.size / 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2)
        ctx.stroke()
      }

      drawNode(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "oklch(0.65 0.18 50)"
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2)
        ctx.fill()

        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2
          const x = Math.cos(angle) * this.size
          const y = Math.sin(angle) * this.size
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(x, y)
          ctx.strokeStyle = "oklch(0.65 0.18 50)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      drawFlag(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "oklch(0.35 0.15 240)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(-this.size / 2, -this.size / 2)
        ctx.lineTo(this.size / 2, 0)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.closePath()
        ctx.stroke()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle())
    }

    // Connection lines between nodes
    function drawConnections(ctx: CanvasRenderingContext2D) {
      ctx.strokeStyle = "oklch(0.35 0.15 240 / 0.05)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.globalAlpha = 0.1 * (1 - distance / 200)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    // Gradient background animation
    let gradientOffset = 0

    function animate() {
      if (!ctx || !canvas) return

      gradientOffset += 0.001

      // Create animated gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "oklch(0.10 0.02 240)")
      gradient.addColorStop(0.5 + Math.sin(gradientOffset) * 0.2, "oklch(0.15 0.08 240)")
      gradient.addColorStop(1, "oklch(0.10 0.02 240)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      drawConnections(ctx)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: "oklch(0.10 0.02 240)" }}
    />
  )
}
