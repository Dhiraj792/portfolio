import { Award, CheckCircle2 } from "lucide-react"

const certifications = [
  {
    title: "Power BI Micro Course",
    issuer: "Microsoft",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
  },
  {
    title: "Amazon Web Services (AWS)",
    issuer: "AWS Academy",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
