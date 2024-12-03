import React, { useContext } from "react";

// components
import Nav from "../components/Nav";
import style from "../css/address.module.css";
import AddressPopup from "../components/AddressPopup";
import { context } from "../pages/Store";

//img
import arrowLeft from "../assets/arrow-left.png";
import addAddress from "../assets/addAddress.png";
import orengeLeftArrow from "../assets/orengeLeftArrow.png";

function Address() {
  const [value, setValue] = useContext(context);

  const popupHandler = () => {
    setValue((prev) => ({ ...prev, addressPopup: true }));
  };

  return (
    <div>
      <Nav />
      <div className={style.addressContainer}>
        <div className={style.addressHeadingContainer}>
          <img src={orengeLeftArrow} className={style.smallArrowLeft} />
          <img src={arrowLeft} className={style.arrowLeft} />
          <h3 className={style.addressHeading}>Your Addresses</h3>
        </div>

        <div className={style.addressBoxContainer}>
          <div className={style.addAddressBox} onClick={popupHandler}>
            <div className={style.addressDiv}>
              <img src={addAddress} className={style.addAddress} />
              <h4 className={style.addAddressHeading}>Add Address</h4>
            </div>
          </div>
          <div className={style.addressBox}>
            <div className={style.addressBoxTop}>
              <div className={style.addressBoxHeadingContainer}>
                <h4 className={style.addressBoxHeading}>Mike Ross</h4>
                <div className={style.default}>Default</div>
              </div>
              <p className={style.addressText}>
                45, Green Street, Sector 12,New Delhi, 110001, India
              </p>
              <p className={style.addressPhone}>Phone Number: 8734637468</p>
            </div>

            <div className={style.addressBoxBottom}>
              <div className={style.edit}>Edit</div>
              <div className={style.remove}>Remove</div>
            </div>
          </div>
        </div>
      </div>

      <AddressPopup />
    </div>
  );
}

export default Address;
