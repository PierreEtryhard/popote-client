import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fullStar,
  faStarHalfAlt as halfStar
} from "@fortawesome/free-solid-svg-icons";

export default function StarClickable({ shape, clbk, rate, index }) {
  const icon =
    shape === "full" ? fullStar : shape === "empty" ? emptyStar : halfStar;
  const css = "is-clickable " + (shape === "full" ? "star full" : "star");

  return (
    <FontAwesomeIcon
      // index={index}
      data-rate={rate}
      onClick={() => clbk(index)}
      className={css}
      icon={icon}
    ></FontAwesomeIcon>
  );
}
