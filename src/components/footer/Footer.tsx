import React from "react";
import { Element } from "react-scroll";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Element name="anchor-contact-us" className="element">
        <div className={classes["contact-wrapper"]}>
          <a className={classes["social-link"]} href="mailto:#">
            <MdOutlineEmail /> contact@shuttercollectiveglasgow.com
          </a>
          <a className={classes["social-link"]} href="tel:#">
            <FaPhone /> +44 1413 647 645
          </a>
        </div>{" "}
      </Element>
      <div className={classes["socials-wrapper"]}>
        <FaFacebook className={classes.icon} />
        <FaXTwitter className={classes.icon} />
        <FaInstagram className={classes.icon} />
      </div>
    </footer>
  );
};

export default Footer;
