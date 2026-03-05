import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FloatingGeometry from "./FloatingGeometry";

const lines = [
  { prefix: "const", text: ' developer = "Om Amar";', delay: 0 },
  { prefix: "const", text: ' role = "Competitive Programmer & Developer";', delay: 0.8 },
  { prefix: "const", text: " ratings = { codeforces: 2041, leetcode: 2496, codechef: 2282 };", delay: 1.6 },
  { prefix: "const", text: ' achievement = "ICPC Asia West Finalist";', delay: 2.4 },
  { prefix: "//", text: " Ready to build something extraordinary.", delay: 3.2 },
];

const TypingLine = ({ prefix, text, delay }: { prefix: string; text: string; delay: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  const isComment = prefix === "//";

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      <span className={isComment ? "text-muted-foreground/60 italic" : "text-accent"}>{prefix}</span>
      <span className={isComment ? "text-muted-foreground/60 italic" : "text-foreground"}>{displayed}</span>
      {displayed.length < text.length && (
        <span className="terminal-cursor text-primary">▎</span>
      )}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0 mb-0" style={{ isolation: 'isolate' }}>
      <FloatingGeometry />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">available for opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
        >
          <span
            className="text-gradient drop-shadow-[0_0_30px_hsl(155,100%,50%,0.4)]"
          >
            Om Amar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Competitive Programmer · Full Stack Developer · Problem Solver
        </motion.p>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          className="glass rounded-xl overflow-hidden text-left max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-xs font-mono text-muted-foreground ml-2">~/om-amar/portfolio</span>
          </div>
          <div className="p-6 space-y-2">
            {lines.map((line, i) => (
              <TypingLine key={i} {...line} />
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="mx-auto text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
