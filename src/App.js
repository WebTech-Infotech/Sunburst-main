import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
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
      <Portfolio />
      <Teams />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
