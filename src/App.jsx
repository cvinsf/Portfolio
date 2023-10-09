import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from './components/About'
import ScrollTopButton from "./components/ScrollArrow";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <ScrollTopButton />
    </div>
  );
};

export default App;
