import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Service';
import Teams from './components/Teams';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Teams />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
