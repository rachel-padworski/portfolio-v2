import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  );
}

export default App;
