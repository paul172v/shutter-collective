import { Link } from "react-scroll";
import classes from "./Hero.module.scss";

const navLinks = [
  { to: "anchor-about-us", label: "About Us" },
  { to: "anchor-portfolio", label: "Portfolio" },
  { to: "anchor-events", label: "Events" },
  { to: "anchor-contact-us", label: "Contact Us" },
];

const Hero = () => {
  return (
    <section className={classes.sectionHero}>
      <header className={classes.header}>
        <h1 className={classes.title}>Shutter Collective</h1>
        <nav>
          <ul className={classes.navList}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} smooth={true} duration={1000}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <p className={classes.tagline}>
        "Capturing the world through our lenses"
      </p>
    </section>
  );
};

export default Hero;
