"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Globe, Award, Calendar } from "lucide-react"

interface HeroProps {
  onNavigate: (page: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { icon: Calendar, number: "3", label: "Days of Excellence" },
    { icon: Users, number: "5", label: "UN Committees" },
    { icon: Globe, number: "200+", label: "Delegates United" },
    { icon: Award, number: "1st", label: "Historic Conference" },
  ]

  const features = [
    {
      icon: "🎯",
      title: "Engineering Meets Diplomacy",
      description:
        "The first MUN in ENSA network combining technical expertise with global leadership, empowering future engineers to become diplomatic visionaries.",
    },
    {
      icon: "💻",
      title: "Innovation Hackathon",
      description:
        "Unique 3-day structure culminating in a Hackathon where delegates develop concrete technical solutions to debated global challenges.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description:
        "Addressing critical issues: cultural cooperation, food security, climate displacement, healthcare access, and combating disinformation.",
    },
    {
      icon: "🤝",
      title: "ENSA Network Unity",
      description:
        "Building bridges between ENSA institutions across Morocco, fostering collaboration and creating a legacy of innovation from Marrakech.",
    },
    {
      icon: "🏆",
      title: "Leadership Development",
      description:
        "Empowering students through expert interventions, committee debates, and resolution writing to become tomorrow's visionary leaders.",
    },
    {
      icon: "🚀",
      title: "Legacy Building",
      description:
        "Not just a conference—a movement creating lasting impact through innovation, collaboration, and sustainable solutions for global challenges.",
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl mb-8 animate-float">
            <img src="/un-diplomatic-emblem-with-gears-and-engineering-sy.jpg" alt="MUN ENSA Logo" className="w-24 h-24 object-contain" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight animate-fade-in-up">
            ENSA MUN
          </h1>

          <p className="text-2xl md:text-3xl text-accent font-semibold animate-fade-in-up animation-delay-200">
            Model United Nations Marrakech
          </p>

          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Pioneering the first Model United Nations conference within the ENSA network, uniting engineering students
            to engage in diplomacy, leadership, and global problem-solving.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg"
              onClick={() => onNavigate("events")}
            >
              Explore Our Conference
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={() => onNavigate("contact")}
            >
              Join The Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A groundbreaking fusion of diplomacy, engineering, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-3">{feature.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
