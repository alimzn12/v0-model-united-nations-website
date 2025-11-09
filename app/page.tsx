"use client"

import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Events } from "@/components/sections/events"
import { Team } from "@/components/sections/team"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="relative z-10">
        {currentPage === "home" && <Hero onNavigate={setCurrentPage} />}
        {currentPage === "about" && <About />}
        {currentPage === "events" && <Events />}
        {currentPage === "team" && <Team />}
        {currentPage === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  )
}
