import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import ReactModal from "react-modal";
import classes from "./Portfolio.module.scss";

const imagesArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

const Portfolio = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    ReactModal.setAppElement("#modal");
  }, []);

  const openModalHandler = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalActive(true);
  };

  const closeModalHandler = () => setIsModalActive(false);

  const changeModalImage = (increment: number) => {
    const newIndex =
      (selectedImageIndex + increment + imagesArr.length) % imagesArr.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <React.Fragment>
      <section className={classes["sectionPortfolio"]}>
        <Element name="anchorPortfolio" className="element">
          <h2 className={classes["subHeading"]}>Portfolio</h2>
        </Element>
        <div className={classes["galleryWrapper"]}>
          {imagesArr.map((img, index) => (
            <img
              key={img}
              src={`./${img}.jpg`}
              alt="photo"
              className={classes.photo}
              onClick={() => openModalHandler(index)}
            />
          ))}
        </div>
      </section>
      <ReactModal
        className={classes.modal}
        isOpen={isModalActive}
        onRequestClose={closeModalHandler}
      >
        <div className={classes["galleryGrid"]}>
          <button
            className={classes["btnModalClose"]}
            onClick={closeModalHandler}
          >
            X
          </button>
          <img
            className={classes["modalPhoto"]}
            src={`./${imagesArr[selectedImageIndex]}.jpg`}
            alt="Selected"
          />
          <div className={classes["uRow"]}>
            <button
              className={classes["btnPrevNextPhoto"]}
              onClick={() => changeModalImage(-1)}
            >
              Prev
            </button>
            <button
              className={classes["btnPrevNextPhoto"]}
              onClick={() => changeModalImage(1)}
            >
              Next
            </button>
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};

export default Portfolio;
