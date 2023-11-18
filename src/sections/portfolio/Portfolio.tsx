import React from "react";

import classes from "./Portfolio.module.scss";

const Portfolio: React.FC = () => {
  return (
    <section className={classes["section-portfolio"]}>
      <h2 className={classes["sub-heading"]}>Portfolio</h2>
      <div className={classes["gallery-wrapper"]}>
        <img
          src="./01.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["01"]}
        />
        <img
          src="./02.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["02"]}
        />
        <img
          src="./03.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["03"]}
        />
        <img
          src="./04.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["04"]}
        />
        <img
          src="./05.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["05"]}
        />
        <img
          src="./06.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["06"]}
        />
        <img
          src="./07.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["07"]}
        />
        <img
          src="./08.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["08"]}
        />
        <img
          src="./09.jpg"
          alt="photo"
          className={classes.photo}
          id={classes["09"]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
