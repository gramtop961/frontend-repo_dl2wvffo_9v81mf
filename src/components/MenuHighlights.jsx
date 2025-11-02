import { motion } from 'framer-motion';

const dishes = [
  { name: 'Butter Chicken', colors: 'from-amber-500 to-rose-500' },
  { name: 'Paneer Tikka', colors: 'from-orange-500 to-red-500' },
  { name: 'Biryani', colors: 'from-emerald-500 to-lime-500' },
  { name: 'Masala Dosa', colors: 'from-fuchsia-500 to-purple-500' },
  { name: 'Chole Bhature', colors: 'from-rose-500 to-amber-500' },
  { name: 'Aloo Tikki Chaat', colors: 'from-pink-500 to-red-500' },
];

export default function MenuHighlights() {
  return (
    <section className="relative bg-gradient-to-b from-white to-orange-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">Signature Favourites</h2>
          <p className="text-neutral-600 hidden md:block">Crafted daily with seasonal produce and house-ground masalas.</p>
        </div>
      </div>

      <div className="mt-8">
        <Marquee speed={60} direction="left" />
        <Marquee speed={48} direction="right" offset={20} className="mt-4 opacity-90" />
      </div>
    </section>
  );
}

function Marquee({ speed = 50, direction = 'left', offset = 0, className = '' }) {
  const xStart = direction === 'left' ? 0 : -1000;
  const xEnd = direction === 'left' ? -1000 : 0;
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-4"
        initial={{ x: xStart }}
        animate={{ x: xEnd }}
        transition={{ ease: 'linear', duration: speed, repeat: Infinity }}
        style={{ y: offset }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-4">
            {dishes.map((d, idx) => (
              <div
                key={`${i}-${idx}`}
                className={`shrink-0 rounded-full bg-gradient-to-r ${d.colors} px-6 py-3 text-white font-semibold shadow-sm`}
              >
                {d.name}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
