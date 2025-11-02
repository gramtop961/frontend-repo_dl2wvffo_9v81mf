import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="relative bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">Colour. Aroma. Soul.</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Inspired by Indian homes and bustling streets, our kitchen celebrates timeless recipes with a playful, modern spin. We grind our spices in-house, source local produce, and honour the rhythm of slow cooking.
          </p>
          <p className="mt-3 text-neutral-700">
            No clicks needed — just scroll and savour the experience as ingredients dance into view.
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-[4/3] rounded-3xl border border-amber-100 bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Pattern />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-rose-100/60 to-transparent" />
    </section>
  );
}

function Pattern() {
  return (
    <svg viewBox="0 0 600 450" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {[...Array(24)].map((_, i) => {
        const x = (i % 6) * 100 + 50;
        const y = Math.floor(i / 6) * 90 + 50;
        const r = 28 + (i % 4) * 6;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill="url(#g1)" opacity="0.7" />
            <circle cx={x} cy={y} r={r - 10} fill="#fff" opacity="0.9" />
          </g>
        );
      })}
      <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="28" fontWeight="700" fill="#fb923c">
        Namaste
      </text>
    </svg>
  );
}
