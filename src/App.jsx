import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import MenuHighlights from './components/MenuHighlights';
import Story from './components/Story';

function App() {
  return (
    <main className="font-sans text-neutral-900 antialiased">
      <Hero />
      <Ingredients />
      <MenuHighlights />
      <Story />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600">© {new Date().getFullYear()} Rang Mahal Indian Kitchen</p>
        <p className="text-neutral-500">Open daily • Lunch & Dinner • Dine-in • Takeaway</p>
      </div>
    </footer>
  );
}

export default App;
