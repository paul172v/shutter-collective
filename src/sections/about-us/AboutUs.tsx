import React from "react";
import { Element } from "react-scroll";
import classes from "./AboutUs.module.scss";

const AboutUs = () => {
  const SectionHeader: React.FC<{ children: string }> = ({ children }) => (
    <h2 className={classes.subHeading}>{children}</h2>
  );

  const Paragraph: React.FC<{ children: string }> = ({ children }) => (
    <p className={classes.paragraph}>{children}</p>
  );

  return (
    <section className={classes.sectionAboutUs}>
      <Element name="anchor-about-us" className="element">
        <SectionHeader>About Us</SectionHeader>
      </Element>
      <Paragraph>
        Founded in 2015 by a small group of photography enthusiasts, Shutter
        Collective has grown into one of Glasgow's most vibrant photography
        communities.
      </Paragraph>
      <Paragraph>
        Our mission is to capture the diverse beauty of Glasgow through our
        lenses, bringing together photographers of all skill levels to learn,
        share, and grow.
      </Paragraph>
      <Paragraph>
        Known for our collaborative spirit, stunning urban and nature landscape
        captures, Shutter Collective has been recognized in local art
        exhibitions and photography contests.
      </Paragraph>
    </section>
  );
};

export default AboutUs;
