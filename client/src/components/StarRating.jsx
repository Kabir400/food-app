import React from "react";

const StarRating = ({ rating, maxStars = 5 }) => {
  // Create an array of star types based on the rating
  const stars = Array.from({ length: maxStars }, (_, index) => {
    if (index < Math.floor(rating)) {
      return "full"; // Full star
    } else {
      return "empty"; // Blank star
    }
  });

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {stars.map((type, index) => {
        if (type === "full") {
          return (
            <span
              key={index}
              className="bannerStar"
              style={{ color: "#FFD700", fontSize: "20px" }}
            >
              ★
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className="bannerStar"
              style={{ color: "#DDD", fontSize: "20px" }}
            >
              ☆
            </span>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
