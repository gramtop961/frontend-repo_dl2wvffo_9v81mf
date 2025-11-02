import { motion } from 'framer-motion';

const ingredients = [
  { key: 'chili', name: 'Red Chili', color: '#ef4444', accent: 'from-rose-500 to-orange-500' },
  { key: 'turmeric', name: 'Turmeric', color: '#f59e0b', accent: 'from-amber-500 to-yellow-500' },
  { key: 'coriander', name: 'Coriander', color: '#22c55e', accent: 'from-lime-500 to-emerald-500' },
  { key: 'cumin', name: 'Cumin Seeds', color: '#8b5e34', accent: 'from-amber-700 to-amber-500' },
  { key: 'onion', name: 'Red Onion', color: '#a855f7', accent: 'from-fuchsia-500 to-purple-500' },
  { key: 'garlic', name: 'Garlic', color: '#eab308', accent: 'from-yellow-400 to-amber-400' },
];

export default function Ingredients() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            The Ingredient Parade
          </motion.h2>
          <motion.p
            className="mt-4 text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Scroll to watch our spices come alive — bold colours, fragrant notes, and authentic Indian flair.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((item, idx) => (
            <IngredientCard key={item.key} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-100/60 to-transparent" />
    </section>
  );
}

function IngredientCard({ item, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.accent} opacity-30 blur-2xl`} />
      <div className="relative z-10 flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 rounded-xl bg-white/70 backdrop-blur border border-amber-100 flex items-center justify-center">
          <IngredientIcon type={item.key} color={item.color} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-neutral-800">{item.name}</h3>
          <p className="text-neutral-600 text-sm">Fresh, fragrant, and carefully sourced.</p>
        </div>
      </div>

      <motion.div
        className="mt-6 text-sm text-neutral-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: 0.2 }}
      >
        From tandoor-smoked curries to street-style chaats, each spice plays its part in the rhythm of our kitchen.
      </motion.div>

      {/* rise up on hover for delight, but no click required */}
      <motion.div
        className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${item.accent}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}

function IngredientIcon({ type, color = '#ef4444' }) {
  switch (type) {
    case 'chili':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <path d="M17 20c6-8 17-6 19-1 1 3-2 6-5 8-6 5-10 9-12 16-1 4 0 9 4 11 9 4 24-10 28-22 2-6 2-13-3-16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 14c0-3 3-6 7-6" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'turmeric':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <path d="M12 38c6-8 18-11 28-7 6 2 8 6 7 9-1 5-8 9-17 11-9 2-15-1-18-5-2-3-1-5 0-8z" fill={color} opacity="0.9" />
          <path d="M18 30c3-3 6-5 9-6" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'coriander':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <g stroke="#16a34a" strokeWidth="3" strokeLinecap="round">
            <path d="M14 50c10-8 16-18 16-30" />
            <path d="M30 20c3 4 7 7 12 9" />
            <path d="M26 28c-5-2-9-5-12-9" />
          </g>
          <circle cx="30" cy="18" r="4" fill={color} />
          <circle cx="42" cy="30" r="4" fill={color} />
          <circle cx="18" cy="26" r="4" fill={color} />
        </svg>
      );
    case 'cumin':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          {[...Array(5)].map((_, i) => (
            <path key={i} d="M10 40c8-6 14-6 22 0" stroke={color} strokeWidth="3" strokeLinecap="round" transform={`translate(${i * 8}, ${i % 2 === 0 ? 0 : -4})`} />
          ))}
        </svg>
      );
    case 'onion':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <path d="M32 12c-2 4-6 6-9 10-7 8-7 16 0 23 6 6 12 6 18 0 7-7 7-15 0-23-3-4-7-6-9-10z" stroke={color} strokeWidth="3" />
          <path d="M32 12c1-3 3-6 7-8" stroke="#22c55e" strokeWidth="3" />
        </svg>
      );
    case 'garlic':
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <path d="M28 14c-2 6-8 8-10 16-2 7 2 14 9 17 7 3 14 0 18-6 4-6 2-14-3-18-3-2-7-3-8-9" stroke={color} strokeWidth="3" />
          <path d="M32 10c0-3 2-5 4-6" stroke="#16a34a" strokeWidth="3" />
        </svg>
      );
    default:
      return null;
  }
}
