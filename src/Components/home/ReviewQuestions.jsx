import React, { useState } from "react";

const ReviewQuestions = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoTwo, setShowInfoTwo] = useState(false);
  const [showInfoThree, setShowInfoThree] = useState(false);
  const [showInfoFour, setShowInfoFour] = useState(false);
  const info = (
    <p className="text-Lightgrey  m-auto  text-[14px]">
      I am extra information that the user would like to see
    </p>
  );

  return (
    <section className="bg-darkestBlue text-white w-full  py-[6rem]">
      <div className="w-[80%] sm:w-[45%] md:w-[33%] m-auto">
        <h2 className="font-bold text-[36px] text-center tracking-tighter ">
          Frequently asked questions
        </h2>

        <p className="text-[14px] mt-1 mb-12 text-Lightgrey text-center">
          Our products are integrated seamlessly into any <br /> digital
          platform or website
        </p>
      </div>

      <div
        className={`mt-3 ${
          showInfo ? "border border-blue px-3 py-2 h-16" : ""
        } w-[80%] sm:w-[45%] md:w-[33%] m-auto  `}
      >
        <div className="flex justify-between m-auto items-center">
          <p>What is Blockterium?</p>
          <div className="border-[1.75px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center ">
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? (
                <p className="font-bold">+</p>
              ) : (
                <p className="font-bold ">-</p>
              )}
            </button>
          </div>
        </div>

        {showInfo && info}
      </div>

      <div
        className={`  mt-3 ${
          showInfoTwo ? "border border-blue px-3 py-2 h-16" : ""
        } w-[80%] sm:w-[45%] md:w-[33%] m-auto  `}
      >
        <div className={`flex justify-between `}>
          <p>Our target audience?</p>
          <button
            className="border-[1.75px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center "
            onClick={() => setShowInfoTwo(!showInfoTwo)}
          >
            {showInfoTwo ? (
              <p className="font-bold p-1">+</p>
            ) : (
              <p className="font-bold pb-1">-</p>
            )}
          </button>
        </div>

        {showInfoTwo && info}
      </div>

      <div
        className={`mt-3 ${
          showInfoThree ? "border border-blue px-3 py-2 h-16" : ""
        } w-[80%] sm:w-[45%] md:w-[33%] m-auto  `}
      >
        <div className="flex justify-between m-auto items-center  ">
          <p>How to Integrate our API?</p>
          <button
            className="border-[1.75px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center "
            onClick={() => setShowInfoThree(!showInfoThree)}
          >
            {showInfoThree ? (
              <p className="font-bold p-1">+</p>
            ) : (
              <p className="font-bold pb-1">-</p>
            )}
          </button>
        </div>

        {showInfoThree && info}
      </div>

      <div
        className={`mt-3 ${
          showInfoFour ? "border border-blue px-3 py-2 h-16" : ""
        } w-[80%] sm:w-[45%] md:w-[33%] mx-auto  `}
      >
        <div className="flex justify-between m-auto items-center ">
          <p>Payment Plans</p>
          <button
            className="border-[1.75px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center "
            onClick={() => setShowInfoFour(!showInfoFour)}
          >
            {showInfoFour ? (
              <p className="font-bold p-1">+</p>
            ) : (
              <p className="font-bold pb-1">-</p>
            )}
          </button>
        </div>

        {showInfoFour && info}
      </div>
    </section>
  );
};

export default ReviewQuestions;

// const [view, setView] = useState(false);

// const info = <p>I am extra information that the user would like to see</p>;
// return (
//   <section className="bg-black text-white w-full text-center py-12">
//     <div>
//       <h2>Frequently asked questions</h2>
//       <p>
//         Our products are integrated seamlessly into any digital platform or
//         website
//       </p>
//     </div>

//     <ul>
//       <li className="flex justify-center items-center gap-4">
//         Where can i watch?
//         <button
//           className="border-[2px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center hover:cursor-pointer"
//           onChange={(event) => {
//             setView(event.target);
//           }}
//         >
//           {view && <p className="font-bold p-1">+</p>}
//           {!view && <p className="font-bold p-1">-</p>}
//         </button>
//       </li>
//       {view ? <p className="block">heloo everyone</p> : <></>}
//       <li className="flex justify-center items-center gap-4">
//         Where can i watch?
//         <div className="border-[2px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center hover:cursor-pointer">
//           <p className="font-bold p-1">+</p>
//         </div>
//       </li>
//     </ul>
//   </section>
// );
