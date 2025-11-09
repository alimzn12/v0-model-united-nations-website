export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-accent bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
              MUN
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ENSA MUN Marrakech
            </span>
          </div>
          <p className="text-muted-foreground">Pioneering diplomacy and innovation within the ENSA network</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ENSA MUN Marrakech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
