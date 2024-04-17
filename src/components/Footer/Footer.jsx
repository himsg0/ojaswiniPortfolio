import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Ojaswini.gul@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/ojaswinigul?igsh=MXFnbmY0MDd0c2F0eA==" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/ojaswinigulpriya" target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="lhttps://www.linkedin.com/in/ojaswinigul/" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
