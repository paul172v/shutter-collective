import React from "react";

import classes from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={classes["section-hero"]}>
      <header className={classes.header}>
        <h1 className={classes.title}>Shutter Collective</h1>
        <nav>
          <ul className={classes["nav-list"]}>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <p className={classes.tagline}>
        &quot;Capturing the world through our lenses&quot;
      </p>
    </section>
  );
};

export default Hero;
