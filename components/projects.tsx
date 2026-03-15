import { Github, ExternalLink, BarChart3, Film } from "lucide-react"

const projects = [
  {
    title: "Sales Analysis Dashboard",
    role: "Data Analyst",
    icon: BarChart3,
    tech: ["Power BI"],
    description: [
      "Analyzed Amazon sales data using KPIs such as Total Sales, Profit, Quantity Sold, and Profit Margin",
      "Built interactive dashboards to identify trends, performance insights, and business opportunities",
    ],
    github: "https://github.com/Dhiraj792/Amazon-products",
  },
  {
    title: "Movie Recommender System",
    role: "Data Scientist",
    icon: Film,
    tech: ["Machine Learning", "Python", "Streamlit", "Heroku"],
    description: [
      "Developed a content-based recommendation system using Python and vectorization techniques",
      "Performed data preprocessing and feature extraction",
      "Deployed the application using Streamlit",
    ],
    github: "https://github.com/Dhiraj792/Movie-Recommender-System",
  },
  {
    title: "Mental Health Awareness",
    role: "Data Analyst",
    icon: Film,
    tech: ["Power BI"],
   description: [
        "Analyzed digital lifestyle data using KPIs such as Mental Health Score, Average Screen Time, and Physical Activity",
        "Built an interactive dashboard to visualize the relationship between caffeine intake, gaming habits, diet, and mental health trends",
        "Identified behavioral insights by analyzing anxiety levels, depression scores, and wellness app usage",
        ],
    github: "https://github.com/Dhiraj792/mental-health-awareness-",
  },

]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary">Role: {project.role}</p>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <ul className="space-y-2 mb-4">
                {project.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
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
