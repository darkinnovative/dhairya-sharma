import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative transition-colors duration-300 overflow-x-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px sm:40px sm:40px'
        }}></div>
      </div>
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
