import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-6">
          {/* Main Education */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-mono text-sm">2022 - Present</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  B.Tech in Artificial Intelligence & Data Science
                </h3>
                <p className="text-muted-foreground">
                  P.R. Pote Patil College of Engineering & Management
                </p>
                <p className="text-sm text-muted-foreground">
                  Minors in Internet of Things (IoT)
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Amravati, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Previous Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">2022 - 2023</span>
                </div>
                <h3 className="font-semibold text-foreground">Higher Secondary</h3>
                <p className="text-muted-foreground text-sm">Taywade Junior College</p>
                <p className="text-primary font-semibold">62.00%</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">2020 - 2021</span>
                </div>
                <h3 className="font-semibold text-foreground">Secondary</h3>
                <p className="text-muted-foreground text-sm">Jaibai Chaudhari Dnyanpeeth High School</p>
                <p className="text-primary font-semibold">76.00%</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
