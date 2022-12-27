import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import {
  ColouredLogo,
  dbIcon,
  dbActive,
  InactiveDoc,
  ActiveExplore,
  InactiveExplore,
  strokeIcon,
} from "../../assets/index";

// inactive-dashboard.svg
const SideBar = () => {
  const [showExplore, setShowExplore] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="h-full bg-mainWhite ">
      <Link to="/dashboard">
        <img src={ColouredLogo} className="flex ml-10 pt-10" />
      </Link>
      <div className="mt-10">
        {/* <Link to="/dashboard" className={ splitLocation[1] === "dashboard" ? `bg-darkTertiary px-3 border-l-pink-600 border-l-2 rounded-l-lg py-3 rounded-r-full mb-4 w-full flex items-center` : "px-3 mb-4 py-3 flex items-center"}> */}
        <Link
          to="/dashboard"
          className={
            splitLocation[1] === "dashboard"
              ? `text-mainBlue py-5 bg-gradedBlue border-l-4 border-l-mainBlue flex items-center pl-10`
              : "bg-mainWhite py-5 flex items-center pl-10"
          }
        >
          {splitLocation[1] === "dashboard" ? (
            <img src={dbActive} className="mr-2" />
          ) : (
            <img src={dbActive} className="mr-3" />
          )}
          <span>Dashboard</span>
        </Link>
        <Link to="#">
          <div
            onClick={() => setShowExplore(!showExplore)}
            className={
              splitLocation[1] === "explore"
                ? `text-mainBlue py-5 bg-gradedBlue border-l-4 border-l-mainBlue flex items-center pl-10`
                : "bg-mainWhite py-5 flex items-center pl-10"
            }
          >
            {showExplore ? (
              <img src={ActiveExplore} className="mr-2" />
            ) : (
              <img src={InactiveExplore} className="mr-3" />
            )}
            <p className="w-full flex justify-between items-center pr-5">
              Explore
              <span className="text-greyTen">
                {showExplore ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </p>
          </div>
          {showExplore && (
            <div className="ml-10">
              <Link
                to="/explore/debug"
                className={
                  splitLocation[2] === "debug"
                    ? `text-mainBlue py-3 flex items-center pl-5`
                    : " py-3 flex items-center pl-5"
                }
              >
                <div className="flex items-center">
                  <div className="border-b-2 w-5 rounded-xl"></div> Debug
                </div>
              </Link>
              <Link
                to="/explore/subscription"
                className={
                  splitLocation[2] === "subscription"
                    ? `text-mainBlue py-3 flex items-center pl-5`
                    : "py-3 flex items-center pl-5"
                }
              >
                <div className="flex items-center">
                  <div className="border-b-2 w-5 rounded-xl"></div> Subsciption
                </div>
              </Link>
              <Link
                to="/explore/pricing"
                className={
                  splitLocation[2] === "pricing"
                    ? `text-mainBlue py-3 flex items-center pl-5`
                    : "py-3 flex items-center pl-5"
                }
              >
                <div className="flex items-center">
                  <div className="border-b-2 w-5 rounded-xl"></div> Pricing
                </div>
              </Link>
            </div>
          )}
        </Link>
        <Link to="/docs" className="flex items-center pl-10 py-5">
          {splitLocation[1] === "dashboard" ? (
            <img src={InactiveDoc} className="mr-2" />
          ) : (
            <img src={InactiveDoc} className="mr-3" />
          )}
          <span className="w-full flex justify-between items-center pr-5">
            Docs <img src={strokeIcon} />
          </span>
        </Link>
        <Link to="/contact" className="flex items-center pl-10 py-5">
          {splitLocation[1] === "dashboard" ? (
            <img src={dbIcon} className="mr-2" />
          ) : (
            <img src={dbActive} className="mr-3" />
          )}
          <span className="w-full flex justify-between items-center pr-5">
            Contact <img src={strokeIcon} />
          </span>
        </Link>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
