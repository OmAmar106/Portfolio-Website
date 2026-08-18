import { motion } from "framer-motion";
import { Trophy, Medal, Award, Flame, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "ICPC Asia West Finalist 2026",
    description: "Represented India at ICPC Asia West Championship",
    highlight: true,
    url: "https://icpc.global/",
  },
  {
    icon: Flame,
    title: "Meta Hacker Cup 25 AIR 2",
    description: "All India Rank 2 · Global Rank 58 in Round 1",
    highlight: true,
    url: "https://www.facebook.com/codingcompetitions/hacker-cup",
  },
  {
    icon: Medal,
    title: "ICPC Regionalist 2025 & 2026",
    description: "Rank 24/100+ teams (Chennai) · Rank 43/300+ teams (Amritapuri)",
    highlight: false,
    url: "https://icpc.global/",
  },
  {
    icon: Award,
    title: "IICPC Regionalist 2025 & 2026",
    description: "Secured Rank 100 in IICPC Regionals 24-25, Rank 93/13k+ Participants in IICPC Prelims 2026",
    highlight: false,
    url: "https://codefest.iicpc.com/",
  },
  {
    icon: Award,
    title: "AMS Derive '26 Finalist",
    description: "Secured Rank 11 in AMS Derive Finals '26 at IIT Bombay",
    highlight: false,
    url: "https://amsderive.in/",
  },
  {
    icon: Medal,
    title: "Won at Multiple Offline National CP Competitions",
    description: "- IIT Madras, IIT Patna, IIIT Nagpur (2), IIIT Jabalpur, VJTI, TCET · (Total 40k+ Rs. Won)",
    highlight: false,
    url: "",
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Achieve<span className="text-gradient">ments</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <motion.a
              key={i}
              href={ach.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass glass-hover rounded-xl p-6 flex items-start gap-5 group cursor-pointer ${
                ach.highlight ? "border-primary/20" : ""
              }`}
            >
              <div className={`p-3 rounded-lg shrink-0 ${
                ach.highlight ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                <ach.icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold text-lg ${ach.highlight ? "text-primary" : "text-foreground"}`}>
                  {ach.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{ach.description}</p>
              </div>
              <div className="ml-auto shrink-0 flex items-center gap-3">
                {ach.highlight && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
                    featured
                  </span>
                )}
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
