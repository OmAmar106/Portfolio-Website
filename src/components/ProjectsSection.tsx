import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import FloatingAccents from "./FloatingAccents";

const projects = [
  {
    title: "Household Services App",
    description: "Scalable platform connecting users with service providers. Built for IIT Madras MAD-II, secured S-grade.",
    tech: ["Python", "Flask", "VueJS", "SQLite", "Redis", "Celery"],
    link: "https://github.com/OmAmar106/Household-Services-Application-23f2002152",
  },
  {
    title: "AI Data Analyst Agent",
    description: "LLM-powered agent for intelligent web scraping, data processing, and visualization from natural language prompts.",
    tech: ["Python", "LangChain", "Groq API", "Pandas", "Flask"],
    link: "https://github.com/OmAmar106/AI-Data-Analyst-Agent",
  },
  {
    title: "Codeforces Rating Predictor",
    description: "ML model for predictive analytics with API-based data collection, feature engineering, plus a web app & browser extension.",
    tech: ["Scikit-learn", "Flask", "JavaScript"],
    link: "https://github.com/OmAmar106/Codeforces-Rating-Predictor",
  },
  {
    title: "Report Card Generator",
    description: "Automated IIIT Nagpur's report card generation, currently used for 1000+ students.",
    tech: ["Python", "Pandas", "Openpyxl"],
    link: "https://github.com/OmAmar106/Report-Card-Generation-Automation",
  },
  {
    title: "NEXI – AI After-Sales Support Platform",
    description:
      "AI-enabled after-sales software for managing customer issues, service workflows and support automation.",
    tech: ["Python", "Flask", "AI/LLM", "Web"],
    link: "https://github.com/OmAmar106/NEXI-AI-Enabled-After-Sales-Software-SE-Project",
  },
  {
    title: "Live Camera Safety AI Detection",
    description:
      "Real-time AI system that analyzes multiple live camera feeds to detect safety threats using computer vision and trigger alerts.",
    tech: ["Python", "OpenCV", "Computer Vision", "AI", "RTSP"],
    link: "https://github.com/OmAmar106/Live-Camera-Safety-AI-Detection",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <FloatingAccents variant="secondary" density="medium" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass glass-hover rounded-xl p-6 group relative overflow-hidden"
            >
              {/* Hover gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank">
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/OmAmar106?tab=repositories"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-lg font-mono text-sm"
        >
          <Github size={18} />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
