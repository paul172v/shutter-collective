import React from "react";
import { Element } from "react-scroll";

import classes from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <section className={classes["section-about-us"]}>
      <Element name="anchor-about-us" className="element">
        <h2 className={classes["sub-heading"]}>About Us</h2>
      </Element>
      <p className={classes.history}>
        Founded in 2015 by a small group of photography enthusiasts, Shutter
        Collective has grown into one of Glasgow's most vibrant photography
        communities
      </p>
      <p className={classes.mission}>
        Our mission is to capture the diverse beauty of Glasgow through our
        lenses, bringing together photographers of all skill levels to learn,
        share, and grow.
      </p>
      <p className={classes.features}>
        Known for our collaborative spirit, stunning urban and nature landscape
        captures, Shutter Collective has been recognized in local art
        exhibitions and photography contests.
      </p>
    </section>
  );
};

export default AboutUs;
