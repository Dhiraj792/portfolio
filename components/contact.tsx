import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {"I'm"} currently looking for new opportunities in Data Analysis and AI. 
            {"Let's"} connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:dhirajbadre@gmail.com"
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors text-center group"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">dhirajbadre@gmail.com</p>
          </a>

          <a
            href="tel:+917775085847"
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors text-center group"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91-7775085847</p>
          </a>

          <a
            href="https://www.linkedin.com/in/dhiraj-badre-2949a4290/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors text-center group"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">dhiraj-badre</p>
          </a>

          <a
            href="https://github.com/Dhiraj792"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors text-center group"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">Dhiraj792</p>
          </a>
        </div>
      </div>
    </section>
  )
}
