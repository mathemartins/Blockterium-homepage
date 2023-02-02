import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ActionButton from "../../Inputs/ActionButton";
import SubscriptionModal from "../../Modal/SubscriptionModal";
import QRCode from "qrcode.react";
import { MdOutlineFileCopy } from "react-icons/md";
import axios from "../../../api/axios";
import { ForwardIcon } from "../../../assets/index";

const BasicYearlyPlan = () => {
  let [Open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  // const [url, setUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(49);
  const apiToken = localStorage.getItem("accessToken");
  const [buttonText, setButtonText] = useState("Choose Plan");
  const [paymentError, setPaymentError] = useState("");
  const [updateData, setUpdateData] = React.useState([
    {
      accountBalance: "0",
      active: true,
      address: "helllllllo",
      amount: "160",
      availableBalance: "0",
      currency: "USDT",
      derivationKey: 82,
      frozen: false,
      network: "TRC20",
      period: "mothly",
      plan: "basic",
      providerId: "classjcmkioluuu",
      provider_customer_id: "mlo9iuhhgbvfcdxxx",
    },
  ]);

  const PLAN_URL = "/pricing/payment/yearly/basic/";

  async function Data() {
    setButtonText("Please wait ...");
    try {
      const response = await axios.get(PLAN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });
      const resp = response?.data?.data;

      setUpdateData(resp);
      setButtonText("Choose Plan");
      openPaymentModal();
    } catch (error) {
      console.log(error);
      setButtonText("Choose Plan");
    }
  }

  async function handleSubmit(event) {
    try {
      const response = await axios.post(
        PLAN_URL,
        JSON.stringify({
          address: updateData.address,
          amount: updateData.amount,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          withCredentials: true,
        }
      );

      openModal();
    } catch (error) {
      setPaymentError(error.response.statusText);
      setTransferError(true);
      onPaymentConfirmation();
      console.log(error.response.statusText);
    }
  }

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  function openPaymentModal() {
    setOpen(true);
    setMinutes(5);
    setSeconds(0);
  }

  function closePaymentModal() {
    setOpen(false);
  }

  const [transferError, setTransferError] = useState(false);

  const onPaymentConfirmation = () => {
    setTransferError(true);
    setTimeout(() => {
      setTransferError(false);
    }, 2000);
  };

  // const qrCodeEncoder = (e) => {
  //   setUrl(e.target.value);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else if (minutes <= 0 && seconds <= 0) {
        closePaymentModal();
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const qrcode = (
    <QRCode
      id="qrCode"
      value={updateData.address}
      size={100}
      level={"H"}
      className="m-auto"
    />
  );

  const code = (
    <div className="text-[12px] text-black leading-6">
      <p>please pay</p>
      <p className="font-bold">{updateData.amount} USDT</p>
      <p>to the address below</p>
      <div className="bg-gradedBlue px-0  font-medium text-left my-2 w-full  flex items-center">
        <input
          type="text"
          value={updateData.address}
          disabled
          placeholder="wallet address"
          className="appearance-none  rounded-md  px-2 py-1 bg-transparent hover:border-greyFive text-[12px] text-black font-semibold w-full"
        />
        <CopyToClipboard text={updateData.address} onCopy={onCopyText}>
          <div className=" ">
            <ActionButton
              label={<MdOutlineFileCopy />}
              onClick={() => {}}
              classnames={`bg-gradedBlue bg-opacity-40 px-2  mr-1 rounded-md  mainBlue ${
                isCopied
                  ? `text-mainBlue font-bold mb-2 mr-3 text-[14px]`
                  : `text-mainBlue`
              }`}
            />
          </div>
        </CopyToClipboard>
      </div>
      <p>Network: {updateData.network}</p>
      <p className="text-[11px] text-greyNine">
        Expires in 0{minutes}:{seconds < 10 ? 0 : ``}
        {seconds}
      </p>
      <div className="">
        <div className="">
          <ActionButton
            type="button"
            btnIcon={ForwardIcon}
            label="I have made this payment"
            classnames="flex justify-center items-center group text-[12px] w-[15rem] bg-mainBlue text-mainWhite font-semibold  rounded-sm text-center px-4 py-2 m-auto my-4"
            onClick={handleSubmit}
          />
        </div>
        {transferError ? (
          <div
            className={
              transferError
                ? "bg-white border-t-4  rounded-b text-mainRed font-semibold px-4 py-2 shadow-md border border-red-500"
                : "offscreen"
            }
          >
            {paymentError}
          </div>
        ) : (
          ``
        )}
        <div className="">
          <ActionButton
            type="button"
            classnames="flex justify-center bg-gradedBlue font-semibold text-mainBlue rounded-sm text-center px-4 py-2 text-[12px] w-[15rem] m-auto"
            onClick={closePaymentModal}
            label="Close"
          />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="border-4 border-greySix hover:border-LightBlue w-full text-[14px] p-3 ">
        <div className="pt-4 mb-6">
          <h2 className="font-semibold text-[16px]">Basic</h2>
          <h2 className="font-bold my-1  text-[13px]">
            720 USDT <span className="font-normal text-[12px]">/ year</span>
          </h2>
          <h5 className="text-mainRed font-bold text-[12px]">
            20% discount off
          </h5>
        </div>
        <ul className="flex flex-col gap-3 mb-5 text-[13px]">
          <li className="">5,000,000 API Calls</li>
          <li className="">200 rq/s</li>
          <li className="">Community support</li>
          <li className="">API Testnets</li>
          <li className="">Market Data</li>
        </ul>
        <button
          onClick={Data}
          className="BlueGradient text-white py-1 px-2 my-5"
        >
          {buttonText}
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

export default BasicYearlyPlan;
