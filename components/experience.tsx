import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Data Visualization Virtual Internship",
    company: "Tata Group",
    platform: "via Forage",
    date: "December 2024",
    description: [
      "Designed interactive Power BI dashboards analyzing 10+ business KPIs",
      "Improved data-driven decision-making and reporting efficiency",
      "Addressed real-world visualization challenges",
      "Delivered actionable insights aligned with stakeholder requirements",
    ],
    skills: ["Power BI", "Data Visualization", "KPI Analysis"],
  },
  {
    title: "Data Engineering Virtual Internship",
    company: "EduSkills (AICTE)",
    platform: "AWS Academy",
    date: "September 2024",
    description: [
      "Gained hands-on experience with ETL concepts and data pipelines",
      "Worked with structured data processing",
      "Explored cloud-based analytics workflows using AWS Academy labs",
    ],
    skills: ["ETL", "AWS", "Data Engineering", "Cloud Analytics"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-mono text-sm">{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} <span className="text-primary">• {exp.platform}</span>
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
