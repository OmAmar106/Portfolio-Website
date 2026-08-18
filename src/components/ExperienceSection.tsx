import { motion } from "framer-motion";
import { Briefcase, Users, Code } from "lucide-react";

const experiences = [
  {
    title: "WSE Intern",
    company: "Google",
    period: "May 2026 - Aug 2026",
    icon: Code,
    location: "Hyderabad, India",
    description: [
      "Built production AI-agent backend infrastructure with asynchronous Cloud Spanner logging, gRPC/RPC services, and reusable SDK components",
      "Developed an LLM playback framework for prompt/config modification, inference replay, output comparison, and debugging dashboards",
      "Optimized request scheduling to eliminate LLM QPS bottlenecks and validated the system under 1,000 concurrent users",
      "Integrated MCP, sandboxed Python execution, internal search, credential forwarding, and long-running multi-turn agent workflows",
    ],
  },
  {
    title: "DSA Mentor",
    company: "TLE Eliminator",
    period: "Dec 2024 - Mar 2025",
    icon: Users,
    location: "Remote",
    description: [
      "Mentored 1,500+ students in DSA, resolved 200+ problem-solving queries",
      "Guided solution optimization using time & space complexity analysis",
    ],
  },
  {
    title: "Developer Intern",
    company: "Multidimensions",
    period: "Jul 2024 - Aug 2024",
    location: "Remote",
    icon: Briefcase,
    description: [
      "Built REST APIs with Django — auth, RBAC, and CRUD for e-commerce platform",
      "Deployed production-ready web app with server config, env setup, and DB migrations",
    ],
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// experience</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I've <span className="text-gradient">Contributed</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary glow-primary" />

                <div className="glass glass-hover rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <exp.icon className="text-primary" size={18} />
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary font-mono mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">›</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
