import classes from "./App.module.scss";

import Hero from "./sections/hero/Hero";
import AboutUs from "./sections/about-us/AboutUs";
import Portfolio from "./sections/portfolio/Portfolio";
import Events from "./sections/events/Events";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={classes.page}>
      <Hero />
      <AboutUs />
      <Portfolio />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
