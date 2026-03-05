import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology, Nagpur",
    shortName: "IIIT Nagpur",
    period: "2023 - 2027",
    location: "Nagpur, India",
    highlights: [
      "Core Member — CP/DSA, Google Developers Group on Campus",
      "Automated report card generation used for 1000+ students",
      "Active competitive programmer representing the institute",
    ],
    url: "https://iiitn.ac.in/",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// education</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I <span className="text-gradient">Study</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.a
            key={i}
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass glass-hover rounded-xl p-8 block group cursor-pointer"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edu.shortName}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 md:mt-0">
                    <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-primary font-mono mb-4">{edu.degree}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
