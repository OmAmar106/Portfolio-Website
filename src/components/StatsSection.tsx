import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FloatingAccents from "./FloatingAccents";

const stats = [
  {
    platform: "Codeforces",
    rating: "2041",
    rank: "Candidate Master",
    detail: "AIR 114 · 1500+ solved",
    color: "text-primary",
    glowClass: "glow-primary",
    url: "https://codeforces.com/profile/OmAmar",
  },
  {
    platform: "LeetCode",
    rating: "2496",
    rank: "Guardian",
    detail: "Global #1536 · 1700+ solved",
    color: "text-secondary",
    glowClass: "glow-secondary",
    url: "https://leetcode.com/OmAmar/",
  },
  {
    platform: "CodeChef",
    rating: "2282",
    rank: "6 Star",
    detail: "AIR 69",
    color: "text-accent",
    glowClass: "",
    url: "https://www.codechef.com/users/om_amar",
  },
  {
    platform: "AtCoder",
    rating: "1200",
    rank: "Rated",
    detail: "Active Contestant",
    color: "text-primary",
    glowClass: "",
    url: "https://atcoder.jp/users/OmAmar",
  },
];

const AnimatedNumber = ({ value, inView }: { value: string; inView: boolean }) => {
  const num = parseInt(value);
  
  if (!inView) return <span className="font-mono text-5xl md:text-6xl font-bold">0</span>;
  
  return (
    <motion.span
      className="font-mono text-5xl md:text-6xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {num.toLocaleString()}
    </motion.span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 px-6 relative overflow-hidden">
      <FloatingAccents variant="primary" density="medium" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// competitive_programming</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Rated on the <span className="text-gradient">World Stage</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.a
              key={stat.platform}
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass glass-hover rounded-xl p-8 block cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  {stat.platform}
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border border-border ${stat.color}`}>
                  {stat.rank}
                </span>
              </div>
              <div className={stat.color}>
                <AnimatedNumber value={stat.rating} inView={inView} />
              </div>
              <p className="text-sm text-muted-foreground mt-4 font-mono">{stat.detail}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  View Profile →
                </span>
              </div>
              <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-accent"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(parseInt(stat.rating) / 3000) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Total problems solved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-xl px-8 py-4">
            <span className="text-muted-foreground font-mono text-sm">total_problems_solved</span>
            <span className="text-gradient font-mono text-2xl font-bold">&gt; 3200+</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
