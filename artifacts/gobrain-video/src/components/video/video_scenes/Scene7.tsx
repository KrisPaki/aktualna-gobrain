import { motion } from 'framer-motion';

export function Scene7() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-brand-primary)]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="flex items-center gap-6 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <div className="w-8 h-8 rounded-full border-4 border-[var(--color-brand-primary)] border-t-transparent animate-spin" />
        </div>
        <h1 className="text-[6vw] font-display font-bold text-white tracking-tight">
          ITS GoBrain
        </h1>
      </motion.div>
      <motion.div
        className="bg-white px-12 py-6 rounded-full shadow-2xl shadow-black/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, type: "spring" }}
      >
        <p className="text-[3vw] font-display font-semibold text-[var(--color-brand-primary)]">interaktywny trening słuchowy</p>
      </motion.div>
      <motion.p
        className="absolute bottom-12 text-[1.5vw] font-light text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        Trening słuchowy by Aneta Pakieła
      </motion.p>
    </motion.div>
  );
}
