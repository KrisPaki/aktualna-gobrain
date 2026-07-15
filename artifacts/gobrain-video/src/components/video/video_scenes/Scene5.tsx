import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="text-[6vw] font-display font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Działa jak gra
      </motion.div>

      {/* Abstract Game UI representation */}
      <div className="relative w-[40vw] h-[20vw] bg-white/5 rounded-3xl border border-white/10 overflow-hidden mb-12 flex items-center justify-center">
        {phase >= 1 && (
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-[4vw] h-[4vw] rounded-xl bg-[var(--color-brand-primary)]"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              />
            ))}
          </motion.div>
        )}
      </div>

      <motion.p
        className="text-[2.5vw] font-light text-[var(--color-text-muted)]"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Automatycznie dopasowuje <span className="text-[var(--color-brand-accent)] font-medium">poziom trudności</span>
      </motion.p>
    </motion.div>
  );
}
