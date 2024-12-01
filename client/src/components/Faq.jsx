import React from "react";
import style from "../css/Faq.module.css";

//img
import faqImg1 from "../assets/faqImg1.png";
import faqImg2 from "../assets/faqImg2.png";
import faqImg3 from "../assets/faqImg3.png";

function Faq() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        {/* faq top */}
        <div className={style.faqTop}>
          <h4 className={style.faqTopHeading}>Know more about us!</h4>
          <div className={style.faqTopLinkContainer}>
            <div className={style.faqTopLinkDiv}>Frequent Questions</div>
            <p className={style.faqTopLink}>Who we are?</p>
            <p className={style.faqTopLink}>Partner Program</p>
            <p className={style.faqTopLink}>Help & Support</p>
          </div>
        </div>
        {/* faq bottom */}
        <div className={style.faqBottom}>
          {/* left */}
          <div className={style.faqBottomLeft}>
            <div className={style.faqBottomLeftHeading}>
              How does Order.UK work?
            </div>
            <p className={style.faqBottomLeftText}>
              What payment methods are accepted?
            </p>
            <p className={style.faqBottomLeftText}>
              Can I track my order in real-time?
            </p>
            <p className={style.faqBottomLeftText}>
              Are there any special discounts or promotions available?
            </p>
            <p className={style.faqBottomLeftText}>
              Is Order.UK available in my area?
            </p>
          </div>

          {/* right */}
          <div className={style.faqBottomRight}>
            {/* top */}
            <div className={style.faqBottomRightTop}>
              {/* box 1 */}
              <div className={style.faqBottomRightTopBox}>
                <h5 className={style.faqBottomRightTopBoxHeading}>
                  Place an Order!
                </h5>
                <img src={faqImg1} className={style.faqImg} />
                <p className={style.faqBottomRightTopBoxText}>
                  Place order through our website or Mobile app
                </p>
              </div>

              {/* box 2 */}
              <div className={style.faqBottomRightTopBox}>
                <h5 className={style.faqBottomRightTopBoxHeading}>
                  Track Progress
                </h5>
                <img src={faqImg2} className={style.faqImg} />
                <p className={style.faqBottomRightTopBoxText}>
                  Your can track your order status with delivery time
                </p>
              </div>

              {/* box 3 */}
              <div className={style.faqBottomRightTopBox}>
                <h5 className={style.faqBottomRightTopBoxHeading}>
                  Get your Order!
                </h5>
                <img src={faqImg3} className={style.faqImg} />
                <p className={style.faqBottomRightTopBoxText}>
                  Receive your order at a lighting fast speed!
                </p>
              </div>
            </div>

            {/* bottom */}
            <p className={style.faqBottomRightBottom}>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
