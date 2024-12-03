//base url
const base_url = import.meta.env.VITE_BASE_URL;

import React, { useContext, useState, useEffect } from "react";

import style from "../css/AddressPopup.module.css";
import state from "../utility/stateArr";
import { context } from "../pages/Store";
import postRequest from "../utility/postRequest.js";
import { toast } from "react-toastify";
import Loader from "./Loader.jsx";

//img
import location from "../assets/adressPopupIcon.png";

function AddressPopup() {
  const [{ addressPopup, loginChecked }, setData] = useContext(context);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);

  //fetch address
  const fetchLoginStatus = async () => {
    if (!loginChecked) {
      const result = await postRequest(`${base_url}/checklogin`);
      if (result.status === 401) {
        setData((prev) => ({ ...prev, isLogin: false, loginChecked: true }));
      } else if (result.suceess) {
        setData((prev) => ({
          ...prev,
          isLogin: true,
          user: result.data,
          loginChecked: true,
        }));
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await fetchLoginStatus();
      setIsLoading(false);
    })();
  }, []);

  // Controlled state for form fields
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pincode: "",
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

  //................................

  const addAddress = async () => {
    setIsPending(true);
    const result = await postRequest(`${base_url}/add/address`, formData);
    if (result.status === 401) {
      toast.error("You need to login to add address", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (result.suceess) {
      setData((prev) => ({ ...prev, addressPopup: !prev.addressPopup }));
      toast.success(result.message, { position: "top-right", autoClose: 3000 });
      setData((prev) => ({
        ...prev,
        addressList: [...prev.addressList, result.data],
      }));
    } else if (result.suceess == false) {
      toast.error(result.message, { position: "top-right", autoClose: 3000 });
    }
    setIsPending(false);
  };

  if (isLoading) {
    return <Loader />;
  }

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
              name="state"
              value={formData.state}
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
              name="pincode"
              className={style.input}
              placeholder="Pin Code"
              value={formData.pincode}
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

          <div className={style.button} onClick={addAddress}>
            {isPending ? "Saving..." : "Save"}
          </div>
        </div>
      </div>
    )
  );
}

export default AddressPopup;
