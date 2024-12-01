import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { context } from "../pages/Store";

function CartPopup() {
  const [data, setData] = useContext(context);

  const togglePopup = () => {
    setData((prev) => {
      const isCartOpen = !prev.isCartOpen;
      return { ...prev, isCartOpen };
    });
  };

  return (
    data.isCartOpen && (
      <div className="popupOverlay cartPopupContainer" onClick={togglePopup}>
        <div onClick={(e) => e.stopPropagation()}>
          <Cart />
        </div>
      </div>
    )
  );
}

export default CartPopup;
