import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

export function Events() {
  const committees = [
    {
      name: "UNHCR",
      fullName: "United Nations High Commissioner for Refugees",
      topic:
        "Addressing the challenges of climate-induced displacement and ensuring the protection of climate refugees",
      icon: "🌍",
    },
    {
      name: "WHO",
      fullName: "World Health Organization",
      topic: "Improving global healthcare access and addressing health disparities in developing nations",
      icon: "🏥",
    },
    {
      name: "UNESCO",
      fullName: "United Nations Educational, Scientific and Cultural Organization",
      topic: "Promoting cultural diversity and international cooperation in education and science",
      icon: "📚",
    },
    {
      name: "FAO",
      fullName: "Food and Agriculture Organization",
      topic: "Ensuring food security and sustainable agricultural practices in the face of climate change",
      icon: "🌾",
    },
    {
      name: "ITU",
      fullName: "International Telecommunication Union",
      topic: "Combating misinformation and ensuring digital literacy in the information age",
      icon: "💻",
    },
  ]

  const schedule = [
    {
      day: "Day 1",
      title: "Opening Ceremony & Committee Sessions",
      description: "Welcome delegates, keynote speeches, and first committee debates begin",
    },
    {
      day: "Day 2",
      title: "Advanced Debates & Resolution Writing",
      description: "Intensive committee work, crisis simulations, and resolution drafting",
    },
    {
      day: "Day 3",
      title: "Innovation Hackathon & Closing",
      description: "Transform diplomatic solutions into technical prototypes and award ceremony",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
            MUN ENSA Marrakech 2025
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-lg">April 18-20, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-lg">Marrakech, Morocco</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-lg">200+ Delegates</span>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-accent">Conference Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl font-bold text-accent mb-2">{item.day}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 text-accent">Our Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{committee.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">{committee.name}</h3>
                    <p className="text-sm text-muted-foreground">{committee.fullName}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">{committee.topic}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
