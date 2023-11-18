import classes from "./App.module.scss";

import Hero from "./sections/hero/Hero";
import AboutUs from "./sections/about-us/AboutUs";
import Portfolio from "./sections/portfolio/Portfolio";
import Events from "./sections/events/Events";

function App() {
  return (
    <div className={classes.page}>
      <Hero />
      <AboutUs />
      <Portfolio />
      <Events />
    </div>
  );
}

export default App;
