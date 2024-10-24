import React from "react";
import pay1 from "./images/visa-blue-logo-19529.svg";
import pay2 from "./images/amazon-pay-logo-19553.svg";
import pay3 from "./images/paypal-blue-logo-19528.svg";
import pay4 from "./images/american-express-blue-logo-19532.svg";
import app from "./images/google-play-app-store-icons-simple-vector-filled-flat-google-play-app-store-icons-logo-solid-pictogram-isolated-white-159029210.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=" bg-slate-100 w-full py-9">
        <h2 className="mx-11  mb-1 text-2xl font-normal">
          Get the FreshCart app
        </h2>
        <p className="mx-11  mb-4 text-slate-500 ">
          We will send you a link, open it on your phone to download the app.
        </p>
        <form className="max-w-screen-xl mx-auto w-11/12 mb-9">
          <div className="flex w-full gap-5">
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 dark:shadow-sm-light"
              placeholder="Email.."
              required
            />
            <button
              type="submit"
              className="text-white bg-[var(--main-color)] hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              Share App Link
            </button>
          </div>
        </form>

        <div className="max-w-screen-xl mx-auto border-y p-5 flex justify-between items-center">
          <div className="payment flex items-center">
            <h3 className="text-lg ">Payment Partners</h3>

            <Link to={"/"} className=" w-16 ms-4  ">
              
              <img src={pay1} alt="yy" />
            </Link>
            <Link to={"/"} className=" w-16 ms-4  ">
              
              <img src={pay2} alt="yy" />
            </Link>
            <Link to={"/"} className=" w-16 ms-4  ">
              
              <img src={pay3} alt="yy" />
            </Link>
            <Link to={"/"} className=" w-16 ms-4  ">
              
              <img src={pay4} alt="yy" />
            </Link>
          </div>
          <div className="getApp flex">
            <span className="text-lg ">Get deliveries with FreshCart</span>

            <Link to={"/"} className=" w-24 ms-3 ">
              {" "}
              <img
                src={app}
                alt="yy"
                style={{
                  width: "300px",
                  height: "30px",
                  objectPosition: "-0px -5px",
                  objectFit: "cover",
                  borderRadius: "9px",
                }}
              />{" "}
            </Link>
            <Link to={"/"} className=" w-24 ms-3 ">
              {" "}
              <img
                src={app}
                alt="yy"
                style={{
                  width: "300px",
                  height: "30px",
                  objectPosition: "-0px -35px",
                  objectFit: "cover",
                  borderRadius: "9px",
                }}
              />{" "}
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
