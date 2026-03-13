import { Code2, Database, BarChart3, Network, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "SQL", "C++"],
  },
  {
    title: "Data Analysis & BI Tools",
    icon: BarChart3,
    skills: ["Power BI", "Excel", "DAX"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL", "Data Pipelines", "Data Processing"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Relational Databases"],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: ["Data Analysis", "Data Visualization", "KPI Reporting", "OOP", "DBMS", "Computer Networks"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
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
