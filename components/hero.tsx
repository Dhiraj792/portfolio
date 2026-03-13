"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              AI & Data Science
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Dhiraj Badre
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Data Analyst & AI Enthusiast
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty">
            Entry-level Data Analyst and AI & Data Science undergraduate with hands-on experience in 
            Power BI dashboards, SQL, Python, and data visualization. Skilled in data analysis, 
            KPI reporting, ETL fundamentals, and data storytelling to support data-driven decision-making.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/Dhiraj792"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dhiraj-badre-2949a4290/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:dhirajbadre@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground text-sm pt-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-7775085847</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>dhirajbadre@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              <Image
                src="/images/profile.jpg"
                alt="Dhiraj Badre"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
