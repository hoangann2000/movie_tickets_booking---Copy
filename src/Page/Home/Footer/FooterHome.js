import React, { Fragment } from "react";
import FooterCenter from "./FooterCenter/FooterCenter";
import "./FooterHome.scss";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

export default function FooterHome() {
  return (
    <Fragment>
      <div className="Footer__home" id="footer">
        <div className="container">
          <div className="flex justify-around">
            <div className="">
              <FooterLeft />
            </div>
            <div className=" ">
              <FooterCenter />
            </div>
            <div className="">
              <FooterRight />
            </div>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <h1>COPYRIGHT 2017 CINEMA. All RIGHTS RESERVED.</h1>
      </div>
    </Fragment>
  );
}
