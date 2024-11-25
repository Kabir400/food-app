import React from "react";
import style from "../css/footer.module.css";

//img
import Logo2 from "../assets/logo2.png";
import apps from "../assets/apps.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import snapchat from "../assets/Snapchat.png";
import tiktok from "../assets/TikTok.png";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        {/* logo container */}
        <div className={style.logoContainer}>
          <img src={Logo2} alt="Order.UK" className={style.logo2} />
          <img src={apps} alt="Apps" className={style.apps} />
          <p className={style.logoText}>
            Company # 490039-445, Registered <br />
            with House of companies.
          </p>
        </div>

        <div className={style.rightContainer}>
          {/* input container */}
          <div className={style.inputContainer}>
            <h3 className={style.inboxHeading}>
              Get Exclusive Deals in your Inbox
            </h3>
            <div className={style.inboxInputBox}>
              <input
                type="email"
                className={style.inboxInput}
                placeholder="youremail@gmail.com"
              />
              <div className={style.inboxSubmit}>Submit</div>
            </div>
            <div className={style.inboxSubheading}>
              we wont spam, read our email policy
            </div>

            <div className={style.inboxIconContainer}>
              <img src={facebook} alt="facebook" className={style.inboxIcon} />
              <img
                src={instagram}
                alt="instagram"
                className={style.inboxIcon}
              />
              <img src={tiktok} alt="tiktok" className={style.inboxIcon} />
              <img src={snapchat} alt="snapchat" className={style.inboxIcon} />
            </div>
          </div>
          {/* legal links */}
          <div className={style.legalLinks}>
            <h3 className={style.legalHeading}>Legal Pages</h3>
            <p className={style.legalLink}>Terms and conditions</p>
            <p className={style.legalLink}>Privacy</p>
            <p className={style.legalLink}>Cookies</p>
            <p className={style.legalLink}>Modern Slavery Statement</p>
          </div>
          {/* Important Links */}
          <div className={style.ImportantLinks}>
            <h3 className={style.importantHeading}>Important Links</h3>
            <p className={style.importantLink}>Get help</p>
            <p className={style.importantLink}>Add your restaurant</p>
            <p className={style.importantLink}>Sign up to deliver</p>
            <p className={style.importantLink}>Create a business account</p>
          </div>
        </div>
      </div>

      <div className={style.bottom}>
        <p className={style.bottomText}>
          Order.uk Copyright 2024, All Rights Reserved.
        </p>
        <div className={style.bottomRightContainer}>
          <p className={style.bottomText}>Privacy Policy</p>
          <p className={style.bottomText}>Terms</p>
          <p className={style.bottomText}>Pricing</p>
          <p className={style.bottomText}>
            Do not sell or share my personal information
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
