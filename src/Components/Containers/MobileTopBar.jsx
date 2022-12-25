import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ColouredLogo,
  Menuburger,
  profilePicture2,
  dbActive,
  dbIcon,
  InactiveDoc,
  ActiveExplore,
  InactiveExplore,
} from "../../assets";

const MobileTopBar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="px-5 py-5 relative bg-mainWhite">
      <div className="flex items-center justify-between mb-7">
        <Link to="">
          <img src={ColouredLogo} className="w-[100px]" />
        </Link>
        <div onClick={() => setShow(!show)}>
          <img src={Menuburger} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-mainBlack font-semibold">
          <h3>Dashboard</h3>
        </div>
        <div className="flex items-center text-mainBlue text-sm font-semibold">
          <img src={profilePicture2} className="w-[30px] mr-2" />
          <span>Adedamola</span>
        </div>
      </div>
      {show && (
        <div className="mt-10 absolute left-0 right-0 top-0 h-screen bg-mainWhite pt-10 z-50">
          <Link
            to="/dashboard"
            className="flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue"
          >
            {splitLocation[1] === "dashboard" ? (
              <img src={dbActive} className="mr-2" />
            ) : (
              <img src={dbActive} className="mr-3" />
            )}
            <span>Dashboard</span>
          </Link>
          <Link to="/explore" className="flex items-center px-5 py-5">
            {splitLocation[1] === "dashboard" ? (
              <img src={ActiveExplore} className="mr-2" />
            ) : (
              <img src={InactiveExplore} className="mr-3" />
            )}
            <span>Explore</span>
          </Link>
          <Link to="/docs" className="flex items-center px-5 py-5">
            {splitLocation[1] === "dashboard" ? (
              <img src={InactiveDoc} className="mr-2" />
            ) : (
              <img src={InactiveDoc} className="mr-3" />
            )}
            <span>Docs</span>
          </Link>
          <Link to="/contact" className="flex items-center px-5 py-5">
            {splitLocation[1] === "dashboard" ? (
              <img src={dbIcon} className="mr-2" />
            ) : (
              <img src={dbActive} className="mr-3" />
            )}
            <span>Contact</span>
          </Link>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MobileTopBar;
