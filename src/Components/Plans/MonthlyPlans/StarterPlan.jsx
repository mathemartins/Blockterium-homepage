import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ActionButton from "../../Inputs/ActionButton";
import SubscriptionModal from "../../Modal/SubscriptionModal";
import QRCode from "qrcode.react";

const StarterPlan = () => {
  let [Open, setOpen] = useState(false);
  const [url, setUrl] = useState("https://hackernnnnnnnnnnnnnnnoon.com");
  const [isCopied, setIsCopied] = useState(false);

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(6);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  function openPaymentModal() {
    setOpen(true);
    setMinutes(1);
    setSeconds(6);
  }

  function closePaymentModal() {
    setOpen(false);
  }

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(6);
      } else if (minutes <= 0 && seconds <= 0) {
        closePaymentModal();
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const qrcode = (
    <QRCode id="qrCode" value={url} size={100} level={"H"} className="m-auto" />
  );

  const code = (
    <div className="text-[12px] text-black leading-6">
      <p>please pay</p>
      <p className="font-bold">20 USDT</p>
      <p>to the address below</p>
      <div className="bg-gradedBlue px-0  font-medium text-left my-2 w-full  flex items-center">
        <input
          type="text"
          value={url}
          onChange={qrCodeEncoder}
          disabled
          placeholder="https://hackernoon.com"
          className="appearance-none  rounded-md  px-2 py-1 bg-transparent hover:border-greyFive text-[12px] text-black font-semibold w-full"
        />
        <CopyToClipboard text={url} onCopy={onCopyText}>
          <div className=" ">
            <ActionButton
              label="Copy"
              onClick={() => {}}
              classnames={`bg-gradedBlue bg-opacity-40 px-2  mr-1 rounded-md  mainBlue ${
                isCopied ? `text-mainBlue font-bold` : `text-mainBlue`
              }`}
            />
          </div>
        </CopyToClipboard>
      </div>
      <p>Network: TRX</p>
      <p className="text-[11px] text-greyNine">
        Expires in {minutes}:{seconds}.
      </p>
    </div>
  );
  return (
    <>
      <div className="border-4 border-greySix hover:border-LightBlue w-full text-[14px] p-3 ">
        <div className="pt-4">
          <h2 className="font-semibold text-[16px]">Starter</h2>
          <h2 className="font-bold mt-1 mb-6 text-[16px]">
            $20 <span className="font-normal text-[14px]">/ month</span>
          </h2>
        </div>

        <ul className="flex flex-col gap-3 mb-1">
          <li className="">1,000,000 API Calls</li>
          <li className="">200 rq/s</li>
          <li className="">Community support</li>
          <li className="">All Main & Testnets</li>
          <li className="">Market Data</li>
        </ul>
        <button
          onClick={openPaymentModal}
          className="BlueGradient text-white py-1 px-2 my-4"
        >
          Choose Plan
        </button>
      </div>
      {Open && (
        <SubscriptionModal
          closePaymentModal={closePaymentModal}
          openPaymentModal={openPaymentModal}
          Open={Open}
          title={qrcode}
          text={code}
        />
      )}
    </>
  );
};

export default StarterPlan;
