
import './App.scss';
import Navigation from './components/nav';
import Back from './components/back';
import Hero from './components/hero.js'
import Security from './components/security';
import Builders from './components/buildSavings';
import Investment from './components/investment';
import Saver from './components/sotm';
import Footer from './components/footer';
import Testimonial from "./components/testimonial"

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Back/>
     <Hero/>
     <Security/>
     <Builders/>
     <Saver/>
     <Investment/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
