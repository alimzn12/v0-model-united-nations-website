import { Card } from "@/components/ui/card"

export function Team() {
  const teamMembers = [
    { name: "Sarah El Amrani", role: "Secretary General", emoji: "👩‍💼" },
    { name: "Youssef Benali", role: "Deputy Secretary General", emoji: "👨‍💼" },
    { name: "Fatima Zahra", role: "Director of Operations", emoji: "👩‍💻" },
    { name: "Mohammed Alaoui", role: "Director of Logistics", emoji: "👨‍🔧" },
    { name: "Amina Tahiri", role: "Communications Director", emoji: "👩‍🎨" },
    { name: "Karim Benjelloun", role: "Finance Director", emoji: "👨‍💰" },
    { name: "Leila Mansouri", role: "Academic Director", emoji: "👩‍🏫" },
    { name: "Omar Fassi", role: "Technology Lead", emoji: "👨‍💻" },
    { name: "Salma Idrissi", role: "Public Relations", emoji: "👩‍💼" },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders behind ENSA MUN Marrakech
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="h-32 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-6xl border-4 border-accent group-hover:scale-110 transition-transform">
                  {member.emoji}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-accent mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-medium">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
