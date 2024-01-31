import React, { useState } from "react";
import { Element } from "react-scroll";
import ReactModal from "react-modal";

import classes from "./Portfolio.module.scss";

const Portfolio: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedImageName, setSelectedImageName] = useState("");

  //// Set HTMLroot location of modal
  ReactModal.setAppElement("#modal");

  //// Functions

  const openModalHandler = (img: string) => {
    setSelectedImageName(img);
    setIsModalActive(true);
    console.log(`0${Number(img)}`);
  };

  const closeModalHandler = () => {
    setIsModalActive(false);
  };

  const prevModalHandler = () => {
    const subtractedNumber = Number(selectedImageName) - 1;

    if (selectedImageName === "01") {
      setSelectedImageName("09");
    } else {
      setSelectedImageName(`0${subtractedNumber}`);
    }
  };

  const nextModalHandler = () => {
    const increasedNumber = Number(selectedImageName) + 1;

    if (selectedImageName === "09") {
      setSelectedImageName("01");
    } else {
      setSelectedImageName(`0${increasedNumber}`);
    }
  };

  const imagesArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

  return (
    <React.Fragment>
      <section className={classes["section-portfolio"]}>
        <Element name="anchor-portfolio" className="element">
          <h2 className={classes["sub-heading"]}>Portfolio</h2>
        </Element>
        <div className={classes["gallery-wrapper"]}>
          {imagesArr.map((img) => (
            <img
              key={img}
              src={`./${img}.jpg`}
              alt="photo"
              className={classes.photo}
              onClick={() => openModalHandler(`${img}`)}
            />
          ))}
        </div>
      </section>
      <ReactModal
        className={classes.modal}
        isOpen={isModalActive}
        onRequestClose={closeModalHandler}
      >
        <img src={`./${selectedImageName}.jpg`} alt="Selected" />
        <div className={classes["u-row"]}>
          <button onClick={prevModalHandler}>Prev</button>
          <button onClick={closeModalHandler}>Close</button>
          <button onClick={nextModalHandler}>Next</button>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};

export default Portfolio;
