import React from "react";
import styles from "../../../styles/landing/Footer.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

import Input from "@material-ui/core/Input";
import LanguageIcon from "@material-ui/icons/Language";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/MailOutline";

const FooterIcon = ({ icon }) => {
  return <div className={styles.footerIconContainer}>{icon}</div>;
};

const FooterComponent = () => {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeftContainer}>
          <img src="/light-icon.svg" alt="logo" />

          <h1>Copyright © 2021 Tahu Coding.</h1>
          <h1>All rights reserved</h1>
          <div className={styles.logoLeftContainer}>
            <FooterIcon icon={<LanguageIcon />} />
            <FooterIcon icon={<InstagramIcon />} />
            <FooterIcon icon={<LinkedInIcon />} />
            <FooterIcon icon={<FacebookIcon />} />
          </div>
        </div>
        <div className={styles.footerRightContainer}>
          <div>
            <h6>My Page</h6>
            <p>About Me</p>
            <p>Tutorial</p>
            <p>Blog</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
          <div>
            <h6>Support</h6>
            <p>Help Center</p>
            <p>Term Of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Status</p>
          </div>
          <div>
            <h6>Stay up to date</h6>
            <Input
              className={styles.heroInput}
              id="input-with-icon-adornment"
              placeholder="Cari tutorial yang kamu inginkan disini"
              disableUnderline
              endAdornment={
                <div className={styles.heroInputPrefix}>
                  <SearchIcon
                    style={{
                      color: "white",
                    }}
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FooterComponent;
