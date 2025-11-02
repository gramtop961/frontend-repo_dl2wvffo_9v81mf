import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      {/* Animated gradient orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500/50 to-rose-500/50 blur-3xl"
        animate={{ y: [0, 20, -10, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-500/40 to-lime-500/40 blur-3xl"
        animate={{ y: [0, -25, 15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1
          className="font-extrabold text-5xl md:text-7xl leading-tight bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rang Mahal Indian Kitchen
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-2xl text-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A vibrant journey through India’s spices — crafted with love, colour, and rhythm.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-3 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-rose-700">100% Indian spices</span>
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-amber-700">Fresh & authentic</span>
          <span className="hidden md:inline-flex items-center rounded-full bg-lime-100 px-4 py-2 text-lime-700">Vegetarian options</span>
        </motion.div>
      </div>

      {/* Floating spice doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingSpice className="left-10 top-16" color="#ef4444" delay={0} />
        <FloatingSpice className="right-16 top-24" color="#f59e0b" delay={0.6} />
        <FloatingSpice className="left-1/3 bottom-24" color="#10b981" delay={1} />
      </div>
    </section>
  );
}

function FloatingSpice({ className = '', color = '#ef4444', delay = 0 }) {
  return (
    <motion.svg
      className={`absolute h-12 w-12 opacity-70 ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [20, -10, 10, 0], opacity: 1, rotate: [0, 6, -4, 0] }}
      transition={{ delay, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* simple star-anise style */}
      <g transform="translate(50,50)">
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d="M0 0 L0 -26 C6 -30 10 -30 12 -26 L0 0 Z"
            fill={color}
            transform={`rotate(${(i * 360) / 6})`}
            opacity={0.8}
          />
        ))}
        <circle r="5" fill={color} />
      </g>
    </motion.svg>
  );
}
