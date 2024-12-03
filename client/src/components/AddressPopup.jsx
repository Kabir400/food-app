import React, { useContext, useState } from "react";

import style from "../css/AddressPopup.module.css";
import state from "../utility/stateArr";
import { context } from "../pages/Store";

//img
import location from "../assets/adressPopupIcon.png";

function AddressPopup() {
  const [{ addressPopup }, setData] = useContext(context);

  // Controlled state for form fields
  const [formData, setFormData] = useState({
    selectedState: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
    fullAddress: "",
  });

  // Toggle popup visibility
  const togglePopup = () => {
    setData((prev) => {
      return { ...prev, addressPopup: !prev.addressPopup };
    });
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    addressPopup && (
      <div className="popupOverlay" onClick={togglePopup}>
        <div className={style.container} onClick={(e) => e.stopPropagation()}>
          <div className={style.header}>
            <img
              src={location}
              className={style.locationIcon}
              alt="Location Icon"
            />
            <p className={style.heading}>Add Address</p>
          </div>
          <div className={style.bodyTop}>
            {/* Controlled select for state */}
            <select
              className={style.select}
              name="selectedState"
              value={formData.selectedState}
              onChange={handleChange}
            >
              <option value="" disabled>
                State
              </option>
              {state.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {/* Controlled inputs */}
            <input
              type="text"
              name="city"
              className={style.input}
              placeholder="City/District"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pinCode"
              className={style.input}
              placeholder="Pin Code"
              value={formData.pinCode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              className={style.input}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className={style.bodyBottom}>
            {/* Controlled textarea */}
            <textarea
              className={style.textarea}
              name="fullAddress"
              placeholder="Enter full address"
              value={formData.fullAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={style.button}>Save</div>
        </div>
      </div>
    )
  );
}

export default AddressPopup;
