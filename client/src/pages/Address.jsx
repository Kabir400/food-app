import React, { useContext, useEffect, useState } from "react";

// components
import Nav from "../components/Nav";
import style from "../css/address.module.css";
import AddressPopup from "../components/AddressPopup";
import postRequest from "../utility/postRequest";
import { context } from "../pages/Store";
import { toast } from "react-toastify";
import getRequest from "../utility/getRequest";
import { Link } from "react-router-dom";

//img
import arrowLeft from "../assets/arrow-left.png";
import addAddress from "../assets/addAddress.png";
import orengeLeftArrow from "../assets/orengeLeftArrow.png";

function Address() {
  const [{ user, addressList, slectedAddressIndex, loginChecked }, setValue] =
    useContext(context);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getRequest(
        `${import.meta.env.VITE_BASE_URL}/get/address`
      );
      if (response.suceess) {
        setValue((prev) => ({
          ...prev,
          addressList: response.data,
        }));
      } else if (response.status === 401) {
        toast.error("You need to login to see address", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error(response.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    })();
  }, []);

  // Handle address removal
  const removeAddress = async (addressId) => {
    setIsPending(true);
    const result = await postRequest(
      `${import.meta.env.VITE_BASE_URL}/remove/address/${addressId}`
    );
    if (result.status === 401) {
      toast.error("You need to login to remove address", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (result.success) {
      // Update user state to reflect the removed address
      setValue((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          addressList: prev.addressList.filter(
            (address) => address._id !== addressId
          ),
        },
      }));
      toast.success(result.message, { position: "top-right", autoClose: 3000 });
    } else {
      toast.error(result.message, { position: "top-right", autoClose: 3000 });
    }
    setIsPending(false);
  };

  const popupHandler = () => {
    setValue((prev) => ({ ...prev, addressPopup: true }));
  };

  const clickHandler = (index) => {
    setValue((prev) => ({ ...prev, slectedAddressIndex: index }));
  };

  return (
    <div>
      <Nav />
      <div className={style.addressContainer}>
        <div className={style.addressHeadingContainer}>
          <img src={orengeLeftArrow} className={style.smallArrowLeft} />
          <Link to="/">
            <img src={arrowLeft} className={style.arrowLeft} />
          </Link>
          <h3 className={style.addressHeading}>Your Addresses</h3>
        </div>

        <div className={style.addressBoxContainer}>
          <div className={style.addAddressBox} onClick={popupHandler}>
            <div className={style.addressDiv}>
              <img src={addAddress} className={style.addAddress} />
              <h4 className={style.addAddressHeading}>Add Address</h4>
            </div>
          </div>

          {addressList.map((item, index) => (
            <div
              className={style.addressBox}
              key={index}
              onClick={() => clickHandler(index)}
            >
              <div className={style.addressBoxTop}>
                <div className={style.addressBoxHeadingContainer}>
                  <h4 className={style.addressBoxHeading}>{user?.name}</h4>
                  {index === slectedAddressIndex && (
                    <div className={style.default}>Default</div>
                  )}
                </div>
                <p className={style.addressText}>{item?.fullAddress}</p>
                <p className={style.addressPhone}>
                  Phone Number: {item?.phoneNumber}
                </p>
              </div>
              <div className={style.addressBoxBottom}>
                <div className={style.edit}>Edit</div>
                <div
                  className={style.remove}
                  onClick={() => removeAddress(item._id)} // Call removeAddress on click
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddressPopup />
    </div>
  );
}

export default Address;
