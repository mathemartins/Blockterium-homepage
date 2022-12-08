import React, { useState } from "react";

const ReviewQuestions = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoTwo, setShowInfoTwo] = useState(false);
  const info = (
    <p className="text-Lightgrey w-[33%] m-auto text-[14px]">
      I am extra information that the user would like to see
    </p>
  );

  return (
    <section className="bg-black text-white w-full  py-12">
      <div className="w-[80%] sm:w-[45%] md:w-[33%] m-auto">
        <h2 className="font-bold text-[36px] text-center tracking-tighter ">
          Frequently asked questions
        </h2>

        <p className="text-[14px] mt-1 mb-12 text-Lightgrey text-center">
          Our products are integrated seamlessly into any <br /> digital
          platform or website
        </p>
      </div>

      <div className="h-12">
        <div className="flex justify-between m-auto items-center w-[80%] sm:w-[45%] md:w-[33%]">
          <p>Where can i watch?</p>
          <button
            className="border-[1.75px] border-white rounded-[50%] h-4 w-4 flex  justify-center items-center "
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? (
              <p className="font-bold p-1">+</p>
            ) : (
              <p className="font-bold pb-1">-</p>
            )}
          </button>
        </div>

        {showInfo && info}
      </div>

      <div className="h-12">
        <div className="flex justify-between m-auto items-center w-[80%] sm:w-[45%] md:w-[33%] mt-3">
          <p>Where can i watch?</p>
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
