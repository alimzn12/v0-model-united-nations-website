import { Card } from "@/components/ui/card"
import { GraduationCap, Lightbulb, Target } from "lucide-react"

export function About() {
  const sections = [
    {
      icon: GraduationCap,
      title: "Our Mission",
      content:
        "ENSA MUN was founded to merge technical engineering expertise with diplomatic dialogue. We empower future engineers to become visionary leaders by engaging them in global problem-solving, fostering critical thinking, and building bridges across ENSA institutions throughout Morocco.",
    },
    {
      icon: Target,
      title: "Our Vision",
      content:
        "To establish a lasting legacy of innovation and collaboration within the ENSA network, creating a platform where engineering students can develop diplomatic skills, tackle global challenges, and build solutions that make a real-world impact.",
    },
    {
      icon: Lightbulb,
      title: "Why ENSA MUN?",
      content:
        "We're pioneering the first Model United Nations conference within the ENSA network. Unlike traditional MUNs, we uniquely combine diplomacy with technical innovation through our signature Hackathon, where debated solutions come to life through engineering and technology.",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
            About ENSA MUN
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering engineering students to become global leaders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <section.icon className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-accent">{section.title}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">{section.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
