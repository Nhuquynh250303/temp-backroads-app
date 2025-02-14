import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Tours from "./component/Tours";
import Services from "./component/Services";
import About from "./component/About";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours/>
      <Footer />
    </div>
  );
}

export default App;
