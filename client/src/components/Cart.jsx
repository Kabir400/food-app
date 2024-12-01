import React from "react";
import style from "../css/Cart.module.css";

//img
import share from "../assets/share.png";
import cart from "../assets/cart.png";
import remove from "../assets/Remove.png";
import rightArrow from "../assets/forward-icon.png";
import bottomArrow from "../assets/bottom-arrow.png";
import scoter from "../assets/scoter.png";
import store from "../assets/store.png";
import checkout from "../assets/checkout-arrow.png";

function Cart() {
  return (
    <div>
      <div className={style.cart}>
        <img src={share} className={style.share} />

        <div className={style.cartContainer}>
          <div className={style.cartTop}>
            <img src={cart} className={style.cartIcon} />
            <p className={style.cartText}>My Basket</p>
          </div>
          {/* cart item container */}
          <div className={style.cartItemContainer}>
            <div className={style.cartItem}>
              <div className={style.itemQty}>1X</div>
              <div className={style.cartItemTextBox}>
                <p className={style.cartItemPrice}>₹120</p>
                <p className={style.cartItemName}>Product Name</p>
                <p className={style.cartItemTopincs}>With extra fries</p>
              </div>
              <img src={remove} className={style.cartItemRemove} />
            </div>
            {/* item2 */}
            <div className={style.cartItem}>
              <div className={style.itemQty}>1X</div>
              <div className={style.cartItemTextBox}>
                <p className={style.cartItemPrice}>₹120</p>
                <p className={style.cartItemName}>Product Name</p>
                <p className={style.cartItemTopincs}>With extra fries</p>
              </div>
              <img src={remove} className={style.cartItemRemove} />
            </div>
          </div>

          {/* calulations */}
          <div className={style.cartCaculation}>
            <div className={style.subTotal}>
              <p className={style.subTotalText}>Sub Total:</p>
              <p className={style.subTotalValue}>₹230.00</p>
            </div>
            <div className={style.discount}>
              <p className={style.discountText}>Discounts:</p>
              <p className={style.discountValue}>-₹20.00</p>
            </div>
            <div className={style.delivaryFee}>
              <p className={style.delivaryFeeText}>Delivary Fee:</p>
              <p className={style.delivaryFeeValue}>₹20.00</p>
            </div>
          </div>

          {/* total and freebies */}
          <div className={style.totalPay}>
            <p className={style.totalPayText}>Total to pay:</p>
            <p className={style.toalValue}>₹230.00</p>
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
          <div className={style.checkoutBox}>
            <img src={checkout} className={style.checkoutIcon} />
            <p className={style.checkoutText}>Checkout!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
