import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ColouredLogo,
  dbIcon,
  dbActive,
  InactiveDoc,
  ActiveExplore,
  InactiveExplore,
} from "../../assets/index";

// inactive-dashboard.svg
const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="h-full bg-mainWhite">
      <Link to="/">
        <img src={ColouredLogo} className="flex ml-10 pt-10" />
      </Link>
      <div className="mt-10">
        {/* <Link to="/dashboard" className={ splitLocation[1] === "dashboard" ? `bg-darkTertiary px-3 border-l-pink-600 border-l-2 rounded-l-lg py-3 rounded-r-full mb-4 w-full flex items-center` : "px-3 mb-4 py-3 flex items-center"}> */}
        <Link
          to="/dashboard"
          className="flex items-center pl-10 text-mainBlue bg-gradedBlue py-5 border-l-2 border-l-mainBlue"
        >
          {splitLocation[1] === "dashboard" ? (
            <img src={dbActive} className="mr-2" />
          ) : (
            <img src={dbActive} className="mr-3" />
          )}
          <span>Dashboard</span>
        </Link>
        <Link to="/explore" className="flex items-center pl-10 py-5">
          {splitLocation[1] === "dashboard" ? (
            <img src={ActiveExplore} className="mr-2" />
          ) : (
            <img src={InactiveExplore} className="mr-3" />
          )}
          <span>Explore</span>
        </Link>
        <Link to="/docs" className="flex items-center pl-10 py-5">
          {splitLocation[1] === "dashboard" ? (
            <img src={InactiveDoc} className="mr-2" />
          ) : (
            <img src={InactiveDoc} className="mr-3" />
          )}
          <span>Docs</span>
        </Link>
        <Link to="/contact" className="flex items-center pl-10 py-5">
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
    </div>
  );
};

export default SideBar;
