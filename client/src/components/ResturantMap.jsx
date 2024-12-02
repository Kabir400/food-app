import React, { useContext } from "react";
import style from "../css/ResturantMap.module.css";

//components
import MapComponent from "./MapComponent.jsx";
import { context } from "../pages/Store.jsx";

function ResturantMap() {
  const [{ clickedResturant }] = useContext(context);

  const DEFAULT_COORDINATES = { latitude: 37.7749, longitude: -122.4194 };

  //extracting the cordinates
  const latitude =
    clickedResturant?.location?.latitude || DEFAULT_COORDINATES.latitude;

  const longitude =
    clickedResturant?.location?.longitude || DEFAULT_COORDINATES.longitude;

  // Fallback check
  const hasValidCoordinates = latitude !== undefined && longitude !== undefined;

  return (
    <div className={style.container}>
      {/* Render map only if coordinates are valid */}
      {hasValidCoordinates ? (
        <MapComponent latitude={latitude} longitude={longitude} />
      ) : (
        <div className={style.error}>
          <p>Location information is unavailable.</p>
        </div>
      )}

      {/* Restaurant details */}
      <div className={style.mapBox}>
        <div className={style.mapBoxdiv}>
          <div className={style.mapBoxHeadingContainer}>
            <h3 className={style.mapBoxHeading}>
              {clickedResturant?.name || "N/A"}
            </h3>
            <p className={style.mapBoxCountry}>
              {clickedResturant?.location?.country || "Country not available"}
            </p>
          </div>

          <p className={style.mapBoxAddress}>
            {clickedResturant?.location?.address || "Address not available"}
          </p>
          <div className={style.contact}>
            <h4 className={style.phone}>Phone number</h4>
            <p className={style.phoneText}>+934443-43</p>
          </div>
          <div className={style.contact}>
            <h4 className={style.website}>Website</h4>
            <p className={style.websiteText}>http://mcdonalds.uk/</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantMap;
