import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const Star = (props) => {
  const { ratings } = props;
  const starRating = Array.from({ length: 5 }, (element, index) => {
    let star = index + 1;
    return (
      <span key={index}>
        {ratings >= star ? (
          <FaStar />
        ) : ratings > star - 1 && ratings < star ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <div style={{ marginTop: "10px" }}>{starRating.map((item) => item)}</div>
  );
};

export default Star;
