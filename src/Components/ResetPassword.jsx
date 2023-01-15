import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
// import loginImg from "../assets/loginImg.jpeg";
import { Logo, Bg, iphone } from "../assets/index";
import axios from "../api/axios";

// const RESET_URL = "/accounts/reset-password/";

export default function ResetPassword(props) {
  const emailRef = React.useRef();
  const successRef = React.useRef();
  const errorRef = React.useRef();

  const [email, setEmail] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState(false);

  const [errorMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Reset Password");

  React.useEffect(function () {
    emailRef.current.focus();
  }, []);

  React.useEffect(
    function () {
      setSuccessMsg("");
    },
    [email]
  );

  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [email]
  );

  async function handleSubmit(event) {
    event.preventDefault();

    // set button name to loading
    setButtonText("Resetting Your Password...");

    // try {
    //   const response = await axios.post(
    //     RESET_URL,
    //     JSON.stringify({ email: email }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   setSuccessMsg(response?.data?.data["message"]);
    //   setButtonText("Reset Password");
    //   navigate(from, { replace: true });
    // } catch (error) {
    //   console.log(error);
    //   if (error.response?.status === 500) {
    //     setErrorMsg("Oops! an error occurred!");
    //   } else {
    //     setErrorMsg(error.response?.data["message"]);
    //   }
    //   errorRef.current.focus();
    //   setButtonText("Proceed");
    // }
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full bg-black overflow-y-hidden">
      <div className="hidden sm:block authpage relative w-[50%] py-6 px-6">
        <Link to="/">
          <img src={Logo} alt="" className="w-[8rem]" />
        </Link>
        <h2 className="text-[20px] text-Lightgrey mt-[10rem] mb-[1rem]">
          Empowering Web3 developers to build the apps of their dreams
        </h2>
        <p className="text-grey">
          Our solutions include wallet as a service solution (Custodial and
          Non-Custodial for wallet creation, send and receive), Defi yield
          Interoperability solution and decentralized peer - 2 - peer
          infrastructure.
        </p>
        <img src={iphone} alt="" className="absolute bottom-0 left-[20px]" />
      </div>
      <div className="bg-secondary-dark-bg flex flex-col justify-center">
        <h2 className="text-2xl text-white font-poppins font-semibold text-center py-[40px]">
          RACK
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-primary p-8 px-8 rounded-lg"
        >
          <h2 className="text-[15px] text-white font-poppins text-center">
            PASSWORD RESET
          </h2>
          <p
            ref={errorRef}
            className={
              errorMsg
                ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-2 rounded relative"
                : "offscreen"
            }
            aria-live="assertive"
            role="alert"
          >
            {errorMsg}
          </p>
          <p
            ref={successRef}
            className={
              successMsg
                ? "bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-2 rounded relative"
                : "offscreen"
            }
            aria-live="assertive"
            role="alert"
          >
            {successMsg}
          </p>
          <div className="flex flex-col text-white py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none"
              type="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="johndoe@rack.best"
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              required
            />
            <div
              id="emailnote"
              className={
                emailFocus
                  ? "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                  : "offscreen"
              }
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] py-2">
                    Enter your existing email address!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="w-full my-5 py-2 bg-secondary rounded-lg hover:shadow-blue-500/50 text-white font-semibold"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
        <h2 className="text-white font-poppins text-center py-[40px] cursor-pointer">
          <Link to="/login">Back to login</Link>
        </h2>
      </div>
    </div>
  );
}
