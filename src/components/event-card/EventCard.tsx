import React from "react";

import classes from "./EventCard.module.scss";

const EventCard: React.FC<{
  image: string;
  heading: string;
  date: string;
  location: string;
  description: string;
  details: string;
}> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["image-wrapper"]}>
        <img
          className={classes.image}
          src={`../../../public/${props.image}.jpg`}
          alt="location"
        />
      </div>
      <div className={classes["text-wrapper"]}>
        <h3 className={classes.heading}>{props.heading}</h3>
        <p className={classes.date}>{props.date}</p>
        <p className={classes.location}>{props.location}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.details}>{props.details}</p>
      </div>
    </div>
  );
};

export default EventCard;
