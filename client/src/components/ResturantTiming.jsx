import React from "react";
import style from "../css/ResturantTiming.module.css";

//img
import deliveryInfo from "../assets/deliveryInfo.png";
import contactInfo from "../assets/contactInfo.png";
import optionalTime from "../assets/optionalTime.png";

function ResturantTiming() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        {/* 1stbox with delivery info */}
        <div className={style.leftBox}>
          <div className={style.leftBoxheadingContainer}>
            <img src={deliveryInfo} className={style.icon} />
            <p className={style.leftBoxHeading}>Delivery Information</p>
          </div>

          <div className={style.leftBoxDates}>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Monday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Tuesday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Wednesday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Thursday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Friday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Saturday: </span> 12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>Sunday: </span>12:00 AM–3:00 AM
            </p>
            <p className={style.leftBoxDate}>
              <span className={style.date}>
                Estimated time until delivery:{" "}
              </span>
              20 min
            </p>
          </div>
        </div>

        {/* 2nd box with contact info */}
        <div className={style.leftBox}>
          <div className={style.leftBoxheadingContainer}>
            <img src={contactInfo} className={style.icon} />
            <p className={style.leftBoxHeading}>Contact Information</p>
          </div>

          <div className={style.leftBoxBottom}>
            <p className={style.leftBoxBottomText}>
              If you have allergies or other dietary restrictions, please
              contact the restaurant. The restaurant will provide food-specific
              information upon request.
            </p>
            <p className={style.leftBoxBottomHeading}>Phone number</p>
            <p className={style.leftBoxBottomContactInfo}>+934443-43</p>
            <p className={style.leftBoxBottomHeading}>Website</p>
            <p className={style.leftBoxBottomContactInfo}>
              http://mcdonalds.uk/
            </p>
          </div>
        </div>
      </div>
      {/* 3rd box for optional timing */}

      <div className={style.rightBox}>
        <div className={style.rightBoxContainer}>
          <img src={optionalTime} className={style.icon} />
          <p className={style.rightBoxHeading}>Optional Timing</p>
        </div>

        <div className={style.rightBoxDates}>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Monday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Tuesday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Wednesday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Thursday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Friday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Saturday: </span> 12:00 AM–3:00 AM
          </p>
          <p className={style.rightBoxDate}>
            <span className={style.date}>Sunday: </span>12:00 AM–3:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResturantTiming;
