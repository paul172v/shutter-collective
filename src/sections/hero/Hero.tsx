import React from "react";
import { Link } from "react-scroll";

import classes from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={classes["section-hero"]}>
      <header className={classes.header}>
        <h1 className={classes.title}>Shutter Collective</h1>
        <nav>
          <ul className={classes["nav-list"]}>
            <li>
              <Link to="anchor-about-us" smooth={true} duration={1000}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="anchor-portfolio" smooth={true} duration={1000}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="anchor-events" smooth={true} duration={1000}>
                Events
              </Link>
            </li>
            <li>
              <Link to="anchor-contact-us" smooth={true} duration={1000}>
                Contact Us
              </Link>
            </li>
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
