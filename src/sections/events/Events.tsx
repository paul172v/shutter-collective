// Events.jsx

import { Element } from "react-scroll";

import classes from "./Events.module.scss";
import EventCard from "../../components/event-card/EventCard";
import eventsData from "./events-data";

const Events = () => {
  return (
    <section className={classes["section-events"]}>
      <Element name="anchor-events" className="element">
        <h2 className={classes["sub-heading"]}>Events & Workshops</h2>
      </Element>
      <div className={classes["events-wrapper"]}>
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
