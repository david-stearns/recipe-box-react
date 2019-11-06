import React, { useState, useEffect } from "react";
import { getStars } from "./helpers.js";

function EditStars({ rating, mode, updateEditRating }) {
  const viewStars = getStars(rating);
  const [tempRating, setTempRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(tempRating);

  function updateRating(rating) {
    setTempRating(rating);
    updateEditRating(rating);
  }

  //reset rating when mode changes
  useEffect(() => {
    setTempRating(rating);
    setHoverRating(rating);
  }, [mode]);

  let editStars = [];
  for (let i = 1; i <= 5; i++) {
    editStars.push(
      <span
        onClick={() => updateRating(i)}
        onMouseEnter={() => setHoverRating(i)}
        onMouseLeave={() => setHoverRating(tempRating)}
      >
        {hoverRating >= i ? "\u2605" : "\u2606"}
      </span>
    );
  }
  return (
    <>
      {mode === "view" ? (
        <h5>{viewStars}</h5>
      ) : (
        <div
          style={{ fontSize: "20px", marginTop: "0px", marginBottom: "8px" }}
        >
          {editStars}
        </div>
      )}
    </>
  );
}

export default EditStars;
