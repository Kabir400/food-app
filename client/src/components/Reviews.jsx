//base url
const base_url = import.meta.env.VITE_BASE_URL;

import React, { useState, useEffect } from "react";
import styles from "../css/reviews.module.css";
import StarRating from "./StarRating";
import getRequest from "../utility/getRequest.js";
import formatDate from "../utility/FormatDate.js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

//img
import reviewClock from "../assets/reviewClock.png";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  //fetch reviews
  const fetchReviews = async () => {
    const response = await getRequest(`${base_url}/get/review/${id}`);

    if (response.suceess) {
      setReviews(response.data);
    } else {
      toast.error(response.message, { position: "top-right", autoClose: 3000 });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchReviews();
    };
    fetchData();
  }, [id]);

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width <= 670) {
      setVisibleItems(1);
    } else if (width <= 900) {
      setVisibleItems(2);
    } else {
      setVisibleItems(3);
    }
  };

  // useEffect for window resize
  useEffect(() => {
    updateVisibleItems(); // Initial setup
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems); // Cleanup
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - visibleItems : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <h2 className={styles.reviewHeading}>Customer Reviews</h2>

        <div className={styles.carouselContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div className={styles.reviewCard} key={index}>
                {/* cardheader */}
                <div className={styles.header}>
                  <div className={styles.headerLeft}>
                    <img
                      src={review.user.img}
                      alt={review.name}
                      className={styles.avater}
                    />
                    <div className={styles.headerLeftTextContainer}>
                      <h4 className={styles.reviewName}>{review.user.name}</h4>
                      <p className={styles.reviewLocation}>
                        {review.user.country}
                      </p>
                    </div>
                  </div>
                  <div className={styles.headerRight}>
                    <div className={styles.starContainer}>
                      <StarRating rating={review.rating} />
                    </div>
                    <div className={styles.headerRightTimeContainer}>
                      <img src={reviewClock} className={styles.reviewClock} />
                      <p className={styles.reviewTimeText}>
                        {formatDate(review.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.body}>
                  <p className={styles.reviewText}>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.controlBtn}>
            &lt;
          </button>
          <button onClick={nextSlide} className={styles.controlBtn}>
            &gt;
          </button>
        </div>
      </div>
      {/* rating container */}
      <div className={styles.ratingContainer}>
        <p className={styles.rating}>4.8</p>
        <div className={styles.ratingContainerBottom}>
          <StarRating rating={4.8} />
          <p className={styles.ratingContainerReview}>10 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
