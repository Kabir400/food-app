import { useContext, useEffect } from "react";
import { context, cartContext } from "../pages/Store";
import style from "../css/cartPopup.module.css";
import { toast } from "react-toastify";

//img
import share from "../assets/share.png";
import cart from "../assets/cart.png";
import remove from "../assets/Remove.png";
import rightArrow from "../assets/forward-icon.png";
import bottomArrow from "../assets/bottom-arrow.png";
import scoter from "../assets/scoter.png";
import store from "../assets/store.png";
import checkout from "../assets/checkout-arrow.png";

function CartPopup() {
  const [data, setData] = useContext(context);
  const { state, removeFromCart } = useContext(cartContext);

  const subTotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subTotal > 200 ? 20 : 0; //Discount of ₹20 for orders above ₹200

  const togglePopup = () => {
    setData((prev) => {
      const isCartOpen = !prev.isCartOpen;
      return { ...prev, isCartOpen };
    });
  };

  const removeHandler = (id) => {
    removeFromCart(id);
    toast.error("Item removed", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    data.isCartOpen && (
      <div className="popupOverlay cartPopupContainer" onClick={togglePopup}>
        <div onClick={(e) => e.stopPropagation()}>
          {/* cart starts here */}

          <div className={style.cart}>
            <img src={share} className={style.share} />

            <div className={style.cartContainer}>
              <div className={style.cartTop}>
                <img src={cart} className={style.cartIcon} />
                <p className={style.cartText}>My Basket</p>
              </div>
              {/* cart item container */}
              <div className={style.cartItemContainer}>
                {state.cart.map((item) => (
                  <div className={style.cartItem} key={item._id}>
                    <div className={style.itemQty}>{item.quantity}X</div>
                    <div className={style.cartItemTextBox}>
                      <p className={style.cartItemPrice}>₹{item.price}</p>
                      <p className={style.cartItemName}>{item.title}</p>
                      <p className={style.cartItemTopincs}>{item.toppings}</p>
                    </div>
                    <img
                      src={remove}
                      className={style.cartItemRemove}
                      onClick={() => removeHandler(item._id)}
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>

              {/* calulations */}
              <div className={style.cartCaculation}>
                <div className={style.subTotal}>
                  <p className={style.subTotalText}>Sub Total:</p>
                  <p className={style.subTotalValue}>₹{subTotal}</p>
                </div>
                <div className={style.discount}>
                  <p className={style.discountText}>Discounts:</p>
                  <p className={style.discountValue}>-₹{discount}</p>
                </div>
                <div className={style.delivaryFee}>
                  <p className={style.delivaryFeeText}>Delivary Fee:</p>
                  <p className={style.delivaryFeeValue}>₹0.00</p>
                </div>
              </div>

              {/* total and freebies */}
              <div className={style.totalPay}>
                <p className={style.totalPayText}>Total to pay:</p>
                <p className={style.toalValue}>₹{subTotal - discount}</p>
              </div>

              <div className={style.freeItem}>
                <p className={style.freeItemText}>Choose your free item..</p>
                <img src={bottomArrow} className={style.freeItemArrow} />
              </div>
              <div className={style.couponCode}>
                <p className={style.couponCodeText}>Apply Coupon Code here</p>
                <img src={rightArrow} className={style.couponCodeArrow} />
              </div>

              {/* delivery and collection */}
              <div className={style.deliveryContainer}>
                <div className={style.delivery}>
                  <img src={scoter} className={style.deliveryIcon} />
                  <p className={style.deliveryHeading}>Delivery</p>
                  <p className={style.deliveryTime}>Starts at 17:50</p>
                </div>

                <div className={style.collection}>
                  <img src={store} className={style.collectionIcon} />
                  <p className={style.collectionHeading}>Collection</p>
                  <p className={style.collectionTime}>Starts at 16:50</p>
                </div>
              </div>

              {/* checkoutBox */}
              <div
                className={`${style.checkoutBox} ${
                  subTotal - discount < 200 ? style.disabled : ""
                }`}
              >
                <img src={checkout} className={style.checkoutIcon} />
                <p className={style.checkoutText}>Checkout!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CartPopup;
