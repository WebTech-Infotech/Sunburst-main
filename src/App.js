import './App.css';
import About from './components/About';
import CustomerSupport from './components/CustomerSupport';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Service';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <CustomerSupport />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
